import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function ProfessionalHero() {
  const particlesRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    // Create professional particle system
    const createParticle = (index) => {
      const particle = document.createElement('div')
      particle.className = 'tech-particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 10}s`
      particle.style.animationDuration = `${8 + Math.random() * 12}s`
      return particle
    }

    // Clear and populate particles
    particles.innerHTML = ''
    for (let i = 0; i < 50; i++) {
      particles.appendChild(createParticle(i))
    }
  }, [])

  const handleExploreDANZ = () => {
    window.open('https://www.danz.now', '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('about-flowbond')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="professional-hero">
      <div className="tech-particles" ref={particlesRef}></div>
      
      <div className="hero-grid-overlay"></div>
      
      <div className="container">
        <div className="hero-content-professional">
          <div className="company-badge">
            <span>Next-Generation Connection Technology</span>
          </div>
          
          <div className="hero-logo-section">
            <div className="logo-container">
              <div className="logo-glow"></div>
              <img 
                src="/lovable-uploads/5bd3bfb5-374c-4978-aca8-abe572613168.png" 
                alt="FlowBond - Belong Connect Thrive" 
                className="hero-logo-integrated"
              />
            </div>
            <div className="tagline">BELONG • CONNECT • THRIVE</div>
          </div>
          
          <h1 className="professional-title">
            Fingerprint.<br />
            <span className="gradient-tech">Connections.</span><br />
            Technology.
          </h1>
          
          <p className="professional-subtitle">
            Revolutionary tokenized ecosystem combining human connection tracking, 
            AI-powered matchmaking, and movement-to-earn technology. Our shares are 
            tokenized through <strong>$FlowBond</strong> — representing ownership in the future 
            of human connection analytics.
          </p>

          <div className="business-model">
            <div className="revenue-streams">
              <div className="stream-item">
                <span>Connection Tracking Devices</span>
              </div>
              <div className="stream-item">
                <span>AI Matchmaking Platform</span>
              </div>
              <div className="stream-item">
                <span>Premium Memberships</span>
              </div>
              <div className="stream-item">
                <span>White Label Development</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="primary-cta">
              <h3>Experience Our First Innovation</h3>
              <p>Dance-to-Earn System — Movement Becomes Currency</p>
              <button onClick={handleExploreDANZ} className="btn-tech-primary">
                Explore DANZ Platform
                <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <button onClick={handleLearnMore} className="btn-tech-secondary">
              Learn About FlowBond Technology
            </button>
          </div>

          <div className="tech-stats">
            <div className="stat-item">
              <div className="stat-number">$FlowBond</div>
              <div className="stat-label">Tokenized Ownership</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Web3</div>
              <div className="stat-label">Native Technology</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">AI</div>
              <div className="stat-label">Powered Matching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHero