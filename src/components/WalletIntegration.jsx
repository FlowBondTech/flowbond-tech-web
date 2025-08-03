import React, { useState } from 'react'
import { Wallet, Shield, Zap, Eye, EyeOff, Copy, ExternalLink } from 'lucide-react'

function WalletIntegration() {
  const [showBalance, setShowBalance] = useState(true)
  const [walletConnected, setWalletConnected] = useState(false)

  const walletStats = {
    danzBalance: "1,247.50",
    usdValue: "312.18",
    totalEarned: "2,890.00",
    stakingRewards: "156.25"
  }

  const recentTransactions = [
    { type: "earned", amount: "+45", event: "Ecstatic Dance Brooklyn", time: "2 hours ago" },
    { type: "earned", amount: "+30", event: "5Rhythms Practice", time: "1 day ago" },
    { type: "spent", amount: "-25", event: "Premium Subscription", time: "3 days ago" },
    { type: "staked", amount: "+12.5", event: "Staking Rewards", time: "1 week ago" }
  ]

  return (
    <section id="wallet" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Wallet</span>
          <h2 className="section-title">
            Your <span className="gold-text">$DANZ</span> Wallet
          </h2>
          <p className="section-subtitle">
            You don't need to know crypto — we create your wallet with just your email. You're in full control.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Wallet Dashboard */}
          <div className="card mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                  <Wallet size={24} className="text-charcoal-deep" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">FlowBond Wallet</h3>
                  <p className="text-text-muted text-sm">Powered by Solana</p>
                </div>
              </div>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="p-2 hover:bg-gold-primary hover:bg-opacity-10 rounded-full transition-all"
              >
                {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Balance Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold gold-text mb-1">
                  {showBalance ? walletStats.danzBalance : "****"}
                </div>
                <div className="text-sm text-text-muted">$DANZ Balance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary mb-1">
                  ${showBalance ? walletStats.usdValue : "****"}
                </div>
                <div className="text-sm text-text-muted">USD Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">
                  {showBalance ? walletStats.totalEarned : "****"}
                </div>
                <div className="text-sm text-text-muted">Total Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue mb-1">
                  +{showBalance ? walletStats.stakingRewards : "****"}
                </div>
                <div className="text-sm text-text-muted">Staking Rewards</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">
                <Zap size={18} />
                Earn More
              </button>
              <button className="btn btn-secondary">
                <Shield size={18} />
                Stake $DANZ
              </button>
              <button className="btn btn-secondary">
                <Copy size={18} />
                Copy Address
              </button>
              <button className="btn btn-secondary">
                <ExternalLink size={18} />
                View on Explorer
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <div className="card">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h4>
              <div className="space-y-3">
                {recentTransactions.map((tx, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-charcoal-light rounded-lg">
                    <div>
                      <div className="font-medium text-text-primary">{tx.event}</div>
                      <div className="text-sm text-text-muted">{tx.time}</div>
                    </div>
                    <div className={`font-semibold ${
                      tx.type === 'earned' || tx.type === 'staked' ? 'text-green-400' : 'text-orange-400'
                    }`}>
                      {tx.amount} $DANZ
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Features */}
            <div className="card">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Wallet Features</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="text-gold-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text-primary">Bank-Grade Security</div>
                    <div className="text-sm text-text-muted">Your keys, your crypto. We never store your private keys.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-neon-blue mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text-primary">Instant Transactions</div>
                    <div className="text-sm text-text-muted">Lightning-fast transfers powered by Solana blockchain.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet className="text-neon-purple mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text-primary">Easy Onboarding</div>
                    <div className="text-sm text-text-muted">Create your wallet with just an email. No crypto knowledge needed.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Wallet Dashboard */}
          <div className="block md:hidden mt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <div className="text-xl font-bold gold-text mb-1">{walletStats.danzBalance}</div>
                <div className="text-xs text-text-muted">$DANZ</div>
              </div>
              <div className="card text-center">
                <div className="text-xl font-bold text-text-primary mb-1">${walletStats.usdValue}</div>
                <div className="text-xs text-text-muted">USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletIntegration