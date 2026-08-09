import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/i18n/config';
import { getSchedule } from '@/lib/schedule';

/**
 * Public schedule API. Approved programme and session data only —
 * no capacity internals beyond published places, no personal data.
 */
export const dynamic = 'force-dynamic';

function readLocale(request: Request): Locale {
  const raw = new URL(request.url).searchParams.get('locale');
  return LOCALES.includes(raw as Locale) ? (raw as Locale) : DEFAULT_LOCALE;
}

export async function GET(request: Request) {
  try {
    const payload = getSchedule(readLocale(request));
    return NextResponse.json(payload, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' },
    });
  } catch (error) {
    console.error('[schedule] failed to build payload', error);
    return NextResponse.json({ error: 'Schedule temporarily unavailable.' }, { status: 503 });
  }
}
