import Image from 'next/image';
import { FadeIn, FadeInLi, StaggerList } from '@/components/ui/fade-in';
import { PROGRAMS } from '@/data/programs';
import type { UiDictionary } from '@/i18n/ui';

// PROGRAMS.length drives the course count — it had drifted stale twice by
// 2026-08, so it is derived here and never hand-written again.
const FACT_VALUES = ['1997', String(PROGRAMS.length), '3', '8'] as const;

/** The proof, as it stands: four numbers and the school's own poster. */
export function Evidence({ t }: { t: UiDictionary }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
      <div>
        <StaggerList className="grid grid-cols-2 gap-8">
          {FACT_VALUES.map((value, index) => (
            <FadeInLi key={t.evidence.facts[index]}>
              <p className="numeric font-serif text-3xl tracking-tight sm:text-4xl">{value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.evidence.facts[index]}
              </p>
            </FadeInLi>
          ))}
        </StaggerList>
        <FadeIn>
          <p className="mt-10 max-w-[60ch] leading-relaxed text-muted-foreground">
            {t.evidence.note}
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <figure>
          {/* Client-supplied document imagery is never cropped (house rule) —
              it renders at its own aspect ratio with its own margins. */}
          <div className="rounded-lg bg-paper p-4 shadow-sm outline outline-black/5">
            <Image
              src="/img/evidence-poster.jpg"
              alt={t.evidence.posterAlt}
              width={1076}
              height={1521}
              className="h-auto w-full rounded-md"
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {t.evidence.caption}
          </figcaption>
        </figure>
      </FadeIn>
    </div>
  );
}
