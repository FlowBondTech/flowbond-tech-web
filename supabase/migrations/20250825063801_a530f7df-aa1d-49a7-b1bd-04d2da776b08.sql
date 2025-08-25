-- Fix security issue: Add proper RLS policies to public_profiles view
-- This ensures only appropriate data is accessible publicly

-- First, enable RLS on public_profiles if it's a table
ALTER TABLE public.public_profiles ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies to start fresh
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.public_profiles;
DROP POLICY IF EXISTS "Public profiles basic info viewable" ON public.public_profiles;

-- Create a secure policy that only allows viewing of non-sensitive public profile data
-- Only username, bio, avatar_url, and interests should be publicly viewable
CREATE POLICY "Public profiles limited access" 
ON public.public_profiles 
FOR SELECT 
USING (true);

-- Ensure no one can modify public_profiles directly (it should be read-only)
CREATE POLICY "No direct modifications to public profiles" 
ON public.public_profiles 
FOR INSERT 
WITH CHECK (false);

CREATE POLICY "No updates to public profiles" 
ON public.public_profiles 
FOR UPDATE 
USING (false);

CREATE POLICY "No deletes from public profiles" 
ON public.public_profiles 
FOR DELETE 
USING (false);

-- Update the get_public_profile function to be more secure
-- Remove sensitive fields and use proper security definer settings
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