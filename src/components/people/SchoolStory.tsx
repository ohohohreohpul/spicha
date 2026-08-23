import Image from 'next/image';
import { ParallaxMedia } from '@/components/motion/ParallaxMedia';
import { Reveal } from '@/components/motion/Reveal';
import { FOUNDER, RECOGNITION } from '@/data/school';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

export function SchoolStory({ t, locale }: { t: UiDictionary; locale: Locale }) {
  return (
    <div className="mt-[var(--space-block)] grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20">
      <div>
        <Reveal>
          <figure>
            <ParallaxMedia className="relative aspect-4/3 bg-porcelain-deep">
              <Image
                src="/img/school-team.jpg"
                alt={t.school.teamAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <figcaption className="mt-3 text-xs text-ink-muted">{t.school.teamCaption}</figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid grid-cols-[8rem_minmax(0,1fr)] gap-6">
          <Reveal delay={0.08}>
            <figure>
              <div className="group relative aspect-3/4 overflow-hidden bg-porcelain-deep">
                <Image
                  src="/img/founder-1983.jpg"
                  alt={t.school.archiveAlt}
                  fill
                  sizes="128px"
                  className="object-cover grayscale transition-[filter,transform] duration-[var(--dur-5)] ease-[var(--ease-out-quart)] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="numeric mt-2 text-[0.7rem] text-ink-muted">1983</figcaption>
            </figure>
          </Reveal>

          <div className="self-center">
            <p className="max-w-[38ch] font-display text-xl leading-snug">{t.school.pull}</p>
            <p className="mt-3 text-sm text-ink-muted">
              {FOUNDER.name}{' '}
              <span className="thai" lang="th">
                ({FOUNDER.nickname})
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="kicker">{t.school.role}</p>
        <h3 className="mt-3 font-display text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.08]">
          {locale === 'th' ? FOUNDER.nameThai : FOUNDER.name}
        </h3>
        <p
          className={`mt-1 text-lg text-ink-muted ${locale === 'de' ? 'thai' : ''}`}
          lang={locale === 'de' ? 'th' : 'de'}
        >
          {locale === 'th' ? FOUNDER.name : FOUNDER.nameThai}
        </p>

        <p className="mt-6 max-w-[52ch] text-[length:var(--text-lead)] leading-relaxed">
          {t.school.body}
        </p>

        <ul className="mt-7 space-y-2">
          {FOUNDER.qualifications[locale].map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <ol className="mt-10 border-t border-hairline">
          {FOUNDER.timeline.map((entry) => (
            <li
              key={`${entry.year}-${entry.text.de}`}
              className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 border-b border-hairline py-3.5"
            >
              <span className="numeric text-sm font-semibold text-teal">{entry.year}</span>
              <span className="text-sm leading-relaxed text-ink-muted">{entry.text[locale]}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[52ch] border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-ink-muted">
          {RECOGNITION.bfd[locale]}
        </p>
      </div>
    </div>
  );
}
