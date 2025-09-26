import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  Heart,
  Rocket,
  Globe,
  Code,
  Palette,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react'

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div className={`w-${Math.random() > 0.5 ? '2' : '1'} h-${Math.random() > 0.5 ? '2' : '1'} rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30`} />
        </motion.div>
      ))}
    </div>
  )
}

const stats = [
  { label: "Founded", value: "2023", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "Projects", value: "50+", icon: Award, color: "from-purple-500 to-pink-500" },
  { label: "Clients", value: "25+", icon: Users, color: "from-emerald-500 to-teal-500" },
  { label: "Countries", value: "10+", icon: Globe, color: "from-orange-500 to-red-500" }
]

const values = [
  {
    title: "Innovation First",
    description: "Abraçamos as tecnologias mais avançadas para criar soluções que definem o futuro digital.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Human-Centered",
    description: "Cada projeto é pensado com o utilizador no centro, criando experiências que realmente importam.",
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Excellence Driven",
    description: "Perseguimos a excelência em cada detalhe, desde o código até à experiência final.",
    icon: Star,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Future Ready",
    description: "Construímos soluções escaláveis e adaptáveis às necessidades do amanhã.",
    icon: Rocket,
    color: "from-purple-500 to-violet-500"
  }
]

const timeline = [
  {
    year: "2023",
    title: "Fundação na Europa",
    description: "Nascemos com a missão de revolucionar o desenvolvimento tecnológico europeu, combinando inovação com tradição de qualidade.",
    highlight: true
  },
  {
    year: "2023",
    title: "Primeiros Projetos",
    description: "Lançamento dos nossos primeiros projetos disruptivos em fintech, e-commerce e gestão empresarial."
  },
  {
    year: "2024",
    title: "Expansão Internacional",
    description: "Crescimento orgânico com clientes em múltiplos países e estabelecimento de parcerias estratégicas."
  },
  {
    year: "2024",
    title: "Innovation Lab",
    description: "Criação do nosso laboratório de inovação, focado em IA, blockchain e tecnologias emergentes."
  }
]

const team = [
  {
    role: "Frontend Development",
    description: "Interfaces que encantam e convertem",
    icon: Code,
    tech: ["React", "Vue", "Svelte", "TypeScript"]
  },
  {
    role: "Backend Engineering",
    description: "Arquiteturas robustas e escaláveis",
    icon: Zap,
    tech: ["Node.js", "Python", "Go", "Microservices"]
  },
  {
    role: "Design & UX",
    description: "Experiências memoráveis e intuitivas",
    icon: Palette,
    tech: ["Figma", "Adobe XD", "Principle", "Framer"]
  },
  {
    role: "Strategy & Growth",
    description: "Crescimento sustentável e inovação",
    icon: TrendingUp,
    tech: ["Analytics", "Growth Hacking", "Product Strategy"]
  }
]

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (isVisible) {
      // Melhor lógica para extrair números
      let target = 0
      
      if (stat.value.includes('+')) {
        // Para valores como "50+", "25+", etc.
        target = parseInt(stat.value.replace('+', ''))
      } else if (stat.value.match(/^\d+$/)) {
        // Para anos como "2023" ou números simples
        target = parseInt(stat.value)
      } else {
        // Fallback: extrair qualquer número
        const numbers = stat.value.match(/\d+/g)
        target = numbers ? parseInt(numbers[0]) : 0
      }
      
      const duration = 2000 // 2 segundos
      const steps = 60 // 60 frames
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isVisible, stat.value])
  
  const Icon = stat.icon
  
  // Função para renderizar o valor final
  const renderValue = () => {
    if (stat.value.includes('+')) {
      return `${count}+`
    } else {
      return count.toString()
    }
  }
  
  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 text-center overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        <motion.div
          className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <motion.div 
          className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
        >
          {renderValue()}
        </motion.div>
        
        <p className="text-white/70 text-sm">{stat.label}</p>
      </div>
    </motion.div>
  )
}

const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = value.icon
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 h-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        <motion.div
          className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}
          animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
        <p className="text-white/70 leading-relaxed">{value.description}</p>
      </div>
    </motion.div>
  )
}

const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6"
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <motion.div
          className={`w-4 h-4 rounded-full ${item.highlight ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-white/30'} relative z-10`}
          animate={isVisible && item.highlight ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {item.highlight && (
          <motion.div
            className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <div className={`text-sm font-semibold ${item.highlight ? 'text-blue-300' : 'text-white/60'} mb-1`}>
          {item.year}
        </div>
        <h3 className={`text-lg font-bold mb-2 ${item.highlight ? 'text-white' : 'text-white/90'}`}>
          {item.title}
        </h3>
        <p className="text-white/70 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0B1A] text-white pt-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20" />
        <FloatingElements />
      </motion.div>
      
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            style={{ y: headerY }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <MapPin className="w-4 h-4" />
              Since 2023
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Somos uma empresa de tecnologia nascida na Europa em 2023, com a missão de 
              revolucionar o desenvolvimento digital através de soluções inovadoras e experiências 
              excepcionais que conectam pessoas e transformam negócios.
            </motion.p>
          </motion.div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
          
          {/* Mission Section */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nossa Missão
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                Criamos soluções tecnológicas que não apenas atendem às necessidades do presente, 
                mas antecipam e moldam o futuro digital. Combinamos expertise técnica avançada 
                com design centrado no utilizador para entregar resultados que superam expectativas.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
          </motion.div>
          
          {/* Values Section */}
          <div className="mb-24">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nossos Valores
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard key={value.title} value={value} index={index} />
              ))}
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="mb-24">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nossa Jornada
            </motion.h2>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />
              
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Team Expertise */}
          <div className="mb-24">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => {
                const Icon = member.icon
                return (
                  <motion.div
                    key={member.role}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 text-center h-full">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                      <p className="text-white/70 text-sm mb-4">{member.description}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.tech.slice(0, 2).map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">
                            {tech}
                          </span>
                        ))}
                        {member.tech.length > 2 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/60">
                            +{member.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build the Future?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a nós nesta jornada de inovação e transformação digital. 
              Vamos criar algo extraordinário juntos.
            </p>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              Let's Start Something Amazing
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}