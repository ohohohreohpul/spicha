/**
 * Motion tokens — one source of truth for GSAP and CSS.
 *
 * The curves below are the same cubic-beziers declared in globals.css. They
 * get registered with CustomEase under these names so a GSAP tween and a CSS
 * transition on the same element cannot drift apart.
 */

/** Seconds, because GSAP counts in seconds and CSS counts in milliseconds. */
export const DUR = {
  d1: 0.12,
  d2: 0.18,
  d3: 0.24,
  d4: 0.3,
  d5: 0.5,
  illustrative: 0.9,
  cinematic: 1.4,
} as const;

/**
 * CustomEase path form of a cubic-bezier: control points p1 and p2 between
 * (0,0) and (1,1).
 */
export const EASE_PATH = {
  outQuad: 'M0,0 C0.25,0.46 0.45,0.94 1,1',
  outCubic: 'M0,0 C0.215,0.61 0.355,1 1,1',
  outQuart: 'M0,0 C0.165,0.84 0.44,1 1,1',
  outQuint: 'M0,0 C0.23,1 0.32,1 1,1',
  outExpo: 'M0,0 C0.19,1 0.22,1 1,1',
  outCirc: 'M0,0 C0.075,0.82 0.165,1 1,1',
  inOutCubic: 'M0,0 C0.645,0.045 0.355,1 1,1',
  inOutQuart: 'M0,0 C0.77,0 0.175,1 1,1',
} as const;

export type EaseName = keyof typeof EASE_PATH;

/** Only run choreography when the reader has not asked for less motion. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

/** Desktop-only devices, for anything that pins or hijacks the scroll. */
export const DESKTOP_OK = '(prefers-reduced-motion: no-preference) and (min-width: 1024px)';
