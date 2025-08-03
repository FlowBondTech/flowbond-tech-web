import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import { supabase } from '@/integrations/supabase/client'
import { useNavigate } from 'react-router-dom'

function CreateEvent() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_type: '',
    date: '',
    time: '',
    location: '',
    price: 0,
    max_attendees: '',
    tags: []
  })

  const eventTypes = [
    'Workshop', 'Performance', 'Competition', 'Social Dance', 
    'Masterclass', 'Battle', 'Showcase', 'Practice Session'
  ]

  const tagOptions = [
    'Beginner Friendly', 'Advanced', 'Kids Welcome', 'Adults Only',
    'Free', 'Indoor', 'Outdoor', 'Live Music', 'DJ Set'
  ]

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      setMessage('You must be logged in to create events')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const { data, error } = await supabase
        .from('events')
        .insert([{
          ...formData,
          creator_id: user.id,
          max_attendees: formData.max_attendees ? parseInt(formData.max_attendees) : null
        }])
        .select()
        .single()

      if (error) {
        setMessage(error.message)
      } else {
        setMessage('Event created successfully!')
        setTimeout(() => {
          navigate('/events')
        }, 1500)
      }
    } catch (error) {
      setMessage('An unexpected error occurred')
    }

    setLoading(false)
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Sign In Required</h2>
        <p className="text-muted-foreground mb-6">You need to be signed in to create events.</p>
        <button 
          onClick={() => navigate('/auth')}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Sign In
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-card rounded-xl shadow-lg border border-border p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create New Event</h1>
          <p className="text-muted-foreground">Share your dance event with the community</p>
        </div>

        {message && (
          <div className={`mb-6 p-3 rounded-lg text-sm ${
            message.includes('success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Event Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Give your event a catchy title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Event Type *
            </label>
            <select
              required
              value={formData.event_type}
              onChange={(e) => setFormData(prev => ({ ...prev, event_type: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select event type</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Time *
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Location *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Where is your event taking place?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Describe your event, what to expect, skill level, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price ($)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Max Attendees
              </label>
              <input
                type="number"
                min="1"
                value={formData.max_attendees}
                onChange={(e) => setFormData(prev => ({ ...prev, max_attendees: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Leave empty for unlimited"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-4">
              Tags
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tagOptions.map(tag => (
                <label key={tag} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.tags.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="sr-only"
                  />
                  <div className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                    formData.tags.includes(tag)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary'
                  }`}>
                    {tag}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/events')}
              className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent