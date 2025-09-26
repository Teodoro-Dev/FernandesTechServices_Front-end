import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'

const icons = {
  design: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l9 9-9 9-9-9 9-9z" />
    </svg>
  ),
  dev: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 17l-5-5 5-5M16 7l5 5-5 5" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7h18l-2 12H5L3 7z" />
      <path d="M16 11a4 4 0 11-8 0" />
    </svg>
  ),
  cms: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 18a4 4 0 110-8 5 5 0 019.5 1.5A3.5 3.5 0 1117 18H7z" />
    </svg>
  ),
  consult: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
}

const ServiceCard = ({ title, desc, icon }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition backdrop-blur-sm">
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
  </motion.div>
)

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0B1A] text-white px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto py-20 md:py-28">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold mb-8">What we do</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard title="Design & UX" icon={icons.design} desc="Distinct brand identities and human-centered interfaces." />
          <ServiceCard title="Web & Mobile" icon={icons.dev} desc="Accessible, scalable apps built with a modern stack." />
          <ServiceCard title="E‑commerce" icon={icons.shop} desc="High-performance storefronts with robust integrations." />
          <ServiceCard title="Headless CMS" icon={icons.cms} desc="Content systems that are fast and easy to manage." />
          <ServiceCard title="Cloud & DevOps" icon={icons.cloud} desc="Secure infrastructure, CI/CD and observability." />
          <ServiceCard title="Consulting" icon={icons.consult} desc="Strategy, audits and performance optimization." />
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0B1A] font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Veja os nossos serviços
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
          </Link>
          
        </motion.div>
      </div>
    </section>
  )
}


