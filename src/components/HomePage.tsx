import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { CourseFamilies } from '@/components/catalog/CourseFamilies';
import { LocationFaq } from '@/components/contact/LocationFaq';
import { Evidence } from '@/components/evidence/Evidence';
import { FeaturedCourse } from '@/components/featured/FeaturedCourse';
import { BodyFinder } from '@/components/finder/BodyFinder';
import { Hero } from '@/components/hero/Hero';
import { LearningSequence } from '@/components/learn/LearningSequence';
import { Outcomes } from '@/components/outcomes/Outcomes';
import { SchoolStory } from '@/components/people/SchoolStory';
import { Schedule } from '@/components/schedule/Schedule';
import { StructuredData } from '@/components/seo/StructuredData';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FEATURED_PROGRAM_ID } from '@/data/programs';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { getUi } from '@/i18n/ui';
import { getNextSession, getSchedule } from '@/lib/schedule';

/**
 * The whole one-page experience, rendered once per language.
 * Section anchors are identical in both, so links survive a language switch.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const schedule = getSchedule(locale);
  const nextSession = getNextSession(schedule);

  return (
    <>
      <SiteHeader t={t} locale={locale} />

      <main id="inhalt">
        <div id="top" />

        <Hero
          nextSession={nextSession}
          syncedAtLabel={schedule.syncedAtLabel}
          stale={schedule.stale}
          t={t}
          locale={locale}
        />

        <TrustStrip t={t} locale={locale} />

        <section id={SECTION_IDS.finder} aria-labelledby="kursfinder-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.finder} id="kursfinder-titel" />
            <BodyFinder t={t} locale={locale} />
          </div>
        </section>

        <section
          id={SECTION_IDS.schedule}
          aria-labelledby="termine-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.schedule} id="termine-titel" />
            <Schedule initial={schedule} t={t} locale={locale} />
          </div>
        </section>

        <section id={SECTION_IDS.catalog} aria-labelledby="kurse-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.catalog} id="kurse-titel" />
            <CourseFamilies t={t} locale={locale} />
          </div>
        </section>

        <section
          id={SECTION_IDS.featured}
          aria-labelledby="beispielkurs-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.featured} id="beispielkurs-titel" />
            <FeaturedCourse
              programId={FEATURED_PROGRAM_ID}
              sessions={schedule.sessions}
              t={t}
              locale={locale}
            />
          </div>
        </section>

        <section id={SECTION_IDS.learn} aria-labelledby="lernen-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.learn} id="lernen-titel" />
            <LearningSequence t={t} />
          </div>
        </section>

        <section
          id={SECTION_IDS.outcomes}
          aria-labelledby="danach-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.outcomes} id="danach-titel" />
            <Outcomes t={t} />
          </div>
        </section>

        <section id={SECTION_IDS.school} aria-labelledby="schule-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.school} id="schule-titel" />
            <SchoolStory t={t} locale={locale} />
          </div>
        </section>

        <section
          id={SECTION_IDS.evidence}
          aria-labelledby="belege-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.evidence} id="belege-titel" />
            <Evidence t={t} />
          </div>
        </section>

        <section id={SECTION_IDS.contact} aria-labelledby="anfrage-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader copy={t.sections.contact} id="anfrage-titel" />
            <LocationFaq sessions={schedule.sessions} t={t} locale={locale} />
          </div>
        </section>
      </main>

      <SiteFooter t={t} locale={locale} />
      <StructuredData locale={locale} />
    </>
  );
}
