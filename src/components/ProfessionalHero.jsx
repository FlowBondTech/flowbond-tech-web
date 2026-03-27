import React, { useEffect, useRef } from 'react'

function ProfessionalHero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'tech-particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 10}s`
      particle.style.animationDuration = `${8 + Math.random() * 12}s`
      return particle
    }

    particles.innerHTML = ''
    for (let i = 0; i < 30; i++) {
      particles.appendChild(createParticle())
    }
  }, [])

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
            <div className="logo-container-dynamic">
              <div className="logo-glow-dynamic"></div>
              <img
                src="/lovable-uploads/6e554e3e-ddc6-491b-908b-9076eadc7955.png"
                alt="FlowBond"
                className="hero-logo-flowing"
              />
            </div>
          </div>

          <h1 className="professional-title">
            Fingerprint.<br />
            <span className="gradient-tech">Connections.</span><br />
            Technology.
          </h1>

          <p className="professional-subtitle">
            Tokenized ecosystem combining biometric tracking,
            AI-powered matchmaking, and movement-to-earn technology.
            Company shares tokenized through <strong>$FlowBond</strong>.
          </p>

          <div className="hero-cta-group">
            <button onClick={() => window.open('https://www.danz.now', '_blank')} className="btn-tech-primary">
              Explore DANZ Platform
              <span className="btn-arrow">&rarr;</span>
            </button>
            <button onClick={handleLearnMore} className="btn-tech-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHero
