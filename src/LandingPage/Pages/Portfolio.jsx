import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "FML Trading",
    description: "Trading and Investment Platform",
    image: "/FML.png",
    smallImage: "/FML2.png",
    tags: ["Trading", "Finance", "Investment"],
    link: "#"
  },
  {
    id: 2,
    title: "João Sá",
    description: "Restaurant at Time Out Market",
    image: "/Joao.png",
    smallImage: "/Joao2.png",
    tags: ["Restaurant", "Food", "Hospitality"],
    link: "#"
  },
  {
    id: 3,
    title: "ScanLedger",
    description: "Enterprise Management Software",
    image: "/SC.png",
    smallImage: "/SC2.png",
    tags: ["Software", "Enterprise", "Management"],
    link: "#"
  },
  {
    id: 4,
    title: "Fernandes Innovations",
    description: "Technology Holding Company",
    image: "/FI.png",
    smallImage: "/FI.png", // Using same image since there's no FI2
    tags: ["Technology", "Innovation", "Holding"],
    link: "#"
  }
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="min-h-screen bg-[#0B0B1A] text-white pt-24 px-6 sm:px-10 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Portfolio</h1>
          <p className="text-white/70 text-lg">Discover our successful projects and partnerships</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-xl overflow-hidden"
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: project.id * 0.1 }}
            >
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <img 
                      src={project.smallImage} 
                      alt={`${project.title} preview`} 
                      className="h-12 mb-4 object-contain"
                    />
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}