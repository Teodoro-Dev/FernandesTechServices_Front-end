import Navbar from './LandingPage/components/Navbar.jsx'
import Hero from './LandingPage/components/Hero.jsx'
import Services from './LandingPage/components/Services.jsx'
import Clients from './LandingPage/components/Clients.jsx'
import About from './LandingPage/components/About.jsx'
import Footer from './LandingPage/components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-[#0B0B1A] min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Clients />
        <About />
        <Footer />
      </main>
    </div>
  )
}


