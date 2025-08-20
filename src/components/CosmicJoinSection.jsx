import React from 'react'
import CosmicLogo from './CosmicLogo'

function CosmicJoinSection() {
  const handleExploreDANZ = () => {
    window.open('https://www.danz.now', '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('about-flowbond')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cosmic-join-section">
      <div className="cosmic-particles-bg"></div>
      
      <div className="container">
        <div className="cosmic-join-content">
          <CosmicLogo className="w-40 h-40 mb-8" />
          
          <div className="cosmic-text-center">
            <h2 className="cosmic-title">
              Experience the Future of
              <span className="gradient-cosmic"> Human Connection</span>
            </h2>
            
            <p className="cosmic-subtitle">
              Join the evolution where technology meets authentic human interaction. 
              Our revolutionary ecosystem transforms how people connect, interact, and thrive together.
            </p>
          </div>

          <div className="cosmic-cta-grid">
            <div className="cosmic-card primary">
              <div className="cosmic-card-content">
                <h3>Start with DANZ</h3>
                <p>Experience our dance-to-earn ecosystem - the first innovation in our connection technology suite.</p>
                <button onClick={handleExploreDANZ} className="btn-cosmic-primary">
                  Enter DANZ Universe
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            
            <div className="cosmic-card secondary">
              <div className="cosmic-card-content">
                <h3>Learn More</h3>
                <p>Discover how FlowBond is revolutionizing human connection through tokenized ownership and AI.</p>
                <button onClick={handleLearnMore} className="btn-cosmic-secondary">
                  Explore Technology
                </button>
              </div>
            </div>
          </div>

          <div className="cosmic-vision-text">
            <h3>Join the Global Movement</h3>
            <p>
              FlowBond represents the convergence of human connection and cutting-edge technology. 
              Through our tokenized ecosystem, every interaction becomes an opportunity for growth, 
              connection, and shared prosperity in the new digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CosmicJoinSection