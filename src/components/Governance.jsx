import React from 'react'

function Governance() {
  const utilityCards = [
    {
      title: 'Exclusive Access',
      description: 'Unlock VIP events, early features, and premium content',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="16" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 16V12C16 8 19 4 24 4C29 4 32 8 32 12V16" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="26" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'DAO Governance',
      description: 'Vote on platform decisions and shape the future of FlowBond',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20H32M16 28H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="36" cy="20" r="8" fill="currentColor" opacity="0.2"/>
          <path d="M36 16V24M32 20H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Staking Rewards',
      description: 'Stake $FLOWBOND to earn passive $DANZ rewards',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L8 20V36C8 38 10 40 12 40H36C38 40 40 38 40 36V20L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M16 24H32V32H16V24Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  return (
    <section id="governance" className="section governance-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">Ecosystem</span>
          <h2 className="section-title">$FLOWBOND Utility</h2>
        </div>
        <div className="utility-grid">
          {utilityCards.map((card, index) => (
            <div key={index} className="utility-card animate">
              <div className="card-gradient"></div>
              <div className="utility-icon">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Governance