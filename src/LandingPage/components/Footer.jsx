import { motion } from 'framer-motion'
import { Instagram, Github, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B1A] border-t border-white/10 py-12 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fernandes Innovations
              </span>
            </motion.div>
            <p className="text-white/60 text-sm max-w-xs mb-4">
              Building the future with AI-powered solutions. Transforming businesses through intelligent automation and innovation.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/fernandesai_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Teodoro-Dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'About', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a 
                  href="mailto:ai@fernandesinnovations.com"
                  className="hover:text-white transition-colors"
                >
                  ai@fernandesinnovations.com
                </a>
              </li>
              <li>Mon-Fri: 9am-6pm CET</li>
              <li>Building Globally</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Fernandes Innovations. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}


