import { motion, useAnimationFrame } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Clients() {
  const logos = [
    { src: '/Premium.png', alt: 'Premium' },
    { src: '/ScanLedger Premium.png', alt: 'ScanLedger Premium' },
    { src: 'https://dummyimage.com/160x60/ffffff/222&text=Client+1', alt: 'Client 1' },
    { src: 'https://dummyimage.com/160x60/ffffff/222&text=Client+2', alt: 'Client 2' },
    { src: 'https://dummyimage.com/160x60/ffffff/222&text=Client+3', alt: 'Client 3' },
  ]

  // Create multiple copies for seamless loop
  const row = [...logos, ...logos, ...logos]
  const containerRef = useRef(null)
  const xRef = useRef(0)
  const [speed, setSpeed] = useState(30) // px per second
  const [isHovered, setIsHovered] = useState(false)

  // Custom animation loop for perfectly seamless, controllable marquee
  useAnimationFrame((t, delta) => {
    const el = containerRef.current
    if (!el) return
    
    // Calculate the width of one complete set of logos
    const singleSetWidth = el.scrollWidth / 3
    const currentSpeed = isHovered ? speed * 0.5 : speed
    
    xRef.current -= (currentSpeed * delta) / 1000
    
    // Reset position when we've moved one complete set
    if (Math.abs(xRef.current) >= singleSetWidth) {
      xRef.current += singleSetWidth
    }
    
    el.style.transform = `translateX(${xRef.current}px)`
  })

  // Reset speed on mouse leave
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => setSpeed(30), 1000)
      return () => clearTimeout(timer)
    }
  }, [isHovered])

  return (
    <section id="clients" className="bg-[#0B0B1A] px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Trusted by</h2>
        <p className="text-white/60 mb-8">Add or replace logos any time.</p>
        <div 
          className="relative overflow-hidden" 
          onWheel={(e) => setSpeed((s) => Math.min(120, Math.max(10, s + e.deltaY * 0.05)))}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={containerRef} className="flex items-center gap-16 md:gap-20 will-change-transform">
            {row.map((logo, idx) => (
              <img 
                key={idx} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-10 sm:h-12 md:h-14 opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0" 
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0B1A] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0B1A] to-transparent" />
        </div>
      </div>
    </section>
  )
}


