import React from 'react'

function Manifesto() {
  const sections = [
    {
      title: "Our Vision",
      content: [
        "FlowBond exists to prove that movement is life, connection is value, and humanity itself is the ultimate network.",
        "We are building not just another app, token, or device—we are creating a living blockchain of human experience.",
        "Our mission is to weave together technology, embodiment, and community so that every dance, touch, and act of presence becomes a force for regeneration."
      ]
    },
    {
      title: "The Core Idea", 
      content: [
        "At the center of FlowBond is a device—a wearable that tracks movement, connection, and shared energy.",
        "• This device is the key to Proof of Humanity.",
        "• It validates that behind every action on-chain, there is a real human heartbeat, movement, and presence.",
        "• It becomes the bridge between body and blockchain.",
        "FlowBond is not limited to dance. While Danz is our first and primary activation, the system expands to tea, cacao, rituals, education, healing, and beyond."
      ]
    },
    {
      title: "FlowBond Tech",
      content: [
        "FlowBond will operate as its own blockchain (Layer 1, Polkadot-based), with multichain interconnection as a core principle.",
        "• Our Blockchain: An L1 designed for embodiment, streaming data, and digital identity.",
        "• Our Device: Hardware that creates proof of humanity and triggers tokenized rewards.",
        "• Our Ecosystem: Danz → Tea → Cacao → infinite expansions, all interconnected.",
        "• Our Tokenization: Tokens emitted through verified actions, powered by the FlowBond blockchain.",
        "• Our IDs: Digital identities that are lived, danced, and bonded—not just signed and stored."
      ]
    },
    {
      title: "Why This Matters",
      content: [
        "The internet has become disembodied.",
        "Web3 often replicates the same extractive patterns of Web2.",
        "FlowBond changes this by:",
        "• Anchoring real human proof on-chain.",
        "• Creating a regenerative system where actions of joy, love, and presence have value.",
        "• Offering a universal identity layer rooted in movement and connection, usable across countless systems."
      ]
    },
    {
      title: "Immediate Focus",
      content: [
        "We are committed to building the foundation with clarity, precision, and momentum.",
        "• Device → Define exact process, cost, and timeline.",
        "• App → Develop the first version, integrating device data with token emission and streaming.",
        "• Blockchain → Launch FlowBond L1 on Polkadot, with bridges to Ethereum, Solana, and beyond.",
        "• Integration → Connect digital IDs, streaming, and multichain token distribution.",
        "• First Use Case → Danz: the dance-to-earn, connect-to-earn ecosystem."
      ]
    },
    {
      title: "The Future",
      content: [
        "FlowBond is not a project. It is a movement protocol.",
        "It is the foundation for a new economy of presence, where proof of humanity is not bureaucratic but embodied.",
        "From dance floors to tea ceremonies, from cacao rituals to digital streaming, every context where humans gather, bond, and create energy can be powered by FlowBond.",
        "This is regeneration in motion.",
        "This is the blockchain of life itself."
      ]
    }
  ]

  return (
    <div className="manifesto-page">
      {/* Hero Section */}
      <section className="manifesto-hero">
        <div className="container">
          <div className="manifesto-hero-content">
            <div className="cosmic-orb"></div>
            <h1 className="manifesto-title">
              🌐 FlowBond <span className="gradient-text">Manifesto</span>
            </h1>
            <p className="manifesto-subtitle">
              The blueprint for a new economy of presence
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="manifesto-content">
        <div className="container">
          {sections.map((section, index) => (
            <div key={index} className="manifesto-section">
              <div className="section-number">{index + 1}.</div>
              <div className="section-content">
                <h2 className="section-title">{section.title}</h2>
                <div className="section-text">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className={paragraph.startsWith('•') ? 'bullet-point' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action */}
          <div className="manifesto-cta">
            <div className="cta-content">
              <h2 className="cta-title">🔥 FlowBond: Move. Connect. Prove Humanity.</h2>
              <p className="cta-subtitle">Join the movement protocol that bridges body and blockchain</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Join the Movement</button>
                <button className="btn btn-secondary">Read Whitepaper</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manifesto