import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import { useNavigate } from 'react-router-dom'

function MatchingSubscription() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleSubscribe = () => {
    if (!user) {
      navigate('/auth')
      return
    }
    // TODO: Implement subscription logic
    console.log('Subscribe clicked for', billingCycle)
  }

  return (
    <section className="section subscription-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Connect with your <span className="gradient-text">vibe</span>
          </h2>
          <p className="section-description">
            FlowBond's matching system helps you find aligned people through movement and shared events.
          </p>
        </div>

        <div className="subscription-content">
          <div className="subscription-features">
            <h3>Subscribe to unlock:</h3>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">💕</span>
                <span>Matching and messaging features</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎫</span>
                <span>Early access to top events</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Double token rewards</span>
              </div>
            </div>
          </div>

          <div className="subscription-pricing">
            <div className="billing-toggle">
              <button 
                className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
                <span className="save-badge">Save 35%</span>
              </button>
            </div>

            <div className="pricing-card">
              {billingCycle === 'yearly' && (
                <div className="savings-badge">Best Value</div>
              )}
              
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{billingCycle === 'monthly' ? '9.90' : '77'}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              {billingCycle === 'yearly' && (
                <div className="price-comparison">
                  <span className="original-price">$118.80/year</span>
                  <span className="savings">Save $41.80</span>
                </div>
              )}

              <button onClick={handleSubscribe} className="btn btn-primary btn-large btn-block">
                {user ? 'Subscribe Now' : 'Sign Up to Subscribe'}
              </button>

              <p className="subscription-note">
                Cancel anytime. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchingSubscription