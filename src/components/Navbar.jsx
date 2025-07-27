import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">FlowBond</span>
          <span className="logo-accent">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#token">Token</a></li>
          <li><a href="#bracelet">Device</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#" className="btn btn-nav desktop">Get Started</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#token" onClick={() => setMobileMenuOpen(false)}>Token</a></li>
            <li><a href="#bracelet" onClick={() => setMobileMenuOpen(false)}>Device</a></li>
            <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            <li><a href="#" className="btn btn-nav" onClick={() => setMobileMenuOpen(false)}>Get Started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar