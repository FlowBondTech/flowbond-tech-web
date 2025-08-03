import React from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleStartNow = () => {
    if (user) {
      navigate('/events')
    } else {
      navigate('/auth')
    }
  }

  const handleLearnMore = () => {
    document.getElementById('about-flowbond')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-coin">$</div>
          <div className="floating-coin">💃</div>
          <div className="floating-coin">🎭</div>
          <div className="floating-coin">✨</div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-word">Move.</span>
            <span className="hero-word">Connect.</span>
            <span className="hero-word gradient-text">Earn.</span>
          </h1>
          
          <p className="hero-subtitle">
            The app that rewards you for dancing, hosting events, and finding your vibe.
          </p>
          
          <div className="hero-actions">
            <button onClick={handleStartNow} className="btn btn-primary btn-large">
              {user ? 'Browse Events' : 'Start Now'}
            </button>
            <button onClick={handleLearnMore} className="btn btn-outline btn-large">
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Active Dancers</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Events Hosted</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">0</span>
              <span className="stat-label">$DANZ Earned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero