import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { X, ExternalLink, Calendar, Tag, Sparkles, Code, Zap } from 'lucide-react'

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40" />
        </motion.div>
      ))}
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: "FML Trading",
    description: "Trading and Investment Platform",
    fullDescription: "A comprehensive trading and investment platform built with modern technologies. Features real-time market data, advanced analytics, and secure transaction processing.",
    image: "/FML.png",
    smallImage: "/FML2.png",
    tags: ["Trading", "Finance", "Investment"],
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Chart.js"],
    features: [
      "Real-time market data integration",
      "Advanced portfolio analytics",
      "Secure payment processing",
      "Multi-currency support",
      "Mobile-responsive design"
    ],
    date: "August 2023",
    link: "https://fmltrading.vercel.app/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "João Sá",
    description: "Restaurant at Time Out Market",
    fullDescription: "Modern restaurant management system for João Sá at Time Out Market. Includes menu management, order processing, and customer engagement features.",
    image: "/Joao.png",
    smallImage: "/Joao2.png",
    tags: ["Restaurant", "Food", "Hospitality"],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    features: [
      "Digital menu management",
      "Online ordering system",
      "Customer loyalty program",
      "Kitchen display system",
      "Analytics dashboard"
    ],
    date: "April 2025",
    link: "https://joaosanatimeoutmarket.vercel.app/",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    title: "ScanLedger",
    description: "Enterprise Management Software",
    fullDescription: "Comprehensive enterprise management solution with advanced scanning capabilities, ledger management, and business intelligence features.",
    image: "/SC.png",
    smallImage: "/SC2.png",
    tags: ["Software", "Enterprise", "Management"],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
    features: [
      "Document scanning & OCR",
      "Financial ledger management",
      "Business intelligence dashboard",
      "Multi-tenant architecture",
      "API-first design"
    ],
    date: "February 2024",
    link: "https://scanledger.co",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Fernandes Innovations",
    description: "Technology Holding Company",
    fullDescription: "Corporate website and portfolio management system for Fernandes Innovations holding company, showcasing their diverse technology investments.",
    image: "/FI.png",
    smallImage: "/FI.png",
    tags: ["Technology", "Innovation", "Holding"],
    technologies: ["React", "Gatsby", "GraphQL", "Contentful", "AWS"],
    features: [
      "Portfolio showcase",
      "Investment tracking",
      "Company profiles",
      "News & updates system",
      "Investor relations portal"
    ],
    date: "September 2025",
    link: "https://fernandesinnovations.com",
    color: "from-orange-500 to-red-500"
  }
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])

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
        <div className="max-w-6xl mx-auto">
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
              Showcase of Innovation
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Portfolio
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover our successful projects and partnerships. Each project represents 
              our commitment to innovation, quality, and transformative digital experiences.
            </motion.p>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: project.id * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  />
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6">
                      <motion.img 
                        src={project.smallImage} 
                        alt={`${project.title} preview`} 
                        className="h-12 mb-4 object-contain"
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredId === project.id ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                      />
                      <motion.h3 
                        className="text-2xl font-bold mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredId === project.id ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/80 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredId === project.id ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={hoveredId === project.id ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                      >
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <motion.span 
                            key={tag} 
                            className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 border border-white/20`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + index * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              className="bg-gradient-to-br from-[#0B0B1A] to-[#1a1f2b] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <FloatingParticles />
              
              {/* Header */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-20 rounded-t-3xl`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
                
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
                
                <div className="absolute bottom-6 left-6">
                  <motion.img 
                    src={selectedProject.smallImage} 
                    alt={`${selectedProject.title} logo`}
                    className="h-16 mb-3 object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.h2 
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedProject.color} bg-opacity-20 border border-white/20 text-sm inline-block`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedProject.description}
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8 relative z-10">
                {/* Project Info */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 text-sm text-white/60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                    <Tag className="w-4 h-4" />
                    <span>{selectedProject.tags.join(", ")}</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    About the Project
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color} mt-2 flex-shrink-0`} />
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={tech} 
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedProject.color} bg-opacity-20 border border-white/20 text-white font-medium`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${selectedProject.color} text-white font-semibold transition-all duration-300 transform hover:scale-105`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}