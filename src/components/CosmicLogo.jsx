import React, { useEffect, useRef } from 'react'

function CosmicLogo({ className = "w-32 h-32" }) {
  const logoRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    // Create floating particles around the logo
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'cosmic-particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 3}s`
      return particle
    }

    // Add particles
    for (let i = 0; i < 12; i++) {
      logo.appendChild(createParticle())
    }

    return () => {
      const particles = logo.querySelectorAll('.cosmic-particle')
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <div className={`cosmic-logo-container ${className}`} ref={logoRef}>
      <svg className="cosmic-logo-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280, 100%, 80%)">
              <animate attributeName="stop-color" 
                values="hsl(280, 100%, 80%);hsl(320, 100%, 75%);hsl(260, 100%, 85%);hsl(280, 100%, 80%)" 
                dur="4s" 
                repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="hsl(320, 100%, 75%)">
              <animate attributeName="stop-color" 
                values="hsl(320, 100%, 75%);hsl(260, 100%, 85%);hsl(300, 100%, 80%);hsl(320, 100%, 75%)" 
                dur="4s" 
                repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="hsl(260, 100%, 85%)">
              <animate attributeName="stop-color" 
                values="hsl(260, 100%, 85%);hsl(280, 100%, 80%);hsl(320, 100%, 75%);hsl(260, 100%, 85%)" 
                dur="4s" 
                repeatCount="indefinite"/>
            </stop>
          </linearGradient>
          
          <filter id="cosmicGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="pulse">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Central Flow Symbol */}
        <circle cx="100" cy="100" r="15" fill="url(#cosmicGradient)" filter="url(#cosmicGlow)">
          <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
        </circle>
        
        {/* Orbiting Connection Nodes */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="8s"
            repeatCount="indefinite"/>
          
          <circle cx="60" cy="100" r="4" fill="url(#cosmicGradient)" filter="url(#pulse)"/>
          <circle cx="140" cy="100" r="4" fill="url(#cosmicGradient)" filter="url(#pulse)"/>
          <circle cx="100" cy="60" r="4" fill="url(#cosmicGradient)" filter="url(#pulse)"/>
          <circle cx="100" cy="140" r="4" fill="url(#cosmicGradient)" filter="url(#pulse)"/>
        </g>
        
        {/* Dynamic Connection Lines */}
        <g opacity="0.6">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="-360 100 100"
            dur="12s"
            repeatCount="indefinite"/>
          
          <path d="M 70 70 Q 100 85 130 70" stroke="url(#cosmicGradient)" strokeWidth="2" fill="none">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M 70 130 Q 100 115 130 130" stroke="url(#cosmicGradient)" strokeWidth="2" fill="none">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M 70 100 Q 85 70 70 70" stroke="url(#cosmicGradient)" strokeWidth="2" fill="none">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M 130 100 Q 115 130 130 130" stroke="url(#cosmicGradient)" strokeWidth="2" fill="none">
            <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite"/>
          </path>
        </g>
        
        {/* Outer Resonance Ring */}
        <circle cx="100" cy="100" r="80" stroke="url(#cosmicGradient)" strokeWidth="1" fill="none" opacity="0.3">
          <animate attributeName="r" values="80;85;80" dur="6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  )
}

export default CosmicLogo