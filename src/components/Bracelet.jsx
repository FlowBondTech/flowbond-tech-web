import React from 'react'

function Bracelet() {
  const deviceFeatures = [
    {
      number: '01',
      title: 'Advanced Sensors',
      description: 'Heart rate, motion, and temperature tracking with medical-grade accuracy'
    },
    {
      number: '02',
      title: 'All-Day Battery',
      description: '7+ days of continuous tracking on a single charge'
    },
    {
      number: '03',
      title: 'Water Resistant',
      description: 'IP67 rated for worry-free dancing in any condition'
    },
    {
      number: '04',
      title: 'Smart Connectivity',
      description: 'Seamless sync with iOS and Android devices via Bluetooth 5.0'
    }
  ]

  return (
    <section id="bracelet" className="section bracelet-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">Technology</span>
          <h2 className="section-title">The FlowBond Device</h2>
          <p className="section-subtitle">Advanced biometric tracking meets elegant design</p>
        </div>
        
        <div className="device-showcase">
          <div className="device-visual animate">
            <div className="device-frame">
              <div className="device-screen">
                <div className="screen-content">
                  <div className="metric">
                    <span className="metric-value">128</span>
                    <span className="metric-label">BPM</span>
                  </div>
                  <div className="heart-wave">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,20 L20,20 L25,10 L30,30 L35,15 L40,25 L45,20 L100,20" 
                            stroke="currentColor" 
                            fill="none" 
                            strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="device-band device-band-left"></div>
              <div className="device-band device-band-right"></div>
            </div>
          </div>
          
          <div className="device-features">
            {deviceFeatures.map((feature, index) => (
              <div key={index} className="feature-item animate">
                <div className="feature-number">{feature.number}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cta-section animate">
          <a href="#" className="btn btn-primary btn-large">
            Reserve Your Device
            <span className="btn-badge">$99</span>
          </a>
          <p className="cta-note">Limited early bird pricing • Ships Q2 2024</p>
        </div>
      </div>
    </section>
  )
}

export default Bracelet