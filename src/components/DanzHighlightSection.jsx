import React from 'react'

function DanzHighlightSection() {
  return (
    <section id="vision" className="section danz-highlight-section">
      <div className="container">
        <div className="section-header">
          <div className="danz-badge">$DANZ Token</div>
          <h2 className="danz-headline">
            <span className="gradient-danz-text">Earn While You Dance</span>
            <br />Movement Becomes Currency
          </h2>
          <p className="text-body-large section-subtitle">
            $DANZ is the world's first movement-to-earn token. Every dance session,
            every beat, every moment of flow is rewarded. Join thousands earning tokens
            through authentic human connection and movement.
          </p>
        </div>

        <div className="danz-cards-grid">
          <div className="danz-feature-card">
            <div className="danz-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h3>Music & Movement</h3>
            <p>Connect through dance, discover events, and build community around the universal language of rhythm and movement.</p>
          </div>

          <div className="danz-feature-card">
            <div className="danz-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Creative Community</h3>
            <p>Experience the future of community building through DANZ — creativity-first, connection-focused, and powered by shared value.</p>
          </div>
        </div>

        <div className="danz-cta-area">
          <div className="danz-token-badge">
            <span className="danz-token-label">$DANZ Token</span>
            <span className="danz-token-supply">1B Supply</span>
          </div>

          <div className="danz-cta-buttons">
            <a href="/danz" className="btn-danz-primary">
              Explore $DANZ
            </a>
            <a href="/danz/tokenomics" className="btn-danz-secondary">
              View Tokenomics
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DanzHighlightSection
