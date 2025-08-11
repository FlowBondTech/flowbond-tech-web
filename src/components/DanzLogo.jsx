import React from 'react'

function DanzLogo({ className = "w-32 h-32" }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="danzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <filter id="danzGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Flowing figure */}
      <g filter="url(#danzGlow)">
        {/* Head */}
        <circle cx="200" cy="80" r="25" fill="url(#danzGradient)" />
        
        {/* Arms */}
        <path
          d="M160 120 Q120 80 80 60 Q70 55 75 70 Q110 90 150 130"
          stroke="url(#danzGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M240 120 Q280 80 320 60 Q330 55 325 70 Q290 90 250 130"
          stroke="url(#danzGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Body flow */}
        <path
          d="M200 105 Q195 140 200 180 Q210 220 190 260 Q200 300 210 340"
          stroke="url(#danzGradient)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Flowing ribbons */}
        <path
          d="M180 140 Q160 180 170 220 Q180 260 160 300"
          stroke="url(#danzGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M220 140 Q240 180 230 220 Q220 260 240 300"
          stroke="url(#danzGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M200 160 Q190 200 205 240 Q215 280 200 320"
          stroke="url(#danzGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      
      {/* DANZ Text */}
      <text x="200" y="380" textAnchor="middle" className="text-4xl font-bold" fill="url(#danzGradient)" filter="url(#danzGlow)">
        DANZ
      </text>
    </svg>
  )
}

export default DanzLogo