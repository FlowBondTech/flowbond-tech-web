import React from 'react'

function ProfessionalAbout() {
  return (
    <section id="about-flowbond" className="section" style={{ 
      background: 'hsl(var(--brand-secondary))',
      padding: '120px 0'
    }}>
      <div className="container">
        <div className="professional-about-grid">
          <div className="about-content">
            <div className="section-badge">
              <span>About FlowBond</span>
            </div>
            
            <h2 className="text-large gradient-tech" style={{ marginBottom: '30px' }}>
              The Future of Human Connection Technology
            </h2>
            
            <div className="about-text">
              <p>
                FlowBond pioneers the next generation of human connection analytics. We combine 
                cutting-edge biometric tracking, AI-powered matchmaking, and blockchain tokenization 
                to create unprecedented value from authentic human interactions.
              </p>
              
              <p>
                Our proprietary technology stack includes advanced wearable devices that 
                monitor movement patterns, heart rate variability, and social proximity 
                data to facilitate deeper, more meaningful connections between individuals.
              </p>
              
              <p>
                All company shares are tokenized through our <strong>$FlowBond</strong> token, 
                representing true ownership in the platform's revenue streams and governance decisions.
              </p>
            </div>

            <div className="tech-features">
              <div className="feature-item">
                <div className="feature-content">
                  <h4>Biometric Connection Tracking</h4>
                  <p>Advanced sensors monitor physiological responses during social interactions</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-content">
                  <h4>AI-Powered Matchmaking</h4>
                  <p>Machine learning algorithms optimize compatibility based on behavioral data</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-content">
                  <h4>Real-Time Analytics</h4>
                  <p>Instant feedback and insights on connection quality and potential</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tokenomics-preview">
            <div className="token-card">
              <div className="token-header">
                <div className="token-info">
                  <h3>$FlowBond Token</h3>
                  <p>Tokenized Company Ownership</p>
                </div>
              </div>
              
              <div className="ownership-benefits">
                <h4>Token Holder Benefits</h4>
                <ul>
                  <li>Revenue sharing from all platform services</li>
                  <li>Governance rights in company decisions</li>
                  <li>Early access to new features and services</li>
                  <li>Staking rewards from network activity</li>
                </ul>
              </div>
              
              <div className="revenue-breakdown">
                <h4>Revenue Streams</h4>
                <div className="revenue-item">
                  <span>Device Sales & Subscriptions</span>
                  <span>45%</span>
                </div>
                <div className="revenue-item">
                  <span>Premium Memberships</span>
                  <span>25%</span>
                </div>
                <div className="revenue-item">
                  <span>White Label Licensing</span>
                  <span>20%</span>
                </div>
                <div className="revenue-item">
                  <span>Event Platform Commission</span>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalAbout