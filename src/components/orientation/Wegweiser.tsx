import { CourseGuide } from '@/components/catalog/CourseGuide';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/hero-08-utils/button';
import { PROGRAMS } from '@/data/programs';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { fill, type UiDictionary } from '@/i18n/ui';

export function Wegweiser({ t, locale }: { t: UiDictionary; locale: Locale }) {
  return (
    <div>
      <div id={SECTION_IDS.finder} className="scroll-mt-24">
        <CourseGuide t={t} locale={locale} />
        <FadeIn className="mt-4">
          <a
            href={`#${SECTION_IDS.catalog}`}
            className="text-sm font-semibold text-teal underline underline-offset-4 transition-colors duration-150 hover:text-teal-deep"
          >
            {fill(t.wegweiser.allCourses, { count: PROGRAMS.length })} →
          </a>
        </FadeIn>
      </div>

      {/* The remainder, honestly handled: some people want a human answer. */}
      <FadeIn className="mt-16">
        <div className="rounded-lg bg-muted px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:px-10">
          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight">
              {t.wegweiser.unsureTitle}
            </h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
              {t.wegweiser.unsureText}
            </p>
          </div>
          <Button asChild className="mt-5 shrink-0 sm:mt-0">
            <a href={`#${SECTION_IDS.contact}`}>{t.wegweiser.unsureCta}</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
