import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import { BODY_AREA_BY_ID } from '@/data/body-areas';
import { CATEGORY_ORDER, PROGRAMS } from '@/data/programs';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { Program } from '@/lib/types';

/** Only a few programmes carry a photograph — the rest stay typographic on purpose. */
const PROGRAM_IMAGE: Record<string, { src: string; alt: Record<Locale, string> }> = {
  'office-syndrom': {
    src: '/img/t-office.jpg',
    alt: {
      de: 'Ausbilderin arbeitet mit beiden Daumen am Nacken einer sitzenden Kundin.',
      th: 'ครูผู้สอนใช้นิ้วหัวแม่มือทั้งสองข้างนวดต้นคอของลูกค้าที่นั่งอยู่',
    },
  },
  'lymphdrainage-cupping': {
    src: '/img/t-cupping.jpg',
    alt: {
      de: 'Schröpfgläser auf dem Rücken einer abgedeckten Kundin, die Hände der Ausbilderin setzen ein weiteres Glas.',
      th: 'แก้วครอบวางบนหลังของลูกค้าที่คลุมผ้าเรียบร้อย มือครูกำลังวางแก้วอีกใบ',
    },
  },
  'facial-lifting': {
    src: '/img/t-facial.jpg',
    alt: {
      de: 'Lifting-Griffe entlang Wange und Kieferlinie an einer liegenden Kundin.',
      th: 'ท่ายกกระชับบริเวณแก้มและแนวกรามของลูกค้าที่นอนอยู่',
    },
  },
  'fussmassage-spa': {
    src: '/img/t-foot.jpg',
    alt: {
      de: 'Beide Daumen arbeiten an der Fußsohle über einer Fußwanne.',
      th: 'นิ้วหัวแม่มือทั้งสองข้างกดที่ฝ่าเท้าเหนืออ่างแช่เท้า',
    },
  },
  fusspflege: {
    src: '/img/t-fusspflege.jpg',
    alt: {
      de: 'Fußpflege am Nagel mit Instrument, daneben ein Tablett mit sterilisierten Werkzeugen.',
      th: 'การดูแลเล็บเท้าด้วยอุปกรณ์ ข้าง ๆ เป็นถาดเครื่องมือที่ผ่านการฆ่าเชื้อ',
    },
  },
};

function ProgramEntry({
  program,
  index,
  t,
  locale,
}: {
  program: Program;
  index: number;
  t: UiDictionary;
  locale: Locale;
}) {
  const image = PROGRAM_IMAGE[program.id];
  const areas = program.bodyAreas
    .map((id) => BODY_AREA_BY_ID.get(id)?.label[locale])
    .filter(Boolean)
    .join(' · ');

  return (
    <Reveal as="li" delay={Math.min(index * 0.06, 0.24)}>
      <a
        id={`kurs-${program.slug}`}
        href={`#anfrage?kurs=${program.slug}`}
        className="group wipe-hover grid scroll-mt-32 grid-cols-1 items-start gap-4 border-b border-hairline py-7 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
      >
        <div className="flex gap-5">
          {image ? (
            <div className="relative hidden h-24 w-32 shrink-0 overflow-hidden bg-porcelain-deep sm:block">
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-[var(--dur-5)] ease-[var(--ease-out-quart)] group-hover:scale-[1.06]"
              />
            </div>
          ) : null}

          <div className="min-w-0">
            <h3 className="font-display text-2xl leading-tight transition-colors duration-150 group-hover:text-teal md:text-[1.75rem]">
              {program.title[locale]}
            </h3>
            {locale === 'de' ? (
              <p className="thai mt-0.5 text-sm text-ink-muted/85" lang="th">
                {program.title.th}
              </p>
            ) : null}
            <p className="mt-2 max-w-[58ch] leading-relaxed text-ink-muted">
              {program.subtitle[locale]}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-ink-muted/80">{areas}</p>
          </div>
        </div>

        <div className="flex items-baseline gap-5 md:flex-col md:items-end md:gap-1 md:text-right">
          <p className="numeric font-display text-2xl">
            {program.price} €
            {program.priceNote ? (
              <span className="ml-1 align-middle text-xs font-normal text-ink-muted">
                {program.priceNote[locale]}
              </span>
            ) : null}
          </p>
          <p className="text-sm text-ink-muted">{program.durationLabel[locale]}</p>
          <span className="text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4 md:mt-2">
            {t.catalog.requestCourse}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function CourseFamilies({ t, locale }: { t: UiDictionary; locale: Locale }) {
  return (
    <div className="mt-12 space-y-16">
      {CATEGORY_ORDER.map((category) => {
        const group = t.catalog.groups[category];
        const programs = PROGRAMS.filter((program) => program.category === category);

        return (
          <section key={category} aria-labelledby={`gruppe-${category}`}>
            <div className="grid gap-4 border-t border-ink/15 pt-6 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-12">
              <div>
                <p className="kicker">{group.kicker}</p>
                <h3
                  id={`gruppe-${category}`}
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
                <ProgramEntry
                  key={program.id}
                  program={program}
                  index={index}
                  t={t}
                  locale={locale}
                />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
