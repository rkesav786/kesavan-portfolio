import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { heroBadges, profile } from '../data/portfolio'
import TechIcon from './TechIcon'

export default function Hero() {
  const root = useRef(null)
  const reduce = useReducedMotion()
  const [photoFailed, setPhotoFailed] = useState(false)

  // One orchestrated load sequence: headline lines slide up, the rest follows, avatar settles in.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero="line"]', { yPercent: 115, duration: 0.95, stagger: 0.14 })
        .from('[data-hero="fade"]', { y: 20, opacity: 0, duration: 0.7, stagger: 0.09 }, '-=0.55')
        .from('[data-hero="avatar"]', { scale: 0.92, opacity: 0, duration: 1.1 }, 0.1)
        .from('[data-hero="badge"]', { scale: 0.4, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(2)' }, 0.8)
    }, root)
    return () => mm.revert()
  }, [])

  return (
    <section id="home" ref={root} className="relative flex min-h-screen items-center overflow-x-clip pb-16 pt-24 sm:pt-22">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Copy */}
        <div>
          <div
            data-hero="fade"
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-zinc-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>

          <p data-hero="fade" className="mt-8 font-display text-xl text-zinc-400 sm:text-2xl">
            Hi, I&apos;m <span className="font-semibold text-zinc-100">{profile.name}</span>
          </p>

          <h1 className="mt-3 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl xl:text-[4.25rem]">
            <span className="block overflow-hidden pb-1">
              <span data-hero="line" className="block">
                {profile.headline[0]}
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span data-hero="line" className="gradient-text block">
                {profile.headline[1]}
              </span>
            </span>
          </h1>

          <p data-hero="fade" className="mt-6 text-lg font-semibold text-zinc-200">
            {profile.title}
          </p>
          <p data-hero="fade" className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.summary}
          </p>

          <div data-hero="fade" className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
            <div className="ml-1 flex items-center gap-2">
              {[
                { href: profile.github, label: 'GitHub', Icon: Github },
                { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid h-11 w-11 place-items-center rounded-xl text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <p data-hero="fade" className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        {/* Avatar */}
        <div className="mx-auto w-full max-w-[22rem] lg:max-w-md">
          <div data-hero="avatar" className="relative aspect-square">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#6366f1,#22d3ee,transparent_55%,#6366f1)] opacity-90" />
            <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_68%)]" />
            <div className="absolute inset-[5px] overflow-hidden rounded-full bg-zinc-900">
              {photoFailed ? (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-zinc-800 to-zinc-900 font-display text-7xl font-bold text-zinc-600">
                  KR
                </div>
              ) : (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  onError={() => setPhotoFailed(true)}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              )}
            </div>

            {/* Floating tech badges */}
            {heroBadges.map((b) => (
              <div key={b.name} data-hero="badge" className={`absolute ${b.pos}`}>
                <motion.div
                  animate={reduce ? undefined : { y: [0, -9, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
                  className="glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl shadow-black/40"
                >
                  <TechIcon icon={b.icon} name={b.name} tone={b.tone} className="h-6 w-6" />
                  <span className="hidden text-xs font-semibold text-zinc-200 sm:block">{b.name}</span>
                </motion.div>
              </div>
            ))}

            {/* Current role chip */}
            <div className="absolute inset-x-0 -bottom-4 flex justify-center">
              <div
                data-hero="badge"
                className="glass whitespace-nowrap rounded-2xl px-4 py-2.5 text-center shadow-xl shadow-black/40"
              >
                <p className="text-xs text-zinc-400">Currently at</p>
                <p className="text-sm font-semibold text-zinc-100">Sumisa Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
