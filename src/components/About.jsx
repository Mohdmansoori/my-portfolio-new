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
    <AnimatedSection id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          description="Passionate about turning ideas into elegant, performant web applications."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-slate-300">{personal.summary}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: '5+', label: 'Years Exp.' },
                    { value: '40+', label: 'Screens Built' },
                    { value: '4', label: 'Major Projects' },
                    { value: '4', label: 'Companies' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl border border-white/5 bg-white/5 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-cyan-500/30 hover:bg-slate-900/70"
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
