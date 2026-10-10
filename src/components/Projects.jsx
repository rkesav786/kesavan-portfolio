import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { VISUALS } from './ProjectVisuals'

function ProjectCard({ project, flip }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const Visual = VISUALS[project.visual]

  // Cursor spotlight: pass pointer position to CSS variables
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      className="glass group relative overflow-hidden rounded-3xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.16), transparent 60%)',
        }}
      />

      <div className="relative grid lg:grid-cols-2">
        <div
          className={`min-h-[260px] border-b border-white/10 bg-black/20 lg:border-b-0 ${
            flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'
          }`}
        >
          <Visual />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="w-fit rounded-full border border-brand-indigo/30 bg-brand-deep/10 px-3 py-1 text-xs font-semibold text-brand-indigo">
            {project.kind}
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-zinc-50 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key results">
            {project.metrics.map((m) => (
              <li key={m} className="rounded-lg border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1.5 text-xs font-semibold text-brand-cyan">
                {m}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 flex w-fit items-center gap-1.5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
          >
            {open ? 'Hide what I built' : 'See what I built'}
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3 pt-3 text-sm leading-relaxed text-zinc-400">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-indigo" />
                    {d}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary !py-2.5">
                <ExternalLink size={15} aria-hidden="true" />
                Live Demo
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Add a demo URL in src/data/portfolio.js"
                className="btn glass cursor-not-allowed !py-2.5 text-zinc-500"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Demo coming soon
              </span>
            )}
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5">
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionHeading
          title="Featured projects"
          description="Proof-of-concept builds where I explored streaming, scalable architecture and desktop tooling."
        />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
