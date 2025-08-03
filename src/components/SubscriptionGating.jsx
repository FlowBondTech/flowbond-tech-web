import React, { useState } from 'react'
import { Crown, Zap, Users, Star, Calendar, Heart, Gift, Sparkles } from 'lucide-react'

function SubscriptionGating() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const freeFeatures = [
    "Basic event browsing",
    "Limited matches per day (3)",
    "Basic $DANZ earning",
    "Community chat access"
  ]

  const premiumFeatures = [
    "Unlimited matching & connections",
    "Double $DANZ rewards on all activities",
    "Early access to exclusive events",
    "Priority event booking",
    "Advanced flow analytics",
    "Custom movement challenges",
    "Premium community spaces",
    "Direct messaging with matches",
    "Special connection features",
    "Monthly premium-only events"
  ]

  const pricing = {
    monthly: { price: "9.90", period: "month", total: "9.90" },
    yearly: { price: "6.42", period: "month", total: "77.00", savings: "35%" }
  }

  return (
    <section id="subscription" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Premium</span>
          <h2 className="section-title">
            Want More <span className="gold-text">Flow</span>?
          </h2>
          <p className="section-subtitle">
            Unlock the full FlowBond experience with premium features designed for serious movers and connectors.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-charcoal-medium rounded-full p-1 flex">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-gold-gradient text-charcoal-deep' 
                    : 'text-text-secondary'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                  billingCycle === 'yearly' 
                    ? 'bg-gold-gradient text-charcoal-deep' 
                    : 'text-text-secondary'
                }`}
              >
                Yearly
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
                  Save {pricing.yearly.savings}
                </span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="card relative">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-charcoal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-2">Free Flow</h3>
                <div className="text-3xl font-bold text-text-primary mb-1">$0</div>
                <div className="text-text-muted">Forever</div>
              </div>

              <div className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-charcoal-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-text-secondary rounded-full"></div>
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-secondary w-full">
                <Users size={18} />
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="card relative border-2 border-gold-primary">
              {/* Premium Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gold-gradient px-4 py-1 rounded-full text-charcoal-deep font-semibold text-sm flex items-center gap-1">
                  <Crown size={16} />
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-6 pt-4">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown size={28} className="text-charcoal-deep" />
                </div>
                <h3 className="text-2xl font-semibold gold-text mb-2">Premium Flow</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold gold-text">
                    ${pricing[billingCycle].price}
                  </span>
                  <span className="text-text-muted">/{pricing[billingCycle].period}</span>
                </div>
                {billingCycle === 'yearly' && (
                  <div className="text-sm text-green-400 mt-1">
                    Billed ${pricing.yearly.total}/year
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={12} className="text-charcoal-deep" />
                    </div>
                    <span className="text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary w-full">
                <Sparkles size={18} />
                Upgrade to Premium
              </button>
            </div>
          </div>

          {/* Premium Benefits Showcase */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold gold-text mb-8">Premium Member Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">2x $DANZ Rewards</h4>
                <p className="text-text-secondary text-sm">
                  Double your earnings on every activity. More flow, more rewards.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Exclusive Events</h4>
                <p className="text-text-secondary text-sm">
                  Access premium-only workshops, retreats, and special experiences.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-gold-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Priority Matching</h4>
                <p className="text-text-secondary text-sm">
                  Get priority in matching queue and unlimited daily connections.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Subscription Cards */}
          <div className="block md:hidden mt-8 space-y-4">
            <div className="card text-center">
              <h4 className="font-semibold text-text-primary mb-2">Free Plan</h4>
              <div className="text-xl font-bold text-text-primary mb-4">$0/month</div>
              <p className="text-text-secondary text-sm mb-4">Perfect for getting started</p>
              <button className="btn btn-secondary w-full">Choose Free</button>
            </div>
            <div className="card text-center border border-gold-primary">
              <div className="inline-flex items-center gap-1 bg-gold-gradient px-2 py-1 rounded-full text-xs font-semibold text-charcoal-deep mb-2">
                <Crown size={12} />
                Premium
              </div>
              <h4 className="font-semibold gold-text mb-2">Premium Plan</h4>
              <div className="text-xl font-bold gold-text mb-4">
                ${pricing[billingCycle].price}/{pricing[billingCycle].period}
              </div>
              <p className="text-text-secondary text-sm mb-4">Unlock full potential</p>
              <button className="btn btn-primary w-full">Upgrade Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionGating