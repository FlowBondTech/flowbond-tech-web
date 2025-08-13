import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SubscriptionModal from './SubscriptionModal'

function Danz() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])
  
  const features = [
    {
      title: 'Move-to-Earn',
      description: 'Get rewarded for dancing, activating the floor, and participating in live or virtual dance journeys.',
      icon: '💃'
    },
    {
      title: 'Access Utility',
      description: 'Use $DANZ to unlock events, retreats, exclusive workshops, and immersive wellness & movement experiences.',
      icon: '🎟️'
    },
    {
      title: 'Social Flow Matching',
      description: 'Connect with people you vibe with — literally. FlowBond wearables detect co-regulation and reward group flow with bonus $DANZ.',
      icon: '🤝'
    },
    {
      title: 'Proof of Movement',
      description: 'On-chain verification that you\'re not just watching — you\'re dancing, leading, and co-creating the rhythm.',
      icon: '⛓️'
    },
    {
      title: 'Collective Rewards',
      description: 'Teams, dance crews, and communities can pool their movement for amplified rewards.',
      icon: '👥'
    },
    {
      title: 'Bridge Between Body & Blockchain',
      description: '$DANZ links the biointelligence of the body with the smart contracts of Web3, offering a new form of embodied economy.',
      icon: '🌉'
    }
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
              href="/danz/tokenomics"
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
                  src="/lovable-uploads/5833ac74-4147-48b2-839a-e5f72beb4030.png" 
                  alt="DANZ Logo" 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl group-hover:drop-shadow-[0_35px_35px_rgba(64,224,208,0.25)] transition-all duration-500"
                />
              </div>
            </motion.a>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-hero gradient-text mb-8 text-center font-black tracking-tight"
              style={{ fontFamily: 'var(--font-accent)' }}
              variants={fadeInUp}
            >
              $DANZ
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-center mb-4 max-w-4xl mx-auto leading-relaxed font-semibold px-6"
              style={{ 
                background: 'var(--gradient-danz)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent'
              }}
              variants={fadeInUp}
            >
              Where movement becomes currency, connection becomes value, and every beat counts.
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-center mb-12 max-w-3xl mx-auto leading-relaxed px-6"
              style={{ color: 'var(--text-secondary)', textAlign: 'left' }}
              variants={fadeInUp}
            >
              $DANZ is the official movement token of the FlowBond ecosystem — a decentralized token that rewards dancers, 
              movers, and flow-activators for doing what they love: showing up, moving their bodies, and generating high-vibe energy with others.
            </motion.p>
            
            <motion.div 
              className="hero-actions flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              variants={fadeInUp}
            >
              <motion.button 
                className="btn btn-primary btn-large w-full sm:w-auto"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Earning $DANZ
              </motion.button>
              <motion.a 
                href="/danz/tokenomics" 
                className="btn btn-secondary btn-large w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tokenomics
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is $DANZ Section */}
      <section className="section" style={{ background: 'var(--gradient-danz-subtle)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-12 px-4"
              style={{ background: 'var(--gradient-danz)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              What is $DANZ?
            </motion.h2>
            <motion.div 
              className="card max-w-5xl mx-auto"
              style={{ 
                background: 'var(--danz-surface)', 
                border: '2px solid var(--danz-pink)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-lg)'
              }}
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-danz)' }} />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 px-4 text-left" style={{ color: 'var(--text-primary)' }}>
                $DANZ is a utility and rewards token designed to power a movement-based economy.
              </p>
              <p className="text-sm sm:text-base md:text-lg px-4 text-left leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                It lives at the intersection of dance culture, Web3 technology, and biometric flow states. Through the FlowBond wearable and ecosystem, every dance session, group sync, and flow activation generates real, measurable value — and $DANZ is how that value is distributed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Stats Section */}
      <section className="section" style={{ background: 'var(--danz-surface)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >            
            <motion.div 
              className="card max-w-4xl mx-auto"
              style={{ 
                background: 'var(--danz-dark)', 
                border: '2px solid var(--danz-pink)',
                padding: 'var(--space-3xl)',
                borderRadius: 'var(--radius-lg)'
              }}
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--text-secondary)' }}
                variants={fadeInUp}
              >
                Total Supply
              </motion.h3>
              
              <motion.div 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  background: 'var(--gradient-danz)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                variants={fadeInUp}
              >
                1B
              </motion.div>
              
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--danz-pink)'
                }}
                variants={fadeInUp}
              >
                $DANZ
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why $DANZ Section */}
      <section className="section" style={{ background: 'var(--gradient-subtle)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-20 px-4"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              Why $DANZ?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {features.map((feature, index) => (
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 group-hover:text-turquoise-bright transition-colors duration-300" 
                      style={{ color: 'var(--turquoise-bright)' }}>{feature.title}</h3>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section" style={{ background: 'var(--navy-deep)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-12"
              style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              variants={fadeInUp}
            >
              The Vision
            </motion.h2>
            <motion.div 
              className="card max-w-5xl mx-auto"
              style={{ 
                background: 'var(--navy-surface)', 
                border: '1px solid var(--turquoise-bright)',
                padding: 'var(--space-3xl)'
              }}
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-4" style={{ color: 'var(--text-secondary)' }}>
                $DANZ is more than a token — it's a cultural catalyst for regenerative joy and embodied connection. As the FlowBond network grows, $DANZ will become the energetic fuel for a new kind of decentralized movement economy — one where those who move the most, feel the most, and connect the most are the ones who thrive.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4" style={{ color: 'var(--text-primary)' }}>
                In a world where attention is monetized, $DANZ offers a new paradigm: <span style={{ background: 'var(--gradient-flow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>presence as value</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to start earning<br />through movement?
            </motion.h2>
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
              <motion.button 
                className="btn btn-large w-full sm:w-auto"
                style={{ 
                  background: 'var(--deep-navy)', 
                  color: 'var(--turquoise-bright)',
                  border: '2px solid var(--deep-navy)',
                  boxShadow: '0 8px 32px rgba(15, 35, 68, 0.3)'
                }}
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the $DANZ Movement
              </motion.button>
              <div className="text-lg sm:text-xl font-bold" style={{ color: 'var(--deep-navy)' }}>or</div>
              <motion.a 
                href="/danz/tokenomics" 
                className="btn btn-large w-full sm:w-auto"
                style={{ 
                  background: 'transparent',
                  color: 'var(--deep-navy)',
                  border: '2px solid var(--deep-navy)'
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Tokenomics
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Danz