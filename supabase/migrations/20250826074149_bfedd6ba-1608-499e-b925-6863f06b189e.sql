-- Fix security issue: Properly secure public_profiles view and underlying access
-- Since public_profiles is a view, we need to recreate it securely

-- Drop the existing public_profiles view 
DROP VIEW IF EXISTS public.public_profiles;

-- Create a secure public_profiles view that only exposes non-sensitive data
CREATE VIEW public.public_profiles AS
SELECT 
  p.id,
  p.user_id,
  p.username,
  p.bio,
  p.avatar_url,
  p.interests,
  p.created_at
FROM public.profiles p;

-- Update the get_public_profile function to be more secure
-- Remove sensitive fields like full_name, email, birthdate, location
CREATE OR REPLACE FUNCTION public.get_public_profile(profile_user_id uuid)
RETURNS TABLE(
  id uuid, 
  user_id uuid, 
  username text, 
  bio text, 
  avatar_url text, 
  interests text[], 
  created_at timestamp with time zone
)
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT 
    p.id,
    p.user_id,
    p.username,
    p.bio,
    p.avatar_url,
    p.interests,
    p.created_at
  FROM public.profiles p
  WHERE p.user_id = profile_user_id;
$function$;

-- Fix the search_path issue for existing functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$function$;

-- Also fix the update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;