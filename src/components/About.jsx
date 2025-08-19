import React from 'react'

function About() {
  const companyPillars = [
    {
      title: 'The App',
      subtitle: 'Your Movement Companion',
      description: 'Track your rhythm, discover events, and connect with dancers in your city. Available on iOS and Android.',
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
      title: 'The Wearable',
      subtitle: 'Track Every Beat',
      description: 'Our FlowBond wearable captures your movement data and automatically rewards your activity.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="24" rx="12" ry="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 24C12 24 16 20 24 20C32 20 36 24 36 24" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="24" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'The Token',
      subtitle: 'Movement Rewards',
      description: '$DANZ is our reward token that you earn for dancing, attending events, and building community.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 12V36M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">About DANZ NOW</span>
          <h2 className="section-title">Where Movement Meets Technology</h2>
          <p className="section-description">
            DANZ NOW is a movement tech company building the future of community-driven wellness.
            <br />We reward authentic movement and meaningful connections. Powered by FlowBond technology.
          </p>
        </div>
        <div className="process-grid">
          {companyPillars.map((pillar, index) => (
            <div key={index} className="process-card animate">
              <div className="card-glow"></div>
              <div className="process-icon">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <h4 className="pillar-subtitle">{pillar.subtitle}</h4>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About