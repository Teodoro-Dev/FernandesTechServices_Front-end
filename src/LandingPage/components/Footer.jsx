import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Linkedin, Instagram, Facebook, Github } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Sobre Nós', path: '/about' },
    { label: 'Serviços', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contacto', path: '/contact' }
  ],
  servicos: [
    { label: 'AI & Machine Learning', path: '/services' },
    { label: 'Web & Mobile', path: '/services' },
    { label: 'E-commerce', path: '/services' },
    { label: 'Cloud & DevOps', path: '/services' }
  ],
  recursos: [
    { label: 'Blog & Insights', path: '#' },
    { label: 'Case Studies', path: '#' },
    { label: 'AI Solutions', path: '#' },
    { label: 'Tech Stack', path: '#' }
  ]
}

const socialLinks = [
  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Github, url: 'https://github.com', label: 'Github', color: 'hover:text-purple-400' }
]

const contactInfo = [
  { icon: Mail, text: 'ai@fernandesinnovations.com', href: 'mailto:ai@fernandesinnovations.com' },
  { icon: MapPin, text: 'From the World', href: '#' },
  { icon: Clock, text: 'Mon-Fri: 9am - 6pm CET', href: '#' }
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B1A] text-white border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-b border-white/10"
          >
            <div className="rounded-2xl border border-white/10 p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Let's Build Something Amazing
                </motion.h3>
                <motion.p
                  className="text-white/70 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Tell us about your AI project and we'll get back quickly.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <img
                  src="/FernandesS.png"
                  alt="Fernandes Tech Services"
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-white/70 mb-6 leading-relaxed">
                AI Agency specializing in intelligent automation and modern tech solutions. 
                We deliver cutting-edge AI-powered products with exceptional design and performance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:bg-white/10`}
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className="text-white/60 hover:text-white transition-colors text-sm block hover:translate-x-1 transform duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span>© {new Date().getFullYear()}</span>
                <a
                  href="https://fernandesinnovations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white/80 hover:text-white transition-colors"
                >
                  Fernandes Innovations
                </a>
                <span>• Todos os direitos reservados</span>
              </div>

              <div className="flex items-center gap-6">
                <Link to="#" className="hover:text-white transition-colors">
                  Termos e Condições
                </Link>
                <Link to="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <span className="text-white/40">
                  Powered by{' '}
                  <a
                    href="https://ai.fernandesinnovations.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    FernandesAI
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


