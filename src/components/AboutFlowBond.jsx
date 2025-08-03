import React from 'react'
import { Smartphone, Mail, Calendar, TrendingUp } from 'lucide-react'

function AboutFlowBond() {
  const steps = [
    {
      icon: <Smartphone size={32} />,
      title: "Sign Up",
      description: "with email or wallet"
    },
    {
      icon: <Calendar size={32} />,
      title: "Join Events or Match",
      description: "browse what's near or who's vibing"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Earn $DANZ",
      description: "just by dancing, showing up, and sharing"
    },
    {
      icon: <Mail size={32} />,
      title: "Grow Your Flow",
      description: "use your tokens, connect with others, or stake for more"
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title">
            Who We <span className="gold-text">Are</span>
          </h2>
          <p className="section-subtitle">
            FlowBond is a movement company that connects people through dance, events, and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-text-secondary mb-6">
                We create tools that empower artists, facilitators, and communities through a matching and rewards app, 
                a wearable bracelet to track your flow, and digital tokens that give value to every step you take.
              </p>
              <p className="text-lg text-text-secondary">
                Our first token is called <span className="gold-text font-semibold">$DANZ</span> — a way to earn for dancing, 
                hosting events, creating content, or showing up in your flow.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.cloneElement(step.icon, { className: "text-charcoal-deep" })}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{step.title}</h4>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl italic text-text-secondary mb-6">
              "Every time someone moves, the world gets richer."
            </p>
            <p className="text-text-secondary">
              In a world where attention is monetized, $DANZ offers a new paradigm: <span className="gradient-text font-semibold">presence as value</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFlowBond