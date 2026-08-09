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
import { TrustStrip } from '@/components/trust/TrustStrip';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FEATURED_PROGRAM_ID } from '@/data/programs';
import { getNextSession, getSchedule } from '@/lib/schedule';

/** Schedule facts are re-read every five minutes without a rebuild. */
export const revalidate = 300;

export default function Page() {
  const schedule = getSchedule();
  const nextSession = getNextSession(schedule);

  return (
    <>
      <SiteHeader />

      <main id="inhalt">
        <div id="top" />

        <Hero
          nextSession={nextSession}
          syncedAtLabel={schedule.syncedAtLabel}
          stale={schedule.stale}
        />

        <TrustStrip />

        <section id="kursfinder" aria-labelledby="kursfinder-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="03"
              kicker="Kurs finden"
              id="kursfinder-titel"
              title={
                <>
                  Wo soll Ihre Arbeit <span className="italic text-teal">ansetzen</span>?
                </>
              }
              lead="Die meisten Menschen suchen keinen Kursnamen, sondern eine Stelle am Körper, an der etwas nicht stimmt. Wählen Sie den Bereich — die passenden Kurse erscheinen daneben."
            />
            <BodyFinder />
          </div>
        </section>

        <section
          id="termine"
          aria-labelledby="termine-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="04"
              kicker="Live-Termine"
              id="termine-titel"
              title={
                <>
                  Die nächsten <span className="italic text-teal">Kurstage</span>
                </>
              }
              lead="Jeder Termin zeigt Datum, Zeit, Sprache, Gebühr und freie Plätze. Die Liste wird direkt aus dem Kalender der Schulleitung gepflegt."
            />
            <Schedule initial={schedule} />
          </div>
        </section>

        <section id="kurse" aria-labelledby="kurse-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="05"
              kicker="Das Programm"
              id="kurse-titel"
              title={
                <>
                  Zwölf Kurse, drei <span className="italic text-teal">Wege</span>
                </>
              }
              lead="Vom Ein-Tages-Kurs, den Sie am Montag darauf anwenden, bis zur mehrtägigen Ausbildung mit Prüfung."
            />
            <CourseFamilies />
          </div>
        </section>

        <section
          id="beispielkurs"
          aria-labelledby="beispielkurs-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="06"
              kicker="Ein Kurs im Detail"
              id="beispielkurs-titel"
              title={
                <>
                  So genau steht jeder <span className="italic text-teal">Kurs</span> hier
                </>
              }
              lead="Was Sie lernen, was geprüft wird, was es kostet und wann der nächste Termin ist — für jeden Kurs nach demselben Muster."
            />
            <FeaturedCourse programId={FEATURED_PROGRAM_ID} sessions={schedule.sessions} />
          </div>
        </section>

        <section id="lernen" aria-labelledby="lernen-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="07"
              kicker="Der Kurstag"
              id="lernen-titel"
              title={
                <>
                  Sechs Schritte, bis es in der <span className="italic text-teal">Hand</span> sitzt
                </>
              }
              lead="Erklären, zeigen, üben, korrigieren, anwenden, prüfen. Jeder Kurstag folgt derselben Abfolge."
            />
            <LearningSequence />
          </div>
        </section>

        <section
          id="danach"
          aria-labelledby="danach-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="08"
              kicker="Nach dem Kurs"
              id="danach-titel"
              title={
                <>
                  Was Menschen mit dieser Fähigkeit <span className="italic text-teal">anfangen</span>
                </>
              }
            />
            <Outcomes />
          </div>
        </section>

        <section id="schule" aria-labelledby="schule-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="09"
              kicker="Die Schule"
              id="schule-titel"
              title={
                <>
                  Von der Krankenpflege in Uttaradit nach{' '}
                  <span className="italic text-teal">Ahrensburg</span>
                </>
              }
              lead="Wer hier unterrichtet, hat den Weg selbst gemacht: eine Ausbildung in Thailand, eine staatliche Prüfung in Deutschland und die Befugnis, andere auszubilden."
            />
            <SchoolStory />
          </div>
        </section>

        <section
          id="belege"
          aria-labelledby="belege-titel"
          className="scroll-mt-24 bg-porcelain-deep"
        >
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="10"
              kicker="Belege"
              id="belege-titel"
              title={
                <>
                  Was sich <span className="italic text-teal">nachweisen</span> lässt
                </>
              }
            />
            <Evidence />
          </div>
        </section>

        <section id="anfrage" aria-labelledby="anfrage-titel" className="scroll-mt-24">
          <div className="shell py-[var(--spacing-section)]">
            <SectionHeader
              index="11"
              kicker="Anfahrt und Anfrage"
              id="anfrage-titel"
              title={
                <>
                  Fragen Sie nach einem <span className="italic text-teal">Platz</span>
                </>
              }
              lead="Sagen Sie uns, welcher Kurs und welcher Termin. Sie bekommen eine persönliche Antwort — auf Deutsch oder auf Thailändisch."
            />
            <LocationFaq sessions={schedule.sessions} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
