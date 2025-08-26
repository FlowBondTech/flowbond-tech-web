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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-charcoal-deep/95 backdrop-blur-md border-b border-gold-primary/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-flow flex items-center justify-center shadow-glow group-hover:shadow-glow-intense transition-all duration-300">
              <span className="text-charcoal-deep font-bold text-sm">FB</span>
            </div>
            <span className="font-serif text-xl font-bold text-text-primary group-hover:text-gold-primary transition-colors">
              FlowBond
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link 
                to="/" 
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium"
              >
                Events
              </Link>
              <a 
                href="/danz" 
                onClick={handleTokenClick}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium"
              >
                Token
              </a>
              <a 
                href={isHomePage ? "#partners" : "/#partners"} 
                onClick={(e) => handleNavClick(e, '#partners')}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium"
              >
                Partners
              </a>
            </nav>
            
            {user ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate('/create-event')} 
                  className="px-4 py-2 border border-gold-primary/30 text-gold-primary hover:bg-gold-primary hover:text-charcoal-deep transition-all duration-300 rounded-lg font-medium"
                >
                  Create Event
                </button>
                <button 
                  onClick={() => navigate('/profile')} 
                  className="px-4 py-2 bg-gradient-flow text-charcoal-deep hover:shadow-glow transition-all duration-300 rounded-lg font-medium"
                >
                  Profile
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/auth')} 
                className="px-4 py-2 bg-gradient-flow text-charcoal-deep hover:shadow-glow transition-all duration-300 rounded-lg font-medium"
              >
                Sign In
              </button>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-charcoal-deep/95 backdrop-blur-md border-b border-gold-primary/10 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link 
                to="/events" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium py-2"
              >
                Events
              </Link>
              <a 
                href="/danz" 
                onClick={(e) => { handleTokenClick(e); setMobileMenuOpen(false); }}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium py-2"
              >
                Token
              </a>
              <a 
                href={isHomePage ? "#partners" : "/#partners"} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-gold-primary transition-colors font-medium py-2"
              >
                Partners
              </a>
              
              {user ? (
                <div className="flex flex-col gap-3 pt-4 border-t border-gold-primary/20">
                  <button 
                    onClick={() => { navigate('/create-event'); setMobileMenuOpen(false); }} 
                    className="px-4 py-2 border border-gold-primary/30 text-gold-primary hover:bg-gold-primary hover:text-charcoal-deep transition-all duration-300 rounded-lg font-medium text-center"
                  >
                    Create Event
                  </button>
                  <button 
                    onClick={() => { navigate('/profile'); setMobileMenuOpen(false); }} 
                    className="px-4 py-2 bg-gradient-flow text-charcoal-deep rounded-lg font-medium text-center"
                  >
                    Profile
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gold-primary/20">
                  <button 
                    onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }} 
                    className="w-full px-4 py-2 bg-gradient-flow text-charcoal-deep rounded-lg font-medium text-center"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar