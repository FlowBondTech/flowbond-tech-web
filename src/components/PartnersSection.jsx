import React from 'react'

function PartnersSection() {
  return (
    <section className="section partners-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Are you a <span className="gradient-text">facilitator, DJ, or venue?</span>
          </h2>
          <p className="section-description">
            Use FlowBond to grow your community and earn from every event
          </p>
        </div>

        <div className="partners-content">
          <div className="partners-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">🎫</div>
              <div className="benefit-content">
                <h3>Sell tickets easily</h3>
                <p>Streamlined ticketing system with built-in promotion</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <div className="benefit-content">
                <h3>Grow your community</h3>
                <p>Connect with dancers and conscious movers worldwide</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Earn $DANZ from every event</h3>
                <p>Get rewarded for creating amazing experiences</p>
              </div>
            </div>
          </div>

          <div className="partners-cta">
            <div className="cta-card">
              <h3>Become a FlowHost</h3>
              <p>
                Join our community of facilitators and start hosting events that matter. 
                Apply today and be part of the movement revolution.
              </p>
              
              <div className="cta-stats">
                <div className="stat">
                  <span className="stat-number">70%</span>
                  <span className="stat-label">Revenue to hosts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">30%</span>
                  <span className="stat-label">To $DANZ treasury</span>
                </div>
              </div>

              <button className="btn btn-primary btn-large">
                Apply to be a FlowHost
              </button>
              
              <p className="cta-note">
                Free to apply • Quick approval process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection