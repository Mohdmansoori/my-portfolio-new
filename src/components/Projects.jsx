import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Real-world applications spanning FinTech, healthcare, agriculture, and e-commerce."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${project.accent}`}>
                        {project.period}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-white">{project.name}</h3>
                      <p className="text-sm text-slate-400">{project.subtitle}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors group-hover:border-cyan-500/40 group-hover:text-cyan-400"
                    >
                      <ExternalLink size={18} onClick={() => window.open(project.link, '_blank')} className="cursor-pointer" />
                    </motion.div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>

                  <ul className="mb-5 space-y-2">
                    {project.highlights.map((point) => (
                      <li
                        key={point.slice(0, 40)}
                        className="flex gap-2 text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
