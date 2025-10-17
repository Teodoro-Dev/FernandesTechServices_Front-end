import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Sparkles, 
  Code, 
  Zap,
  Filter,
  Brain,
  ShoppingCart,
  Briefcase,
  Building,
  Smartphone,
  Database
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Projects', icon: Filter },
  { id: 'ai', label: 'AI/ML', icon: Brain },
  { id: 'web', label: 'Web Apps', icon: Smartphone },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
  { id: 'trading', label: 'Trading', icon: Briefcase },
  { id: 'restaurant', label: 'Restaurant', icon: ShoppingCart },
  { id: 'software', label: 'Software', icon: Database },
  { id: 'corporate', label: 'Corporate', icon: Building }
]

const projects = [
  // Real Projects
  {
    id: 1,
    title: "FML Trading",
    category: "trading",
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
    category: "restaurant",
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
    category: "software",
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
    category: "corporate",
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
  },
  // Proposed Projects
  {
    id: 5,
    title: "AI Financial Assistant",
    category: "ai",
    description: "Intelligent chatbot for personal finance management with ML-powered insights.",
    fullDescription: "Advanced AI-powered financial assistant that helps users manage their personal finances through natural language conversations. Features predictive analytics, budget recommendations, and investment insights.",
    image: "/project-ai-finance.jpg",
    smallImage: "/project-ai-finance.jpg",
    tags: ["AI", "NLP", "Python", "React"],
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    features: [
      "Natural language processing",
      "Predictive budget analysis",
      "Investment recommendations",
      "Expense categorization",
      "Financial goal tracking"
    ],
    date: "March 2024",
    link: "#",
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "ecommerce",
    description: "High-performance store with AI recommendations and real-time inventory.",
    fullDescription: "Next-generation e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and seamless checkout experience.",
    image: "/project-ecommerce.jpg",
    smallImage: "/project-ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind"],
    technologies: ["Next.js", "Stripe", "TailwindCSS", "MongoDB", "Redis"],
    features: [
      "AI product recommendations",
      "Real-time inventory sync",
      "One-click checkout",
      "Multi-currency support",
      "Advanced analytics dashboard"
    ],
    date: "June 2024",
    link: "#",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 7,
    title: "SaaS Dashboard",
    category: "web",
    description: "Modern analytics platform with real-time data visualization.",
    fullDescription: "Comprehensive SaaS analytics platform providing real-time insights, customizable dashboards, and powerful data visualization tools for businesses.",
    image: "/project-saas.jpg",
    smallImage: "/project-saas.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "WebSocket"],
    features: [
      "Real-time data streaming",
      "Custom dashboard builder",
      "Advanced data visualization",
      "Team collaboration tools",
      "API access & webhooks"
    ],
    date: "January 2024",
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 8,
    title: "Headless CMS",
    category: "software",
    description: "Flexible content management with API-first architecture.",
    fullDescription: "Modern headless CMS solution with API-first design, enabling seamless content distribution across multiple channels and platforms.",
    image: "/project-cms.jpg",
    smallImage: "/project-cms.jpg",
    tags: ["Strapi", "GraphQL", "Next.js"],
    technologies: ["Strapi", "GraphQL", "Next.js", "PostgreSQL", "AWS S3"],
    features: [
      "API-first architecture",
      "Multi-channel publishing",
      "Version control",
      "Media library management",
      "Role-based permissions"
    ],
    date: "November 2023",
    link: "#",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 9,
    title: "Mobile Banking App",
    category: "web",
    description: "Cross-platform banking solution with biometric authentication.",
    fullDescription: "Secure and intuitive mobile banking application featuring biometric authentication, instant transfers, and comprehensive financial management tools.",
    image: "/project-banking.jpg",
    smallImage: "/project-banking.jpg",
    tags: ["React Native", "Firebase"],
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    features: [
      "Biometric authentication",
      "Instant money transfers",
      "Bill payment system",
      "Investment portfolio tracking",
      "Push notifications"
    ],
    date: "May 2024",
    link: "#",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 10,
    title: "AI Content Generator",
    category: "ai",
    description: "GPT-powered tool for automated content creation and optimization.",
    fullDescription: "Intelligent content generation platform powered by GPT models, helping businesses create high-quality content at scale with SEO optimization.",
    image: "/project-content.jpg",
    smallImage: "/project-content.jpg",
    tags: ["OpenAI", "Python", "FastAPI"],
    technologies: ["OpenAI", "Python", "FastAPI", "React", "Redis"],
    features: [
      "Multi-format content generation",
      "SEO optimization tools",
      "Brand voice training",
      "Content scheduling",
      "Performance analytics"
    ],
    date: "September 2024",
    link: "#",
    color: "from-yellow-500 to-orange-500"
  }
]

const ProjectCard = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        {!imageError ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <div className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <ExternalLink className="w-8 h-8 text-white mb-2 mx-auto" />
            <p className="text-white text-sm font-medium">View Project</p>
          </div>
        </motion.div>
      </div>
      
      <div className="p-5">
        {project.smallImage && !imageError && (
          <div className="flex items-center gap-2 mb-3">
            <img 
              src={project.smallImage} 
              alt={`${project.title} logo`}
              className="h-6 w-auto object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        )}
        
        <h3 className="text-lg font-bold mb-1 text-white">{project.title}</h3>
        <p className={`text-xs bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2 font-medium`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs text-white/50">
          <Calendar className="w-3 h-3" />
          {project.date}
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#0B0B1A] border border-white/20 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-64">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-t-2xl"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center rounded-t-2xl`}>
              <div className="text-8xl font-bold text-white/20">{project.title.charAt(0)}</div>
            </div>
          )}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-t-2xl`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6">
            {project.smallImage && (
              <img 
                src={project.smallImage} 
                alt={`${project.title} logo`}
                className="h-12 mb-2 object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className={`text-sm bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Info */}
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
              <Calendar className="w-4 h-4 text-white/60" />
              <span className="text-white/80">{project.date}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
              <Tag className="w-4 h-4 text-white/60" />
              <span className="text-white/80">{project.tags.join(", ")}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              About the Project
            </h3>
            <p className="text-white/70 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-white/70">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-1.5 flex-shrink-0`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold hover:opacity-90 transition-opacity`}
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
              Our Work
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our latest AI-powered projects and digital solutions across different industries
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}