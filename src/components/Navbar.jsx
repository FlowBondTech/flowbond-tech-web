import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

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

  const handleNavClick = (e, hash) => {
    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      e.preventDefault()
      window.location.href = `/${hash}`
    }
  }
  
  const handleTokenClick = (e) => {
    e.preventDefault()
    navigate('/danz')
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">FB</span>
            </div>
            <span className="logo-text">FlowBond</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          <li><a href={isHomePage ? "#home" : "/"}>Home</a></li>
          <li><a href={isHomePage ? "#about" : "/#about"} onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="/danz" onClick={handleTokenClick}>Token</a></li>
          <li><a href={isHomePage ? "#bracelet" : "/#bracelet"} onClick={(e) => handleNavClick(e, '#bracelet')}>Device</a></li>
          <li><a href={isHomePage ? "#faq" : "/#faq"} onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
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
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><a href={isHomePage ? "#about" : "/#about"} onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="/danz" onClick={(e) => { handleTokenClick(e); setMobileMenuOpen(false); }}>Token</a></li>
            <li><a href={isHomePage ? "#bracelet" : "/#bracelet"} onClick={() => setMobileMenuOpen(false)}>Device</a></li>
            <li><a href={isHomePage ? "#faq" : "/#faq"} onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            <li><a href="#" className="btn btn-nav" onClick={() => setMobileMenuOpen(false)}>Get Started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar