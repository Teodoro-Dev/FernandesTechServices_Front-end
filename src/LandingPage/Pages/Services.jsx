import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  Palette, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Target,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Design e UX",
    subtitle: "Experiências que Encantam",
    description: "Criamos identidades visuais distintivas e interfaces centradas no ser humano, combinando estética moderna com funcionalidade intuitiva.",
    fullDescription: "Nossa abordagem de design vai além do visual. Desenvolvemos experiências completas que conectam emocionalmente com os usuários, utilizando pesquisa comportamental, prototipagem avançada e testes de usabilidade para garantir interfaces que não apenas impressionam, mas convertem.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    features: [
      "Design System Completo",
      "Prototipagem Interativa",
      "Pesquisa de Usuários",
      "Testes A/B",
      "Identidade Visual",
      "Experiência Mobile-First"
    ],
    tech: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Miro"],
    image: "/FML.png",
    stats: { projects: "50+", satisfaction: "98%", iterations: "500+" }
  },
  {
    id: 2,
    title: "Web e Mobile",
    subtitle: "Aplicações do Futuro",
    description: "Desenvolvemos aplicações web e móveis escaláveis com tecnologias de ponta, garantindo performance excepcional e experiência fluida.",
    fullDescription: "Construímos aplicações que definem o futuro digital. Utilizamos arquiteturas modernas, microserviços e tecnologias emergentes para criar soluções que escalam globalmente, mantendo sempre a performance e segurança como prioridades máximas.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Progressive Web Apps",
      "Aplicações Nativas",
      "Real-time Features",
      "Offline-First",
      "Push Notifications",
      "Cross-Platform"
    ],
    tech: ["React", "React Native", "Node.js", "GraphQL", "TypeScript"],
    image: "/SC.png",
    stats: { apps: "30+", users: "100K+", uptime: "99.9%" }
  },
  {
    id: 3,
    title: "Comércio Eletrônico",
    subtitle: "Vendas Inteligentes",
    description: "Plataformas de e-commerce de alta performance com integrações robustas que maximizam conversões e otimizam a experiência de compra.",
    fullDescription: "Revolucionamos o comércio digital com plataformas inteligentes que utilizam IA para personalização, analytics avançados para insights de comportamento e integrações seamless com sistemas de pagamento, logística e marketing automation.",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-500",
    features: [
      "IA para Recomendações",
      "Checkout Otimizado",
      "Multi-currency",
      "Inventory Management",
      "Analytics Avançados",
      "Mobile Commerce"
    ],
    tech: ["Shopify Plus", "WooCommerce", "Stripe", "PayPal", "Klaviyo"],
    image: "/Joao.png",
    stats: { stores: "25+", revenue: "€2M+", conversion: "4.2%" }
  },
  {
    id: 4,
    title: "CMS Headless",
    subtitle: "Conteúdo Sem Limites",
    description: "Sistemas de gestão de conteúdo modernos e flexíveis, permitindo atualizações rápidas e distribuição omnichannel.",
    fullDescription: "Implementamos arquiteturas headless que separam o backend do frontend, proporcionando flexibilidade máxima para distribuir conteúdo em qualquer canal: web, mobile, IoT, ou plataformas ainda não inventadas. Velocidade, segurança e escalabilidade garantidas.",
    icon: Database,
    color: "from-orange-500 to-red-500",
    features: [
      "API-First Architecture",
      "Multi-channel Publishing",
      "Real-time Collaboration",
      "Version Control",
      "Media Management",
      "SEO Optimization"
    ],
    tech: ["Strapi", "Contentful", "Sanity", "GraphQL", "JAMstack"],
    image: "/FI.png",
    stats: { sites: "40+", requests: "1M+", speed: "98/100" }
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    subtitle: "Infraestrutura Inteligente",
    description: "Infraestrutura segura, escalável e observável com CI/CD automatizado para deployments contínuos e confiáveis.",
    fullDescription: "Construímos infraestruturas cloud-native que se adaptam automaticamente à demanda, com monitoramento inteligente, auto-healing e security-by-design. Implementamos pipelines DevOps que reduzem o time-to-market e aumentam a confiabilidade dos deployments.",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    features: [
      "Auto-scaling",
      "Kubernetes",
      "Monitoring 24/7",
      "Disaster Recovery",
      "Security Compliance",
      "Cost Optimization"
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus"],
    image: "/SC2.png",
    stats: { uptime: "99.99%", deploys: "500+", savings: "40%" }
  },
  {
    id: 6,
    title: "Consultoria Digital",
    subtitle: "Estratégia e Inovação",
    description: "Consultoria estratégica para transformação digital, auditoria de performance e otimização de processos tecnológicos.",
    fullDescription: "Guiamos empresas através da transformação digital completa. Analisamos ecossistemas tecnológicos existentes, identificamos oportunidades de inovação e implementamos estratégias que aceleram o crescimento e otimizam operações com foco em ROI mensurável.",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Digital Transformation",
      "Tech Audit",
      "Performance Analysis",
      "Process Optimization",
      "Innovation Roadmap",
      "ROI Measurement"
    ],
    tech: ["Analytics", "Business Intelligence", "Process Mining", "AI/ML"],
    image: "/Premium.png",
    stats: { clients: "15+", growth: "150%", roi: "300%" }
  }
]

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

const ServiceCard = ({ service, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 h-full">
        <FloatingParticles />
        
        {/* Hover Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
        />
        
        {/* Icon */}
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 relative z-10`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{service.title}</h3>
        <p className="text-sm text-blue-300 mb-3 relative z-10">{service.subtitle}</p>
        <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">{service.description}</p>
        
        {/* Stats */}
        <div className="flex gap-4 mb-4 relative z-10">
          {Object.entries(service.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {value}
              </div>
              <div className="text-xs text-white/50 capitalize">{key}</div>
            </div>
          ))}
        </div>
        
        {/* Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 z-10"
          animate={isHovered ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
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
        initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
        className="bg-gradient-to-br from-[#0B0B1A] to-[#1a1f2b] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <FloatingParticles />
        
        {/* Header */}
        <div className="relative p-8 pb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-t-3xl`} />
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">{service.title}</h2>
                <p className="text-blue-300">{service.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.div>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-8 pb-8 space-y-8 relative z-10">
          {/* Description */}
          <div>
            <p className="text-white/80 text-lg leading-relaxed">{service.fullDescription}</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(service.stats).map(([key, value]) => (
              <motion.div
                key={key}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                  {value}
                </div>
                <div className="text-white/60 text-sm capitalize">{key}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 border border-white/20 text-white text-sm`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0B1A] text-white pt-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      </motion.div>
      
      <FloatingParticles />
      
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              Our Services
            </motion.h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Transformando ideias em realidade digital com tecnologias do futuro. 
              Cada projeto é uma jornada única de inovação e excelência.
            </p>
          </motion.div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
      
      {/* Service Modal */}
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