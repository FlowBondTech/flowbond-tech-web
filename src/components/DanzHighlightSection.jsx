import React from 'react'

function DanzHighlightSection() {
  return (
    <section className="section" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ 
            background: 'var(--gradient-danz)', 
            color: 'var(--danz-black)',
            fontSize: '1.1rem',
            fontWeight: '700',
            padding: 'var(--space-sm) var(--space-lg)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            🎵 Meet $DANZ Token
          </div>
          <h2 className="text-large section-title">
            <span style={{ 
              background: 'var(--gradient-danz)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '900'
            }}>Earn While You Dance</span> — Movement Becomes Currency
          </h2>
          <p className="text-body-large section-subtitle">
            $DANZ is the world's first movement-to-earn token. Every dance session, every beat, every moment of flow is rewarded. 
            Join thousands earning tokens through authentic human connection and movement.
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
            Start earning $DANZ tokens today — app launching soon!
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" 
                 style={{ background: 'var(--gradient-danz)', color: 'var(--danz-black)' }}>
              <span className="text-xl">🚀</span>
              <span className="font-bold">$DANZ Token</span>
            </div>
            <div className="text-2xl font-black" style={{ color: 'var(--danz-pink)' }}>
              1B Supply
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/danz" className="btn btn-large" 
               style={{ 
                 background: 'var(--gradient-danz)', 
                 color: 'var(--danz-black)',
                 textDecoration: 'none',
                 fontWeight: '700',
                 padding: '1rem 2rem',
                 fontSize: '1.1rem'
               }}>
              🎵 Explore $DANZ
            </a>
            <a href="/danz/tokenomics" className="btn btn-secondary btn-large" 
               style={{ 
                 border: '2px solid var(--danz-pink)',
                 color: 'var(--danz-pink)'
               }}>
              View Tokenomics
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DanzHighlightSection