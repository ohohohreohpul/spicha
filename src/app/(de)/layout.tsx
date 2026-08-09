import { RootShell } from '@/components/chrome/RootShell';

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="de">{children}</RootShell>;
}
