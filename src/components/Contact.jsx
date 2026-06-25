import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import AnimatedSection, { FadeIn } from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { personal } from '../data/portfolio'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-cyan-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: 'text-violet-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
    color: 'text-emerald-400',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'mohammadanas121',
    href: personal.linkedin,
    color: 'text-blue-400',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'Mohdmansoori',
    href: personal.github,
    color: 'text-slate-300',
  },
]

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="section-wrap relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm sm:rounded-3xl sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-4">
              {contactLinks.map((link, i) => {
                const content = (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-white/15 hover:bg-white/10 sm:gap-4 sm:p-4"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950/50 ${link.color}`}>
                      <link.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {link.label}
                      </p>
                      <p className="break-all text-sm font-medium text-white sm:truncate">{link.value}</p>
                    </div>
                  </motion.div>
                )

                return link.href ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {content}
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3.5 text-sm font-semibold text-slate-950 sm:mt-6 sm:py-4"
            >
              <Send size={18} />
              Send Me an Email
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
