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
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex justify-center mb-8"
              variants={fadeInScale}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <img 
                src="/lovable-uploads/5833ac74-4147-48b2-839a-e5f72beb4030.png" 
                alt="DANZ Logo" 
                className="w-40 h-40 object-contain"
              />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              $DANZ
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Where movement becomes currency,<br />
              connection becomes value,<br />
              and every beat counts.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              $DANZ is the official movement token of the FlowBond ecosystem — a decentralized token that rewards dancers, movers, and flow-activators for doing what they love: showing up, moving their bodies, and generating high-vibe energy with others.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is $DANZ Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              What is $DANZ?
            </motion.h2>
            <motion.div 
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                $DANZ is a utility and rewards token designed to power a movement-based economy. It lives at the intersection of dance culture, Web3 technology, and biometric flow states. Through the FlowBond wearable and ecosystem, every dance session, group sync, and flow activation generates real, measurable value — and $DANZ is how that value is distributed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why $DANZ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Why $DANZ?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  variants={fadeInScale}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 110, 199, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              The Vision
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-card/80 to-accent/5 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/16dd3b9c-4e7f-4219-93a8-ed789d9d32f4.png" 
                  alt="DANZ Token" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                $DANZ is more than a token — it's a cultural catalyst for regenerative joy and embodied connection. As the FlowBond network grows, $DANZ will become the energetic fuel for a new kind of decentralized movement economy — one where those who move the most, feel the most, and connect the most are the ones who thrive.
              </p>
              <p className="text-xl md:text-2xl font-semibold">
                In a world where attention is monetized, $DANZ offers a new paradigm: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">presence as value</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Ready to start earning through movement?
            </motion.h2>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the $DANZ Movement
              </motion.button>
              <motion.a 
                href="/danz/tokenomics" 
                className="bg-card hover:bg-card/80 text-card-foreground border border-border px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tokenomics
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