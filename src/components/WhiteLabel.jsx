import React from 'react'
import { CheckCircle, ArrowRight, Zap, Users, Globe } from 'lucide-react'

const WhiteLabel = () => {
  const examples = [
    {
      name: 'ChaTea',
      description: 'Tea Angels + Events',
      features: ['Community hosting', 'Event tokenization', 'Ceremony rewards', 'Angel network'],
      icon: '🍃'
    },
    {
      name: 'DANZ',
      description: 'Dance-to-Earn',
      features: ['Movement tracking', 'Social rewards', 'Community challenges', 'Skill verification'],
      icon: '💃'
    },
    {
      name: 'Cacao DAO',
      description: 'Land & Tokenization',
      features: ['Asset tokenization', 'Governance voting', 'Yield farming', 'Community ownership'],
      icon: '🌱'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Rapid Deployment',
      description: 'Launch your regenerative platform in weeks, not months, with pre-built infrastructure.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community-First',
      description: 'Built-in tools for community engagement, governance, and sustainable growth.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Multichain Ready',
      description: 'Deploy across multiple blockchains with seamless interoperability from day one.'
    }
  ]

  const features = [
    'Proof of Humanity verification system',
    'Custom token economics and rewards',
    'Community governance and voting',
    'Cross-chain asset management',
    'Event and ceremony tokenization',
    'Social impact measurement',
    'Regenerative incentive structures',
    'Mobile app with wearable integration'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build on FlowBond
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Communities, events, and brands can white-label FlowBond to launch their own regenerative systems powered by proof of humanity and sustainable tokenomics.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Examples Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{example.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{example.name}</h3>
                <p className="text-accent font-medium mb-6">{example.description}</p>
                <ul className="space-y-2">
                  {example.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Launch Your Own System
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the regenerative revolution. Build a platform that rewards human connection, sustainable practices, and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhiteLabel