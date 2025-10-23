import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building,
  MessageSquare,
  Instagram,
  Github,
  CheckCircle,
  Sparkles
} from 'lucide-react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    // FormSubmit will handle the submission
    // Show success message after form is sent
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0B0B1A] text-white pt-20 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-white/70 mb-6">We'll get back to you within 24 hours.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0B1A] text-white pt-20 pb-16">
      <div className="px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/80 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Build Together
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Let's discuss your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a 
                href="mailto:ai@fernandesinnovations.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ai@fernandesinnovations.com
              </a>
              <p className="text-white/60 text-sm mt-2">24h response time</p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-purple-400">From the World</p>
              <p className="text-white/60 text-sm mt-2">Building globally</p>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-emerald-400">Mon-Fri 9am-6pm</p>
              <p className="text-white/60 text-sm mt-2">CET Timezone</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form 
                action="https://formsubmit.co/ai@fernandesinnovations.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form - Fernandes Innovations AI Agency" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Building className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    '<24h Response',
                    'Expert Team',
                    'Proven Results',
                    'Ongoing Support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/fernandesai_/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/Teodoro-Dev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}