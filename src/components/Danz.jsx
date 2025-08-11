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
                  src="/lovable-uploads/5833ac74-4147-48b2-839a-e5f72beb4030.png" 
                  alt="DANZ Logo" 
                  className="relative w-48 h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.h1 
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-8 tracking-tight"
              variants={fadeInUp}
            >
              $DANZ
            </motion.h1>
            <motion.div 
              className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto mb-8"
              variants={fadeInScale}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Where movement becomes currency,<br />
                connection becomes value,<br />
                and every beat counts.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                $DANZ is the official movement token of the FlowBond ecosystem — a decentralized token that rewards dancers, movers, and flow-activators for doing what they love: showing up, moving their bodies, and generating high-vibe energy with others.
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <motion.button 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Earning $DANZ
              </motion.button>
              <motion.a 
                href="/danz/tokenomics" 
                className="bg-card/80 hover:bg-card text-card-foreground border-2 border-primary/20 hover:border-primary/40 px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tokenomics
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is $DANZ Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              What is $DANZ?
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-lg border-2 border-primary/20 rounded-3xl p-10 md:p-16 shadow-2xl"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(255, 110, 199, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed mb-6">
                $DANZ is a utility and rewards token designed to power a movement-based economy.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                It lives at the intersection of dance culture, Web3 technology, and biometric flow states. Through the FlowBond wearable and ecosystem, every dance session, group sync, and flow activation generates real, measurable value — and $DANZ is how that value is distributed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why $DANZ Section */}
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
              Why $DANZ?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
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
              Ready to start earning<br />through movement?
            </motion.h2>
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.button 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl relative overflow-hidden"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join the $DANZ Movement</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <div className="text-2xl font-bold text-muted-foreground">or</div>
              <motion.a 
                href="/danz/tokenomics" 
                className="group bg-card/80 hover:bg-card text-card-foreground border-2 border-primary/30 hover:border-primary px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore Tokenomics</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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