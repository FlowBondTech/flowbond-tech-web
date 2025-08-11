import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

function Tokenomics() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const tokenomicsData = [
    { category: 'Community Rewards', percentage: 40, allocation: '400M', description: 'Movement incentives, event participation, and community building', color: 'from-primary to-primary/80' },
    { category: 'Ecosystem Development', percentage: 25, allocation: '250M', description: 'Platform development, partnerships, and technical infrastructure', color: 'from-accent to-accent/80' },
    { category: 'Team & Advisors', percentage: 15, allocation: '150M', description: 'Core team allocation with vesting schedule', color: 'from-blue-500 to-blue-400' },
    { category: 'Marketing & Growth', percentage: 10, allocation: '100M', description: 'Community building, partnerships, and ecosystem expansion', color: 'from-purple-500 to-purple-400' },
    { category: 'Reserve Fund', percentage: 10, allocation: '100M', description: 'Emergency fund and future opportunities', color: 'from-green-500 to-green-400' }
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
            <motion.div 
              className="flex justify-center mb-12"
              variants={fadeInScale}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="relative w-56 h-56 object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
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
              className="bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-lg border-2 border-primary/20 rounded-3xl overflow-hidden shadow-2xl"
              variants={fadeInScale}
              whileHover={{ boxShadow: "0 25px 50px rgba(255, 110, 199, 0.2)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary/20 to-accent/20">
                    <tr>
                      <th className="px-8 py-6 text-left text-lg font-black text-foreground">Category</th>
                      <th className="px-8 py-6 text-center text-lg font-black text-foreground">Percentage</th>
                      <th className="px-8 py-6 text-center text-lg font-black text-foreground">Allocation</th>
                      <th className="px-8 py-6 text-left text-lg font-black text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokenomicsData.map((item, index) => (
                      <motion.tr 
                        key={index}
                        className="border-t border-border/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.01 }}
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                            <span className="text-lg font-bold text-foreground">{item.category}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="text-2xl font-black text-primary">{item.percentage}%</span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="text-xl font-bold text-accent">{item.allocation}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-muted-foreground leading-relaxed">{item.description}</span>
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