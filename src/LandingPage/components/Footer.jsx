import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from "react-icons/md"

function Icon({ children }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition border border-white/10 text-white/80">
      {children}
    </span>
  )
}

const Mail = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6h16v12H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)
const Phone = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92V21a1 1 0 01-1.09 1A19.79 19.79 0 013 4.09 1 1 0 014 3h4.09a1 1 0 011 .75l1.12 4.49a1 1 0 01-.29.95l-2.2 2.2a16 16 0 007.16 7.16l2.2-2.2a1 1 0 01.95-.29l4.49 1.12a1 1 0 01.75 1z" />
  </svg>
)
const External = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 3h7v7M10 14L21 3M21 14v7h-7" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0B0B1A] to-[#1a1f2b] text-white px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto py-14">
        <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Let's talk</h3>
          <p className="text-white/70 mb-6">Tell us about your project and we'll get back quickly.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:tech@fernandesinnovations.com" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition inline-flex items-center gap-2">
              <MdEmail className="w-5 h-5" /> Mail
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
          <a href="/"><img src="/FernandesS.png" alt="Fernandes Tech Services" className="max-h-7 w-auto" />
          </a>
            <div>
              <p className="text-white/80">Proudly building from Europe</p>
              <p className="text-white/40 text-sm">© {new Date().getFullYear()} <a href="https://fernandesinnovations.com">Fernandes Innovations. </a> Todos os direitos reservados.</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
    <Icon><FaInstagram /></Icon>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
    <Icon><FaFacebook /></Icon>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
    <Icon><FaLinkedin /></Icon>
  </a>
</div>


        </div>
      </div>
    </footer>
  )
}


