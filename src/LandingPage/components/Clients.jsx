import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const clients = [
    { name: 'Fernandes Innovations', logo: '/FernandesS.png' },
    { name: 'ScanLedger', logo: '/scanledger-logo.png' },
  ]

  const testimonials = [
    {
      text: "Working with Fernandes Innovations transformed our business. Their AI solutions increased our efficiency by 300% and delivered results beyond our expectations.",
      author: "João Silva",
      role: "CEO, Tech Startup",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao"
    },
    {
      text: "The team's expertise in AI and machine learning helped us automate complex processes. Their professionalism and attention to detail are outstanding.",
      author: "Maria Santos",
      role: "CTO, FinTech Company",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
    },
    {
      text: "From concept to deployment, they delivered an exceptional AI-powered platform. Our customers love the new features and the ROI has been incredible.",
      author: "Pedro Costa",
      role: "Product Manager, E-commerce",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro"
    },
    {
      text: "Their AI solutions gave us a competitive edge in the market. The quality of work and speed of delivery exceeded all our expectations.",
      author: "Ana Rodrigues",
      role: "Founder, AI Startup",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana"
    },
    {
      text: "Outstanding expertise in both AI development and user experience. They turned our vision into reality with precision and creativity.",
      author: "Carlos Ferreira",
      role: "Director of Innovation, Enterprise",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#0B0B1A] text-white px-6 sm:px-10 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              innovative companies
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join the ranks of our satisfied clients who trust us to deliver cutting-edge AI solutions and exceptional digital products.
          </p>
        </motion.div>

        {/* Clients Grid - Only showing existing logos */}
        {clients.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-16"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-w-[200px]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto max-w-full object-contain brightness-90 hover:brightness-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-white/60 font-semibold">${client.name}</span>`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 md:p-12 mb-12 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[200px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-sm text-white/60">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-white/70 hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-white/70 hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/70 mb-6">
            Ready to join our success stories?
          </p>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0B1A] font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Success Stories
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


