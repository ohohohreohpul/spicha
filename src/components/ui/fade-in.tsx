'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import * as React from 'react'

/**
 * The single motion vocabulary of the site (2026-09 rebuild): a quiet
 * blur-and-rise. No parallax, no pins, no scroll-jacking.
 *
 * Entrances run on mount, not on scroll intersection: whileInView strands
 * content at opacity 0 in any environment where IntersectionObserver
 * callbacks are paused (backgrounded tabs, some embedded panes) — invisible
 * content is a worse failure than a missed entrance.
 */
const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

type FadeInProps = Readonly<{
  className?: string
  children: React.ReactNode
}>

export function FadeIn({ className, children }: FadeInProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div variants={item} initial="hidden" animate="visible" className={className}>
      {children}
    </motion.div>
  )
}

/** Variant for list items: motion.li that rides the parent's stagger. */
export function FadeInLi({ className, children }: FadeInProps) {
  const reduce = useReducedMotion()
  if (reduce) return <li className={className}>{children}</li>
  return (
    <motion.li variants={item} className={className}>
      {children}
    </motion.li>
  )
}

export function StaggerGroup({ className, children }: FadeInProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerList({ className, children }: FadeInProps) {
  const reduce = useReducedMotion()
  if (reduce) return <ul className={className}>{children}</ul>
  return (
    <motion.ul variants={container} initial="hidden" animate="visible" className={className}>
      {children}
    </motion.ul>
  )
}
