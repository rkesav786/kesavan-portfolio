import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Blocks, Cloud, DatabaseZap, LayoutTemplate, Plug, Layers } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { skillCategories } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

const TAB_ICONS = { LayoutTemplate, DatabaseZap, Plug, Cloud, Blocks, Layers }

const ALL = {
  id: 'all',
  label: 'All skills',
  blurb: 'Everything in my toolkit.',
  icon: 'Layers',
  skills: skillCategories.flatMap((c) => c.skills),
}
const TABS = [ALL, ...skillCategories]

export default function Skills() {
  const [activeId, setActiveId] = useState('frontend')
  const gridRef = useRef(null)
  const reduce = useReducedMotion()
  const active = TABS.find((t) => t.id === activeId)

  // GSAP stagger: plays when the grid first scrolls into view and again on every tab change.
  useEffect(() => {
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.from('[data-skill]', {
        y: 26,
        opacity: 0,
        scale: 0.97,
        duration: 0.55,
        stagger: 0.05,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: gridRef.current, start: 'top 90%', once: true },
      })
    }, gridRef)
    return () => ctx.revert()
  }, [activeId, reduce])

  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <SectionHeading
          title="Skills"
          description="The tools I use to build, connect and ship production interfaces, grouped by what they do."
        />

        {/* Tabs */}
        <div role="tablist" aria-label="Skill categories" className="mb-10 flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const Icon = TAB_ICONS[tab.icon]
            const selected = tab.id === activeId
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls="skills-panel"
                onClick={() => setActiveId(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  selected ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-xl border border-brand-indigo/40 bg-brand-deep/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                {!selected && <span className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.03]" />}
                <Icon size={16} className="relative" aria-hidden="true" />
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <p className="mb-6 text-sm text-zinc-500" aria-live="polite">
          {active.blurb}
        </p>

        {/* Grid */}
        <div
          ref={gridRef}
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeId}`}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {active.skills.map((skill) => (
            <div key={`${activeId}-${skill.name}`} data-skill>
              <motion.div
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                style={{ '--glow': skill.glow }}
                className="skill-card glass group relative h-full overflow-hidden rounded-2xl p-5"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                  style={{ background: `radial-gradient(circle, ${skill.glow}, transparent 70%)` }}
                />
                <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-zinc-950/60 transition-transform duration-300 group-hover:scale-110">
                  <TechIcon icon={skill.icon} name={skill.name} tone={skill.tone} glow={skill.glow} className="h-8 w-8" />
                </div>
                <h3 className="relative mt-4 font-display text-lg font-semibold text-zinc-50">{skill.name}</h3>
                <p className="relative mt-1 text-sm text-zinc-400">{skill.note}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
