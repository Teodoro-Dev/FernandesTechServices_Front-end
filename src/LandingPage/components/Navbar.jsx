import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/10 bg-[#0B0B1A]/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/FernandesS.png" alt="Fernandes Tech Services" className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">Services</a>
          <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/30">
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B1A]/90">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-white/80">
            <a onClick={() => setOpen(false)} href="#services" className="hover:text-white">Services</a>
            <Link onClick={() => setOpen(false)} to="/portfolio" className="hover:text-white">Portfolio</Link>
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-white">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </div>
  )
}


