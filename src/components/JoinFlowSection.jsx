import React from 'react'

function JoinFlowSection() {
  return (
    <section id="join-flow" className="section" style={{ background: 'var(--deep-navy)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Ready to Start?</div>
          <h2 className="text-large section-title">
            <span className="gradient-text">Join, Be Seen, Belong</span>
          </h2>
          <p className="text-body-large section-subtitle">
            Whether you use crypto or not, FlowBond welcomes you. Choose your path and become part of the global flow.
          </p>
        </div>

        <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <div className="card-icon" style={{ margin: '0 auto var(--space-lg)' }}>✉️</div>
            <h3 className="card-title">Simple Email Sign-up</h3>
            <p className="card-description" style={{ marginBottom: 'var(--space-lg)' }}>
              Join with just your email. We'll create everything you need to start connecting and contributing.
            </p>
            <button className="btn btn-primary">
              Sign Up with Email
            </button>
          </div>
          
          <div className="card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <div className="card-icon" style={{ margin: '0 auto var(--space-lg)' }}>🔗</div>
            <h3 className="card-title">Connect Wallet (Optional)</h3>
            <p className="card-description" style={{ marginBottom: 'var(--space-lg)' }}>
              Already have a crypto wallet? Connect it for enhanced features and direct token rewards.
            </p>
            <button className="btn btn-secondary">
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 'var(--space-3xl)', padding: 'var(--space-2xl)', background: 'var(--navy-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--navy-border)' }}>
          <h3 className="text-medium" style={{ marginBottom: 'var(--space-md)' }}>
            Join the <span className="gradient-connection">Global Movement</span>
          </h3>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            By 2030, FlowBond will unite 1,000+ communities and redistribute billions in shared value, empowering people everywhere to shape the future they deserve.
          </p>
        </div>
      </div>
    </section>
  )
}

export default JoinFlowSection