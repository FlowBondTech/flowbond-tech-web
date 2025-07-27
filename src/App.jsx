import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Token from './components/Token'
import Bracelet from './components/Bracelet'
import Governance from './components/Governance'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
// import Test from './Test'
import { useParticles, useScrollIndicator, useMagneticButtons, useGlowEffects, useRevealAnimations } from './hooks/useNeonEffects'

function App() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Effects will be initialized after DOM is ready
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useParticles()
  useScrollIndicator()
  useMagneticButtons()
  useGlowEffects()
  useRevealAnimations()

  useEffect(() => {
    // Add loading complete effect
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.5s ease'
    
    setTimeout(() => {
      document.body.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <>
      <div className="particles"></div>
      <Navbar />
      <Hero />
      <About />
      <Token />
      <Bracelet />
      <Governance />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

export default App