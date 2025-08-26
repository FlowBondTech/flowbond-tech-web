import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import Layout from './components/Layout'
import Home from './components/Home'
import Manifesto from './components/Manifesto'
import Ecosystem from './components/Ecosystem'
import WhiteLabel from './components/WhiteLabel'
import DigitalID from './components/DigitalID'
import Multichain from './components/Multichain'
import Tokenomics from './components/Tokenomics'
import Docs from './components/Docs'
import Community from './components/Community'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/white-label" element={<WhiteLabel />} />
            <Route path="/digital-id" element={<DigitalID />} />
            <Route path="/multichain" element={<Multichain />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App