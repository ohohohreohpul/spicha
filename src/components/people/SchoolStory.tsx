import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { FOUNDER, RECOGNITION } from '@/data/school';

export function SchoolStory() {
  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20">
      <div>
        <Reveal>
          <figure>
            <div className="relative aspect-4/3 overflow-hidden bg-porcelain-deep">
              <Image
                src="/img/school-team.jpg"
                alt="Sunisa Picha mit zwei Kolleginnen und einem Kollegen in weißen Kitteln vor dem Schullogo, daneben die gerahmte BfD-Anerkennung."
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-ink-muted">
              Die Schulleitung in Ahrensburg, daneben die Anerkennung durch den BfD.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid grid-cols-[8rem_minmax(0,1fr)] gap-6">
          <Reveal delay={80}>
            <figure>
              <div className="relative aspect-3/4 overflow-hidden bg-porcelain-deep grayscale">
                <Image
                  src="/img/founder-1983.jpg"
                  alt="Archivfoto von Sunisa Picha als junge Krankenpflegeschülerin in Uniform, 1983."
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <figcaption className="numeric mt-2 text-[0.7rem] text-ink-muted">1983</figcaption>
            </figure>
          </Reveal>

          <div className="self-center">
            <p className="max-w-[38ch] font-display text-xl leading-snug">
              Krankenpflege in Thailand, staatliche Prüfung in Deutschland, Lehrbefugnis seit 2005 —
              der Weg, den viele ihrer Schülerinnen noch vor sich haben.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              {FOUNDER.name} <span className="thai" lang="th">({FOUNDER.nickname})</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="kicker">{FOUNDER.role}</p>
        <h3 className="mt-3 font-display text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.02]">
          {FOUNDER.name}
        </h3>
        <p className="thai mt-1 text-lg text-ink-muted" lang="th">
          {FOUNDER.nameThai}
        </p>

        <p className="mt-6 max-w-[52ch] text-[length:var(--text-lead)] leading-relaxed">
          Sunisa Picha kam aus der Krankenpflege in Thailand nach Deutschland, machte hier die
          staatliche Prüfung als Kosmetikerin und unterrichtet seit 2005 mit behördlicher
          Ausbildungsbefugnis. Wer bei ihr lernt, lernt bei jemandem, der beide Systeme von innen
          kennt.
        </p>

        <ul className="mt-7 space-y-2">
          {FOUNDER.qualifications.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <ol className="mt-10 border-t border-hairline">
          {FOUNDER.timeline.map((entry) => (
            <li
              key={`${entry.year}-${entry.text}`}
              className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 border-b border-hairline py-3.5"
            >
              <span className="numeric text-sm font-semibold text-teal">{entry.year}</span>
              <span className="text-sm leading-relaxed text-ink-muted">{entry.text}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[52ch] border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-ink-muted">
          {RECOGNITION.bfd}. Die Prüfung im Hygienekurs zeichnet {RECOGNITION.hygieneCertifier}.
        </p>
      </div>
    </div>
  );
}
