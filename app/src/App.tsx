import { Routes, Route } from 'react-router'
import Layout from "@/components/Layout"
import ChatWidget from "@/components/ChatWidget"
import ErrorBoundary from "@/components/ErrorBoundary"
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Academic from './pages/Academic'
import Templates from './pages/Templates'
import Membership from './pages/Membership'
import Packages from './pages/Packages'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import RevisionPolicy from './pages/RevisionPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AdminDashboard from './pages/AdminDashboard'
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/revision-policy" element={<RevisionPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ChatWidget />
      <Analytics />
    </ErrorBoundary>
  )
}
