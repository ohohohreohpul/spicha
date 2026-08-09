import { RootShell } from '@/components/chrome/RootShell';

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="th">{children}</RootShell>;
}
