import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Brain,
  Code, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Target,
  ArrowRight,
  Sparkles,
  X,
  Zap,
  Check
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    description: "Transform your business with custom AI solutions, from predictive analytics to intelligent automation.",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Custom ML Models",
      "NLP & Computer Vision",
      "Predictive Analytics",
      "AI Chatbots"
    ],
    tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
  },
  {
    id: 2,
    title: "Web & Mobile Development",
    subtitle: "Digital Experiences",
    description: "High-performance web and mobile apps with modern frameworks and exceptional user experience.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    features: [
      "Progressive Web Apps",
      "Native Mobile Apps",
      "Real-time Features",
      "API Development"
    ],
    tech: ["React", "Next.js", "React Native", "Node.js"]
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    subtitle: "Smart Commerce",
    description: "AI-powered e-commerce platforms with personalization, analytics, and seamless integrations.",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-500",
    features: [
      "AI Recommendations",
      "Optimized Checkout",
      "Inventory Management",
      "Payment Integration"
    ],
    tech: ["Shopify Plus", "WooCommerce", "Stripe"]
  },
  {
    id: 4,
    title: "Headless CMS",
    subtitle: "Content Freedom",
    description: "Flexible content management with API-first architecture for omnichannel distribution.",
    icon: Database,
    color: "from-orange-500 to-red-500",
    features: [
      "API-First Design",
      "Multi-channel Publishing",
      "SEO Optimization",
      "Real-time Updates"
    ],
    tech: ["Strapi", "Contentful", "Sanity", "GraphQL"]
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    subtitle: "Reliable Infrastructure",
    description: "Scalable cloud infrastructure with automated CI/CD, monitoring, and security.",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    features: [
      "Auto-scaling",
      "Kubernetes",
      "24/7 Monitoring",
      "Security Compliance"
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
  },
  {
    id: 6,
    title: "Tech Consulting",
    subtitle: "Strategic Innovation",
    description: "Expert guidance for digital transformation, audits, and technology optimization.",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Digital Strategy",
      "Tech Audits",
      "Performance Analysis",
      "Innovation Roadmap"
    ],
    tech: ["Analytics", "Business Intelligence"]
  }
]

const ServiceCard = ({ service, index, onSelect }) => {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onSelect(service)}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full hover:bg-white/10 transition-all duration-300">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
        <p className={`text-xs bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3 font-medium`}>
          {service.subtitle}
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{service.description}</p>
        
        <div className="flex items-center text-sm text-white/40 group-hover:text-white/60 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

const ServiceModal = ({ service, onClose }) => {
  const Icon = service.icon
  
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
        className="bg-[#0B0B1A] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 bg-[#0B0B1A] border-b border-white/10 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className={`text-sm bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-white/70 leading-relaxed">{service.description}</p>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Check className={`w-4 h-4 text-transparent bg-gradient-to-r ${service.color} bg-clip-text`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-[#0B0B1A] text-white pt-20 pb-16">
      <div className="px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/80 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Solutions
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              From AI automation to web development, we deliver cutting-edge solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                onSelect={setSelectedService}
              />
            ))}
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}