import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-wrap relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="Formal education that shaped my foundation in software development."
        />

        <StaggerContainer className="flex flex-col gap-3 sm:gap-4">
          {education.map((edu) => (
            <StaggerItem key={edu.institution}>
              <motion.div
                whileHover={{ x: 6 }}
                className="group flex gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition-colors hover:border-violet-500/30 sm:gap-4 sm:p-5 lg:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 transition-transform group-hover:scale-110">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                    <h3 className="text-sm font-bold text-white sm:text-base">{edu.degree}</h3>
                    <span className="rounded-full bg-violet-500/10 px-3 py-0.5 text-xs font-medium text-violet-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-300">{edu.institution}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} />
                    {edu.location}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
