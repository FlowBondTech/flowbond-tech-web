import React from 'react'

function TokenExplainer() {
  return (
    <section className="section token-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">$DANZ Token</span>
          <h2 className="section-title">
            Introducing <span className="gradient-text">$DANZ</span> – the world's first movement-based reward token
          </h2>
        </div>

        <div className="token-grid">
          <div className="token-ways">
            <h3 className="token-subtitle">Earn $DANZ by:</h3>
            <div className="earning-methods">
              <div className="earning-method">
                <div className="method-icon">💃</div>
                <div className="method-content">
                  <h4>Dancing with FlowBond</h4>
                  <p>Use your FlowBond wearable to track movement (coming soon)</p>
                </div>
              </div>
              
              <div className="earning-method">
                <div className="method-icon">🎭</div>
                <div className="method-content">
                  <h4>Attending Events</h4>
                  <p>Join dance experiences and conscious gatherings</p>
                </div>
              </div>
              
              <div className="earning-method">
                <div className="method-icon">🎪</div>
                <div className="method-content">
                  <h4>Hosting Events</h4>
                  <p>Create and facilitate movement experiences</p>
                </div>
              </div>
              
              <div className="earning-method">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <h4>Sharing Content</h4>
                  <p>Connect through the app and build community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="token-explanation">
            <div className="explanation-card">
              <h3>No crypto knowledge needed</h3>
              <p>
                FlowBond creates a smart wallet for you when you sign up with your email. 
                Your $DANZ is safe, easy to access, and fully yours.
              </p>
              
              <div className="token-features">
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>Secure wallet created automatically</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📧</span>
                  <span>Sign up with just your email</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💎</span>
                  <span>Your tokens, your ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenExplainer