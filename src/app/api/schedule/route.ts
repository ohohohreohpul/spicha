import { NextResponse } from 'next/server';
import { getSchedule } from '@/lib/schedule';

/**
 * Public schedule API. Approved programme and session data only —
 * no capacity internals beyond published places, no personal data.
 */
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const payload = getSchedule();
    return NextResponse.json(payload, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' },
    });
  } catch (error) {
    console.error('[schedule] failed to build payload', error);
    return NextResponse.json(
      { error: 'Terminliste momentan nicht verfügbar.' },
      { status: 503 },
    );
  }
}
