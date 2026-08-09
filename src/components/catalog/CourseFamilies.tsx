import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { BODY_AREA_BY_ID } from '@/data/body-areas';
import { CATEGORY_GROUPS, PROGRAMS } from '@/data/programs';
import type { Program } from '@/lib/types';

/** Only a few programmes carry a photograph — the rest stay typographic on purpose. */
const PROGRAM_IMAGE: Record<string, { src: string; alt: string }> = {
  'office-syndrom': {
    src: '/img/t-office.jpg',
    alt: 'Ausbilderin arbeitet mit beiden Daumen am Nacken einer sitzenden Kundin.',
  },
  'lymphdrainage-cupping': {
    src: '/img/t-cupping.jpg',
    alt: 'Schröpfgläser auf dem Rücken einer abgedeckten Kundin, die Hände der Ausbilderin setzen ein weiteres Glas.',
  },
  'facial-lifting': {
    src: '/img/t-facial.jpg',
    alt: 'Lifting-Griffe entlang Wange und Kieferlinie an einer liegenden Kundin.',
  },
  'fussmassage-spa': {
    src: '/img/t-foot.jpg',
    alt: 'Beide Daumen arbeiten an der Fußsohle über einer Fußwanne.',
  },
  fusspflege: {
    src: '/img/t-fusspflege.jpg',
    alt: 'Fußpflege am Nagel mit Instrument, daneben ein Tablett mit sterilisierten Werkzeugen.',
  },
};

function ProgramEntry({ program, index }: { program: Program; index: number }) {
  const image = PROGRAM_IMAGE[program.id];
  const areas = program.bodyAreas
    .map((id) => BODY_AREA_BY_ID.get(id)?.label)
    .filter(Boolean)
    .join(' · ');

  return (
    <Reveal as="li" delay={Math.min(index * 60, 240)}>
      <a
        id={`kurs-${program.slug}`}
        href={`#anfrage?kurs=${program.slug}`}
        className="group grid scroll-mt-32 grid-cols-1 items-start gap-4 border-b border-hairline py-7 transition-colors duration-150 hover:bg-paper/60 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
      >
        <div className="flex gap-5">
          {image ? (
            <div className="relative hidden h-24 w-32 shrink-0 overflow-hidden bg-porcelain-deep sm:block">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-[var(--dur-5)] ease-[var(--ease-out-quart)] group-hover:scale-[1.04]"
              />
            </div>
          ) : null}

          <div className="min-w-0">
            <h3 className="font-display text-2xl leading-tight transition-colors duration-150 group-hover:text-teal md:text-[1.75rem]">
              {program.title}
            </h3>
            {program.titleThai ? (
              <p className="thai mt-0.5 text-sm text-ink-muted/85" lang="th">
                {program.titleThai}
              </p>
            ) : null}
            <p className="mt-2 max-w-[58ch] leading-relaxed text-ink-muted">{program.subtitle}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-ink-muted/80">{areas}</p>
          </div>
        </div>

        <div className="flex items-baseline gap-5 md:flex-col md:items-end md:gap-1 md:text-right">
          <p className="numeric font-display text-2xl">
            {program.price} €
            {program.priceNote ? (
              <span className="ml-1 align-middle text-xs font-normal text-ink-muted">
                {program.priceNote}
              </span>
            ) : null}
          </p>
          <p className="text-sm text-ink-muted">{program.durationLabel}</p>
          <span className="text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4 md:mt-2">
            Kurs anfragen
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function CourseFamilies() {
  return (
    <div className="mt-12 space-y-16">
      {CATEGORY_GROUPS.map((group) => {
        const programs = PROGRAMS.filter((program) => program.category === group.id);

        return (
          <section key={group.id} aria-labelledby={`gruppe-${group.id}`}>
            <div className="grid gap-4 border-t border-ink/15 pt-6 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-12">
              <div>
                <p className="kicker">{group.kicker}</p>
                <h3
                  id={`gruppe-${group.id}`}
                  className="mt-2 font-display text-[clamp(1.6rem,1.1rem+1.6vw,2.4rem)] leading-tight"
                >
                  {group.title}
                </h3>
              </div>
              <p className="max-w-[42ch] self-end text-sm leading-relaxed text-ink-muted">
                {group.description}
              </p>
            </div>

            <ul className="mt-6">
              {programs.map((program, index) => (
                <ProgramEntry key={program.id} program={program} index={index} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
