import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const techCategories = [
    {
      title: "FRONT-END",
      technologies: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "BACK-END", 
      technologies: ["Node.js", "SQL", "Django", "Python"]
    },
    {
      title: "DEVOPS & CLOUD",
      technologies: ["AWS/GCP", "Docker", "Kubernetes", "CI/CD"]
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
            We work with different technologies and we believe in using the right tech tool for each project. 
            From Static Site Generators to fully-fledged Content Management Systems and serverless infrastructures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="text-center"
            >
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
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-sm mb-8">
            We are proud to deliver secure web products with high performance, coding standards and exceptional design.
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


