import React from 'react'

function Footer() {
  const footerLinks = {
    Product: ['Features', 'Tokenomics', 'Roadmap'],
    Company: ['About', 'Team', 'Careers'],
    Resources: ['Whitepaper', 'Documentation', 'Support'],
    Community: [
      { name: 'Twitter', url: 'https://x.com/flowbondap' },
      { name: 'Instagram', url: 'https://www.instagram.com/flowbondapp' },
      { name: 'TikTok', url: 'https://www.tiktok.com/@flowbondapp' }
    ]
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
                {category === 'Community' ? 
                  links.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  )) :
                  links.map((link) => (
                    <a key={link} href="#">{link}</a>
                  ))
                }
              </div>
            ))}
          </div>
          <div className="footer-contact">
            <p>Contact: <a href="mailto:info@flowbond.app">info@flowbond.app</a></p>
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