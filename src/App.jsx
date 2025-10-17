import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './LandingPage/components/Navbar.jsx'
import Hero from './LandingPage/components/Hero.jsx'
import Services from './LandingPage/components/Services.jsx'
import About from './LandingPage/components/About.jsx'
import Clients from './LandingPage/components/Clients.jsx'
import Footer from './LandingPage/components/Footer.jsx'
import Portfolio from './LandingPage/Pages/Portfolio.jsx'
import ServicesPage from './LandingPage/Pages/Services.jsx'
import AboutPage from './LandingPage/Pages/about.jsx'
import ContactPage from './LandingPage/Pages/contact.jsx'

export default function App() {
  return (
    <Router>
      <div className="bg-[#0B0B1A] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              <Services />
              <Clients />
              <About />
              <Footer />
            </main>
          } />
          <Route path="/portfolio" element={
            <>
              <Portfolio />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <ServicesPage />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <AboutPage />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ContactPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}


