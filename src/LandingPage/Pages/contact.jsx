import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  User,
  Building,
  Sparkles,
  CheckCircle,
  Globe,
  Linkedin,
  Instagram,
  Facebook
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
    value: "tech@fernandesinnovations.com",
    description: "Drop us a line anytime",
    color: "from-blue-500 to-cyan-500",
    action: "mailto:tech@fernandesinnovations.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+351 937 503 505",
    description: "Mon-Fri from 9am to 6pm",
    color: "from-emerald-500 to-teal-500",
    action: "tel:+351937503505"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Europe",
    description: "Building from the heart of Europe",
    color: "from-purple-500 to-pink-500",
    action: "#"
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 24h",
    description: "We'll get back to you quickly",
    color: "from-orange-500 to-red-500",
    action: "#"
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://instagram.com",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://facebook.com",
    color: "from-blue-500 to-blue-600"
  }
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
        rows={multiline ? 4 : undefined}
        className={`w-full ${multiline ? 'pt-4 pb-4' : 'h-14'} pl-14 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 resize-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-blue-400/0 pointer-events-none"
        animate={isFocused ? { borderColor: 'rgba(96, 165, 250, 0.3)' } : {}}
      />
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0B1A] text-white pt-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20" />
        <FloatingParticles />
      </motion.div>
      
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            style={{ y: headerY }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="w-4 h-4" />
              Let's Build Something Amazing Together
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Ready to transform your digital presence? We're here to turn your vision into reality. 
              Let's discuss your project and create something extraordinary together.
            </motion.p>
          </motion.div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <ContactCard key={info.title} info={info} index={index} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-white/70 mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  placeholder="Company Name (Optional)"
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
                  className="relative w-full h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </motion.div>
                    ) : isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ zIndex: -1 }}
                  />
                </motion.button>
              </form>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {[
                    "Rapid Response Time (<24h)",
                    "European Quality Standards",
                    "Cutting-edge Technology",
                    "Personalized Solutions",
                    "Ongoing Support"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                      <span className="text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  Follow Our Journey
                </h3>
                <p className="text-white/70 mb-6">
                  Stay updated with our latest projects, insights, and innovations in the digital world.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center group hover:scale-110 transition-transform`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ y: -3 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
              
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h4 className="font-bold text-white">Global Reach, Local Touch</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Based in Europe but serving clients worldwide. We combine global expertise with personalized, local service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}