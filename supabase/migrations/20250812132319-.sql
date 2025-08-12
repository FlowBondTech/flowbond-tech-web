-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a policy that allows users to view only basic public profile information of others
CREATE POLICY "Basic profile info is publicly viewable" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Create a policy that allows users to view their own complete profile
CREATE POLICY "Users can view their own complete profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create a security definer function to get only safe public profile fields
CREATE OR REPLACE FUNCTION public.get_public_profile(profile_user_id uuid)
RETURNS TABLE (
  id uuid,
  user_id uuid,
  username text,
  full_name text,
  bio text,
  avatar_url text,
  interests text[],
  created_at timestamp with time zone
) 
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT 
    p.id,
    p.user_id,
    p.username,
    p.full_name,
    p.bio,
    p.avatar_url,
    p.interests,
    p.created_at
  FROM public.profiles p
  WHERE p.user_id = profile_user_id;
$$;

-- Update the basic profile policy to only expose safe fields
DROP POLICY IF EXISTS "Basic profile info is publicly viewable" ON public.profiles;

-- Create view for public profile data
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  user_id,
  username,
  full_name,
  bio,
  avatar_url,
  interests,
  created_at
FROM public.profiles;

-- Grant access to the view
GRANT SELECT ON public.public_profiles TO authenticated, anon;

-- Create policy for the view to allow public access to safe fields only
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Remove the problematic policy and create a more secure one
CREATE POLICY "Users can only view their own sensitive profile data" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);