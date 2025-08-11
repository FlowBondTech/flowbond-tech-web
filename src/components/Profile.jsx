import React, { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth.jsx'

function Profile() {
  const { user, profile, updateProfile, signOut } = useAuth()
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    birthdate: '',
    bio: '',
    location: '',
    interests: []
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (profile) {
      setFormData({
        username: profile.username || '',
        full_name: profile.full_name || '',
        birthdate: profile.birthdate || '',
        bio: profile.bio || '',
        location: profile.location || '',
        interests: profile.interests || []
      })
    }
  }, [profile])

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await updateProfile(formData)
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Profile updated successfully!')
      setEditing(false)
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const interestOptions = [
    'Hip Hop', 'Ballet', 'Contemporary', 'Jazz', 'Breakdancing', 
    'Salsa', 'Bachata', 'Tango', 'Swing', 'Ballroom',
    'Pole Dancing', 'Belly Dance', 'Tap Dance', 'African Dance',
    'Latin Dance', 'Commercial', 'Lyrical', 'Musical Theatre'
  ]

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-charcoal-deep pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal-mid/50 backdrop-blur-sm rounded-2xl border border-gold-primary/20 overflow-hidden shadow-glow">
            {/* Header */}
            <div className="bg-gradient-flow p-8 text-charcoal-deep relative overflow-hidden">
              <div className="absolute inset-0 bg-holographic opacity-20"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
                      {profile?.full_name || 'Welcome, Dancer!'}
                    </h1>
                    <p className="text-charcoal-deep/80 text-lg">
                      {profile?.username ? `@${profile.username}` : 'Complete your FlowBond profile'}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditing(!editing)}
                      className="px-4 py-2 bg-charcoal-deep/20 hover:bg-charcoal-deep/30 text-charcoal-deep rounded-lg transition-all duration-300 font-medium backdrop-blur-sm"
                    >
                      {editing ? 'Cancel' : 'Edit Profile'}
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-charcoal-deep rounded-lg transition-all duration-300 font-medium backdrop-blur-sm"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {message && (
                <div className={`mb-6 p-4 rounded-lg text-sm border ${
                  message.includes('success') 
                    ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {message}
                </div>
              )}

          {editing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-3 border border-gold-primary/20 rounded-lg bg-charcoal-mid/30 text-text-primary focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all backdrop-blur-sm"
                    placeholder="Choose a username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => setFormData(prev => ({ ...prev, birthdate: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Dance Interests
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {interestOptions.map(interest => (
                    <label key={interest} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="sr-only"
                      />
                      <div className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                        formData.interests.includes(interest)
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary'
                      }`}>
                        {interest}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Saving...' : 'Save Profile'}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                  <p className="text-foreground">{user.email}</p>
                </div>
                {profile?.username && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Username</h3>
                    <p className="text-foreground">@{profile.username}</p>
                  </div>
                )}
                {profile?.birthdate && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Birth Date</h3>
                    <p className="text-foreground">{new Date(profile.birthdate).toLocaleDateString()}</p>
                  </div>
                )}
                {profile?.location && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                    <p className="text-foreground">{profile.location}</p>
                  </div>
                )}
              </div>

              {profile?.bio && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Bio</h3>
                  <p className="text-foreground">{profile.bio}</p>
                </div>
              )}

              {profile?.interests && profile.interests.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Dance Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map(interest => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile