import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: 'What is DANZ NOW?',
      answer: 'DANZ NOW is a revolutionary platform that combines wearable technology with blockchain to reward users for physical movement and dance. Powered by FlowBond technology.'
    },
    {
      question: 'How do I earn $DANZ?',
      answer: 'Simply wear the FlowBond wearable while dancing or moving. The device tracks your activity and automatically converts it to $DANZ tokens.'
    },
    {
      question: 'Is it available worldwide?',
      answer: 'Yes! DANZ NOW is a global platform. You can dance and earn anywhere in the world with an internet connection.'
    },
    {
      question: 'When does it launch?',
      answer: 'We\'re launching in Q1 2024. Join our waitlist to get early access and exclusive launch bonuses.'
    }
  ]

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header animate">
          <span className="section-tag">Support</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card animate">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ