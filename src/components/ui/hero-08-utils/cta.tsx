import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/hero-08-utils/button'
import { cn } from '@/lib/utils'

export interface CtaProps {
  ctaEnabled?: boolean
  text?: string
  link?: string
  size?: 'default' | 'sm' | 'lg'
}

/**
 * The card CTA behind hero-08: a shadcn Button rendered as a link. Cards
 * that sit on a photo (`invert`) get a porcelain button so the action stays
 * legible on the image.
 */
export function Cta({ cta, invert }: Readonly<{ cta: CtaProps; invert?: boolean }>) {
  if (!cta.ctaEnabled || !cta.text) return null

  return (
    <Button
      asChild
      size={cta.size ?? 'default'}
      className={cn(invert && 'bg-white text-black hover:bg-white/90')}
    >
      <a href={cta.link || '#'}>
        {cta.text}
        <ArrowRight className="ml-2 size-4" aria-hidden />
      </a>
    </Button>
  )
}
