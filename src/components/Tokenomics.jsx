import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

function Tokenomics() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const tokenomicsData = [
    { category: 'Public Market Liquidity', percentage: 30, allocation: '300,000,000', description: 'Trade on DEX (Raydium/Jupiter)', status: '✅ Unlocked at launch', icon: '🛒' },
    { category: 'Airdrops & Rewards', percentage: 30, allocation: '300,000,000', description: 'Dance challenges, meme contests, referrals', status: '✅ Phased unlock', icon: '🪂' },
    { category: 'Team & Founders', percentage: 10, allocation: '100,000,000', description: 'Core contributors, builders', status: '🔒 3mo cliff + 12mo vesting', icon: '👨‍💻' },
    { category: 'Creators & Ambassadors', percentage: 5, allocation: '50,000,000', description: 'DJs, influencers, community leads', status: '🔒 Vested', icon: '🎤' },
    { category: 'Ecosystem Growth', percentage: 5, allocation: '50,000,000', description: 'Strategic partners, collabs', status: '🔒 6mo linear vesting', icon: '📈' },
    { category: 'DAO Treasury Reserve', percentage: 5, allocation: '50,000,000', description: 'Governance, staking, safety fund', status: '🔒 12mo lockup', icon: '🏛️' },
    { category: 'Future LP & CEX Listings', percentage: 15, allocation: '150,000,000', description: 'Future liquidity and listings', status: '🔒 Locked for 6–12mo', icon: '💧' }
  ]

  const utilityFeatures = [
    { title: 'Event Access', description: 'Use $DANZ to unlock exclusive workshops, retreats, and dance experiences', icon: '🎟️' },
    { title: 'Movement Rewards', description: 'Earn tokens through verified dance sessions and flow activations', icon: '💃' },
    { title: 'Community Governance', description: 'Vote on ecosystem decisions and future developments', icon: '🗳️' },
    { title: 'Staking Benefits', description: 'Stake tokens for enhanced rewards and exclusive perks', icon: '🔒' },
    { title: 'Social Flow Bonuses', description: 'Receive bonus rewards for synchronized group activities', icon: '🤝' },
    { title: 'Marketplace Access', description: 'Trade, buy, and sell within the FlowBond ecosystem', icon: '🛒' }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Hero Section */}
      <section className="section hero-section" style={{ 
        background: 'var(--navy-deep)', 
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)'
      }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.a
              href="/danz"
              className="flex justify-center mb-12 cursor-pointer group"
              variants={fadeInScale}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl animate-pulse group-hover:blur-2xl transition-all duration-300" 
                     style={{ background: 'var(--gradient-flow)' }} />
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="relative w-56 h-56 object-contain drop-shadow-2xl group-hover:drop-shadow-xl transition-all duration-300"
                />
              </div>
            </motion.a>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              $DANZ Tokenomics
            </motion.h1>
            
            <motion.div 
              className="card max-w-5xl mx-auto mb-12"
              style={{ 
                background: 'var(--navy-surface)', 
                border: '1px solid var(--turquoise-bright)',
                padding: 'var(--space-3xl)'
              }}
              variants={fadeInScale}
            >
              <p className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Understanding the economic model behind the movement revolution
              </p>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Transparent, community-focused tokenomics designed to reward movement and foster growth
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <motion.a 
                href="/danz" 
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore $DANZ
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Total Supply Section */}
      <section className="section" style={{ background: 'var(--gradient-subtle)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-16"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              Total Supply
            </motion.h2>
            <motion.div 
              className="card max-w-2xl mx-auto text-center"
              style={{ 
                background: 'var(--navy-surface)', 
                border: '1px solid var(--turquoise-bright)',
                padding: 'var(--space-3xl)'
              }}
              variants={fadeInScale}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl md:text-8xl font-black mb-4" style={{ color: 'var(--turquoise-bright)' }}>
                1,000,000,000
              </div>
              <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                $DANZ
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Distribution Table */}
      <section className="section" style={{ background: 'var(--navy-deep)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-16"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              Token Distribution
            </motion.h2>
            <motion.div 
              className="card overflow-hidden"
              style={{ 
                background: 'var(--navy-surface)', 
                border: '1px solid var(--turquoise-bright)'
              }}
              variants={fadeInScale}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead style={{ background: 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 100%)' }}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Category</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>% of Supply</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Tokens</th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Status</th>
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokenomicsData.map((item, index) => (
                      <motion.tr 
                        key={index}
                        className="border-t transition-all duration-300"
                        style={{ borderColor: 'var(--border-color)' }}
                        variants={fadeInUp}
                        whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.category}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.percentage}%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>{item.allocation}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.status}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Utility & Features */}
      <section className="section" style={{ background: 'var(--gradient-subtle)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-20"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              Token Utility
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {utilityFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="card group transition-all duration-500"
                  style={{ 
                    background: 'var(--navy-surface)', 
                    border: '1px solid var(--turquoise-bright)',
                    padding: 'var(--space-xl)'
                  }}
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <div className="w-12 h-1 rounded-full mb-6 group-hover:w-16 transition-all duration-300" 
                       style={{ background: 'var(--gradient-flow)' }} />
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-turquoise-bright transition-colors duration-300" 
                      style={{ color: 'var(--turquoise-bright)' }}>{feature.title}</h3>
                  <p className="leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ 
        background: 'var(--gradient-flow)', 
        padding: 'var(--space-4xl) 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-12 leading-tight"
              style={{ color: 'var(--navy-deep)' }}
              variants={fadeInUp}
            >
              Join the Movement<br />Economy
            </motion.h2>
            <motion.p 
              className="text-2xl mb-12 leading-relaxed max-w-4xl mx-auto"
              style={{ color: 'var(--navy-deep)' }}
              variants={fadeInUp}
            >
              Be part of the first token economy that rewards authentic human connection and movement.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.a 
                href="/danz" 
                className="btn btn-secondary btn-large group relative overflow-hidden"
                style={{ 
                  background: 'var(--navy-deep)', 
                  color: 'var(--turquoise-bright)',
                  border: '2px solid var(--navy-deep)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore $DANZ</span>
              </motion.a>
              <div className="text-2xl font-bold" style={{ color: 'var(--navy-deep)' }}>or</div>
              <motion.button 
                className="btn btn-outline btn-large"
                style={{ 
                  background: 'transparent',
                  color: 'var(--navy-deep)',
                  border: '2px solid var(--navy-deep)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tokenomics