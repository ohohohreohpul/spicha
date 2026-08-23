'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DUR, EASE_PATH } from '@/lib/motion';

let registered = false;

/**
 * Registers GSAP once for the whole document and sets the house defaults, so
 * no individual component has to think about plugins or easing.
 *
 * Deliberately not ScrollSmoother: it needs every fixed element hoisted out of
 * a transformed wrapper, and it replaces the browser's own scrolling. The
 * choreography here rides native scroll instead.
 */
export function MotionRoot() {
  useEffect(() => {
    if (registered) return;
    registered = true;

    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, CustomEase);

    for (const [name, path] of Object.entries(EASE_PATH)) {
      CustomEase.create(name, path);
    }

    gsap.defaults({ ease: 'outQuart', duration: DUR.d3 });

    // Anchor jumps are instant scrolls; let the pins settle afterwards.
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Webfonts land after first paint and change every line box. Without this
    // the trigger positions are computed against the fallback metrics.
    void document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return null;
}
