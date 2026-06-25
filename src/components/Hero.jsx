import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { personal } from '../data/portfolio'

const floatingOrbs = [
  { size: 180, smSize: 320, x: '5%', y: '10%', color: 'bg-cyan-500/20', delay: 0 },
  { size: 160, smSize: 280, x: '70%', y: '8%', color: 'bg-violet-500/15', delay: 1 },
  { size: 120, smSize: 200, x: '55%', y: '50%', color: 'bg-fuchsia-500/10', delay: 2 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-4 pt-20 pb-10 sm:min-h-screen sm:px-6 sm:pt-24 sm:pb-0"
    >
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.x}
          className={`pointer-events-none absolute rounded-full blur-3xl sm:hidden ${orb.color}`}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
        />
      ))}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={`${orb.x}-lg`}
          className={`pointer-events-none absolute hidden rounded-full blur-3xl sm:block ${orb.color}`}
          style={{ width: orb.smSize, height: orb.smSize, left: orb.x, top: orb.y }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-[1.75rem] font-extrabold leading-tight tracking-tight text-transparent min-[400px]:text-4xl sm:text-5xl lg:text-6xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-lg font-semibold text-violet-400 sm:mt-4 sm:text-xl lg:text-2xl"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base lg:text-lg"
        >
          {personal.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 sm:mt-6"
        >
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-400" />
            {personal.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-500/40 sm:px-8 sm:py-3.5"
          >
            Get In Touch
          </motion.a>
          <a
            href="#projects"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-white/10 sm:px-8 sm:py-3.5"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4"
        >
          {[
            { href: personal.github, icon: GitHubIcon, label: 'GitHub' },
            { href: personal.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.3 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 hover:text-cyan-400 sm:bottom-10 sm:block"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
