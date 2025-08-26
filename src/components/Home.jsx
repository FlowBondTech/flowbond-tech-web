import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Globe, Network } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FlowBond:
            </span>
            <br />
            Tech for Human Connection & Regeneration
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build the blockchain-powered devices, apps, and systems that connect movement, identity, and value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors group"
            >
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="flowing-element-1"></div>
          <div className="flowing-element-2"></div>
          <div className="flowing-element-3"></div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Cpu className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Proof of Humanity Device</h3>
              <p className="text-muted-foreground">
                Wearable that tracks movement and bonds, creating verifiable proof of human connection and presence.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Chain-Agnostic Blockchain</h3>
              <p className="text-muted-foreground">
                Works seamlessly across Polkadot, Solana, Ethereum, Bitcoin, and other major blockchain networks.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Network className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Ecosystem Integration</h3>
              <p className="text-muted-foreground">
                Powers DANZ, ChaTea, Cacao DAO, BTCminer, TulumCoin, PetGas, and Peace Portals in one unified ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Be part of the regenerative future.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Flow with us.
            </span>
          </h2>
          
          <Link
            to="/community"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors group"
          >
            Join the Flow
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home