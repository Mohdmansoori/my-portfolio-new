import { motion } from 'framer-motion'
import { Code2, Layers, Sparkles } from 'lucide-react'
import AnimatedSection, { FadeIn } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { personal } from '../data/portfolio'

const highlights = [
  {
    icon: Code2,
    title: '5+ Years Experience',
    description: 'Building production-grade React applications with modern tooling and best practices.',
  },
  {
    icon: Layers,
    title: 'Full Frontend Stack',
    description: 'Expert in React, TypeScript, Redux Toolkit, RTK Query, and responsive UI development.',
  },
  {
    icon: Sparkles,
    title: 'User-Centric Design',
    description: 'Focused on performance, accessibility, and seamless user experiences across devices.',
  },
]

export default function About() {
  return (
    <AnimatedSection id="about" className="section-wrap relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          description="Passionate about turning ideas into elegant, performant web applications."
        />

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm sm:p-6 lg:p-8">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">{personal.summary}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
                  {[
                    { value: '5+', label: 'Years Exp.' },
                    { value: '40+', label: 'Screens Built' },
                    { value: '4', label: 'Major Projects' },
                    { value: '4', label: 'Companies' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl border border-white/5 bg-white/5 p-3 text-center sm:p-4"
                    >
                      <div className="text-xl font-bold text-cyan-400 sm:text-2xl">{stat.value}</div>
                      <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-3 sm:gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition-colors hover:border-cyan-500/30 hover:bg-slate-900/70 sm:gap-5 sm:p-5 lg:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 transition-transform group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
