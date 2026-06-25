import { FadeIn } from './AnimatedSection'

export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-6 text-center sm:mb-8">
      <FadeIn>
        <span className="mb-2 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-400 sm:mb-3 sm:px-4 sm:py-1 sm:text-xs sm:tracking-[0.2em]">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400 sm:mt-3 sm:text-base lg:text-lg">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
