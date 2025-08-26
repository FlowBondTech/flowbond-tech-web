import React from 'react'
import { ExternalLink } from 'lucide-react'

const Ecosystem = () => {
  const projects = [
    {
      name: 'DANZ',
      description: 'Dance-to-earn platform that rewards movement and connection through verified physical activity.',
      color: 'from-purple-500 to-pink-500',
      link: '#'
    },
    {
      name: 'ChaTea',
      description: 'Tea Angels community platform for ceremony hosting and mindful connection experiences.',
      color: 'from-green-500 to-emerald-500',
      link: '#'
    },
    {
      name: 'Cacao DAO',
      description: 'Decentralized land and cacao tokenization for regenerative agriculture and community ownership.',
      color: 'from-amber-600 to-orange-600',
      link: '#'
    },
    {
      name: 'BTCminer',
      description: 'Sustainable Bitcoin mining operations powered by renewable energy and community participation.',
      color: 'from-orange-500 to-red-500',
      link: '#'
    },
    {
      name: 'TulumCoin',
      description: 'Local currency system for Tulum region supporting sustainable tourism and local economy.',
      color: 'from-cyan-500 to-blue-500',
      link: '#'
    },
    {
      name: 'PetGas',
      description: 'Community-driven gas station network with tokenized rewards for sustainable transportation.',
      color: 'from-indigo-500 to-purple-500',
      link: '#'
    },
    {
      name: 'Peace Portals',
      description: 'Global meditation and peace-building network connecting conscious communities worldwide.',
      color: 'from-blue-500 to-indigo-500',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Ecosystem &
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Interconnection
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One core, many expressions — FlowBond powers a regenerative ecosystem of interconnected platforms and communities.
          </p>
        </div>

        {/* Central Hub Visualization */}
        <div className="relative mb-20">
          <div className="flex items-center justify-center">
            {/* Central FlowBond Hub */}
            <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-background mb-2">FlowBond</div>
                <div className="text-sm text-background/80">Core Protocol</div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((_, index) => {
                const angle = (index * 360) / projects.length
                const radius = 300
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                
                return (
                  <div
                    key={index}
                    className="absolute w-0.5 h-24 bg-gradient-to-t from-primary/50 to-transparent origin-bottom"
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">
                  {project.name.charAt(0)}
                </span>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Learn More Link */}
              <a
                href={project.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to join the ecosystem?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Build your own regenerative platform with FlowBond's infrastructure.
          </p>
          <a
            href="/white-label"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Explore White Label Solutions
          </a>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem