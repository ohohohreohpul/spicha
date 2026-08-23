import { Reveal } from '@/components/motion/Reveal';

export type SectionCopy = {
  readonly index: string;
  readonly kicker: string;
  readonly titleA: string;
  readonly titleAccent: string;
  readonly titleB: string;
  readonly lead: string;
};

type SectionHeaderProps = {
  copy: SectionCopy;
  id?: string;
};

/**
 * Asymmetric header: numeral and kicker sit in a narrow left rail,
 * the title spills into the wide column. No centred headings anywhere.
 */
export function SectionHeader({ copy, id }: SectionHeaderProps) {
  return (
    <header className="grid gap-6 border-t border-hairline pt-8 md:grid-cols-[7rem_1fr] md:gap-10 lg:grid-cols-[9rem_minmax(0,1fr)_26rem] lg:gap-12">
      <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
        <span className="numeric font-display text-2xl text-gold">{copy.index}</span>
        <span className="kicker">{copy.kicker}</span>
      </div>

      <Reveal>
        <h2 id={id} className="max-w-[18ch] text-[length:var(--text-section)] leading-[1.02]">
          {copy.titleA} <span className="italic text-teal">{copy.titleAccent}</span>
          {copy.titleB ? ` ${copy.titleB}` : ''}
        </h2>
      </Reveal>

      {copy.lead ? (
        <Reveal delay={0.08} className="lg:pt-2">
          <p className="max-w-[46ch] text-base leading-relaxed text-ink-muted">{copy.lead}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
