import React from 'react'

function StatsSection() {
  const stats = [
    {
      number: "1000+",
      label: "Communities Ready to Connect",
      description: "Movements waiting to join the flow"
    },
    {
      number: "$1B+",
      label: "Value to Redistribute",
      description: "Resources flowing to people, not platforms"
    },
    {
      number: "50+",
      label: "Countries Represented",
      description: "Global network, local impact"
    },
    {
      number: "2030",
      label: "Our Goal Year",
      description: "When the backbone is fully connected"
    }
  ]

  return (
    <section className="section" style={{ background: 'var(--warm-charcoal)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Impact Vision</div>
          <h2 className="text-large section-title">
            Building the <span className="gradient-text">infrastructure for change</span>
          </h2>
          <p className="text-body-large section-subtitle">
            These aren't just numbers — they represent real communities, real people, and real potential for positive change.
          </p>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.75rem', 
                marginTop: 'var(--space-xs)',
                lineHeight: 1.4
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Every person who joins makes this vision more real.
          </p>
          <button className="btn btn-primary">
            Be Part of the Solution
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatsSection