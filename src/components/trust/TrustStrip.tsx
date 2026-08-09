import { Reveal } from '@/components/ui/Reveal';
import { RECOGNITION, SCHOOL } from '@/data/school';

const POINTS = [
  {
    label: 'Anerkennung',
    value: RECOGNITION.bfdShort,
    detail: 'Vom Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V.',
    gold: true,
  },
  {
    label: 'Lehrbefugnis',
    value: 'Ausbildungsbefugnis Kosmetik und Wellness',
    detail: 'Erteilt durch das Regierungspräsidium Darmstadt an Sunisa Picha, 2005.',
    gold: true,
  },
  {
    label: 'Unterricht',
    value: 'Deutsch und ไทย',
    detail: 'Sie dürfen in der Sprache fragen, in der Sie denken.',
    gold: false,
  },
  {
    label: 'Praxis',
    value: 'Kleine Gruppen, Hand an Hand',
    detail: 'Bei jedem Termin sehen Sie, wie viele Plätze noch frei sind.',
    gold: false,
  },
  {
    label: 'Anreise',
    value: `${SCHOOL.city}, U1 ab Hamburg`,
    detail: SCHOOL.travelFrom.join(' · '),
    gold: false,
  },
] as const;

export function TrustStrip() {
  return (
    <section id="vertrauen" aria-labelledby="vertrauen-titel" className="bg-porcelain-deep">
      <div className="shell py-14 md:py-20">
        <h2 id="vertrauen-titel" className="sr-only">
          Anerkennung und Rahmenbedingungen
        </h2>

        {/* Hairline-divided rows, not a card grid. */}
        <ul className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2 lg:grid-cols-5">
          {POINTS.map((point, index) => (
            <li key={point.label} className="bg-porcelain-deep">
              <Reveal delay={index * 70} className="h-full">
                <div className="flex h-full flex-col gap-2 px-0 py-6 md:px-6 md:first:pl-0 lg:px-5">
                  <p
                    className={`text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
                      point.gold ? 'text-gold' : 'text-ink-muted'
                    }`}
                  >
                    {point.label}
                  </p>
                  <p className="font-display text-lg leading-snug">{point.value}</p>
                  <p className="text-sm leading-relaxed text-ink-muted">{point.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[76ch] border-t border-hairline pt-5 text-xs leading-relaxed text-ink-muted">
          Ein Zertifikat der Schule belegt die erfolgreiche Teilnahme an einem Kurs mit bestandener
          Prüfung. Es ist kein staatlicher Berufsabschluss. Welche Tätigkeiten Sie damit anbieten
          dürfen, richtet sich nach den gewerberechtlichen Vorgaben an Ihrem Standort.
        </p>
      </div>
    </section>
  );
}
