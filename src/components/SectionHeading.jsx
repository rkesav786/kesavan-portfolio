import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({ title, description }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 max-w-2xl sm:mb-12"
    >
      <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
    </motion.div>
  )
}
