import React, { useEffect } from 'react'

function Danz() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])
  const features = [
    {
      title: 'Move-to-Earn',
      description: 'Get rewarded for dancing, activating the floor, and participating in live or virtual dance journeys.'
    },
    {
      title: 'Access Utility',
      description: 'Use $DANZ to unlock events, retreats, exclusive workshops, and immersive wellness & movement experiences.'
    },
    {
      title: 'Social Flow Matching',
      description: 'Connect with people you vibe with — literally. FlowBond wearables detect co-regulation and reward group flow with bonus $DANZ.'
    },
    {
      title: 'Proof of Movement',
      description: 'On-chain verification that you\'re not just watching — you\'re dancing, leading, and co-creating the rhythm.'
    },
    {
      title: 'Collective Rewards',
      description: 'Teams, dance crews, and communities can pool their movement for amplified rewards.'
    },
    {
      title: 'Bridge Between Body & Blockchain',
      description: '$DANZ links the biointelligence of the body with the smart contracts of Web3, offering a new form of embodied economy.'
    }
  ]

  return (
    <div className="danz-page">
      {/* Hero Section */}
      <section className="danz-hero">
        <div className="hero-bg-gradient"></div>
        <div className="container">
          <div className="danz-hero-content animate">
            <h1 className="danz-title gradient-text">$DANZ</h1>
            <p className="danz-tagline">
              Where movement becomes currency,<br />
              connection becomes value,<br />
              and every beat counts.
            </p>
            <p className="danz-intro">
              $DANZ is the official movement token of the FlowBond ecosystem — a decentralized token that rewards dancers, movers, and flow-activators for doing what they love: showing up, moving their bodies, and generating high-vibe energy with others.
            </p>
          </div>
        </div>
      </section>

      {/* What is $DANZ Section */}
      <section className="section">
        <div className="container">
          <div className="section-content animate">
            <h2 className="section-title with-arrow">
              <span className="arrow-icon">›</span>
              What is $DANZ?
            </h2>
            <div className="content-box">
              <p>
                $DANZ is a utility and rewards token designed to power a movement-based economy. It lives at the intersection of dance culture, Web3 technology, and biometric flow states. Through the FlowBond wearable and ecosystem, every dance session, group sync, and flow activation generates real, measurable value — and $DANZ is how that value is distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why $DANZ Section */}
      <section className="section danz-features-section">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">Why $DANZ?</h2>
          </div>
          <div className="danz-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="danz-feature-card animate">
                <div className="card-glow"></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision-section">
        <div className="container">
          <div className="section-content animate">
            <h2 className="section-title with-arrow">
              <span className="arrow-icon">›</span>
              The Vision
            </h2>
            <div className="vision-box">
              <p>
                $DANZ is more than a token — it's a cultural catalyst for regenerative joy and embodied connection. As the FlowBond network grows, $DANZ will become the energetic fuel for a new kind of decentralized movement economy — one where those who move the most, feel the most, and connect the most are the ones who thrive.
              </p>
              <p className="vision-highlight">
                In a world where attention is monetized, $DANZ offers a new paradigm: <span className="gradient-text">presence as value</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="section tokenomics-section">
        <div className="container">
          <div className="section-header animate">
            <h1 className="tokenomics-title gradient-text">💃 $DANZ Tokenomics</h1>
            <p className="tokenomics-subtitle">The Token That Moves With You — Online & On the Dancefloor</p>
            <p className="tokenomics-description">
              $DANZ is the official token of the FlowBond ecosystem — a Solana-based meme coin that rewards real-world dance, 
              viral memes, and human connection. It bridges TikTok culture and crypto virality with in-person dance events, 
              conscious festivals, and underground parties.
            </p>
          </div>

          {/* Total Supply */}
          <div className="supply-section animate">
            <h2 className="section-title">🔢 Total Supply</h2>
            <div className="supply-box">
              <div className="supply-number gradient-text">1,000,000,000 $DANZ</div>
              <div className="supply-label">(1 Billion Tokens)</div>
              <p className="supply-tagline">Big enough to go viral. Finite enough to grow value.</p>
            </div>
          </div>

          {/* Allocation Breakdown */}
          <div className="allocation-section animate">
            <h2 className="section-title">📊 Allocation Breakdown</h2>
            <div className="allocation-table">
              <div className="allocation-row header">
                <div className="allocation-col">Category</div>
                <div className="allocation-col">% of Supply</div>
                <div className="allocation-col">Tokens</div>
                <div className="allocation-col">Status</div>
                <div className="allocation-col">Purpose</div>
              </div>
              {[
                { icon: '🛒', name: 'Public Market Liquidity', percent: '30%', tokens: '300,000,000', status: '✅ Unlocked at launch', purpose: 'Trade on DEX (Raydium/Jupiter)' },
                { icon: '🪂', name: 'Airdrops & Rewards', percent: '30%', tokens: '300,000,000', status: '✅ Phased unlock', purpose: 'Dance challenges, meme contests, referrals' },
                { icon: '👨‍💻', name: 'Team & Founders', percent: '10%', tokens: '100,000,000', status: '🔒 3mo cliff + 12mo vesting', purpose: 'Core contributors, builders' },
                { icon: '🎤', name: 'Creators & Ambassadors', percent: '5%', tokens: '50,000,000', status: '🔒 Vested', purpose: 'DJs, influencers, community leads' },
                { icon: '📈', name: 'Ecosystem Growth', percent: '5%', tokens: '50,000,000', status: '🔒 6mo linear vesting', purpose: 'Strategic partners, collabs' },
                { icon: '🏛️', name: 'DAO Treasury Reserve', percent: '5%', tokens: '50,000,000', status: '🔒 12mo lockup', purpose: 'Governance, staking, safety fund' },
                { icon: '💧', name: 'Future LP & CEX Listings', percent: '15%', tokens: '150,000,000', status: '🔒 Locked for 6–12mo', purpose: 'Future liquidity and listings' }
              ].map((item, index) => (
                <div key={index} className="allocation-row">
                  <div className="allocation-col category" data-label="">
                    <span className="category-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="allocation-col percent" data-label="Supply:">{item.percent}</div>
                  <div className="allocation-col tokens" data-label="Tokens:">{item.tokens}</div>
                  <div className="allocation-col status" data-label="Status:">{item.status}</div>
                  <div className="allocation-col purpose" data-label="Purpose:">{item.purpose}</div>
                </div>
              ))}
            </div>
            <div className="allocation-notes">
              <div className="note">✅ No VC allocation</div>
              <div className="note">✅ No private sales</div>
            </div>
          </div>

          {/* Vesting Schedule */}
          <div className="vesting-section animate">
            <h2 className="section-title">🔐 Vesting Schedule</h2>
            <div className="vesting-grid">
              <div className="vesting-card">
                <h3>Team & Founders</h3>
                <p>3-month cliff, then 12-month linear vesting</p>
              </div>
              <div className="vesting-card">
                <h3>Creators & Ambassadors</h3>
                <p>Same structure</p>
              </div>
              <div className="vesting-card">
                <h3>Growth Partners</h3>
                <p>6-month linear unlock</p>
              </div>
              <div className="vesting-card">
                <h3>DAO Treasury</h3>
                <p>12-month lock, DAO-controlled multisig</p>
              </div>
            </div>
          </div>

          {/* Real-World Utility */}
          <div className="utility-section animate">
            <h2 className="section-title">🎟️ Real-World Utility</h2>
            <div className="utility-grid">
              <div className="utility-card">
                <h3>Dance-to-Earn</h3>
                <p>Join in-person events and challenges</p>
              </div>
              <div className="utility-card">
                <h3>Meme-to-Earn</h3>
                <p>Submit viral content, memes, remix battles</p>
              </div>
              <div className="utility-card">
                <h3>Buy Event Tickets</h3>
                <p>Use $DANZ to access real-life dances and festivals</p>
              </div>
              <div className="utility-card">
                <h3>Exclusive Drops</h3>
                <p>NFTs, merch, and VIP passes purchasable with $DANZ</p>
              </div>
            </div>
            <div className="utility-features">
              <div className="feature-item">
                <span className="feature-icon">🗳️</span>
                <div>
                  <strong>Governance:</strong> Vote on collabs, event themes, and feature releases
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔥</span>
                <div>
                  <strong>Burn-to-Flex:</strong> Burn $DANZ for limited edition mints and elite access
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💫</span>
                <div>
                  <strong>OG Holder Perks:</strong> Stake or hold $DANZ to unlock status and rewards
                </div>
              </div>
            </div>
          </div>

          {/* Launch Plan */}
          <div className="launch-section animate">
            <h2 className="section-title">🚀 Launch Plan</h2>
            <div className="launch-steps">
              <div className="launch-step">
                <span className="step-icon">🪂</span>
                <p>Viral airdrops for dance videos, memes, and referrals</p>
              </div>
              <div className="launch-step">
                <span className="step-icon">🚀</span>
                <p>DEX launch on Solana via Raydium or Jupiter aggregator</p>
              </div>
              <div className="launch-step">
                <span className="step-icon">🌍</span>
                <p>Real-life activations in cities like Bali, NYC, Berlin, Tulum</p>
              </div>
              <div className="launch-step">
                <span className="step-icon">🔒</span>
                <p>Fully locked liquidity + transparent public vesting</p>
              </div>
              <div className="launch-step">
                <span className="step-icon">🎉</span>
                <p>Partner DJs and crews powering events around the world</p>
              </div>
            </div>
          </div>

          {/* TL;DR */}
          <div className="tldr-section animate">
            <h2 className="section-title">TL;DR</h2>
            <div className="tldr-grid">
              <div className="tldr-item">
                <span>🔗</span>
                <p>Solana-based $DANZ token with 1B supply</p>
              </div>
              <div className="tldr-item">
                <span>🛒</span>
                <p>30% tradable at launch, 30% for community rewards</p>
              </div>
              <div className="tldr-item">
                <span>🕺</span>
                <p>IRL + digital utility: events, memes, challenges, and access</p>
              </div>
              <div className="tldr-item">
                <span>🔐</span>
                <p>No VCs, no rugs — just vibes, music, and on-chain rhythm</p>
              </div>
            </div>
            <div className="tldr-quote">
              <p>"$DANZ is the tokenized frequency of joy. A meme coin with soul — rooted in real-world rhythm, community, and movement."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section danz-cta">
        <div className="container">
          <div className="cta-content animate">
            <h2>Ready to start earning through movement?</h2>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">Join the $DANZ Movement</a>
              <a href="#tokenomics" className="btn btn-ghost">Back to Top</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Danz