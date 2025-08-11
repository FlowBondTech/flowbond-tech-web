import React from 'react'

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "You Join",
      description: "Create your profile in minutes",
      icon: "👋"
    },
    {
      number: 2,
      title: "You Connect", 
      description: "Discover events, groups, and opportunities that matter to you",
      icon: "🤝"
    },
    {
      number: 3,
      title: "You Contribute",
      description: "Share skills, ideas, and resources",
      icon: "💝"
    },
    {
      number: 4,
      title: "You Benefit",
      description: "Earn rewards, take part in decisions, and see real-world results",
      icon: "🌱"
    }
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">How It Works</div>
          <h2 className="text-large section-title">
            Simple steps to <span className="gradient-text">join the flow</span>
          </h2>
          <p className="text-body-large section-subtitle">
            FlowBond makes participation effortless. Here's how you become part of the global network.
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">
                {step.number}
              </div>
              <h3 className="step-title">
                <span style={{ marginRight: 'var(--space-xs)' }}>{step.icon}</span>
                {step.title}
              </h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Ready to be part of something bigger?
          </p>
          <button className="btn btn-primary btn-large">
            Join the Flow
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection