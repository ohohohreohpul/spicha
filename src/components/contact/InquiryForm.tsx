'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PROGRAMS } from '@/data/programs';
import { SCHOOL } from '@/data/school';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { SessionView } from '@/lib/types';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type Errors = Partial<Record<'name' | 'contact' | 'program' | 'consent', string>>;

function readHashParams(): { kurs?: string; termin?: string } {
  if (typeof window === 'undefined') return {};
  const [, query] = window.location.hash.split('?');
  if (!query) return {};
  const params = new URLSearchParams(query);
  return {
    kurs: params.get('kurs') ?? undefined,
    termin: params.get('termin') ?? undefined,
  };
}

/**
 * Programme-specific inquiry. The selected course and session travel with the
 * request, so nobody has to re-explain what they clicked on.
 */
export function InquiryForm({
  sessions,
  t,
  locale,
}: {
  sessions: readonly SessionView[];
  t: UiDictionary;
  locale: Locale;
}) {
  const [programSlug, setProgramSlug] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [reason, setReason] = useState<string>(t.form.reasons[0]);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  // Pick up "#anfrage?kurs=…&termin=…" from every course link on the page.
  useEffect(() => {
    const apply = () => {
      const { kurs, termin } = readHashParams();
      if (kurs) setProgramSlug(kurs);
      if (termin) setSessionId(termin);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const sessionsForProgram = sessions.filter(
    (session) => !programSlug || session.programSlug === programSlug,
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();

    if (name.length < 2) nextErrors.name = t.form.errors.name;
    if (!email && !phone) {
      nextErrors.contact = t.form.errors.contact;
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nextErrors.contact = t.form.errors.email;
    }
    if (!data.get('program')) nextErrors.program = t.form.errors.program;
    if (!data.get('consent')) nextErrors.consent = t.form.errors.consent;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/api/anfrage', {
        method: 'POST',
        body: data,
      });
      if (!response.ok) throw new Error(`Response ${response.status}`);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border-t-2 border-teal bg-paper p-8">
        <h3 className="font-display text-2xl leading-tight">{t.form.sentTitle}</h3>
        <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-muted">{t.form.sentBody}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4"
        >
          {t.form.sentAgain}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t-2 border-ink bg-paper p-6 sm:p-8">
      <h3 className="font-display text-2xl leading-tight">{t.form.title}</h3>
      <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-muted">{t.form.intro}</p>

      {Object.keys(errors).length > 0 ? (
        <div
          role="alert"
          className="mt-6 border-l-2 border-pressure bg-pressure/5 px-4 py-3 text-sm"
        >
          <p className="font-semibold">{t.form.errorSummary}</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-ink-muted">
            {Object.values(errors).map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label={t.form.name} htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className="min-h-11 w-full border border-hairline bg-porcelain px-4 text-sm"
          />
        </Field>

        <Field label={t.form.phone} htmlFor="phone" hint={t.form.phoneHint}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="min-h-11 w-full border border-hairline bg-porcelain px-4 text-sm"
          />
        </Field>

        <Field
          label={t.form.email}
          htmlFor="email"
          error={errors.contact}
          className="sm:col-span-2"
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.contact)}
            className="min-h-11 w-full border border-hairline bg-porcelain px-4 text-sm"
          />
        </Field>

        <Field label={t.form.course} htmlFor="program" error={errors.program} required>
          <select
            id="program"
            name="program"
            value={programSlug}
            onChange={(event) => {
              setProgramSlug(event.target.value);
              setSessionId('');
            }}
            aria-invalid={Boolean(errors.program)}
            className="min-h-11 w-full border border-hairline bg-porcelain px-4 text-sm"
          >
            <option value="">{t.form.choose}</option>
            {PROGRAMS.map((program) => (
              <option key={program.slug} value={program.slug}>
                {program.title[locale]}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t.form.session} htmlFor="session" hint={t.form.sessionHint}>
          <select
            id="session"
            name="session"
            value={sessionId}
            onChange={(event) => setSessionId(event.target.value)}
            className="min-h-11 w-full border border-hairline bg-porcelain px-4 text-sm"
          >
            <option value="">{t.form.noSession}</option>
            {sessionsForProgram.map((session) => (
              <option key={session.id} value={session.id}>
                {session.dateLabel} — {session.programTitle}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t.form.reason} htmlFor="reason" className="sm:col-span-2">
          <div className="flex flex-wrap gap-2">
            {t.form.reasons.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setReason(item)}
                aria-pressed={reason === item}
                className={`min-h-11 rounded-full border px-4 text-sm transition-colors duration-150 ${
                  reason === item
                    ? 'border-teal bg-teal text-paper'
                    : 'border-hairline text-ink hover:border-teal hover:text-teal'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <input type="hidden" id="reason" name="reason" value={reason} readOnly />
        </Field>

        <Field
          label={t.form.message}
          htmlFor="message"
          className="sm:col-span-2"
          hint={t.form.optional}
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-hairline bg-porcelain px-4 py-3 text-sm"
          />
        </Field>

        <Field label={t.form.replyLanguage} htmlFor="language" className="sm:col-span-2">
          <div className="flex gap-2">
            {['Deutsch', 'ไทย'].map((option) => (
              <label
                key={option}
                className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-hairline px-4 text-sm has-checked:border-teal has-checked:text-teal"
              >
                <input
                  type="radio"
                  name="language"
                  value={option}
                  defaultChecked={locale === 'th' ? option === 'ไทย' : option === 'Deutsch'}
                  className="accent-[var(--color-teal)]"
                />
                <span className={option === 'ไทย' ? 'thai' : undefined}>{option}</span>
              </label>
            ))}
          </div>
        </Field>
      </div>

      {/* Honeypot — a quiet anti-spam control instead of a CAPTCHA. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="consent"
          aria-invalid={Boolean(errors.consent)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-teal)]"
        />
        <span className="text-ink-muted">{t.form.consent}</span>
      </label>

      {status === 'error' ? (
        <p role="alert" className="mt-5 border-l-2 border-pressure bg-pressure/5 px-4 py-3 text-sm">
          {t.form.sendError} <span className="numeric">{SCHOOL.phone}</span>
        </p>
      ) : null}

      <Button type="submit" disabled={status === 'sending'} className="mt-7 w-full sm:w-auto">
        {status === 'sending' ? t.form.sending : t.form.submit}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  error,
  hint,
  required,
  className = '',
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
        {required ? <span className="ml-1 text-pressure">*</span> : null}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-ink-muted">{hint}</p> : null}
      {error ? <p className="text-xs font-medium text-pressure">{error}</p> : null}
    </div>
  );
}
