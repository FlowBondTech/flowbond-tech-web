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

  const tokenMetrics = [
    { label: 'Total Supply', value: '1,000,000,000', unit: 'DANZ' },
    { label: 'Initial Circulating Supply', value: '100,000,000', unit: 'DANZ' },
    { label: 'Token Standard', value: 'ERC-20', unit: '' },
    { label: 'Blockchain', value: 'Ethereum', unit: '' },
    { label: 'Decimal Places', value: '18', unit: '' },
    { label: 'Vesting Period', value: '4 Years', unit: '' }
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
        <div className="relative max-w-7xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="relative w-56 h-56 object-contain drop-shadow-2xl group-hover:drop-shadow-xl transition-all duration-300"
                />
              </div>
            </motion.a>
            <motion.h1 
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-8 tracking-tight"
              variants={fadeInUp}
            >
              $DANZ Tokenomics
            </motion.h1>
            <motion.div 
              className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
              variants={fadeInScale}
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Understanding the economic model behind the movement revolution
              </p>
              <p className="text-lg text-muted-foreground">
                Transparent, community-focused tokenomics designed to reward movement and foster growth
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              variants={fadeInUp}
            >
              <motion.a 
                href="/danz" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore $DANZ
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Metrics */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Token Metrics
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-lg border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-x-auto"
              variants={fadeInScale}
              whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(255, 110, 199, 0.2)" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {tokenMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-background/50 to-background/30 rounded-2xl border border-border/30"
                    variants={fadeInScale}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-primary mb-2">{metric.value}</div>
                    <div className="text-sm font-semibold text-accent mb-1">{metric.unit}</div>
                    <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Distribution Table */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Token Distribution
            </motion.h2>
            <motion.div 
              className="bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeInScale}
              whileHover={{ boxShadow: "0 25px 50px rgba(255, 110, 199, 0.1)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-900/80 to-purple-800/80">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">% of Supply</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">Tokens</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900/50">
                    {tokenomicsData.map((item, index) => (
                      <motion.tr 
                        key={index}
                        className="border-t border-gray-800 hover:bg-gray-800/30 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ x: 4 }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-gray-200 font-medium">{item.category}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-xl font-bold text-white">{item.percentage}%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-gray-300">{item.allocation}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm text-gray-400">{item.status}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-400 text-sm leading-relaxed">{item.description}</span>
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
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Token Utility
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {utilityFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-lg border-2 border-border/30 hover:border-primary/30 rounded-2xl p-8 transition-all duration-500"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(255, 110, 199, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/90" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
              variants={fadeInUp}
            >
              Join the Movement<br />Economy
            </motion.h2>
            <motion.p 
              className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
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
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore $DANZ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <div className="text-2xl font-bold text-muted-foreground">or</div>
              <motion.button 
                className="group bg-card/80 hover:bg-card text-card-foreground border-2 border-primary/30 hover:border-primary px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Community</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tokenomics