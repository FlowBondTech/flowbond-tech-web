import React from 'react'
import { Link, Network, Shield, Zap, Globe } from 'lucide-react'

const Multichain = () => {
  const chains = [
    {
      name: 'Polkadot',
      description: 'Primary layer 1 blockchain for FlowBond core operations',
      color: 'from-pink-500 to-purple-500',
      features: ['Cross-chain interoperability', 'Shared security', 'Governance integration']
    },
    {
      name: 'Solana',
      description: 'High-speed transactions for real-time movement verification',
      color: 'from-purple-500 to-blue-500',
      features: ['Ultra-fast confirmations', 'Low transaction costs', 'Real-time data streaming']
    },
    {
      name: 'Ethereum',
      description: 'Smart contracts and DeFi ecosystem integration',
      color: 'from-blue-500 to-indigo-500',
      features: ['Mature DeFi ecosystem', 'NFT support', 'Wide adoption']
    },
    {
      name: 'Bitcoin',
      description: 'Store of value and final settlement layer',
      color: 'from-orange-500 to-yellow-500',
      features: ['Ultimate security', 'Store of value', 'Final settlement']
    },
    {
      name: 'ICP',
      description: 'Decentralized cloud infrastructure and hosting',
      color: 'from-teal-500 to-green-500',
      features: ['Web3 hosting', 'Infinite scalability', 'Direct user interaction']
    }
  ]

  const benefits = [
    {
      icon: <Network className="h-8 w-8" />,
      title: 'True Interoperability',
      description: 'Seamlessly move assets and identity across any blockchain network without friction.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enhanced Security',
      description: 'Leverage the combined security of multiple blockchain networks for maximum protection.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Optimized Performance',
      description: 'Use the best chain for each specific use case - speed, cost, or functionality.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Universal Access',
      description: 'Reach users wherever they are in the multi-chain ecosystem without barriers.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Truly
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Chain-Agnostic
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FlowBond operates seamlessly across Polkadot, Solana, Ethereum, Bitcoin, ICP, and beyond. 
            Our technology emphasizes interoperability, security, and scalability across the entire blockchain ecosystem.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Chain Visualization */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Supported Blockchain Networks
          </h2>
          
          {/* Central Hub */}
          <div className="relative flex items-center justify-center mb-16">
            <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl z-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-background mb-2">FlowBond</div>
                <div className="text-sm text-background/80">Universal Protocol</div>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {chains.map((_, index) => {
                const angle = (index * 360) / chains.length
                const radius = 200
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                
                return (
                  <div
                    key={index}
                    className="absolute w-0.5 h-32 bg-gradient-to-t from-primary/30 to-transparent origin-bottom"
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Chain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {chains.map((chain, index) => (
              <div
                key={chain.name}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${chain.color} rounded-2xl flex items-center justify-center`}>
                  <Link className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{chain.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{chain.description}</p>
                
                <ul className="space-y-2">
                  {chain.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Technical Architecture
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Network className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cross-Chain Bridge</h3>
              <p className="text-muted-foreground">
                Secure asset and data transfer between different blockchain networks using advanced bridge protocols.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Unified Security</h3>
              <p className="text-muted-foreground">
                Leverage the combined security models of multiple chains while maintaining a single identity layer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Smart Routing</h3>
              <p className="text-muted-foreground">
                Automatically route transactions to the optimal blockchain based on speed, cost, and functionality requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Build Without Boundaries
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience true blockchain interoperability. Build applications that work across every major network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Technical Documentation
            </a>
            <a
              href="/white-label"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
            >
              Start Building
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Multichain