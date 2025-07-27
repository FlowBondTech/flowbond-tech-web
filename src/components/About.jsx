import React from 'react'

function About() {
  const processSteps = [
    {
      number: '01',
      title: 'Wear Device',
      description: 'Connect your FlowBond bracelet to start tracking',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="8" width="24" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 20V24L27 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Start Moving',
      description: 'Dance, walk, or exercise to generate energy',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C16 8 12 16 12 24C12 32 24 40 24 40C24 40 36 32 36 24C36 16 32 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="22" r="6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Earn Tokens',
      description: 'Receive $DANZ rewards for your movement',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16V32M20 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Connect',
      description: 'Join the global dance community',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 24H26" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Four Steps to Start Earning</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
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

export default About