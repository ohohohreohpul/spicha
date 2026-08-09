'use client';

import { memo, useEffect, useRef, useState } from 'react';

export type Clip = {
  readonly src: string;
  readonly poster: string;
  readonly alt: string;
};

const CROSSFADE_MS = 1100;
/** Cut a little before the file ends so the crossfade never lands on a frozen frame. */
const TAIL_TRIM_MS = 900;
const FALLBACK_CLIP_MS = 4600;

/**
 * The Working Hand — a cinematic sequence, not a looping stock plate.
 *
 * Isolated client leaf: no parent re-renders, no scroll listener. The sequence
 * pauses entirely when off-screen and collapses to a single still frame when
 * the visitor has asked for reduced motion.
 */
function HeroVideoSequenceImpl({ clips }: { clips: readonly Clip[] }) {
  const [active, setActive] = useState(0);
  const [motionOk, setMotionOk] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotionOk(!query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  // Advance the sequence.
  useEffect(() => {
    if (!motionOk || clips.length < 2) return;

    const current = videoRefs.current[active];
    const duration = current?.duration;
    const holdMs =
      duration && Number.isFinite(duration)
        ? Math.max(1500, duration * 1000 - TAIL_TRIM_MS)
        : FALLBACK_CLIP_MS;

    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % clips.length);
    }, holdMs);

    return () => window.clearTimeout(timer);
  }, [active, clips.length, motionOk]);

  // Play only the active clip, and only while the hero is on screen.
  useEffect(() => {
    if (!motionOk) {
      videoRefs.current.forEach((video) => video?.pause());
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    let onScreen = true;

    const apply = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (index === active && onScreen) {
          video.currentTime = 0;
          void video.play().catch(() => {
            /* Autoplay can be refused; the poster frame stays visible. */
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        apply();
      },
      { threshold: 0.05 },
    );

    observer.observe(node);
    apply();

    return () => observer.disconnect();
  }, [active, motionOk]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-ink">
      {clips.map((clip, index) => (
        <video
          key={clip.src}
          ref={(node) => {
            videoRefs.current[index] = node;
          }}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] will-change-[opacity]"
          style={{
            opacity: index === active ? 1 : 0,
            transition: `opacity ${CROSSFADE_MS}ms var(--ease-in-out-cubic)`,
          }}
          src={motionOk || index === 0 ? clip.src : undefined}
          poster={clip.poster}
          muted
          playsInline
          preload={index === 0 ? 'auto' : 'metadata'}
          aria-hidden={index !== active}
          tabIndex={-1}
        />
      ))}

      {/* Alt text for the sequence lives once, on the region, not per video element. */}
      <span className="sr-only">{clips[active]?.alt}</span>
    </div>
  );
}

export const HeroVideoSequence = memo(HeroVideoSequenceImpl);
