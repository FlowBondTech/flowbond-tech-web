import React from 'react'
import { useNavigate } from 'react-router-dom'

function Token() {
  const navigate = useNavigate()
  
  const handleLearnMore = (e) => {
    e.preventDefault()
    navigate('/danz')
  }
  
  const tokenFeatures = [
    {
      title: 'Lightning Fast',
      description: 'Powered by Solana blockchain',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Secure & Verified',
      description: 'Audited smart contracts',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7V12C2 16.5 4.5 20.5 12 22C19.5 20.5 22 16.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Global Network',
      description: 'Dance anywhere, earn everywhere',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <section id="token" className="section token-section">
      <div className="container">
        <div className="token-layout">
          <div className="token-info animate">
            <span className="section-tag">Digital Currency</span>
            <h2 className="section-title gradient-text">$DANZ Token</h2>
            <p className="token-description">
              The future of movement rewards. Built on Solana for lightning-fast transactions and minimal fees.
            </p>
            
            <div className="token-features">
              {tokenFeatures.map((feature, index) => (
                <div key={index} className="token-feature">
                  <div className="feature-icon-wrap">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="token-actions">
              <a href="#" className="btn btn-primary">View Tokenomics</a>
              <a href="/danz" onClick={handleLearnMore} className="btn btn-ghost">Learn More</a>
            </div>
          </div>
          
          <div className="token-visual animate">
            <div className="token-display">
              <div className="token-glow"></div>
              <div className="token-inner">
                <span className="token-symbol">$DANZ</span>
                <div className="token-particles">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Token