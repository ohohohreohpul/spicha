import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const FACTS = [
  { value: '1997', label: 'Jahr, seit dem Sunisa Picha in Deutschland unterrichtet und ausbildet' },
  { value: '12', label: 'Kurse im Programm, vom Ein-Tages-Kurs bis zur Ausbildung' },
  { value: '3', label: 'Standorte: Rosbach, Frankfurt-Umgebung und Ahrensburg' },
  { value: '8', label: 'Unterrichtsstunden im Hygienekurs, mit Kenntnisprüfung' },
] as const;

export function Evidence() {
  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div>
        <dl className="border-t border-ink/15">
          {FACTS.map((fact, index) => (
            <Reveal key={fact.value} delay={index * 70}>
              <div className="flex items-baseline gap-6 border-b border-hairline py-5">
                <dt className="numeric w-20 shrink-0 font-display text-3xl text-teal">
                  {fact.value}
                </dt>
                <dd className="text-sm leading-relaxed text-ink-muted">{fact.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
          Nach jedem Kurs steht dieselbe Szene am Ende: die Gruppe mit den Zertifikaten in der Hand.
          Was danach daraus wird, entscheidet jede Teilnehmerin selbst.
        </p>
      </div>

      <div>
        <Reveal>
          <figure>
            <div className="relative aspect-3/4 overflow-hidden bg-porcelain-deep sm:aspect-4/5">
              <Image
                src="/img/evidence-poster.jpg"
                alt="Informationsblatt der Schule mit Fotos von Absolventinnengruppen, die ihre Zertifikate halten, und den Angaben zum Standort Ahrensburg."
                fill
                sizes="(max-width: 1024px) 92vw, 52vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 max-w-[56ch] text-xs leading-relaxed text-ink-muted">
              Aufnahmen aus dem Schulbetrieb, bereitgestellt von der Kosmetikschule Picha.
              Namentliche Erfahrungsberichte werden hier ergänzt, sobald die Einwilligung der
              abgebildeten Personen schriftlich vorliegt.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  );
}
