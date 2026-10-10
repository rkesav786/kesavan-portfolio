import { Fragment, useLayoutEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

/** Renders **highlighted** phrases as <strong>. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold text-zinc-100">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export default function Experience() {
  const listRef = useRef(null)
  const lineRef = useRef(null)
  const reduce = useReducedMotion()

  // GSAP ScrollTrigger: the timeline line draws as you scroll, cards stagger in one by one.
  useLayoutEffect(() => {
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: listRef.current, start: 'top 65%', end: 'bottom 70%', scrub: 0.6 },
        },
      )
      gsap.utils.toArray('[data-exp]').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        })
        gsap.from(card.querySelectorAll('[data-point]'), {
          x: -12,
          opacity: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 75%', once: true },
        })
      })
    }, listRef)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <SectionHeading
          title="Experience"
          description="Where I've shipped production interfaces, and what changed because of them."
        />

        <div ref={listRef} className="relative">
          {/* Timeline rail */}
          <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-2 w-px bg-white/10 sm:left-[19px]" />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute bottom-0 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-brand-deep via-brand-cyan to-brand-cyan/20 sm:left-[19px]"
          />

          <ol className="space-y-12">
            {experience.map((job) => (
              <li key={job.company} className="relative pl-12 sm:pl-16">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border sm:h-10 sm:w-10 ${
                    job.current
                      ? 'border-brand-cyan/60 bg-zinc-950 text-brand-cyan shadow-[0_0_24px_-2px_rgba(34,211,238,0.6)]'
                      : 'border-white/15 bg-zinc-950 text-zinc-400'
                  }`}
                >
                  <Briefcase size={16} />
                </span>

                <article data-exp className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-zinc-50">{job.role}</h3>
                      <p className="mt-1 text-lg font-semibold gradient-text">{job.company}</p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-500">
                        <MapPin size={14} aria-hidden="true" />
                        {job.place}
                      </p>
                    </div>
                    <p
                      className={`w-fit shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                        job.current
                          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                          : 'border-white/10 bg-white/5 text-zinc-300'
                      }`}
                    >
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {job.points.map((point) => (
                      <li key={point} data-point className="flex gap-3 text-[15px] leading-relaxed text-zinc-400">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-indigo" />
                        <span>
                          <Rich text={point} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.stack.map((t) => (
                      <li key={t} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
