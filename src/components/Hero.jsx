import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCounters, useTypingEffect } from '../hooks/useNeonEffects'
import SubscriptionModal from './SubscriptionModal'

function Hero() {
  const titleRef = useRef(null)
  const counterRefs = useRef([])
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useTypingEffect(titleRef)
  useCounters(counterRefs)

  const setCounterRef = (el, index) => {
    if (el) counterRefs.current[index] = el
  }
  
  const handleLearnMore = (e) => {
    e.preventDefault()
    navigate('/danz')
  }
  
  const handleJoinMovement = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient"></div>
      <div className="hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-badge animate">
          <span className="badge-dot"></span>
          DANZ NOW App
        </div>
        <h1 className="hero-title animate">
          <span className="gradient-text" ref={titleRef}></span>
        </h1>
        <p className="hero-description animate">
          The app that rewards you for dancing, hosting events, and finding your vibe. Transform your passion for movement into meaningful connections and real rewards.
          <br /><span style={{fontSize: '0.9em', opacity: 0.8, marginTop: '0.5rem', display: 'inline-block'}}>Powered by FlowBond</span>
        </p>
        <div className="hero-cta animate">
          <a href="#" className="btn btn-primary" onClick={handleJoinMovement}>
            <span>Start Now</span>
            <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/danz" onClick={handleLearnMore} className="btn btn-secondary">Learn More</a>
        </div>
        <div className="hero-stats animate">
          <div className="stat">
            <div className="stat-value">
              <span className="counter" data-target="10" ref={(el) => setCounterRef(el, 0)}>0</span>K+
            </div>
            <div className="stat-label">Active Movers</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-value">
              <span className="counter" data-target="500" ref={(el) => setCounterRef(el, 1)}>0</span>K
            </div>
            <div className="stat-label">Hours Danced</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-value">
              <span className="counter" data-target="150" ref={(el) => setCounterRef(el, 2)}>0</span>+
            </div>
            <div className="stat-label">Global Events</div>
          </div>
        </div>
      </div>
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero