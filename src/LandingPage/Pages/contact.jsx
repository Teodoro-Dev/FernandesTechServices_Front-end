import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  User,
  Building,
  Sparkles,
  CheckCircle,
  Linkedin,
  Instagram,
  Facebook,
  Github
} from 'lucide-react'

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 150 - 75],
            y: [0, Math.random() * 150 - 75],
            rotate: [0, 360],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40" />
        </motion.div>
      ))}
    </div>
  )
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ai@fernandesinnovations.com",
    description: "24h response time",
    color: "from-blue-500 to-cyan-500",
    action: "mailto:ai@fernandesinnovations.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "From the World",
    description: "Building globally",
    color: "from-purple-500 to-pink-500",
    action: "#"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon-Fri 9am-6pm",
    description: "CET Timezone",
    color: "from-emerald-500 to-teal-500",
    action: "#"
  }
]

const socialLinks = [
  { icon: Linkedin, url: "https://linkedin.com", color: "from-blue-600 to-blue-700" },
  { icon: Instagram, url: "https://instagram.com", color: "from-pink-500 to-rose-600" },
  { icon: Facebook, url: "https://facebook.com", color: "from-blue-500 to-blue-600" },
  { icon: Github, url: "https://github.com", color: "from-gray-700 to-gray-900" }
]

const ContactCard = ({ info, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = info.icon
  
  return (
    <motion.a
      href={info.action}
      className="block relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 h-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        <motion.div
          className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}
          animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
        <p className={`font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent mb-2`}>
          {info.value}
        </p>
        <p className="text-white/60 text-sm">{info.description}</p>
      </div>
    </motion.a>
  )
}

const InputField = ({ icon: Icon, type, placeholder, name, value, onChange, required = false, multiline = false }) => {
  const [isFocused, setIsFocused] = useState(false)
  
  const Component = multiline ? 'textarea' : 'input'
  
  return (
    <div className="relative">
      <div className={`absolute left-4 ${multiline ? 'top-4' : 'top-1/2 -translate-y-1/2'} z-10`}>
        <Icon className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-blue-400' : 'text-white/40'}`} />
      </div>
      
      <Component
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={multiline ? 5 : undefined}
        className={`w-full ${multiline ? 'pt-4 pb-4' : 'h-12'} pl-14 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 resize-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0B1A] text-white pt-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <FloatingParticles />
      </motion.div>
      
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto pb-20">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Let's Build Together
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Let's discuss your project.
            </p>
          </motion.div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.title}
                  href={info.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-10 h-10 mb-3 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 mb-1">{info.title}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${info.color} bg-clip-text text-transparent mb-1`}>
                    {info.value}
                  </p>
                  <p className="text-xs text-white/50">{info.description}</p>
                </motion.a>
              )
            })}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    icon={User}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    icon={Mail}
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <InputField
                  icon={Building}
                  type="text"
                  placeholder="Company (Optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                
                <InputField
                  icon={MessageCircle}
                  placeholder="Tell us about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  required
                />
                
                <motion.button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold disabled:opacity-70"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div key="success" className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Sent Successfully!
                      </motion.div>
                    ) : isSubmitting ? (
                      <motion.div key="loading" className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div key="default" className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {["<24h Response", "Expert Team", "Proven Results", "Ongoing Support"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}
                        whileHover={{ y: -3, scale: 1.05 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}