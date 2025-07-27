import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Token from './components/Token'
import Bracelet from './components/Bracelet'
import Governance from './components/Governance'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Danz from './components/Danz'
import ScrollToTop from './components/ScrollToTop'
// import Test from './Test'
import { useParticles, useScrollIndicator, useMagneticButtons, useGlowEffects, useRevealAnimations } from './hooks/useNeonEffects'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Token />
      <Bracelet />
      <Governance />
      <CTA />
      <FAQ />
    </>
  )
}

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
    <Router>
      <ScrollToTop />
      <div className="particles"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/danz" element={<Danz />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App