import React from 'react'

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content animate">
          <h2 className="cta-title">
            <span className="gradient-text">Ready to revolutionize movement?</span>
          </h2>
          <p className="cta-description">
            Join thousands of dancers earning rewards for doing what they love.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-large">Join Waitlist</a>
            <a href="#" className="btn btn-secondary btn-large">Partner With Us</a>
          </div>
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="stat-icon">🔥</span>
              <span className="stat-text">2,847 joined this week</span>
            </div>
            <div className="cta-stat">
              <span className="stat-icon">⚡</span>
              <span className="stat-text">Limited spots remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA