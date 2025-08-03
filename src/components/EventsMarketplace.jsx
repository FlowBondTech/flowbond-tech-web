import React, { useState } from 'react'
import { Calendar, MapPin, Users, Coins, Heart, Share2 } from 'lucide-react'

function EventsMarketplace() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      id: 1,
      title: "Ecstatic Dance Journey",
      date: "Dec 15, 2024",
      time: "7:00 PM",
      location: "Brooklyn, NY",
      host: "Luna Flow",
      price: "25",
      danzEarned: "50",
      attendees: 45,
      maxAttendees: 60,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      tags: ["Ecstatic", "Journey", "Sacred"],
      description: "A transformative evening of conscious movement and connection."
    },
    {
      id: 2,
      title: "5Rhythms Wave",
      date: "Dec 18, 2024",
      time: "6:30 PM",
      location: "Los Angeles, CA",
      host: "Movement Collective",
      price: "30",
      danzEarned: "75",
      attendees: 28,
      maxAttendees: 40,
      image: "https://images.unsplash.com/photo-1594736797933-d0d912e9dcba?w=400",
      tags: ["5Rhythms", "Wave", "Expression"],
      description: "Journey through flowing, staccato, chaos, lyrical, and stillness."
    },
    {
      id: 3,
      title: "Contact Improvisation",
      date: "Dec 22, 2024",
      time: "5:00 PM",
      location: "Austin, TX",
      host: "Touch & Flow",
      price: "20",
      danzEarned: "40",
      attendees: 15,
      maxAttendees: 25,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
      tags: ["Contact", "Improv", "Touch"],
      description: "Explore connection through physical dialogue and shared weight."
    }
  ]

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
        </div>

        <div className="grid-3">
          {events.map((event) => (
            <div key={event.id} className="card hover-scale cursor-pointer" onClick={() => setSelectedEvent(event)}>
              {/* Event Image */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-charcoal-deep bg-opacity-80 px-2 py-1 rounded-full text-xs font-semibold text-gold-primary">
                  +{event.danzEarned} $DANZ
                </div>
              </div>

              {/* Event Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Calendar size={16} />
                  <span>{event.date} • {event.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Users size={16} />
                  <span>{event.attendees}/{event.maxAttendees} dancers</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gold-primary bg-opacity-10 text-gold-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gold-primary border-opacity-20">
                  <div className="flex items-center gap-2">
                    <Coins size={16} className="text-gold-primary" />
                    <span className="font-semibold text-gold-primary">${event.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gold-primary hover:bg-opacity-10 rounded-full transition-all">
                      <Heart size={16} className="text-text-muted hover:text-gold-primary" />
                    </button>
                    <button className="p-2 hover:bg-gold-primary hover:bg-opacity-10 rounded-full transition-all">
                      <Share2 size={16} className="text-text-muted hover:text-gold-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Host Event CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            "Every time someone moves, the world gets richer."
          </p>
          <a href="#host-event" className="btn btn-flow">
            <Calendar size={20} />
            Host Your Event
          </a>
        </div>

        {/* Mobile-friendly Event Cards for Swipe */}
        <div className="block md:hidden mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {events.map((event) => (
              <div key={event.id} className="flex-shrink-0 w-72 card">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h4 className="font-semibold text-text-primary mb-2">{event.title}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{event.date}</span>
                  <span className="text-gold-primary font-semibold">${event.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsMarketplace