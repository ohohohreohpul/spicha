import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { CourseGrid, type NextDates } from '@/components/catalog/CourseGrid';
import { LocationFaq } from '@/components/contact/LocationFaq';
import { Evidence } from '@/components/evidence/Evidence';
import { FeaturedCourse } from '@/components/featured/FeaturedCourse';
import { BodyFinder } from '@/components/finder/BodyFinder';
import { LearningSequence } from '@/components/learn/LearningSequence';
import { Wegweiser } from '@/components/orientation/Wegweiser';
import { Outcomes } from '@/components/outcomes/Outcomes';
import { SchoolStory } from '@/components/people/SchoolStory';
import { Schedule } from '@/components/schedule/Schedule';
import { StructuredData } from '@/components/seo/StructuredData';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { Hero08 } from '@/components/ui/hero-08';
import { Section, SectionHead, joinTitle } from '@/components/ui/section-head';
import { FEATURED_PROGRAM_ID, PROGRAM_BY_ID, VAT_NOTE } from '@/data/programs';
import { RECOGNITION } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { getUi } from '@/i18n/ui';
import { getSchedule } from '@/lib/schedule';

/** Hero cards: the two courses the school visibly pushes (Program.flag). */
const HERO_CARDS: ReadonlyArray<{ id: string; image: string; imageAlt: Record<Locale, string> }> = [
  {
    id: 'klassische-massage',
    image: '/video/poster-02.jpg',
    imageAlt: {
      de: 'Übereinandergelegte Hände geben gleichmäßigen Druck auf den Rücken.',
      th: 'มือวางทับกันลงน้ำหนักสม่ำเสมอบนแผ่นหลัง',
    },
  },
  {
    // CLIENT-VERIFY: eigenes Head-Spa-Foto steht noch aus — bis dahin das
    // Facial-Lifting-Motiv (Kopf/Gesicht), mit ehrlicher Bildunterschrift.
    id: 'head-spa',
    image: '/img/t-facial.jpg',
    imageAlt: {
      de: 'Behandlung im Kopf- und Gesichtsbereich in der Schule.',
      th: 'การดูแลบริเวณศีรษะและใบหน้าที่โรงเรียน',
    },
  },
] as const;

/**
 * The whole one-page experience, rendered once per language.
 * Section anchors are identical in both, so links survive a language switch.
 *
 * 2026-09 rebuild: calm layout, hero-08 language. The discovery order stays
 * sacred: orientation → catalog → body map → schedule.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const schedule = getSchedule(locale);

  // Catalog cards show the next bookable appearance per course — first
  // non-cancelled entry wins, the payload arrives chronologically sorted.
  const nextDatesEntries: [string, { dateLabel: string; availabilityLabel: string }][] = [];
  for (const session of schedule.sessions) {
    if (session.status === 'abgesagt' || nextDatesEntries.some(([id]) => id === session.programId))
      continue;
    nextDatesEntries.push([
      session.programId,
      { dateLabel: session.dateLabel, availabilityLabel: session.availabilityLabel },
    ]);
  }
  const nextDates: NextDates = Object.fromEntries(nextDatesEntries);

  const heroTitle = [t.hero.headlineA, t.hero.headlineB, t.hero.headlineAccent, t.hero.headlineC]
    .filter(Boolean)
    .join(' ');

  const heroCards = HERO_CARDS.map((card) => {
    const program = PROGRAM_BY_ID.get(card.id)!;
    return {
      title: program.title[locale],
      subtitle: `${program.durationLabel[locale]} · ${program.price} € ${VAT_NOTE[locale]}`,
      image: card.image,
      imageAlt: card.imageAlt[locale],
      invert: true,
      cta: {
        ctaEnabled: true,
        text: t.nextCourse.request,
        link: `#${SECTION_IDS.contact}?kurs=${program.slug}`,
        size: 'default' as const,
      },
    };
  });

  return (
    <>
      <SiteHeader t={t} locale={locale} />

      <main id="inhalt">
        <div id="top" />

        <Hero08
          title={heroTitle}
          description={t.hero.lead}
          socialProof={RECOGNITION.bfdShort[locale]}
          cards={heroCards}
          animation="subtle"
        />

        <TrustStrip t={t} locale={locale} />

        <Section id={SECTION_IDS.orientation} labelledBy="wegweiser-titel">
          <SectionHead
            id="wegweiser-titel"
            label={t.sections.orientation.kicker}
            title={joinTitle(t.sections.orientation)}
            lead={t.sections.orientation.lead}
          />
          <Wegweiser nextDates={nextDates} t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.catalog} labelledBy="kurse-titel">
          <SectionHead
            id="kurse-titel"
            label={t.sections.catalog.kicker}
            title={joinTitle(t.sections.catalog)}
            lead={t.sections.catalog.lead}
          />
          <CourseGrid nextDates={nextDates} t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.finder} labelledBy="kursfinder-titel">
          <SectionHead
            id="kursfinder-titel"
            label={t.sections.finder.kicker}
            title={joinTitle(t.sections.finder)}
            lead={t.sections.finder.lead}
          />
          <BodyFinder t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.schedule} labelledBy="termine-titel" className="bg-muted/60">
          <SectionHead
            id="termine-titel"
            label={t.sections.schedule.kicker}
            title={joinTitle(t.sections.schedule)}
            lead={t.sections.schedule.lead}
          />
          <Schedule initial={schedule} t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.featured} labelledBy="beispielkurs-titel">
          <SectionHead
            id="beispielkurs-titel"
            label={t.sections.featured.kicker}
            title={joinTitle(t.sections.featured)}
            lead={t.sections.featured.lead}
          />
          <FeaturedCourse
            programId={FEATURED_PROGRAM_ID}
            sessions={schedule.sessions}
            t={t}
            locale={locale}
          />
        </Section>

        <Section id={SECTION_IDS.learn} labelledBy="lernen-titel">
          <SectionHead
            id="lernen-titel"
            label={t.sections.learn.kicker}
            title={joinTitle(t.sections.learn)}
            lead={t.sections.learn.lead}
          />
          <LearningSequence t={t} />
        </Section>

        <Section id={SECTION_IDS.outcomes} labelledBy="danach-titel">
          <SectionHead
            id="danach-titel"
            label={t.sections.outcomes.kicker}
            title={joinTitle(t.sections.outcomes)}
            lead={t.sections.outcomes.lead || undefined}
          />
          <Outcomes t={t} />
        </Section>

        <Section id={SECTION_IDS.school} labelledBy="schule-titel">
          <SectionHead
            id="schule-titel"
            label={t.sections.school.kicker}
            title={joinTitle(t.sections.school)}
            lead={t.sections.school.lead}
          />
          <SchoolStory t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.evidence} labelledBy="belege-titel" className="bg-muted/60">
          <SectionHead
            id="belege-titel"
            label={t.sections.evidence.kicker}
            title={joinTitle(t.sections.evidence)}
            lead={t.sections.evidence.lead || undefined}
          />
          <Evidence t={t} />
        </Section>

        <Section id={SECTION_IDS.contact} labelledBy="anfrage-titel">
          <SectionHead
            id="anfrage-titel"
            label={t.sections.contact.kicker}
            title={joinTitle(t.sections.contact)}
            lead={t.sections.contact.lead}
          />
          <LocationFaq sessions={schedule.sessions} t={t} locale={locale} />
        </Section>
      </main>

      <SiteFooter t={t} locale={locale} />
      <StructuredData locale={locale} />
    </>
  );
}
