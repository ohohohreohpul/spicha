import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FlagRibbon, LevelBadge } from '@/components/catalog/ProgramBadges';
import { FadeInLi } from '@/components/ui/fade-in';
import { PROGRAM_BY_ID } from '@/data/programs';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

/** Panel photography: real school material, keyed by persona id. */
const PERSONA_IMAGE: Record<string, string> = {
  neu: '/video/poster-02.jpg',
  beruf: '/img/t-office.jpg',
  studio: '/img/t-fusspflege.jpg',
};

type Persona = UiDictionary['wegweiser']['personas'][number];

/**
 * One life situation, ending in a named first course — the antidote to
 * "I have no idea what to study" (client feedback 2026-09). Restyled to the
 * calm card language: photo top, serif title, muted text, quiet rows.
 */
export function PersonaPanel({
  persona,
  t,
  locale,
}: {
  persona: Persona;
  t: UiDictionary;
  locale: Locale;
}) {
  const image = PERSONA_IMAGE[persona.id];

  return (
    <FadeInLi className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-lg bg-paper outline outline-black/10">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={persona.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 28vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl leading-tight tracking-tight sm:text-2xl">
            {persona.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{persona.text}</p>

          <p className="mt-6 text-xs font-semibold text-teal">{persona.startLabel}</p>

          <ul className="mt-3 space-y-1">
            {persona.courses.map((entry) => {
              const program = PROGRAM_BY_ID.get(entry.id);
              if (!program) return null;
              return (
                <li key={entry.id}>
                  <a
                    href={`#${SECTION_IDS.contact}?kurs=${program.slug}`}
                    className="group -mx-2 block rounded-md px-2 py-2.5 transition-colors duration-150 hover:bg-muted"
                  >
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      <span className="inline-flex items-center gap-1.5 font-medium transition-colors duration-150 group-hover:text-teal">
                        {program.title[locale]}
                        <ArrowRight
                          aria-hidden
                          className="size-3.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                        />
                      </span>
                      {program.flag ? <FlagRibbon flag={program.flag} t={t} locale={locale} /> : null}
                      {entry.tag ? (
                        <span className="text-xs text-muted-foreground">{entry.tag}</span>
                      ) : null}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="numeric">{program.durationLabel[locale]}</span>
                      <span className="numeric font-semibold text-foreground">
                        {program.price} €
                        {program.priceNote ? (
                          <span className="ml-1 font-normal text-muted-foreground">
                            {program.priceNote[locale]}
                          </span>
                        ) : null}
                      </span>
                      <LevelBadge program={program} t={t} />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-5">
            <p className="border-l-2 border-gold/60 pl-3 text-sm leading-relaxed text-muted-foreground">
              {persona.note}
            </p>
          </div>
        </div>
      </article>
    </FadeInLi>
  );
}
