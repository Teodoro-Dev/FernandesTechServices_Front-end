import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react'

export default function About() {
  const techCategories = [
    {
      title: "AI & MACHINE LEARNING",
      icon: Brain,
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
    },
    {
      title: "FRONT-END",
      icon: Sparkles,
      technologies: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "BACK-END", 
      icon: Zap,
      technologies: ["Node.js", "Python", "Django", "FastAPI"]
    }
  ]

  return (
    <section id="about" className="bg-[#0B0B1A] text-white px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto py-20 md:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Technologies we love</h3>
          <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
            We leverage cutting-edge AI and modern technologies to build intelligent, scalable solutions. 
            From AI-powered automation to cloud-native architectures, we use the best tools for each project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2A6BFF] mb-6 tracking-wider">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-sm mb-8">
            We are proud to deliver AI-powered solutions with exceptional performance, security, and design excellence.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0B1A] font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Saiba mais sobre nós
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


