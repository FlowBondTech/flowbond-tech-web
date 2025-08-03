import React, { useState } from 'react'
import { Coins, Activity, Camera, Users, Gift, TrendingUp } from 'lucide-react'

function TokenRewards() {
  const [activeTab, setActiveTab] = useState('earn')

  const earnMethods = [
    {
      icon: <Activity size={24} />,
      title: "Dance & Move",
      description: "Earn $DANZ for every dance session tracked with your FlowBond device",
      reward: "10-50 $DANZ",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: <Users size={24} />,
      title: "Attend Events",
      description: "Join community events and workshops to earn bonus tokens",
      reward: "25-100 $DANZ",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: <Camera size={24} />,
      title: "Share Content",
      description: "Post dance videos, memes, and performances to earn creator rewards",
      reward: "15-75 $DANZ",
      gradient: "from-neon-pink to-gold-primary"
    },
    {
      icon: <Users size={24} />,
      title: "Match & Connect",
      description: "Complete matching missions and build meaningful connections",
      reward: "20-60 $DANZ",
      gradient: "from-gold-primary to-neon-blue"
    }
  ]

  const tokenBalance = {
    total: "1,247.50",
    weeklyEarned: "156.25",
    monthlyEarned: "642.80",
    stakingRewards: "89.15"
  }

  return (
    <section id="rewards" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Rewards</span>
          <h2 className="section-title">
            Earn <span className="holographic-text">$DANZ</span> Tokens
          </h2>
          <p className="section-subtitle">
            $DANZ is the first token made to reward movement. Every dance, connection, and moment of flow has value.
          </p>
        </div>

        {/* Token Balance Pulse Animation */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary via-transparent opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Coins size={32} className="text-gold-primary animate-pulse" />
                <span className="text-3xl font-bold holographic-text">{tokenBalance.total}</span>
                <span className="text-xl text-text-secondary">$DANZ</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-neon-blue">+{tokenBalance.weeklyEarned}</div>
                  <div className="text-xs text-text-muted">This Week</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-neon-purple">+{tokenBalance.monthlyEarned}</div>
                  <div className="text-xs text-text-muted">This Month</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-neon-pink">+{tokenBalance.stakingRewards}</div>
                  <div className="text-xs text-text-muted">Staking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Earn */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 gold-text">Ways to Earn</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {earnMethods.map((method, index) => (
              <div key={index} className="card hover-glow group">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.gradient} bg-opacity-20 mb-4 group-hover:scale-110 transition-all`}>
                  {method.icon}
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">{method.title}</h4>
                <p className="text-text-secondary mb-4">{method.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold gold-text">{method.reward}</span>
                  <TrendingUp size={16} className="text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* $DANZ Utility */}
        <div className="card">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">What You Can Do With $DANZ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift size={28} className="text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Access Events</h4>
              <p className="text-text-secondary text-sm">Use $DANZ to unlock exclusive events, workshops, and retreats</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Premium Features</h4>
              <p className="text-text-secondary text-sm">Unlock advanced matching, early access, and VIP experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-gold-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Stake & Grow</h4>
              <p className="text-text-secondary text-sm">Stake your $DANZ to earn passive rewards and governance power</p>
            </div>
          </div>
        </div>

        {/* Mobile Token Dashboard */}
        <div className="block md:hidden mt-8">
          <div className="card">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold holographic-text mb-1">{tokenBalance.total} $DANZ</div>
              <div className="text-sm text-text-muted">Your Balance</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <div className="font-medium text-neon-blue">+{tokenBalance.weeklyEarned}</div>
                <div className="text-text-muted">Weekly</div>
              </div>
              <div>
                <div className="font-medium text-neon-purple">+{tokenBalance.monthlyEarned}</div>
                <div className="text-text-muted">Monthly</div>
              </div>
              <div>
                <div className="font-medium text-neon-pink">+{tokenBalance.stakingRewards}</div>
                <div className="text-text-muted">Staking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenRewards