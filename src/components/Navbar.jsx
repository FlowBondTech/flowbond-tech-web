import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><a href="/danz" onClick={handleTokenClick}>Token</a></li>
          <li><a href={isHomePage ? "#bracelet" : "/#bracelet"} onClick={(e) => handleNavClick(e, '#bracelet')}>Device</a></li>
          <li><a href={isHomePage ? "#faq" : "/#faq"} onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
        </ul>
        {user ? (
          <div className="flex items-center gap-3 desktop">
            <button onClick={() => navigate('/create-event')} className="btn btn-outline">Create Event</button>
            <button onClick={() => navigate('/profile')} className="btn btn-nav">Profile</button>
          </div>
        ) : (
          <button onClick={() => navigate('/auth')} className="btn btn-nav desktop">Sign In</button>
        )}
        
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
            <li><Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
            <li><a href="/danz" onClick={(e) => { handleTokenClick(e); setMobileMenuOpen(false); }}>Token</a></li>
            <li><a href={isHomePage ? "#bracelet" : "/#bracelet"} onClick={() => setMobileMenuOpen(false)}>Device</a></li>
            <li><a href={isHomePage ? "#faq" : "/#faq"} onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            {user ? (
              <>
                <li><Link to="/create-event" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline">Create Event</Link></li>
                <li><Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="btn btn-nav">Profile</Link></li>
              </>
            ) : (
              <li><Link to="/auth" onClick={() => setMobileMenuOpen(false)} className="btn btn-nav">Sign In</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar