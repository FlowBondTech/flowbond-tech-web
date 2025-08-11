import React from 'react'

function DanzHighlightSection() {
  return (
    <section className="section" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Meet DANZ</div>
          <h2 className="text-large section-title">
            <span className="gradient-text">Our First Branch</span> — First to Dance on the Flow
          </h2>
          <p className="text-body-large section-subtitle">
            DANZ is the first vibrant branch of FlowBond—where music, movement, and mindful connection shine. It exemplifies creativity, community, and shared momentum. By joining DANZ, you join the first step in a growing journey.
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="card" style={{ background: 'var(--navy-surface)', border: '1px solid var(--turquoise-bright)' }}>
              <div className="card-icon" style={{ background: 'var(--gradient-flow)', fontSize: '2rem' }}>🎵</div>
              <h3 className="card-title">Music & Movement</h3>
              <p className="card-description">
                Connect through dance, discover events, and build community around the universal language of rhythm and movement.
              </p>
            </div>
          </div>
          
          <div>
            <div className="card" style={{ background: 'var(--navy-surface)', border: '1px solid var(--turquoise-bright)' }}>
              <div className="card-icon" style={{ background: 'var(--gradient-flow)', fontSize: '2rem' }}>🌟</div>
              <h3 className="card-title">Creative Community</h3>
              <p className="card-description">
                Experience the future of community building through DANZ—creativity-first, connection-focused, and powered by shared value.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 'var(--space-3xl)' }}>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Ready to experience FlowBond through dance and music?
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-large">
              Explore DANZ
            </button>
            <button className="btn btn-secondary btn-large">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DanzHighlightSection