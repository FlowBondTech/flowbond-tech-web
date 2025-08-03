import React, { useEffect, useRef } from 'react'
import { Music, Zap, Users } from 'lucide-react'

function FlowBondHero() {
  const danzRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.cssText = `
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          left: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 20}s;
          animation-duration: ${Math.random() * 10 + 15}s;
        `
        particlesRef.current.appendChild(particle)
      }
    }
  }, [])

  return (
    <section className="hero">
      <div className="flow-particles" ref={particlesRef}></div>
      
      <div className="container">
        <div className="hero-content fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gold-primary bg-opacity-10 border border-gold-primary border-opacity-30 rounded-full">
            <div className="w-2 h-2 bg-gold-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gold-primary uppercase tracking-wider">
              V1 App Now Live
            </span>
          </div>

          {/* Main Headline with Holographic $DANZ */}
          <h1 className="hero-title">
            Flow into Connection.<br />
            Dance into <span className="holographic-text" ref={danzRef}>Tokenized Joy</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            FlowBond helps you grow your dance community, track your vibe, 
            and earn <span className="gold-text">$DANZ</span> tokens for doing what you love.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#onboarding" className="btn btn-primary">
              <Music size={20} />
              Start Dancing
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="stat-item">
              <div className="text-3xl font-bold gold-text mb-1">2.5K+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Active Dancers</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold gold-text mb-1">150+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Events Created</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold gold-text mb-1">$50K</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">$DANZ Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Button */}
      <a href="#subscribe" className="btn btn-primary btn-sticky">
        <Users size={18} />
        Subscribe & Connect
      </a>
    </section>
  )
}

export default FlowBondHero