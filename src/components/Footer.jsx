import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, Framer Motion and GSAP.
        </p>
        <a
          href="#home"
          className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
        >
          Back to top
          <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
