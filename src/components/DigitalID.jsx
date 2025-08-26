import React from 'react'
import { Shield, Smartphone, Users, Globe, CheckCircle } from 'lucide-react'

const DigitalID = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Private',
      description: 'Your identity data remains under your control with zero-knowledge proof systems.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Portable Identity',
      description: 'Use your verified identity across all FlowBond ecosystem platforms and beyond.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Connection Verified',
      description: 'Prove real human interactions and community bonds through movement and presence.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Chain-Agnostic',
      description: 'Works seamlessly across Polkadot, Ethereum, Solana, Bitcoin, and other networks.'
    }
  ]

  const benefits = [
    'Eliminate fake accounts and bot interactions',
    'Prove physical presence and authentic movement',
    'Build trust in digital communities',
    'Reward genuine human participation',
    'Create sybil-resistant governance systems',
    'Enable fair distribution of resources',
    'Foster real-world connections',
    'Support regenerative behaviors'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Decentralized
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Proof of Humanity
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FlowBond's wearable device and app ecosystem verifies movement, bonds, and connections to create a secure, portable, chain-agnostic digital identity.
          </p>
        </div>

        {/* Device and App Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The FlowBond Wearable
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our innovative wearable device continuously tracks movement patterns, proximity to other users, and authentic human behaviors to build an unforge able proof of humanity profile.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Advanced biometric sensors for movement verification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Proximity detection for social bonding proof</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Secure element for cryptographic operations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Long-lasting battery with wireless charging</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            {/* Device Mockup */}
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-48 h-48 bg-background rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                  <div className="text-lg font-semibold text-foreground">FlowBond</div>
                  <div className="text-sm text-muted-foreground">Wearable</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-accent" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Proof of Humanity Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Interface Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="w-64 h-96 mx-auto bg-card border-8 border-border rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-b from-primary/20 to-accent/20 h-full p-6 flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-xl font-bold text-foreground">FlowBond ID</div>
                  <div className="text-sm text-muted-foreground">Verified Human</div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground">Identity Score</div>
                    <div className="text-2xl font-bold text-primary">98.5%</div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground">Connections</div>
                    <div className="text-2xl font-bold text-accent">247</div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground">Movement Points</div>
                    <div className="text-2xl font-bold text-primary">1,435</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Seamless App Integration
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The FlowBond app provides a beautiful interface to manage your digital identity, track your proof of humanity score, and connect with verified communities across the ecosystem.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Real-time identity verification status</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Community connection tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Cross-platform identity portability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">Privacy-preserving data management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join the Future of Identity
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to experience decentralized proof of humanity. Pre-order your FlowBond wearable today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Pre-order Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default DigitalID