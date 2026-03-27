import React from 'react'

function WarmFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FlowBond</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              One backbone. Infinite communities. Building the infrastructure for a more connected, equitable world.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <a href="https://www.instagram.com/flowbondapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://x.com/flowbondap" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
            <a href="https://www.tiktok.com/@flowbondapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
            <a href="#" aria-label="Discord">Discord</a>
          </div>
          
          <div className="footer-section">
            <h3>Learn</h3>
            <a href="#">How It Works</a>
            <a href="#">Vision</a>
            <a href="#">Impact</a>
            <a href="#">Whitepaper</a>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <a href="mailto:info@flowbond.app">info@flowbond.app</a>
            <a href="#">Community Guidelines</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FlowBond. Building the backbone for infinite communities.</p>
        </div>
      </div>
    </footer>
  )
}

export default WarmFooter