import { HeroStage } from '@/components/hero/HeroStage';
import { HeroVideoSequence, type Clip } from '@/components/hero/HeroVideoSequence';
import { Magnetic } from '@/components/motion/Magnetic';
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
    {
      src: '/video/clip-01-nacken.mp4',
      poster: '/video/poster-01.jpg',
      alt: alt[0],
    },
    {
      src: '/video/clip-02-ruecken.mp4',
      poster: '/video/poster-02.jpg',
      alt: alt[1],
    },
    {
      src: '/video/clip-03-fuss.mp4',
      poster: '/video/poster-03.jpg',
      alt: alt[2],
    },
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
    <HeroStage className="relative isolate min-h-[100dvh] overflow-hidden bg-ink">
      {/* The film, edge to edge. */}
      <div data-hero="film" className="absolute inset-0 will-change-transform">
        <HeroVideoSequence clips={clips(locale)} />
      </div>

      {/* Scrims. Weighted to the foot where the type sits and kept light across
          the image itself, so the frame reads as daylight rather than night. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/28 via-52% to-ink/44"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_88%_at_50%_32%,transparent_46%,rgba(15,20,21,0.42)_100%)]"
      />
      {/* Closes over the film as the hero scrolls away. */}
      <div data-hero="veil" className="absolute inset-0 bg-ink opacity-0" aria-hidden />

      <div className="shell relative flex min-h-[100dvh] flex-col justify-end pb-12 pt-[calc(var(--header-height)+2rem)] lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14">
          <div data-hero="copy">
            <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-porcelain/70">
              <span data-hero="rule" aria-hidden className="h-px w-10 origin-left bg-gold" />
              <span data-hero="kicker">{t.hero.kicker}</span>
            </p>

            <h1
              data-hero="headline"
              className="mt-7 max-w-[24ch] text-[length:var(--text-hero)] leading-[0.95] tracking-[-0.03em] text-porcelain"
            >
              {t.hero.headlineA}
              <br />
              {t.hero.headlineB} <span className="italic text-aqua">{t.hero.headlineAccent}</span>
              <br />
              {t.hero.headlineC}
            </h1>

            <p
              data-hero="prose"
              className="mt-7 max-w-[44ch] text-[length:var(--text-lead)] leading-relaxed text-porcelain/80"
            >
              {t.hero.lead}
            </p>

            <p
              data-hero="prose"
              className={`mt-2.5 max-w-[46ch] text-sm leading-relaxed text-porcelain/55 ${
                secondaryLang === 'th' ? 'thai' : ''
              }`}
              lang={secondaryLang}
            >
              {t.hero.secondary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* The pill stays put; only its label drifts toward the pointer.
                  Moving the pill itself lifted it out of line with the button
                  beside it. */}
              <Magnetic target="[data-magnet]">
                <a
                  data-hero="cta"
                  href={`#${SECTION_IDS.finder}`}
                  className="group inline-flex min-h-12 items-center rounded-full bg-porcelain px-7 text-sm font-semibold text-ink transition-[background-color,transform] duration-[var(--dur-1)] ease-[var(--ease-out-quad)] hover:bg-white active:scale-[0.98]"
                >
                  <span data-magnet className="inline-flex items-center gap-3">
                    {t.hero.ctaPrimary}
                    <span
                      aria-hidden
                      className="transition-transform duration-[var(--dur-3)] ease-[var(--ease-out-quart)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              </Magnetic>
              <a
                data-hero="cta"
                href={`#${SECTION_IDS.schedule}`}
                className="inline-flex min-h-12 items-center rounded-full border border-porcelain/35 px-7 text-sm font-semibold text-porcelain transition-[background-color,border-color,transform] duration-150 hover:border-porcelain hover:bg-porcelain/10 active:scale-[0.98]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Live module as a glass panel on the film. */}
          <div data-hero="panel">
            <NextCourseModule
              session={nextSession}
              syncedAtLabel={syncedAtLabel}
              stale={stale}
              t={t}
              onFilm
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-8 border-t border-porcelain/15 pt-6">
          <p data-hero="foot" className="max-w-[40ch] text-sm leading-relaxed text-porcelain/60">
            {t.hero.motto}
          </p>
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
    </HeroStage>
  );
}
