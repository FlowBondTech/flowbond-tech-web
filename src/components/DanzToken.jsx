import React from 'react'

function DanzToken({ className = "w-48 h-48" }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tokenBackground" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="30%" stopColor="#3b82f6" />
          <stop offset="60%" stopColor="#06b6d4" />
          <stop offset="80%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </radialGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <filter id="tokenGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer ring */}
      <circle cx="200" cy="200" r="180" fill="url(#goldGradient)" filter="url(#tokenGlow)" />
      <circle cx="200" cy="200" r="160" fill="url(#tokenBackground)" />
      
      {/* Inner decorative ring */}
      <circle cx="200" cy="200" r="150" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.6" />
      
      {/* Flowing patterns */}
      <g opacity="0.8">
        <path
          d="M80 200 Q120 160 160 180 Q200 200 240 180 Q280 160 320 200"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M80 220 Q120 180 160 200 Q200 220 240 200 Q280 180 320 220"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M80 180 Q120 140 160 160 Q200 180 240 160 Q280 140 320 180"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      
      {/* Central flowing figure */}
      <g transform="translate(200, 120)">
        <circle cx="0" cy="0" r="15" fill="url(#goldGradient)" />
        <path
          d="M-20 20 Q-30 0 -40 -10 Q-45 -15 -40 -5 Q-25 10 -15 25"
          stroke="url(#goldGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 20 Q30 0 40 -10 Q45 -15 40 -5 Q25 10 15 25"
          stroke="url(#goldGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 15 Q-5 35 0 55 Q5 75 -5 95"
          stroke="url(#goldGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-15 30 Q-25 50 -15 70 Q-5 90 -15 110"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M15 30 Q25 50 15 70 Q5 90 15 110"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
      
      {/* $DANZ Text */}
      <text x="200" y="320" textAnchor="middle" className="text-5xl font-bold" fill="url(#goldGradient)" filter="url(#tokenGlow)">
        $DANZ
      </text>
    </svg>
  )
}

export default DanzToken