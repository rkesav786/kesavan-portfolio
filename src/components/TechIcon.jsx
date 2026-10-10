import { useState } from 'react'
import {
  Blocks,
  Radio,
  RefreshCw,
  Webhook,
} from 'lucide-react'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

// Only the Lucide icons referenced in data/portfolio.js need to be listed here.
const LUCIDE = { Blocks, Radio, RefreshCw, Webhook }

const TONES = {
  mono: 'brightness-0 invert', // dark logo -> white
  invert: 'invert', // black logo -> light
}

/**
 * Official brand logo from the Devicon CDN, or a Lucide fallback.
 * If the CDN image fails, a monogram is shown so the layout never breaks.
 */
export default function TechIcon({ icon, name, tone, glow, className = 'h-8 w-8' }) {
  const [failed, setFailed] = useState(false)

  if (icon?.startsWith('lucide:')) {
    const Lucide = LUCIDE[icon.slice(7)]
    if (Lucide) return <Lucide className={className} style={{ color: glow }} strokeWidth={1.75} aria-hidden="true" />
  }

  if (!icon || failed) {
    return (
      <span
        aria-hidden="true"
        className={`grid place-items-center rounded-md bg-white/10 text-xs font-bold text-zinc-200 ${className}`}
      >
        {name?.[0]}
      </span>
    )
  }

  const [folder] = icon.split('/')
  return (
    <img
      src={`${DEVICON}/${folder}/${icon.split('/')[1]}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-contain ${tone ? TONES[tone] : ''} ${className}`}
    />
  )
}
