import React from 'react'

function VisionSection() {
  return (
    <section id="vision" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Vision</div>
          <h2 className="text-large section-title">
            Making it easy for people everywhere to <span className="gradient-text">come together</span>
          </h2>
          <p className="text-body-large section-subtitle">
            Today, many communities and good ideas work in isolation. People want to connect, but the systems to do so are complicated, scattered, and often controlled by a few.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="card">
            <div className="card-icon">🏝️</div>
            <h3 className="card-title">The Problem</h3>
            <p className="card-description">
              Communities work in silos. Resources are scattered. Great ideas lose momentum because there's no easy way to connect and collaborate at scale.
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">🌊</div>
            <h3 className="card-title">The Solution</h3>
            <p className="card-description">
              One simple entry point where your profile, events, resources, and community decisions are all connected — where the flow of value moves freely between people.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-medium mb-lg">
            This is more than a platform. It's a <span className="gradient-connection">backbone for the future</span>.
          </h3>
          <p className="text-body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            By 2030, FlowBond aims to connect over a thousand communities and redistribute billions in shared value — ensuring that people, not just platforms, hold the power and the benefits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection