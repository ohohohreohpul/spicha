import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { buildMetadata } from '@/lib/metadata';

/** Schedule facts are re-read every five minutes without a rebuild. */
export const revalidate = 300;

export const metadata: Metadata = buildMetadata('de');

export default function Page() {
  return <HomePage locale="de" />;
}
