import React from 'react'

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Join",
      description: "Create your profile in minutes.",
      icon: "👋"
    },
    {
      number: 2,
      title: "Explore", 
      description: "Find communities, events, and causes that matter.",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Engage",
      description: "Share, vote, and grow together.",
      icon: "🤝"
    },
    {
      number: 4,
      title: "Impact",
      description: "See your contributions ripple across communities.",
      icon: "🌊"
    }
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">How It Works</div>
          <h2 className="text-large section-title">
            From You to Impact—<span className="gradient-text">Made Simple</span>
          </h2>
          <p className="text-body-large section-subtitle">
            Four simple steps connect you to a world of possibilities, communities, and shared impact.
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