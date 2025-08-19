import React from 'react'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Download & Connect',
      description: 'Get the DANZ NOW app and sync your FlowBond wearable (or start with app-only mode)',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="8" width="24" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="20" r="3" fill="currentColor"/>
          <rect x="16" y="26" width="16" height="2" fill="currentColor" rx="1"/>
          <rect x="16" y="30" width="12" height="2" fill="currentColor" rx="1"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Move Your Way',
      description: 'Dance, walk, yoga, or any movement you love. Every step counts toward rewards',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C16 8 12 16 12 24C12 32 24 40 24 40C24 40 36 32 36 24C36 16 32 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="22" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20L22 22L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Earn Rewards',
      description: 'Automatically receive $DANZ tokens for your activity and event participation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 12V36M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21L27 27M27 21L21 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Join Events',
      description: 'Connect with your local dance community and discover events that match your vibe',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="30" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 26L26 26M20 32L28 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How DANZ NOW Works</h2>
          <p className="section-description">
            Get started in minutes and begin earning rewards for the movement you're already doing.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card animate">
              <div className="card-glow"></div>
              <div className="process-number">{step.number}</div>
              <div className="process-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks