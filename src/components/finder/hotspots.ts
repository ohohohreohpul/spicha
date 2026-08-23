import type { BodyArea } from '@/lib/types';

/**
 * Hotspot positions as percentages of the body-map image box.
 * Tuned to the figure in /img/body-map.jpg — re-check when the image is replaced.
 */
export type Hotspot = {
  readonly area: BodyArea;
  readonly x: number;
  readonly y: number;
  /** Which side the connector line and label run toward. */
  readonly side: 'left' | 'right';
};

export const HOTSPOTS: readonly Hotspot[] = [
  { area: 'kopf-gesicht', x: 50, y: 8, side: 'right' },
  { area: 'nacken-schulter', x: 42, y: 23, side: 'left' },
  { area: 'ganzkoerper', x: 50, y: 34, side: 'right' },
  { area: 'arme-beine', x: 34, y: 47, side: 'left' },
  { area: 'ruecken', x: 57, y: 44, side: 'right' },
  { area: 'haende-naegel', x: 62, y: 59, side: 'right' },
  { area: 'fuesse', x: 50, y: 93, side: 'left' },
];
