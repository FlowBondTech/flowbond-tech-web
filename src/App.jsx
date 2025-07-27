import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// For GitHub Pages, uncomment the line below and comment the line above:
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Token from './components/Token'
import Bracelet from './components/Bracelet'
import Governance from './components/Governance'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Danz from './components/Danz'
import Tokenomics from './components/Tokenomics'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Token />
      <Bracelet />
      <Governance />
      <CTA />
      <FAQ />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/danz" element={<Danz />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App