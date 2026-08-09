import { PROGRAMS } from '@/data/programs';
import { RECOGNITION } from '@/data/school';
import { FAQS } from '@/data/faq';
import { getSchedule } from '@/lib/schedule';

type SchoolFacts = {
  readonly name: string;
  readonly street: string;
  readonly postalCode: string;
  readonly city: string;
  readonly region: string;
  readonly phone: string;
  readonly geo: { readonly lat: number; readonly lng: number };
};

/**
 * EducationalOrganization + Course + Event graph.
 * Every scheduled session links its Event back to the Course it belongs to.
 */
export function StructuredData({ siteUrl, school }: { siteUrl: string; school: SchoolFacts }) {
  const { sessions } = getSchedule();
  const orgId = `${siteUrl}#organisation`;

  const address = {
    '@type': 'PostalAddress',
    streetAddress: school.street,
    postalCode: school.postalCode,
    addressLocality: school.city,
    addressRegion: school.region,
    addressCountry: 'DE',
  };

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'EducationalOrganization',
      '@id': orgId,
      name: school.name,
      url: siteUrl,
      telephone: school.phone,
      address,
      geo: { '@type': 'GeoCoordinates', latitude: school.geo.lat, longitude: school.geo.lng },
      knowsLanguage: ['de', 'th'],
      description: RECOGNITION.bfd,
      areaServed: ['Ahrensburg', 'Hamburg', 'Schleswig-Holstein'],
    },
    ...PROGRAMS.map((program) => ({
      '@type': 'Course',
      '@id': `${siteUrl}/kurse/${program.slug}#course`,
      name: program.title,
      description: program.subtitle,
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
          location: { '@type': 'Place', name: school.name, address },
        })),
    })),
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}#faq`,
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
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
