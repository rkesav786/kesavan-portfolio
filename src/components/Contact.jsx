import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send, TriangleAlert } from 'lucide-react'
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/kesavan-r-12bb9a221', href: profile.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', value: 'github.com/rkesav786', href: profile.github, Icon: Github, external: true },
]

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-zinc-200">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${htmlFor}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-sm text-rose-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls = (err) =>
  `w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-[15px] text-zinc-100 placeholder:text-zinc-600 transition focus:outline-none focus:ring-2 ${
    err ? 'border-rose-400/60 focus:ring-rose-400/30' : 'border-white/10 focus:border-brand-indigo/60 focus:ring-brand-indigo/25'
  }`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Enter your name.'
    if (!EMAIL_RE.test(form.email)) er.email = 'Enter a valid email address, like name@company.com.'
    if (form.message.trim().length < 10) er.message = 'Write at least 10 characters so I know how to help.'
    return er
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return

    // No form service configured: open the visitor's email app with the message pre-filled.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionHeading
          title="Let's build something"
          description="Have a role, project or question in mind? Send a message and I'll reply by email."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {links.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-brand-indigo/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-deep/15 text-brand-indigo transition group-hover:bg-brand-deep/30">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-zinc-500">{label}</span>
                  <span className="block truncate text-[15px] font-medium text-zinc-100">{value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 px-4 pt-2 text-sm text-zinc-500">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={set('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                  className={inputCls(errors.name)}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@company.com"
                  className={inputCls(errors.email)}
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={set('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Tell me about the role or project"
                className={`${inputCls(errors.message)} resize-y`}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                <Send size={16} aria-hidden="true" />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <div aria-live="polite" className="text-sm">
                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 size={16} aria-hidden="true" /> Message sent. I'll reply soon.
                  </p>
                )}
                {status === 'mailto' && (
                  <p className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 size={16} aria-hidden="true" /> Your email app should open with the message filled in.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-rose-400">
                    <TriangleAlert size={16} aria-hidden="true" /> Sending failed. Email {profile.email} directly.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
