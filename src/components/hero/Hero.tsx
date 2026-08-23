import { HeroVideoSequence, type Clip } from '@/components/hero/HeroVideoSequence';
import { NextCourseModule } from '@/components/hero/NextCourseModule';
import { SCHOOL } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { SessionView } from '@/lib/types';

const CLIP_ALT: Record<Locale, readonly string[]> = {
  de: [
    'Nahaufnahme: beide Hände arbeiten mit flachem Druck am Nacken und Schultergürtel.',
    'Nahaufnahme: übereinandergelegte Hände geben gleichmäßigen Druck auf den Rücken.',
    'Nahaufnahme: beide Hände umfassen einen Fuß und arbeiten am Fußgewölbe.',
  ],
  th: [
    'ภาพระยะใกล้: มือทั้งสองข้างลงน้ำหนักแบบราบที่ต้นคอและบ่า',
    'ภาพระยะใกล้: มือวางทับกันเพื่อลงน้ำหนักสม่ำเสมอบนแผ่นหลัง',
    'ภาพระยะใกล้: มือทั้งสองข้างจับเท้าและกดที่อุ้งเท้า',
  ],
};

function clips(locale: Locale): readonly Clip[] {
  const alt = CLIP_ALT[locale];
  return [
    { src: '/video/clip-01-nacken.mp4', poster: '/video/poster-01.jpg', alt: alt[0] },
    { src: '/video/clip-02-ruecken.mp4', poster: '/video/poster-02.jpg', alt: alt[1] },
    { src: '/video/clip-03-fuss.mp4', poster: '/video/poster-03.jpg', alt: alt[2] },
  ];
}

/**
 * Full-bleed cinematic opening: the film fills the viewport and the type sits
 * on it. Everything above the film is porcelain on ink, so the scrim carries
 * the contrast rather than a side-by-side split.
 */
export function Hero({
  nextSession,
  syncedAtLabel,
  stale,
  t,
  locale,
}: {
  nextSession?: SessionView;
  syncedAtLabel: string;
  stale: boolean;
  t: UiDictionary;
  locale: Locale;
}) {
  const secondaryLang = locale === 'de' ? 'th' : 'de';

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-ink">
      {/* The film, edge to edge. */}
      <div className="absolute inset-0">
        <HeroVideoSequence clips={clips(locale)} />
      </div>

      {/* Scrims: a heavy foot for the type, a lighter top for the nav, and a
          vignette so the frame reads as a projected image rather than a div. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 via-45% to-ink/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(115%_85%_at_50%_35%,transparent_35%,rgba(15,20,21,0.62)_100%)]"
      />

      <div className="shell relative flex min-h-[100dvh] flex-col justify-end pb-12 pt-[calc(var(--header-height)+2rem)] lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14">
          <div>
            <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-porcelain/70">
              <span aria-hidden className="h-px w-10 bg-gold" />
              {t.hero.kicker}
            </p>

            <h1 className="mt-7 max-w-[24ch] text-[length:var(--text-hero)] leading-[0.95] tracking-[-0.03em] text-porcelain">
              {t.hero.headlineA}
              <br />
              {t.hero.headlineB} <span className="italic text-aqua">{t.hero.headlineAccent}</span>
              <br />
              {t.hero.headlineC}
            </h1>

            <p className="mt-7 max-w-[44ch] text-[length:var(--text-lead)] leading-relaxed text-porcelain/80">
              {t.hero.lead}
            </p>

            <p
              className={`mt-2.5 max-w-[46ch] text-sm leading-relaxed text-porcelain/55 ${
                secondaryLang === 'th' ? 'thai' : ''
              }`}
              lang={secondaryLang}
            >
              {t.hero.secondary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`#${SECTION_IDS.finder}`}
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-porcelain px-7 text-sm font-semibold text-ink transition-[transform,background-color] duration-[var(--dur-1)] ease-[var(--ease-out-quad)] hover:bg-white active:translate-y-px"
              >
                {t.hero.ctaPrimary}
                <span
                  aria-hidden
                  className="transition-transform duration-[var(--dur-3)] ease-[var(--ease-out-quart)] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={`#${SECTION_IDS.schedule}`}
                className="inline-flex min-h-12 items-center rounded-full border border-porcelain/35 px-7 text-sm font-semibold text-porcelain transition-colors duration-150 hover:border-porcelain hover:bg-porcelain/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Live module as a glass panel on the film. */}
          <NextCourseModule
            session={nextSession}
            syncedAtLabel={syncedAtLabel}
            stale={stale}
            t={t}
            onFilm
          />
        </div>

        <div className="mt-12 flex items-center justify-between gap-8 border-t border-porcelain/15 pt-6">
          <p className="max-w-[40ch] text-sm leading-relaxed text-porcelain/60">{t.hero.motto}</p>
          <a
            href={`#${SECTION_IDS.trust}`}
            className="group hidden items-center gap-3 text-sm font-semibold text-porcelain/80 transition-colors duration-150 hover:text-porcelain sm:flex"
          >
            {t.hero.next}
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full border border-porcelain/30 transition-transform duration-[var(--dur-3)] ease-[var(--ease-out-quart)] group-hover:translate-y-1 group-hover:border-porcelain"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
                <path
                  d="M6 0v12M1 7.5 6 13l5-5.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <span className="sr-only">{SCHOOL.name}</span>
    </section>
  );
}
