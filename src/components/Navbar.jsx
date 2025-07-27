import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">FlowBond</span>
          <span className="logo-accent">.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#token">Token</a></li>
          <li><a href="#bracelet">Device</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#" className="btn btn-nav">Get Started</a>
      </div>
    </nav>
  )
}

export default Navbar