import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, personal } from '../data/portfolio'
import resumePdf from '../assets/Mohammad_Anas_Mansoori_React_Js.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const initials = personal.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-slate-950/80 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl sm:py-3'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => handleNav('#home')}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-slate-950 transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:text-sm">
              {initials}
            </span>
            <span className="hidden font-semibold text-white sm:block">Anas</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => handleNav('#contact')}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Hire Me
            </button>
            <a
              href={resumePdf}
              download="Mohammad_Anas_Mansoori_React_Js.pdf"
              className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-white/10"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[60px] z-40 max-h-[calc(100dvh-60px)] overflow-y-auto border-b border-white/10 bg-slate-950/95 p-3 backdrop-blur-xl sm:top-[72px] md:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 space-y-2 border-t border-white/10 pt-2">
                <button
                  type="button"
                  onClick={() => handleNav('#contact')}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Hire Me
                </button>
                <a
                  href={resumePdf}
                  download="Mohammad_Anas_Mansoori_React_Js.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
