import React from 'react'

function AboutFlowBond() {
  return (
    <section id="about-flowbond" className="section about-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            FlowBond is a <span className="gradient-text">movement tech</span> company
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">📱</div>
            <h3>Matching & Events App</h3>
            <p>Connect with your vibe through movement and shared experiences</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">⌚</div>
            <h3>Wearable Bracelet</h3>
            <p>Track your rhythm and movement with our smart wearable (coming soon)</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🪙</div>
            <h3>$DANZ Token</h3>
            <p>The currency of dancers, creators, and facilitators worldwide</p>
          </div>
        </div>

        <div className="about-description">
          <p className="text-lg">
            Our first token is <strong>$DANZ</strong> – the currency of dancers, creators, and facilitators. 
            Whether you host events, dance at festivals, post dance videos, or build conscious community — 
            FlowBond helps you track your rhythm, connect with others, and earn real rewards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutFlowBond