import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import AnimatedSection, { FadeIn } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-wrap relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="Work Journey"
          description="My professional path building React applications across diverse industries."
        />

        <div className="relative">
          {/* Desktop center timeline */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:block" />

          {/* Mobile left timeline */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:hidden" />

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {experience.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className={`relative md:flex md:gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden w-1/2 md:block" />

                  {/* Desktop timeline dot */}
                  <div className="absolute left-1/2 top-6 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-slate-950 md:block">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="absolute left-0 top-6 z-10 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-950 md:hidden">
                    <span className="absolute inset-0.5 rounded-full bg-cyan-400" />
                  </div>

                  <div className="w-full pl-7 md:w-1/2 md:pl-0">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-sm transition-colors hover:border-cyan-500/30 sm:p-5 lg:p-6">
                      <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-3">
                        <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-400 sm:px-3 sm:py-1 sm:text-xs">
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-500 sm:text-xs">
                          <MapPin size={11} className="shrink-0" />
                          {job.location}
                        </span>
                      </div>

                      <div className="mb-0.5 flex items-start gap-2 sm:items-center">
                        <Briefcase size={15} className="mt-0.5 shrink-0 text-violet-400 sm:mt-0" />
                        <h3 className="text-base font-bold text-white sm:text-lg">{job.role}</h3>
                      </div>
                      <p className="mb-3 text-xs font-medium text-violet-400 sm:mb-4 sm:text-sm">{job.company}</p>

                      <ul className="space-y-1.5 sm:space-y-2">
                        {job.highlights.map((point) => (
                          <li
                            key={point.slice(0, 40)}
                            className="flex gap-2 text-xs leading-relaxed text-slate-400 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
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
