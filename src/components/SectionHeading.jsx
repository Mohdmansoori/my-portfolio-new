import { FadeIn } from './AnimatedSection'

export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-14 text-center">
      <FadeIn>
        <span className="mb-3 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
