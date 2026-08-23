import Image from 'next/image';
import { CountUp } from '@/components/motion/CountUp';
import { ParallaxMedia } from '@/components/motion/ParallaxMedia';
import { Reveal } from '@/components/motion/Reveal';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

const FACT_VALUES = ['1997', '12', '3', '8'] as const;

/** 1997 is a year, not a quantity — counting up to it would read as a gimmick. */
const isQuantity = (value: string) => value !== '1997';

export function Evidence({ t, locale }: { t: UiDictionary; locale: Locale }) {
  return (
    <div className="mt-[var(--space-block)] grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div>
        <dl className="border-t border-ink/15">
          {FACT_VALUES.map((value, index) => (
            <Reveal key={value} delay={index * 0.07}>
              <div className="flex items-baseline gap-6 border-b border-hairline py-6">
                <dt className="numeric w-20 shrink-0 font-display text-3xl text-teal">
                  {isQuantity(value) ? <CountUp value={Number(value)} locale={locale} /> : value}
                </dt>
                <dd className="text-sm leading-relaxed text-ink-muted">
                  {t.evidence.facts[index]}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
          {t.evidence.note}
        </p>
      </div>

      <div>
        <Reveal>
          <figure>
            <ParallaxMedia className="relative aspect-3/4 bg-porcelain-deep sm:aspect-4/5">
              <Image
                src="/img/evidence-poster.jpg"
                alt={t.evidence.posterAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 52vw"
                className="object-cover object-top"
              />
            </ParallaxMedia>
            <figcaption className="mt-3 max-w-[56ch] text-xs leading-relaxed text-ink-muted">
              {t.evidence.caption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  );
}
