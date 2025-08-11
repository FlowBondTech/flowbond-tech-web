import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// Import new warm components
import WarmNavbar from './components/WarmNavbar.jsx'
import WarmHero from './components/WarmHero.jsx'
import VisionSection from './components/VisionSection.jsx'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import WhyItMattersSection from './components/WhyItMattersSection.jsx'
import StatsSection from './components/StatsSection.jsx'
import WarmFooter from './components/WarmFooter.jsx'

// Import existing components for other pages
import EventsMarketplace from './components/EventsMarketplace'
import Danz from './components/Danz'
import Auth from './components/Auth'
import Profile from './components/Profile'
import CreateEvent from './components/CreateEvent'
import { AuthProvider } from './hooks/useAuth.jsx'

// HomePage component that renders the new warm, people-first landing page
function HomePage() {
  return (
    <>
      <WarmNavbar />
      <WarmHero />
      <VisionSection />
      <HowItWorksSection />
      <WhyItMattersSection />
      <StatsSection />
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
          <Route path="/auth" element={<SimpleLayout><Auth /></SimpleLayout>} />
          <Route path="/profile" element={<SimpleLayout><Profile /></SimpleLayout>} />
          <Route path="/create-event" element={<SimpleLayout><CreateEvent /></SimpleLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App