import { motion, useReducedMotion } from 'framer-motion'
import { Award, GraduationCap, Languages } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Card({ icon: Icon, children, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass flex gap-5 rounded-3xl p-6 sm:p-8"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand-indigo/30 bg-brand-deep/15 text-brand-indigo">
        <Icon size={22} aria-hidden="true" />
      </span>
      <div className="min-w-0">{children}</div>
    </motion.div>
  )
}

export default function Education() {
  const { degree, certification, languages } = education
  return (
    <section id="education" className="section-pad">
      <div className="container-x">
        <SectionHeading title="Education & certifications" description="The academic base and the MERN training behind my work." />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card icon={GraduationCap}>
            <p className="text-sm font-medium text-brand-cyan">{degree.period}</p>
            <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-zinc-50">{degree.title}</h3>
            <p className="mt-2 text-zinc-400">{degree.school}</p>
            <p className="mt-4 inline-block rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-sm font-semibold text-emerald-300">
              {degree.score}
            </p>
          </Card>

          <Card icon={Award} delay={0.1}>
            <p className="text-sm font-medium text-brand-cyan">{certification.period}</p>
            <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-zinc-50">{certification.title}</h3>
            <p className="mt-2 text-zinc-400">{certification.school}</p>
          </Card>
        </div>

        <div className="mt-6">
          <Card icon={Languages} delay={0.15}>
            <h3 className="font-display text-xl font-bold text-zinc-50">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {languages.map((l) => (
                <li key={l.name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  <span className="font-semibold text-zinc-100">{l.name}</span>
                  <span className="text-zinc-400">, {l.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
