import React from 'react'

function WhyFlowBondSection() {
  return (
    <section id="why-flowbond" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Why FlowBond Exists</div>
          <h2 className="text-large section-title">
            Because <span className="gradient-text">Connection Should Be Simple</span>
          </h2>
          <p className="text-body-large section-subtitle">
            Today's systems are fragmented, confusing, and often driven by large platforms. FlowBond flips that—making every step toward joining, sharing, and growing effortless for people everywhere.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3 className="card-title">Global by Design</h3>
            <p className="card-description">
              No matter where you are in the world, FlowBond speaks your language and honors your community's unique values while connecting you to the global flow.
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">🤝</div>
            <h3 className="card-title">People-First Platform</h3>
            <p className="card-description">
              Built for humans, not algorithms. Every feature is designed to make real connections easier, not to extract data or attention.
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">No Barriers</h3>
            <p className="card-description">
              Whether you're crypto-native or have never heard of blockchain, FlowBond welcomes you with open arms and simple tools.
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">💫</div>
            <h3 className="card-title">Shared Power</h3>
            <p className="card-description">
              Instead of platforms extracting value, FlowBond redistributes it. When communities grow, everyone benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyFlowBondSection