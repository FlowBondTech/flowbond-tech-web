import React from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import { useNavigate } from 'react-router-dom'

function HowItWorks() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const steps = [
    {
      number: '01',
      icon: '📧',
      title: 'Create your account',
      description: 'Sign up with email or connect your wallet - we make it simple'
    },
    {
      number: '02',
      icon: '🎭',
      title: 'Join events or post your own',
      description: 'Discover amazing dance experiences or create your own'
    },
    {
      number: '03',
      icon: '💕',
      title: 'Match with others & show up',
      description: 'Connect with your vibe and attend events together'
    },
    {
      number: '04',
      icon: '🪙',
      title: 'Earn $DANZ automatically',
      description: 'Get rewarded for dancing, hosting, and connecting'
    }
  ]

  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            Start earning rewards in <span className="gradient-text">4 simple steps</span>
          </h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <h3>Ready to start your journey?</h3>
          <p>Join thousands of dancers already earning rewards for doing what they love.</p>
          <button 
            onClick={() => user ? navigate('/events') : navigate('/auth')}
            className="btn btn-primary btn-large"
          >
            {user ? 'Browse Events' : 'Get Started Now'}
          </button>
        </div>

        <div className="video-placeholder">
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="play-button">▶</div>
              <span>Watch how FlowBond works</span>
            </div>
            <p>Coming soon: See FlowBond in action</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks