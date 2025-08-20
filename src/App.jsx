import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// Import FlowBond Professional components
import WarmNavbar from './components/WarmNavbar.jsx'
import ProfessionalHero from './components/ProfessionalHero.jsx'
import ProfessionalAbout from './components/ProfessionalAbout.jsx'
import DanzHighlightSection from './components/DanzHighlightSection.jsx'
import CosmicJoinSection from './components/CosmicJoinSection.jsx'
import WarmFooter from './components/WarmFooter.jsx'

// Import existing components for other pages
import EventsMarketplace from './components/EventsMarketplace'
import Danz from './components/Danz'
import Tokenomics from './components/Tokenomics'
import Auth from './components/Auth'
import Profile from './components/Profile'
import CreateEvent from './components/CreateEvent'
import { AuthProvider } from './hooks/useAuth.jsx'

// HomePage component that renders the professional tech-focused landing page
function HomePage() {
  return (
    <>
      <WarmNavbar />
      <ProfessionalHero />
      <ProfessionalAbout />
      <DanzHighlightSection />
      <CosmicJoinSection />
      <WarmFooter />
    </>
  )
}

// Simple layout for other pages
function SimpleLayout({ children }) {
  return (
    <div className="min-h-screen">
      <WarmNavbar />
      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <WarmFooter />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<SimpleLayout><EventsMarketplace /></SimpleLayout>} />
          <Route path="/danz" element={<SimpleLayout><Danz /></SimpleLayout>} />
          <Route path="/danz/tokenomics" element={<SimpleLayout><Tokenomics /></SimpleLayout>} />
          <Route path="/auth" element={<SimpleLayout><Auth /></SimpleLayout>} />
          <Route path="/profile" element={<SimpleLayout><Profile /></SimpleLayout>} />
          <Route path="/create-event" element={<SimpleLayout><CreateEvent /></SimpleLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App