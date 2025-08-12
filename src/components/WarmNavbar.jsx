import React, { useState, useEffect } from 'react'
import FlowBondLogo from './FlowBondLogo.jsx'

function WarmNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <FlowBondLogo className="w-8 h-8" />
            <div className="logo-text">FlowBond</div>
          </a>
          
          <ul className="nav-links">
            <li>
              <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision') }}>
                Vision
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works') }}>
                How It Works
              </a>
            </li>
            <li>
              <button className="btn btn-primary btn-small">
                Join the Flow
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#vision" onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('vision'); 
                setMobileMenuOpen(false);
              }}>
                Vision
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('how-it-works'); 
                setMobileMenuOpen(false);
              }}>
                How It Works
              </a>
            </li>
            <li>
              <button className="btn btn-primary btn-small" style={{ width: '100%' }}>
                Join the Flow
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default WarmNavbar