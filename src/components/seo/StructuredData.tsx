import { PROGRAMS } from '@/data/programs';
import { RECOGNITION, SCHOOL } from '@/data/school';
import { FAQS } from '@/data/faq';
import type { Locale } from '@/i18n/config';
import { SITE_URL } from '@/lib/metadata';
import { getSchedule } from '@/lib/schedule';

/**
 * EducationalOrganization + Course + Event graph.
 * Every scheduled session links its Event back to the Course it belongs to.
 */
export function StructuredData({ locale }: { locale: Locale }) {
  const { sessions } = getSchedule(locale);
  const orgId = `${SITE_URL}#organisation`;

  const address = {
    '@type': 'PostalAddress',
    streetAddress: SCHOOL.street,
    postalCode: SCHOOL.postalCode,
    addressLocality: SCHOOL.city,
    addressRegion: SCHOOL.region,
    addressCountry: 'DE',
  };

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'EducationalOrganization',
      '@id': orgId,
      name: SCHOOL.name,
      url: SITE_URL,
      telephone: SCHOOL.phone,
      address,
      geo: { '@type': 'GeoCoordinates', latitude: SCHOOL.geo.lat, longitude: SCHOOL.geo.lng },
      knowsLanguage: ['de', 'th'],
      description: RECOGNITION.bfd[locale],
      areaServed: ['Ahrensburg', 'Hamburg', 'Schleswig-Holstein'],
    },
    ...PROGRAMS.map((program) => ({
      '@type': 'Course',
      '@id': `${SITE_URL}/kurse/${program.slug}#course`,
      name: program.title[locale],
      description: program.subtitle[locale],
      inLanguage: program.languages.includes('th') ? ['de', 'th'] : ['de'],
      provider: { '@id': orgId },
      offers: {
        '@type': 'Offer',
        price: program.price,
        priceCurrency: 'EUR',
        category: 'Weiterbildung',
      },
      hasCourseInstance: sessions
        .filter((s) => s.programSlug === program.slug)
        .map((s) => ({
          '@type': 'CourseInstance',
          courseMode: 'onsite',
          startDate: s.startIso,
          endDate: s.endIso,
          location: { '@type': 'Place', name: SCHOOL.name, address },
        })),
    })),
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}#faq`,
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q[locale],
        acceptedAnswer: { '@type': 'Answer', text: item.a[locale] },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Structured data is generated from our own typed content, not user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
