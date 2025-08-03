import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// For GitHub Pages, uncomment the line below and comment the line above:
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FlowBondHero from './components/FlowBondHero'
import AboutFlowBond from './components/AboutFlowBond'
import EventsMarketplace from './components/EventsMarketplace'
import WalletIntegration from './components/WalletIntegration'
import TokenRewards from './components/TokenRewards'
import MatchingCommunity from './components/MatchingCommunity'
import SubscriptionGating from './components/SubscriptionGating'
import Footer from './components/Footer'
import Danz from './components/Danz'
import Tokenomics from './components/Tokenomics'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'

function HomePage() {
  return (
    <>
      <FlowBondHero />
      <AboutFlowBond />
      <EventsMarketplace />
      <WalletIntegration />
      <TokenRewards />
      <MatchingCommunity />
      <SubscriptionGating />
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