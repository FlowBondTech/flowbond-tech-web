import React, { useState } from 'react'
import { MessageCircle, Twitter, Send, Mail, Users, Zap } from 'lucide-react'

const Community = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    setSubscribed(true)
    setEmail('')
  }

  const communityChannels = [
    {
      name: 'Telegram',
      description: 'Join our main community chat for real-time discussions and updates',
      icon: <Send className="h-8 w-8" />,
      link: '#',
      members: '2.3K',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Twitter/X',
      description: 'Follow us for the latest news, announcements, and ecosystem updates',
      icon: <Twitter className="h-8 w-8" />,
      link: '#',
      members: '5.1K',
      color: 'from-sky-500 to-blue-500'
    },
    {
      name: 'Discord',
      description: 'Connect with developers, creators, and community members',
      icon: <MessageCircle className="h-8 w-8" />,
      link: '#',
      members: '1.8K',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Members',
      value: '9.2K+',
      description: 'Active members across all platforms'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Projects Building',
      value: '47',
      description: 'Projects actively building on FlowBond'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Monthly Discussions',
      value: '1.3K+',
      description: 'Active conversations and proposals'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Join the
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Flow
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with a global community of builders, creators, and regenerative technology enthusiasts 
            shaping the future of human connection and blockchain innovation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.title}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Community Channels */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Connect With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {channel.name}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                    {channel.members}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {channel.description}
                </p>
                
                <div className="mt-6 flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                  <span>Join Community</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <Mail className="h-8 w-8 text-background" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest updates on FlowBond development, ecosystem announcements, 
              and exclusive insights delivered to your inbox.
            </p>
            
            {subscribed ? (
              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  🎉 Thanks for subscribing! You'll receive updates soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Events and Meetups */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Community Events
          </h2>
          
          <div className="bg-secondary/5 rounded-2xl p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Monthly Community Calls
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our monthly community calls to hear directly from the FlowBond team, 
                learn about new developments, and connect with fellow community members.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Join Next Call
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                >
                  View Past Recordings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community