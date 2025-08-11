import React from 'react'

function VisionSection() {
  return (
    <section id="vision" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Global Vision</div>
          <h2 className="text-large section-title">
            FlowBond brings the world together as <span className="gradient-text">one shared flow</span>
          </h2>
          <p className="text-body-large section-subtitle">
            From neighborhoods to global causes, we connect communities, honor their unique values, and amplify their collective impact.
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
            By 2030, FlowBond will unite 1,000+ communities and redistribute billions in shared value, empowering people everywhere to shape the future they deserve.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection