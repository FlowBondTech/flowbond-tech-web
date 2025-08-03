import React, { useState, useEffect } from 'react'
import { Heart, Users, Zap, RotateCcw, MessageCircle, Sparkles } from 'lucide-react'

function MatchingCommunity() {
  const [currentMatch, setCurrentMatch] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const matches = [
    {
      id: 1,
      name: "Luna",
      age: 28,
      location: "Brooklyn, NY",
      style: "Ecstatic Dance",
      bio: "Sacred movement enthusiast seeking deep connections through dance",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=300&h=400&fit=crop",
      compatibility: 94,
      interests: ["5Rhythms", "Contact Improv", "Breathwork"]
    },
    {
      id: 2,
      name: "River",
      age: 32,
      location: "Los Angeles, CA",
      style: "Contemporary",
      bio: "Professional dancer exploring conscious movement and community building",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      compatibility: 89,
      interests: ["Contemporary", "Yoga", "Music Production"]
    },
    {
      id: 3,
      name: "Sage",
      age: 26,
      location: "Austin, TX",
      style: "Hip Hop Flow",
      bio: "Street dancer bringing urban flow to conscious movement spaces",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
      compatibility: 92,
      interests: ["Hip Hop", "Breaking", "Community Building"]
    }
  ]

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
    setTimeout(() => {
      setCurrentMatch((prev) => (prev + 1) % matches.length)
      setIsFlipped(false)
    }, 600)
  }

  const currentUser = matches[currentMatch]

  return (
    <section id="matching" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Community</span>
          <h2 className="section-title">
            <span className="gradient-text">Flow Matching</span> & Connection
          </h2>
          <p className="section-subtitle">
            FlowBond isn't just about dancing — it's about connection. Meet aligned people through shared movement and vibes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Matching Card */}
            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Flow Connections Near You</h3>
                <p className="text-text-secondary">Discover dancers who match your energy and interests</p>
              </div>
              
              <div className="relative max-w-sm mx-auto">
                {/* Matching Card */}
                <div 
                  className={`card hover-scale cursor-pointer transition-all duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
                  onClick={handleCardFlip}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    minHeight: '500px'
                  }}
                >
                  {/* Front of Card */}
                  <div className={`absolute inset-0 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="relative">
                      <img 
                        src={currentUser.image} 
                        alt={currentUser.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 px-2 py-1 rounded-full text-xs font-semibold text-white">
                        {currentUser.compatibility}% Match
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-semibold text-text-primary">{currentUser.name}</h4>
                        <span className="text-text-muted">{currentUser.age}</span>
                      </div>
                      
                      <p className="text-text-secondary text-sm">{currentUser.location}</p>
                      
                      <div className="bg-gold-primary bg-opacity-10 px-3 py-2 rounded-lg">
                        <span className="text-gold-primary font-medium">{currentUser.style}</span>
                      </div>
                      
                      <p className="text-text-secondary text-sm italic">"{currentUser.bio}"</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {currentUser.interests.map((interest, index) => (
                          <span key={index} className="px-2 py-1 bg-charcoal-light text-text-secondary text-xs rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card (Connection Options) */}
                  <div className={`absolute inset-0 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="text-center space-y-4">
                      <Sparkles size={48} className="text-gold-primary mx-auto animate-pulse" />
                      <h4 className="text-xl font-semibold gold-text">Connection Sparked!</h4>
                      <p className="text-text-secondary">Ready to flow together?</p>
                      <div className="space-y-2">
                        <button className="btn btn-primary w-full">
                          <MessageCircle size={18} />
                          Start Conversation
                        </button>
                        <button className="btn btn-secondary w-full">
                          <Users size={18} />
                          Attend Event Together
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={handleCardFlip}
                    className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all"
                  >
                    <RotateCcw size={20} className="text-white" />
                  </button>
                  <button 
                    onClick={handleCardFlip}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all"
                  >
                    <Heart size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Connection Features */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Flow State Matching</h4>
                    <p className="text-text-secondary">
                      Our algorithm matches you with people who complement your energy, movement style, and vibe. 
                      From dance partners to deep friendships to meaningful connections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Community Missions</h4>
                    <p className="text-text-secondary">
                      Complete shared challenges with your matches — attend events together, 
                      practice new moves, or co-create content. Earn bonus $DANZ for collective flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-primary to-neon-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Safe Connections</h4>
                    <p className="text-text-secondary">
                      All connections happen within the safety of our community. Meet at events, 
                      participate in group activities, and build trust through shared movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Matching Interface */}
          <div className="block lg:hidden mt-8">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Swipe to Connect</h4>
              <p className="text-text-secondary text-sm">Discover dancers in your area</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {matches.map((match, index) => (
                <div key={match.id} className="flex-shrink-0 w-48 card text-center">
                  <img src={match.image} alt={match.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h5 className="font-semibold text-text-primary">{match.name}</h5>
                  <p className="text-sm text-text-muted">{match.style}</p>
                  <div className="text-xs text-green-400 mt-1">{match.compatibility}% Match</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchingCommunity