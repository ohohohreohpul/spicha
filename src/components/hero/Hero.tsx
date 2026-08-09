import { HeroVideoSequence, type Clip } from '@/components/hero/HeroVideoSequence';
import { NextCourseModule } from '@/components/hero/NextCourseModule';
import { LinkButton } from '@/components/ui/Button';
import { SCHOOL } from '@/data/school';
import type { SessionView } from '@/lib/types';

const CLIPS: readonly Clip[] = [
  {
    src: '/video/hand-01-oil.mp4',
    poster: '/video/poster-01.jpg',
    alt: 'Die Hände der Ausbilderin verteilen warmes Massageöl zwischen den Handflächen.',
  },
  {
    src: '/video/hand-02-correction.mp4',
    poster: '/video/poster-02.jpg',
    alt: 'Die Ausbilderin führt die Hand einer Schülerin und korrigiert Winkel und Druck am Schultergürtel.',
  },
  {
    src: '/video/hand-03-classroom.mp4',
    poster: '/video/poster-03.jpg',
    alt: 'Schülerinnen üben paarweise an Behandlungsliegen, die Ausbilderin geht zwischen ihnen hindurch und beobachtet.',
  },
];

export function Hero({
  nextSession,
  syncedAtLabel,
  stale,
}: {
  nextSession?: SessionView;
  syncedAtLabel: string;
  stale: boolean;
}) {
  return (
    <section className="relative flex flex-col overflow-hidden pt-[var(--header-height)] lg:block lg:min-h-[100dvh]">
      {/*
        One video instance in both layouts: a band under the type on small
        screens, a full-bleed plate behind it from lg upward.
      */}
      <div className="relative order-2 h-[42vh] min-h-56 w-full lg:absolute lg:inset-0 lg:order-none lg:h-auto lg:min-h-0">
        <HeroVideoSequence clips={CLIPS} />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-porcelain to-transparent lg:hidden"
        />
      </div>

      {/* Desktop scrim only — on mobile the type sits on plain porcelain. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-porcelain lg:from-32% lg:via-porcelain/75 lg:via-52% lg:to-transparent lg:to-72%"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-porcelain to-transparent lg:block"
      />

      <div className="shell relative order-1 flex flex-col justify-between pb-10 pt-10 lg:order-none lg:min-h-[calc(100dvh-var(--header-height))] lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="max-w-[46rem]">
            <p className="kicker flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-gold" />
              {SCHOOL.locationName} · seit 1997
            </p>

            <h1 className="mt-6 text-[length:var(--text-hero)] leading-[0.9] tracking-[-0.035em]">
              Ihre Hände
              <br />
              können eine <span className="italic text-teal">Zukunft</span>
              <br />
              bauen.
            </h1>

            <p className="mt-7 max-w-[38ch] text-[length:var(--text-lead)] leading-relaxed text-ink-muted">
              Lernen Sie Massage, Fußpflege, Spa und Kosmetik in Ahrensburg — mit erfahrenen
              Ausbilderinnen, geführter Praxis und einem Zertifikat, das im Beruf zählt.
            </p>

            <p className="thai mt-3 max-w-[42ch] text-sm text-ink-muted/85" lang="th">
              เรียนนวด สปา ดูแลเท้า และความงาม ที่เมือง Ahrensburg สอนภาษาไทยและเยอรมัน
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LinkButton href="#kursfinder">Kurs finden</LinkButton>
              <LinkButton href="#termine" variant="secondary">
                Termine ansehen
              </LinkButton>
            </div>
          </div>

          {/* The live module deliberately breaks into the film plate on desktop. */}
          <div className="lg:-ml-24 lg:self-end xl:-ml-32">
            <NextCourseModule
              session={nextSession}
              syncedAtLabel={syncedAtLabel}
              stale={stale}
            />
          </div>
        </div>

        <div className="mt-14 hidden items-end justify-between gap-8 border-t border-ink/10 pt-6 lg:flex">
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink-muted">
            Berührung ist eine Fähigkeit. Übung macht daraus einen Beruf.
          </p>
          <a
            href="#vertrauen"
            className="group flex items-center gap-3 text-sm font-semibold text-ink transition-colors duration-150 hover:text-teal"
          >
            Weiter
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 transition-transform duration-[var(--dur-3)] ease-[var(--ease-out-quart)] group-hover:translate-y-1 group-hover:border-teal"
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
    </section>
  );
}
