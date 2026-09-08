import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';
import { FOUNDER, RECOGNITION } from '@/data/school';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

/**
 * The school, told plainly: who teaches, their path, the proof on the wall.
 */
export function SchoolStory({ t, locale }: { t: UiDictionary; locale: Locale }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <FadeIn>
        <figure>
          <div className="relative aspect-[6/5] overflow-hidden rounded-lg outline outline-black/10">
            <Image
              src="/img/school-team.jpg"
              alt={t.school.teamAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 36vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            {t.school.teamCaption}
          </figcaption>
        </figure>

        <figure className="mt-8 max-w-xs">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg outline outline-black/10">
            <Image
              src="/img/founder-1983.jpg"
              alt={t.school.archiveAlt}
              fill
              sizes="(max-width: 1024px) 60vw, 20vw"
              className="object-cover"
            />
          </div>
        </figure>
      </FadeIn>

      <FadeIn>
        <p className="text-sm font-semibold text-teal">{t.school.role}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
          {locale === 'th' ? FOUNDER.nameThai : FOUNDER.name}
          <span className="mt-1 block text-base text-muted-foreground" lang={locale === 'th' ? 'de' : 'th'}>
            {locale === 'th' ? `${FOUNDER.name} — ${RECOGNITION.bfdShort.de}` : `${FOUNDER.nameThai} (${FOUNDER.nickname})`}
          </span>
        </h3>
        <p className="mt-5 max-w-[60ch] leading-relaxed text-muted-foreground">{t.school.body}</p>
        <p className="mt-6 max-w-[40ch] font-serif text-xl leading-snug tracking-tight">
          {t.school.pull}
        </p>

        <ul className="mt-8 space-y-2.5">
          {FOUNDER.qualifications[locale].map((item) => (
            <li key={item} className="border-l-2 border-gold/60 pl-3 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <ol className="mt-10 border-t border-border">
          {FOUNDER.timeline.map((entry) => (
            <li
              key={`${entry.year}-${entry.text.de}`}
              className="flex items-baseline gap-5 border-b border-border py-3"
            >
              <span className="numeric w-12 shrink-0 text-sm font-semibold text-teal">
                {entry.year}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {entry.text[locale]}
              </span>
            </li>
          ))}
        </ol>
      </FadeIn>
    </div>
  );
}
