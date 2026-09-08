import type { Metadata } from 'next';
import { Hero08, type Hero08Props } from '@/components/ui/hero-08';

export const metadata: Metadata = {
  title: 'Hero08 Demo — Kosmetikschule Picha',
  robots: { index: false },
};

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Demo surface for the pasted hero-08, filled with the school's own offer. */
const values = {
  title: 'Ihre Hände können eine Zukunft bauen.',
  description:
    'Praktische Kurse in Massage, Fußpflege und Kosmetik in Ahrensburg — mit erfahrenen Ausbilderinnen, auf Deutsch und Thailändisch.',
  socialProof: 'Ausbildung mit behördlicher Lehrbefugnis seit 2005',
  avatars: [
    { src: unsplash('photo-1494790108377-be9c29b29330', 96), fallback: 'NS' },
    { src: unsplash('photo-1507003211169-0a1dd7228f2d', 96), fallback: 'TM' },
    { src: unsplash('photo-1438761681033-6461ffad8d80', 96), fallback: 'KA' },
  ],
  cards: [
    {
      title: 'Klassische Massage — der empfohlene Einstieg',
      subtitle: 'Mehrtägig · 550 € zzgl. 19 % MwSt. · ohne Vorkenntnisse',
      image: unsplash('photo-1544161515-4ab6ce6db874', 1600),
      imageAlt: 'Massagebehandlung am Rücken in hellem Praxisraum',
      invert: true,
      cta: { ctaEnabled: true, text: 'Platz anfragen', link: '/#anfrage', size: 'default' },
    },
    {
      title: 'Head Spa — neu im Programm',
      subtitle: '1 Tag · 349 € zzgl. 19 % MwSt. · mit Grundlagen',
      image: unsplash('photo-1540555700478-4be289fbecef', 1600),
      imageAlt: 'Entspannende Kopfmassage im Spa',
      invert: true,
      cta: { ctaEnabled: true, text: 'Platz anfragen', link: '/#anfrage', size: 'default' },
    },
  ],
  animation: 'subtle',
} satisfies Hero08Props;

export default function Hero08DemoPage() {
  return <Hero08 {...values} />;
}
