import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:gap-4 sm:text-left">
        <p className="text-xs text-slate-500 sm:text-sm">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-600 sm:text-sm">
          Built with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
