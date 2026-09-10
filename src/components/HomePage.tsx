import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { CourseGrid, type NextDates } from '@/components/catalog/CourseGrid';
import { LocationFaq } from '@/components/contact/LocationFaq';
import { Evidence } from '@/components/evidence/Evidence';
import { Hero } from '@/components/hero/Hero';
import { LearningSequence } from '@/components/learn/LearningSequence';
import { Wegweiser } from '@/components/orientation/Wegweiser';
import { Outcomes } from '@/components/outcomes/Outcomes';
import { SchoolStory } from '@/components/people/SchoolStory';
import { Schedule } from '@/components/schedule/Schedule';
import { StructuredData } from '@/components/seo/StructuredData';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { Section, SectionHead, joinTitle } from '@/components/ui/section-head';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { getUi } from '@/i18n/ui';
import { getSchedule } from '@/lib/schedule';

/** Story first, followed by guided discovery and a catalog with optional dates. */
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

  return (
    <>
      <SiteHeader t={t} locale={locale} />

      <main id="inhalt">
        <div id="top" />

        <Hero t={t} locale={locale} />

        <TrustStrip t={t} locale={locale} />

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

        <Section id={SECTION_IDS.orientation} labelledBy="wegweiser-titel">
          <SectionHead
            id="wegweiser-titel"
            label={t.sections.orientation.kicker}
            title={joinTitle(t.sections.orientation)}
            lead={t.sections.orientation.lead}
          />
          <Wegweiser t={t} locale={locale} />
        </Section>

        <Section id={SECTION_IDS.catalog} labelledBy="kurse-titel">
          <SectionHead
            id="kurse-titel"
            label={t.sections.catalog.kicker}
            title={joinTitle(t.sections.catalog)}
            lead={t.sections.catalog.lead}
          />
          <CourseGrid nextDates={nextDates} t={t} locale={locale} />
          <details id={SECTION_IDS.schedule} className="group mt-12 scroll-mt-24 border-y border-border py-6">
            <summary className="cursor-pointer text-lg font-semibold text-teal">
              {t.hero.ctaSecondary}
            </summary>
            <div className="pt-6">
              <Schedule initial={schedule} t={t} locale={locale} />
            </div>
          </details>
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
