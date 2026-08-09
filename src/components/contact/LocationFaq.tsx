import { InquiryForm } from '@/components/contact/InquiryForm';
import { FAQS } from '@/data/faq';
import { SCHOOL } from '@/data/school';
import type { SessionView } from '@/lib/types';

const MAP_QUERY = encodeURIComponent(
  `${SCHOOL.street}, ${SCHOOL.postalCode} ${SCHOOL.city}, ${SCHOOL.country}`,
);

export function LocationFaq({ sessions }: { sessions: readonly SessionView[] }) {
  return (
    <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20">
      <div>
        <div className="border-t border-ink/15 pt-6">
          <p className="kicker">Adresse</p>
          <p className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-tight">
            {SCHOOL.street}
            <br />
            {SCHOOL.postalCode} {SCHOOL.city}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{SCHOOL.seminarHost}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Telefon</dt>
              <dd className="numeric mt-1">
                <a href={SCHOOL.phoneHref} className="font-semibold text-teal">
                  {SCHOOL.phone}
                </a>
                <span className="ml-2 text-sm text-ink-muted">{SCHOOL.contactPerson}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Anreise</dt>
              <dd className="mt-1 text-sm leading-relaxed">
                U1 bis Ahrensburg, wenige Gehminuten. Aus Hamburg rund 30 Minuten.
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Teilnehmende reisen regelmäßig aus {SCHOOL.travelFrom.join(', ')} an. Ein Kurstag von
            09:00 bis 17:00 ist von dort an einem Tag machbar.
          </p>

          <a
            href={`https://www.openstreetmap.org/search?query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center rounded-full border border-ink/20 px-5 text-sm font-semibold transition-colors duration-150 hover:border-teal hover:text-teal"
          >
            Auf der Karte ansehen
          </a>
        </div>

        <div className="mt-14">
          <p className="kicker">Häufige Fragen</p>
          <div className="mt-4 border-t border-hairline">
            {FAQS.map((entry) => (
              <details key={entry.q} className="group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden">
                  {entry.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline transition-transform duration-[var(--dur-3)] ease-[var(--ease-in-out-cubic)] group-open:rotate-45"
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                      <path
                        d="M5.5 0v11M0 5.5h11"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-ink-muted">
                  {entry.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <InquiryForm sessions={sessions} />
      </div>
    </div>
  );
}
