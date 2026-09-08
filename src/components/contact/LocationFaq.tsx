import { InquiryForm } from '@/components/contact/InquiryForm';
import { FAQS } from '@/data/faq';
import { SCHOOL } from '@/data/school';
import type { Locale } from '@/i18n/config';
import { fill, type UiDictionary } from '@/i18n/ui';
import type { SessionView } from '@/lib/types';

const MAP_QUERY = encodeURIComponent(
  `${SCHOOL.street}, ${SCHOOL.postalCode} ${SCHOOL.city}, ${SCHOOL.country}`,
);

/** Address, FAQ and the inquiry form — one quiet two-column close. */
export function LocationFaq({
  sessions,
  t,
  locale,
}: {
  sessions: readonly SessionView[];
  t: UiDictionary;
  locale: Locale;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="text-sm font-semibold text-teal">{t.contact.address}</p>
        <p className="mt-3 font-serif text-2xl leading-tight tracking-tight">
          {SCHOOL.street}
          <br />
          {SCHOOL.postalCode} {SCHOOL.city}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{SCHOOL.seminarHost}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-muted-foreground">{t.contact.phone}</dt>
            <dd className="numeric mt-1">
              <a href={SCHOOL.phoneHref} className="font-semibold text-teal hover:text-teal-deep">
                {SCHOOL.phone}
              </a>
              <span className="ml-2 text-sm text-muted-foreground">
                {SCHOOL.contactPerson[locale]}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t.contact.travel}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{t.contact.travelValue}</dd>
          </div>
        </dl>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {fill(t.contact.travelNote, { cities: SCHOOL.travelFrom.join(', ') })}
        </p>

        <a
          href={`https://www.openstreetmap.org/search?query=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm font-semibold transition-colors duration-150 hover:border-teal hover:text-teal"
        >
          {t.contact.map}
        </a>

        <div className="mt-12">
          <p className="text-sm font-semibold text-teal">{t.contact.faq}</p>
          <div className="mt-4 border-t border-border">
            {FAQS.slice(0, 6).map((entry) => (
              <details key={entry.q.de} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden">
                  {entry.q[locale]}
                  <span
                    aria-hidden
                    className="text-lg leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-muted-foreground">
                  {entry.a[locale]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <InquiryForm sessions={sessions} t={t} locale={locale} />
      </div>
    </div>
  );
}
