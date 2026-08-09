import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { buildMetadata } from '@/lib/metadata';

export const revalidate = 300;

export const metadata: Metadata = buildMetadata('th');

export default function ThaiPage() {
  return <HomePage locale="th" />;
}
