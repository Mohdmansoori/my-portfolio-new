import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

const categoryColors = [
  'from-cyan-500/20 to-blue-500/20 border-cyan-500/20',
  'from-violet-500/20 to-purple-500/20 border-violet-500/20',
  'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
  'from-amber-500/20 to-orange-500/20 border-amber-500/20',
  'from-rose-500/20 to-pink-500/20 border-rose-500/20',
]

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-wrap relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to build modern, scalable applications."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skills.map((group, i) => (
            <StaggerItem key={group.category}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`h-full rounded-2xl border bg-gradient-to-br p-4 sm:p-5 lg:p-6 ${categoryColors[i % categoryColors.length]}`}
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-white/10 bg-slate-950/50 px-3 py-1.5 text-sm font-medium text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
