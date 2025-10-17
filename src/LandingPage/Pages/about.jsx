import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  Calendar,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Heart,
  Star,
  Sparkles,
  TrendingUp,
  Award,
  Code,
  Database,
  Smartphone,
  Cloud,
  Brain
} from 'lucide-react'

const stats = [
  { label: "Founded", value: "2023", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "Projects", value: "50+", icon: Award, color: "from-purple-500 to-pink-500" },
  { label: "Clients", value: "25+", icon: Users, color: "from-emerald-500 to-teal-500" },
  { label: "Growth", value: "180%", icon: TrendingUp, color: "from-orange-500 to-red-500" }
]

const values = [
  {
    title: "AI-First Innovation",
    description: "Leveraging cutting-edge AI and machine learning to create intelligent, future-ready solutions.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "User-Centered Design",
    description: "Every solution is crafted with the end-user in mind, ensuring intuitive and delightful experiences.",
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Excellence in Code",
    description: "Clean, scalable code with best practices, security, and performance at the core.",
    icon: Star,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Future-Ready Solutions",
    description: "Building scalable architectures that grow with your business needs.",
    icon: Rocket,
    color: "from-purple-500 to-violet-500"
  }
]

const milestones = [
  {
    year: "2023",
    title: "Foundation",
    description: "Started with a mission to revolutionize tech development through AI and innovation.",
    highlight: false
  },
  {
    year: "2023",
    title: "First AI Projects",
    description: "Launched breakthrough AI solutions in fintech, e-commerce, and business automation.",
    highlight: false
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Serving clients across 10+ countries with tailored AI-powered solutions.",
    highlight: false
  },
  {
    year: "2025",
    title: "Innovation Lab",
    description: "Established R&D lab focused on next-gen AI, automation, and emerging technologies.",
    highlight: true
  }
]

const team = [
  {
    role: "AI/ML Engineers",
    description: "Building intelligent systems with cutting-edge machine learning",
    icon: Brain,
    tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Python"]
  },
  {
    role: "Full-Stack Developers",
    description: "Creating scalable web and mobile applications",
    icon: Code,
    tech: ["React", "Node.js", "Next.js", "TypeScript", "PostgreSQL"]
  },
  {
    role: "Cloud Architects",
    description: "Designing robust and scalable infrastructure",
    icon: Cloud,
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    role: "Mobile Specialists",
    description: "Building native and cross-platform mobile experiences",
    icon: Smartphone,
    tech: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
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
      let target = 0
      
      if (stat.value.includes('+')) {
        target = parseInt(stat.value.replace('+', ''))
      } else if (stat.value.includes('%')) {
        target = parseInt(stat.value.replace('%', ''))
      } else if (stat.value.match(/^\d+$/)) {
        target = parseInt(stat.value)
      } else {
        const numbers = stat.value.match(/\d+/g)
        target = numbers ? parseInt(numbers[0]) : 0
      }
      
      const duration = 2000
      const steps = 60
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
  
  const renderValue = () => {
    if (stat.value.includes('+')) {
      return `${count}+`
    } else if (stat.value.includes('%')) {
      return `${count}%`
    } else {
      return count.toString()
    }
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
    >
      <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
        {renderValue()}
      </div>
      <div className="text-xs text-white/60">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0B0B1A] text-white pt-20 pb-16">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      </motion.div>
      
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
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
              About Fernandes Innovations
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Building the Future with AI
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              We're an AI agency specializing in intelligent automation and modern tech solutions. 
              Our mission is to help businesses thrive through innovation and exceptional digital experiences.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We empower businesses to harness the power of AI and modern technology. 
                  From intelligent automation to scalable web applications, we deliver solutions 
                  that drive real results. Our team combines deep technical expertise with creative 
                  problem-solving to build products that users love and businesses depend on.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="mb-16">
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 mb-4 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-0 md:pl-20"
                  >
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-[#0B0B1A] hidden md:block" />
                    
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-white/70 text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Expertise */}
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member, index) => {
                const Icon = member.icon
                return (
                  <motion.div
                    key={member.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold mb-2">{member.role}</h3>
                    <p className="text-white/60 text-xs mb-3">{member.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                      {member.tech.length > 2 && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/60">
                          +{member.tech.length - 2}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}