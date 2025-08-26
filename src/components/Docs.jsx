import React from 'react'
import { Download, ExternalLink, FileText, Book } from 'lucide-react'

const Docs = () => {
  const documents = [
    {
      title: 'FlowBond Whitepaper',
      description: 'Comprehensive technical overview of the FlowBond protocol, architecture, and vision.',
      type: 'PDF',
      size: '2.4 MB',
      icon: <FileText className="h-8 w-8" />,
      downloadUrl: '#',
      viewUrl: '#'
    },
    {
      title: 'DANZ Tokenomics',
      description: 'Detailed breakdown of DANZ token distribution, utility, and economic model.',
      type: 'PDF',
      size: '1.8 MB',
      icon: <Book className="h-8 w-8" />,
      downloadUrl: 'https://danz.now/tokenomics',
      viewUrl: 'https://danz.now/tokenomics'
    },
    {
      title: 'Technical Architecture',
      description: 'Deep dive into FlowBond\'s multichain infrastructure and proof of humanity protocols.',
      type: 'PDF',
      size: '3.1 MB',
      icon: <FileText className="h-8 w-8" />,
      downloadUrl: '#',
      viewUrl: '#'
    },
    {
      title: 'Developer Guide',
      description: 'Complete guide for developers building on the FlowBond ecosystem.',
      type: 'Web',
      size: 'Online',
      icon: <Book className="h-8 w-8" />,
      downloadUrl: '#',
      viewUrl: '#'
    }
  ]

  const resources = [
    {
      title: 'API Documentation',
      description: 'Complete REST API reference for FlowBond services',
      url: '#'
    },
    {
      title: 'SDK Documentation',
      description: 'JavaScript and Python SDKs for easy integration',
      url: '#'
    },
    {
      title: 'Smart Contract ABI',
      description: 'Application Binary Interface for smart contract integration',
      url: '#'
    },
    {
      title: 'Wearable Device Specs',
      description: 'Technical specifications for FlowBond hardware',
      url: '#'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Documentation &
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Whitepapers
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive documentation, technical specifications, and research papers that power the FlowBond ecosystem.
          </p>
        </div>

        {/* Main Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {documents.map((doc, index) => (
            <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background">
                  {doc.icon}
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                    {doc.type}
                  </span>
                  <div className="text-sm text-muted-foreground mt-1">{doc.size}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">{doc.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{doc.description}</p>

              <div className="flex gap-3">
                <a
                  href={doc.downloadUrl}
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
                <a
                  href={doc.viewUrl}
                  className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Online
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Resources */}
        <div className="bg-secondary/5 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Developer Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <div className="flex items-center text-primary font-medium">
                  <span>Learn More</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Need Help Getting Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/white-label"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Build on FlowBond
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
            >
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs