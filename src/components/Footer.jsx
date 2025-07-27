import React from 'react'

function Footer() {
  const footerLinks = {
    Product: ['Features', 'Tokenomics', 'Roadmap'],
    Company: ['About', 'Team', 'Careers'],
    Resources: ['Whitepaper', 'Documentation', 'Support'],
    Community: ['Twitter', 'Discord', 'Telegram']
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text">FlowBond<span className="logo-accent">.</span></span>
            <p>Dance. Connect. Earn.</p>
          </div>
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4>{category}</h4>
                {links.map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FlowBond. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <span>•</span>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer