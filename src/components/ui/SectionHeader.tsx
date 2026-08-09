import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

type SectionHeaderProps = {
  index: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
};

/**
 * Asymmetric header: numeral and kicker sit in a narrow left rail,
 * the title spills into the wide column. No centred headings anywhere.
 */
export function SectionHeader({ index, kicker, title, lead, id }: SectionHeaderProps) {
  return (
    <header className="grid gap-6 border-t border-hairline pt-8 md:grid-cols-[7rem_1fr] md:gap-10 lg:grid-cols-[9rem_minmax(0,1fr)_26rem] lg:gap-12">
      <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
        <span className="numeric font-display text-2xl text-gold">{index}</span>
        <span className="kicker">{kicker}</span>
      </div>

      <Reveal>
        <h2 id={id} className="max-w-[18ch] text-[length:var(--text-section)] leading-[0.98]">
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={80} className="lg:pt-2">
          <p className="max-w-[46ch] text-base leading-relaxed text-ink-muted">{lead}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
