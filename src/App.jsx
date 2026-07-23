import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NmsPage from './pages/NmsPage'
import ManagedPage from './pages/ManagedPage'
import SecureWanPage from './pages/SecureWanPage'
import SatellitePage from './pages/SatellitePage'
import ItmsPage from './pages/ItmsPage'
import HelpdeskPage from './pages/HelpdeskPage'
import CareersPage from './pages/CareersPage'
import JobDetailPage from './pages/JobDetailPage'
import Asb21Page from './pages/Asb21Page'
import Asb50Page from './pages/Asb50Page'
import Asb90Page from './pages/Asb90Page'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

// Placeholder page for inner routes
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-heading gradient-text mb-4">{title}</h1>
        <p className="text-gray-400 text-lg">This page is coming soon.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/services/network-management" element={<NmsPage />} />
        <Route path="/services/managed-services" element={<ManagedPage />} />
        <Route path="/services/secure-wan" element={<SecureWanPage />} />
        <Route path="/services/satellite-communication" element={<SatellitePage />} />
        <Route path="/services/it-managed-services" element={<ItmsPage />} />
        <Route path="/services/helpdesk-support" element={<HelpdeskPage />} />
        <Route path="/services/*" element={<PlaceholderPage title="Services" />} />
        
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/asb21" element={<Asb21Page />} />
        <Route path="/products/asb50" element={<Asb50Page />} />
        <Route path="/products/asb90" element={<Asb90Page />} />
        
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:jobId" element={<JobDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

