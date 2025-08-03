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
import Auth from './components/Auth'
import Profile from './components/Profile'
import CreateEvent from './components/CreateEvent'
import NewHero from './components/NewHero'
import NewAboutFlowBond from './components/NewAboutFlowBond'
import TokenExplainer from './components/TokenExplainer'
import MatchingSubscription from './components/MatchingSubscription'
import PartnersSection from './components/PartnersSection'
import HowItWorks from './components/HowItWorks'
import { AuthProvider } from './hooks/useAuth.jsx'

function HomePage() {
  return (
    <>
      <NewHero />
      <NewAboutFlowBond />
      <EventsMarketplace />
      <TokenExplainer />
      <MatchingSubscription />
      <PartnersSection />
      <HowItWorks />
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/danz" element={<Danz />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<EventsMarketplace />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
          <Footer />
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App