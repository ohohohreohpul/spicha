import { NextResponse } from 'next/server';
import { PROGRAM_BY_SLUG } from '@/data/programs';

/**
 * Inquiry endpoint.
 *
 * Validates at the boundary and never trusts the posted payload. In production
 * this hands the inquiry to the school's mailbox and WhatsApp assistant; here it
 * validates, logs a redacted record, and confirms receipt.
 */
export const dynamic = 'force-dynamic';

const MAX_MESSAGE_LENGTH = 4000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function field(data: FormData, key: string, maxLength = 200): string {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // Honeypot: silently accept so a bot learns nothing, but do no work.
    if (field(data, 'website')) {
      return NextResponse.json({ ok: true });
    }

    const name = field(data, 'name', 120);
    const email = field(data, 'email', 160);
    const phone = field(data, 'phone', 60);
    const programSlug = field(data, 'program', 80);
    const consent = data.get('consent');

    const errors: string[] = [];
    if (name.length < 2) errors.push('name');
    if (!email && !phone) errors.push('contact');
    if (email && !EMAIL_PATTERN.test(email)) errors.push('email');
    if (!PROGRAM_BY_SLUG.has(programSlug)) errors.push('program');
    if (!consent) errors.push('consent');

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, fields: errors }, { status: 422 });
    }

    // Server-side log without the contact details — no personal data in logs.
    console.info('[anfrage] received', {
      program: programSlug,
      session: field(data, 'session', 80),
      reason: field(data, 'reason', 80),
      language: field(data, 'language', 20),
      messageLength: field(data, 'message', MAX_MESSAGE_LENGTH).length,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[anfrage] failed to process request', error);
    return NextResponse.json({ ok: false, error: 'Verarbeitung fehlgeschlagen.' }, { status: 500 });
  }
}
