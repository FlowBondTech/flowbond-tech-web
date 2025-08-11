import React from 'react'

function WhyItMattersSection() {
  const beliefs = [
    {
      icon: "🤝",
      title: "Connection Creates Power",
      description: "When people are truly connected, they can solve anything — from local challenges to global issues."
    },
    {
      icon: "📈",
      title: "Shared Growth",
      description: "The more we share resources, knowledge, and opportunities, the more we all grow together."
    },
    {
      icon: "⚖️",
      title: "People-First Design",
      description: "Technology should serve communities, not extract from them. Power belongs in people's hands."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Small local actions, when connected, create waves of change that can transform the world."
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Why It Matters</div>
          <h2 className="text-large section-title">
            Built on the belief that <span className="gradient-text">together we're unstoppable</span>
          </h2>
          <p className="text-body-large section-subtitle">
            FlowBond exists because we believe in the power of human connection and collective action.
          </p>
        </div>

        <div className="grid grid-2">
          {beliefs.map((belief, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                {belief.icon}
              </div>
              <h3 className="card-title">{belief.title}</h3>
              <p className="card-description">{belief.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <div style={{ 
            background: 'var(--warm-charcoal)', 
            border: '1px solid var(--soft-charcoal)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-2xl)',
            marginTop: 'var(--space-3xl)'
          }}>
            <h3 className="text-medium mb-md">
              The future is <span className="gradient-connection">collaborative</span>
            </h3>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
              Join thousands of people who are already building a more connected, equitable world through FlowBond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyItMattersSection