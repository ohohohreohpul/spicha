import { Reveal } from '@/components/ui/Reveal';

const PATHS = [
  {
    title: 'Eine Leistung ins bestehende Studio aufnehmen',
    text: 'Ein Kosmetikstudio, das nach dem Facial Lifting auch Gua Sha anbietet, verkauft an dieselben Kundinnen eine zweite Behandlung.',
  },
  {
    title: 'Im Hotel, Spa oder Massagebetrieb arbeiten',
    text: 'Betriebe im Hamburger Umland suchen Personal mit nachweisbarer Technik. Das Zertifikat ist das, was Sie vorlegen können.',
  },
  {
    title: 'Sicherheit vor der Selbstständigkeit',
    text: 'Viele kommen, weil sie ein eigenes Studio planen und vorher wissen wollen, ob ihre Hände das können. Der Hygienekurs gehört dann dazu.',
  },
  {
    title: 'Eine vorhandene Qualifikation erweitern',
    text: 'Wer schon massiert, holt sich hier eine Technik, die im eigenen Angebot fehlt — an einem Tag, ohne monatelange Ausbildung.',
  },
  {
    title: 'Eine Spezialisierung aufbauen',
    text: 'Schwangerschaftsmassage oder Lymphdrainage bringen eine Kundengruppe, um die sich sonst kaum jemand kümmert.',
  },
] as const;

export function Outcomes() {
  return (
    <div className="mt-12">
      <ul className="grid border-t border-ink/15 md:grid-cols-2">
        {PATHS.map((path, index) => {
          const isLead = index === 0;
          // Second column of each row carries the vertical hairline.
          const isRightColumn = !isLead && index % 2 === 0;

          return (
            <li
              key={path.title}
              className={`border-b border-hairline ${isLead ? 'md:col-span-2' : ''} ${
                isRightColumn ? 'md:border-l md:border-l-hairline md:pl-10' : ''
              } ${!isLead && !isRightColumn ? 'md:pr-10' : ''}`}
            >
              <Reveal delay={Math.min(index * 70, 280)} className="h-full">
                <div className="flex h-full flex-col justify-between gap-5 py-9">
                  <h3
                    className={`font-display leading-tight ${
                      isLead
                        ? 'max-w-[20ch] text-[clamp(1.75rem,1.2rem+2vw,3rem)]'
                        : 'max-w-[26ch] text-[clamp(1.35rem,1.1rem+0.9vw,1.75rem)]'
                    }`}
                  >
                    {path.title}
                  </h3>
                  <p className="max-w-[52ch] leading-relaxed text-ink-muted">{path.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 max-w-[70ch] border-t border-hairline pt-5 text-xs leading-relaxed text-ink-muted">
        Diese Wege sind möglich, aber nicht zugesichert. Die Schule vermittelt Fähigkeiten und
        Nachweise, keine Arbeitsstellen und keine Einkommensgarantie.
      </p>
    </div>
  );
}
