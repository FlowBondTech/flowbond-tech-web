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
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(circle at 20% 80%, hsla(330, 95%, 65%, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(300, 90%, 70%, 0.08) 0%, transparent 50%), var(--danz-black)'
    }}>
      {/* Hero Section */}
      <section className="section hero" style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px'
      }}>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.a
              href="/danz"
              className="flex justify-center mb-16 cursor-pointer group"
              variants={fadeInScale}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-40 transition-all duration-500" 
                     style={{ 
                       background: 'var(--gradient-flow)',
                       filter: 'blur(40px)',
                       transform: 'scale(1.2)'
                     }} />
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl group-hover:drop-shadow-[0_35px_35px_rgba(64,224,208,0.25)] transition-all duration-500"
                />
              </div>
            </motion.a>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero gradient-text mb-8 text-center font-black tracking-tight px-4"
              style={{ fontFamily: 'var(--font-accent)' }}
              variants={fadeInUp}
            >
              $DANZ Tokenomics
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-center mb-12 max-w-3xl mx-auto leading-relaxed px-6"
              style={{ color: 'var(--text-secondary)', textAlign: 'left' }}
              variants={fadeInUp}
            >
              Understanding the economic model behind the movement revolution. 
              Transparent, community-focused tokenomics designed to reward movement and foster sustainable growth.
            </motion.p>
            
            <motion.div 
              className="hero-actions flex justify-center px-4"
              variants={fadeInUp}
            >
              <motion.a 
                href="/danz" 
                className="btn btn-primary btn-large w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore $DANZ
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Total Supply Section */}
      <section className="section" style={{ 
        background: 'var(--navy-surface)', 
        padding: 'var(--space-3xl) 0'
      }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="section-badge"
              variants={fadeInUp}
            >
              Token Economics
            </motion.div>
            
            <motion.h2 
              className="text-large gradient-text mb-16"
              variants={fadeInUp}
            >
              Total Supply
            </motion.h2>
            
            <motion.div 
              className="card max-w-3xl mx-auto text-center"
              style={{ 
                background: 'var(--deep-navy)', 
                border: '2px solid var(--turquoise-bright)',
                padding: 'var(--space-3xl)',
                boxShadow: '0 0 60px hsla(180, 85%, 65%, 0.15)'
              }}
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 tracking-tight"
                style={{ 
                  color: 'var(--turquoise-bright)',
                  fontFamily: 'var(--font-accent)',
                  textShadow: '0 0 30px hsla(180, 85%, 65%, 0.3)'
                }}
                variants={fadeInUp}
              >
                1B
              </motion.div>
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-large gradient-text font-black"
                variants={fadeInUp}
              >
                $DANZ
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Distribution Table */}
      <section className="section" style={{ 
        background: 'var(--deep-navy)', 
        padding: 'var(--space-3xl) 0'
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="section-badge text-center"
              variants={fadeInUp}
            >
              Distribution
            </motion.div>
            
            <motion.h2 
              className="text-large gradient-text text-center mb-16"
              variants={fadeInUp}
            >
              Token Allocation
            </motion.h2>
            
            <motion.div 
              className="card overflow-hidden"
              style={{ 
                background: 'var(--navy-surface)', 
                border: '2px solid var(--turquoise-bright)',
                boxShadow: '0 0 40px hsla(180, 85%, 65%, 0.1)'
              }}
              variants={fadeInScale}
            >
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[800px]">
                  <thead style={{ 
                    background: 'var(--gradient-flow)',
                    borderBottom: '2px solid var(--turquoise-bright)'
                  }}>
                    <tr>
                      <th className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-left text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--deep-navy)' }}>Category</th>
                      <th className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--deep-navy)' }}>% of Supply</th>
                      <th className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--deep-navy)' }}>Tokens</th>
                      <th className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--deep-navy)' }}>Status</th>
                      <th className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-left text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--deep-navy)' }}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokenomicsData.map((item, index) => (
                      <motion.tr 
                        key={index}
                        className="border-t transition-all duration-300 hover:bg-opacity-10"
                        style={{ 
                          borderColor: 'var(--navy-border)',
                          backgroundColor: 'transparent'
                        }}
                        variants={fadeInUp}
                        whileHover={{ 
                          x: 6, 
                          backgroundColor: 'hsla(180, 85%, 65%, 0.05)',
                          scale: 1.01
                        }}
                      >
                        <td className="px-3 sm:px-6 md:px-8 py-4 sm:py-6">
                          <div className="flex items-center gap-2 sm:gap-4">
                            <span className="text-xl sm:text-2xl">{item.icon}</span>
                            <span className="font-semibold text-sm sm:text-base md:text-lg" style={{ color: 'var(--text-primary)' }}>
                              {item.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center">
                          <span className="text-lg sm:text-xl md:text-2xl font-black" style={{ color: 'var(--turquoise-bright)' }}>
                            {item.percentage}%
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center">
                          <span className="text-sm sm:text-base md:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                            {item.allocation}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center">
                          <span className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full" 
                                style={{ 
                                  color: 'var(--text-secondary)',
                                  background: 'var(--deep-navy)',
                                  border: '1px solid var(--navy-border)'
                                }}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 md:px-8 py-4 sm:py-6">
                          <span className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {item.description}
                          </span>
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
      <section className="section" style={{ 
        background: 'var(--navy-surface)', 
        padding: 'var(--space-3xl) 0'
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="section-badge text-center"
              variants={fadeInUp}
            >
              Utility
            </motion.div>
            
            <motion.h2 
              className="text-large gradient-text text-center mb-20"
              variants={fadeInUp}
            >
              Token Use Cases
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {utilityFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="card group transition-all duration-500"
                  style={{ 
                    background: 'var(--deep-navy)', 
                    border: '2px solid var(--turquoise-bright)',
                    padding: 'var(--space-xl)',
                    boxShadow: '0 0 20px hsla(180, 85%, 65%, 0.1)'
                  }}
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    boxShadow: '0 20px 40px hsla(180, 85%, 65%, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div className="w-16 h-1 rounded-full mb-8 group-hover:w-20 transition-all duration-300" 
                       style={{ background: 'var(--gradient-flow)' }} />
                  <h3 className="text-lg sm:text-xl font-bold mb-6 transition-colors duration-300" 
                      style={{ 
                        color: 'var(--turquoise-bright)',
                        fontFamily: 'var(--font-accent)'
                      }}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ 
        background: 'var(--gradient-flow)', 
        padding: 'var(--space-3xl) 0',
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-hero font-black mb-8 leading-tight px-4"
              style={{ 
                color: 'var(--deep-navy)',
                fontFamily: 'var(--font-accent)'
              }}
              variants={fadeInUp}
            >
              Join the Movement<br />Economy
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-body-large mb-8 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ color: 'var(--deep-navy)' }}
              variants={fadeInUp}
            >
              Be part of the first token economy that rewards authentic human connection and movement. 
              Together, we're building a future where every step counts.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-12"
              style={{ 
                background: 'rgba(15, 35, 68, 0.15)',
                border: '1px solid var(--deep-navy)'
              }}
              variants={fadeInUp}
            >
              <span className="text-2xl">🚀</span>
              <span 
                className="text-lg font-bold"
                style={{ color: 'var(--deep-navy)' }}
              >
                App Coming Soon
              </span>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center px-4"
              variants={fadeInUp}
            >
              <motion.a 
                href="/danz" 
                className="btn btn-large w-full sm:w-auto"
                style={{ 
                  background: 'var(--deep-navy)', 
                  color: 'var(--turquoise-bright)',
                  border: '2px solid var(--deep-navy)',
                  boxShadow: '0 8px 32px rgba(15, 35, 68, 0.3)'
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore $DANZ
              </motion.a>
              <div className="text-lg sm:text-xl font-bold" style={{ color: 'var(--deep-navy)' }}>or</div>
              <motion.button 
                className="btn btn-large w-full sm:w-auto"
                style={{ 
                  background: 'transparent',
                  color: 'var(--deep-navy)',
                  border: '2px solid var(--deep-navy)'
                }}
                whileHover={{ scale: 1.05, y: -3 }}
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