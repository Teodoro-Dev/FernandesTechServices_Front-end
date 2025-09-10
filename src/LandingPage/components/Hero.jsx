import { motion, useScroll } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'
    return () => (html.style.scrollBehavior = '')
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 bg-gradient-to-br from-[#0B0B1A] via-[#0B0B1A] to-[#10072A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="text-center space-y-8"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-[#2A6BFF] font-medium tracking-wider uppercase"
          >
            .BY <a href="https://fernandesinnovations.com" target="_blank" rel="noopener noreferrer">FERNANDES INNOVATIONS</a>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
          >
            <span className="block text-white">We build</span>
            <span className="block bg-gradient-to-r from-[#2A6BFF] to-[#6A00FF] bg-clip-text text-transparent">
              tailored solutions for your business
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              We are a digital product studio focused on creating exceptional web experiences.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              Our team delivers high-quality services in web development, mobile apps, and digital transformation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get in touch
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              View our work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Progress */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="absolute left-0 right-0 bottom-0 h-1 origin-left bg-gradient-to-r from-transparent via-[#2A6BFF] to-transparent" 
      />

      {/* Background Elements */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-[#2A6BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-80 w-80 rounded-full bg-[#6A00FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#2A6BFF]/5 to-[#6A00FF]/5 blur-3xl" />
    </section>
  )
}


