import { FadeIn } from '@/components/ui/fade-in'

/**
 * The quiet section opening (2026-09 rebuild): a small label, a serif title
 * at conversational scale, an optional muted lead. Replaces the old
 * rule-draw + line-masked ceremony.
 */
export function SectionHead({
  label,
  title,
  lead,
  id,
}: Readonly<{
  label: string
  title: React.ReactNode
  lead?: string
  id?: string
}>) {
  return (
    <FadeIn className="mb-12 sm:mb-16">
      <p className="text-sm font-semibold text-teal">{label}</p>
      <h2
        id={id}
        className="mt-3 max-w-2xl font-serif text-2xl font-normal tracking-tight text-foreground sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p>
      ) : null}
    </FadeIn>
  )
}

/** Joins the dictionary's titleA/accent/titleB into one plain phrase. */
export function joinTitle(copy: {
  titleA: string
  titleAccent: string
  titleB: string
}): string {
  const b = copy.titleB
    ? /^\p{P}/u.test(copy.titleB)
      ? copy.titleB
      : ` ${copy.titleB}`
    : ''
  return `${copy.titleA} ${copy.titleAccent}${b}`.trim()
}

/** Wraps page sections with the shared container and rhythm. */
export function Section({
  id,
  labelledBy,
  className = '',
  children,
}: Readonly<{
  id: string
  labelledBy: string
  className?: string
  children: React.ReactNode
}>) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">{children}</div>
    </section>
  )
}
