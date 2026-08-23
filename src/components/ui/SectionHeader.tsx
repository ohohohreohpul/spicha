import { Reveal } from '@/components/motion/Reveal';
import { RuleDraw } from '@/components/motion/RuleDraw';
import { SplitLines } from '@/components/motion/SplitLines';

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
 * Asymmetric header: numeral and kicker sit in a narrow left rail, the title
 * spills into the wide column. No centred headings anywhere.
 *
 * The rule draws itself and the title arrives line by line from behind a mask,
 * so every one of the ten sections opens with the same gesture.
 */
export function SectionHeader({ copy, id }: SectionHeaderProps) {
  return (
    <header>
      <RuleDraw />
      <div className="grid gap-7 pt-9 md:grid-cols-[7rem_1fr] md:gap-12 md:pt-10 lg:grid-cols-[9rem_minmax(0,1fr)_26rem] lg:gap-14">
        <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
          <span className="numeric font-display text-2xl text-gold">{copy.index}</span>
          <span className="kicker">{copy.kicker}</span>
        </div>

        <SplitLines>
          <h2 id={id} className="max-w-[18ch] text-[length:var(--text-section)] leading-[1.02]">
            {copy.titleA} <span className="italic text-teal">{copy.titleAccent}</span>
            {copy.titleB ? ` ${copy.titleB}` : ''}
          </h2>
        </SplitLines>

        {copy.lead ? (
          <Reveal delay={0.08} className="lg:pt-2">
            <p className="max-w-[46ch] text-base leading-relaxed text-ink-muted">{copy.lead}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
