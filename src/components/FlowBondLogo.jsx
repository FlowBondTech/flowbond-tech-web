import React from 'react'

function FlowBondLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(330, 90%, 70%)" />
          <stop offset="50%" stopColor="hsl(280, 85%, 75%)" />
          <stop offset="100%" stopColor="hsl(25, 95%, 65%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Infinity symbol - flowing connection */}
      <path
        d="M20 50C20 35 30 25 45 25C60 25 70 35 70 50C70 65 80 75 95 75C110 75 120 65 120 50C120 35 110 25 95 25C80 25 70 35 70 50C70 65 60 75 45 75C30 75 20 65 20 50Z"
        stroke="url(#flowGradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
        transform="scale(0.6) translate(15, 15)"
      />
      
      {/* Connection dots */}
      <circle cx="25" cy="25" r="3" fill="url(#flowGradient)" filter="url(#glow)" />
      <circle cx="75" cy="75" r="3" fill="url(#flowGradient)" filter="url(#glow)" />
    </svg>
  )
}

export default FlowBondLogo