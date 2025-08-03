import React, { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, Coins, Heart, Share2 } from 'lucide-react'

function EventsMarketplace() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [joinLoading, setJoinLoading] = useState({})
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const { data: eventsData, error } = await supabase
        .from('events')
        .select(`
          *,
          profiles:creator_id (
            full_name,
            username
          ),
          event_attendees (
            user_id
          )
        `)
        .order('date', { ascending: true })

      if (error) {
        console.error('Error fetching events:', error)
      } else {
        setEvents(eventsData || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleJoinEvent = async (eventId) => {
    if (!user) {
      navigate('/auth')
      return
    }

    setJoinLoading(prev => ({ ...prev, [eventId]: true }))

    try {
      const { error } = await supabase
        .from('event_attendees')
        .insert([{
          event_id: eventId,
          user_id: user.id
        }])

      if (!error) {
        // Refresh events to update attendee count
        fetchEvents()
      }
    } catch (error) {
      console.error('Error joining event:', error)
    } finally {
      setJoinLoading(prev => ({ ...prev, [eventId]: false }))
    }
  }

  const isUserAttending = (event) => {
    return user && event.event_attendees?.some(attendee => attendee.user_id === user.id)
  }

  if (loading) {
    return (
      <section id="events" className="section">
        <div className="container text-center">
          <div className="animate-pulse">Loading events...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Events</span>
          <h2 className="section-title">
            Dance Events <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="section-subtitle">
            Host or join events in your city. Every ticket purchase flows 30% back into the $DANZ ecosystem.
          </p>
          <div className="mt-6">
            <button 
              onClick={() => navigate('/create-event')}
              className="btn btn-flow"
            >
              <Calendar size={20} />
              Create Your Event
            </button>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-text-primary mb-4">No events yet</h3>
            <p className="text-text-secondary mb-6">Be the first to create an event in your community!</p>
            <button 
              onClick={() => navigate('/create-event')}
              className="btn btn-flow"
            >
              <Calendar size={20} />
              Create First Event
            </button>
          </div>
        ) : (
          <>
            <div className="grid-3">
              {events.map((event) => (
                <div key={event.id} className="card hover-scale cursor-pointer">
                  {/* Event Image */}
                  <div className="relative mb-4 rounded-lg overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white text-4xl">🎭</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-charcoal-deep bg-opacity-80 px-2 py-1 rounded-full text-xs font-semibold text-gold-primary">
                      +{Math.floor(Math.random() * 100) + 20} $DANZ
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary">{event.title}</h3>
                    <p className="text-sm text-text-secondary">
                      by {event.profiles?.full_name || event.profiles?.username || 'Anonymous'}
                    </p>
                    
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <Users size={16} />
                      <span>{event.event_attendees?.length || 0}/{event.max_attendees || '∞'} dancers</span>
                    </div>

                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="px-2 py-1 bg-gold-primary bg-opacity-10 text-gold-primary text-xs rounded-full">
                        {event.event_type}
                      </span>
                    </div>

                    {/* Tags */}
                    {event.tags && event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gold-primary bg-opacity-10 text-gold-primary text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gold-primary border-opacity-20">
                      <div className="flex items-center gap-2">
                        <Coins size={16} className="text-gold-primary" />
                        <span className="font-semibold text-gold-primary">${event.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {user && !isUserAttending(event) ? (
                          <button 
                            onClick={() => handleJoinEvent(event.id)}
                            disabled={joinLoading[event.id]}
                            className="px-3 py-1 bg-gold-primary text-charcoal-deep rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                          >
                            {joinLoading[event.id] ? 'Joining...' : 'Join'}
                          </button>
                        ) : user && isUserAttending(event) ? (
                          <span className="text-green-400 text-sm font-medium">✓ Joined</span>
                        ) : (
                          <button 
                            onClick={() => navigate('/auth')}
                            className="px-3 py-1 bg-gold-primary text-charcoal-deep rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                          >
                            Sign in
                          </button>
                        )}
                        <button className="p-2 hover:bg-gold-primary hover:bg-opacity-10 rounded-full transition-all">
                          <Heart size={16} className="text-text-muted hover:text-gold-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Host Event CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            "Every time someone moves, the world gets richer."
          </p>
          <button 
            onClick={() => navigate('/create-event')}
            className="btn btn-flow"
          >
            <Calendar size={20} />
            Host Your Event
          </button>
        </div>

        {/* Mobile-friendly Event Cards for Swipe */}
        {events.length > 0 && (
          <div className="block md:hidden mt-8">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {events.map((event) => (
                <div key={event.id} className="flex-shrink-0 w-72 card">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center rounded-lg mb-3">
                    <span className="text-white text-2xl">🎭</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{event.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{new Date(event.date).toLocaleDateString()}</span>
                    <span className="text-gold-primary font-semibold">${event.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-text-secondary">{event.event_attendees?.length || 0} attending</span>
                    {user && !isUserAttending(event) ? (
                      <button 
                        onClick={() => handleJoinEvent(event.id)}
                        className="px-2 py-1 bg-gold-primary text-charcoal-deep rounded text-xs"
                      >
                        Join
                      </button>
                    ) : user && isUserAttending(event) ? (
                      <span className="text-green-400 text-xs">✓ Joined</span>
                    ) : (
                      <button 
                        onClick={() => navigate('/auth')}
                        className="px-2 py-1 bg-gold-primary text-charcoal-deep rounded text-xs"
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EventsMarketplace