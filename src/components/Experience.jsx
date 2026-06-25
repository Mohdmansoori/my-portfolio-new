import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import AnimatedSection, { FadeIn } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="Work Journey"
          description="My professional path building React applications across diverse industries."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`relative md:flex md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden w-1/2 md:block" />

                  <div className="absolute left-6 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-slate-950 md:left-1/2 md:block">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </div>

                  <div className="md:w-1/2">
                    <div className="ml-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/30 md:ml-0">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>

                      <div className="mb-1 flex items-center gap-2">
                        <Briefcase size={16} className="text-violet-400" />
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      </div>
                      <p className="mb-4 text-sm font-medium text-violet-400">{job.company}</p>

                      <ul className="space-y-2">
                        {job.highlights.map((point) => (
                          <li
                            key={point.slice(0, 40)}
                            className="flex gap-2 text-sm leading-relaxed text-slate-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
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
