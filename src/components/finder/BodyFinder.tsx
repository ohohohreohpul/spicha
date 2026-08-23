'use client';

import Image from 'next/image';
import { useCallback, useMemo, useRef, useState } from 'react';
import { BODY_AREAS } from '@/data/body-areas';
import { PROGRAMS } from '@/data/programs';
import { HOTSPOTS } from '@/components/finder/hotspots';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { BodyArea } from '@/lib/types';

const AREA_ORDER = BODY_AREAS.map((area) => area.id);

function programsFor(area: BodyArea) {
  return PROGRAMS.filter((program) => program.bodyAreas.includes(area));
}

/**
 * Signature interaction: choose a body region, get the programmes that work on it.
 *
 * Accessibility contract:
 * - The map is a roving-tabindex radiogroup; arrow keys move between regions.
 * - Every region is also present in the text list on the right, which is the
 *   canonical, always-visible alternative — not a hidden fallback.
 * - The selected region is explained in words, not only by highlight colour.
 */
export function BodyFinder({ t, locale }: { t: UiDictionary; locale: Locale }) {
  const [selected, setSelected] = useState<BodyArea>('nacken-schulter');
  const [hovered, setHovered] = useState<BodyArea | null>(null);
  const buttonRefs = useRef<Partial<Record<BodyArea, HTMLButtonElement | null>>>({});

  const active = hovered ?? selected;
  const activeMeta = useMemo(() => BODY_AREAS.find((a) => a.id === active)!, [active]);
  const activePrograms = useMemo(() => programsFor(active), [active]);

  const move = useCallback((from: BodyArea, direction: 1 | -1) => {
    const mapOrder = HOTSPOTS.map((h) => h.area);
    const index = mapOrder.indexOf(from);
    const next = mapOrder[(index + direction + mapOrder.length) % mapOrder.length];
    setSelected(next);
    buttonRefs.current[next]?.focus();
  }, []);

  return (
    <div className="mt-[var(--space-block)] grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      {/* ---------------- Map ---------------- */}
      <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
        <div className="relative aspect-3/4 overflow-hidden bg-porcelain-deep">
          <Image
            src="/img/body-map.jpg"
            alt={t.finder.mapAlt}
            fill
            sizes="(max-width: 1024px) 92vw, 34vw"
            className="object-cover"
          />

          {/* Pressure paths: hairlines from the active point out to the edge. */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {HOTSPOTS.map((spot) => (
              <line
                key={spot.area}
                x1={spot.x}
                y1={spot.y}
                x2={spot.side === 'left' ? 0 : 100}
                y2={spot.y}
                stroke="currentColor"
                strokeWidth="0.25"
                vectorEffect="non-scaling-stroke"
                className={
                  spot.area === active
                    ? 'text-teal opacity-70 transition-opacity duration-[var(--dur-3)]'
                    : 'text-ink opacity-0 transition-opacity duration-[var(--dur-3)]'
                }
              />
            ))}
          </svg>

          <div
            role="radiogroup"
            aria-label={t.finder.chooseArea}
            className="absolute inset-0"
            onMouseLeave={() => setHovered(null)}
          >
            {HOTSPOTS.map((spot) => {
              const meta = BODY_AREAS.find((a) => a.id === spot.area)!;
              const isSelected = selected === spot.area;
              const isActive = active === spot.area;

              return (
                <button
                  key={spot.area}
                  ref={(node) => {
                    buttonRefs.current[spot.area] = node;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelected(spot.area)}
                  onFocus={() => setSelected(spot.area)}
                  onMouseEnter={() => setHovered(spot.area)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                      event.preventDefault();
                      move(spot.area, 1);
                    }
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                      event.preventDefault();
                      move(spot.area, -1);
                    }
                  }}
                  className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <span className="sr-only">
                    {meta.label[locale]} — {programsFor(spot.area).length} {t.finder.courses}
                  </span>

                  {/* Halo */}
                  <span
                    aria-hidden
                    className="absolute h-11 w-11 rounded-full border transition-[transform,opacity,border-color] duration-[var(--dur-3)] ease-[var(--ease-out-quart)]"
                    style={{
                      borderColor: isActive ? 'var(--color-teal)' : 'rgba(27,35,37,0.35)',
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive ? 'scale(1)' : 'scale(0.55)',
                    }}
                  />
                  {/* The selected point keeps breathing, so the finder never
                      looks like a static diagram. */}
                  {isSelected ? (
                    <span
                      aria-hidden
                      className="pulse-ring absolute h-11 w-11 rounded-full border border-pressure/70"
                    />
                  ) : null}

                  {/* Pressure point */}
                  <span
                    aria-hidden
                    className="relative h-2.5 w-2.5 rounded-full transition-[background-color,transform] duration-[var(--dur-2)] ease-[var(--ease-out-quart)]"
                    style={{
                      backgroundColor: isActive ? 'var(--color-pressure)' : 'var(--color-ink)',
                      transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-xs text-ink-muted">{t.finder.hint}</p>
      </div>

      {/* ---------------- Explanation and list ---------------- */}
      <div>
        <div className="border-t border-ink/15 pt-6">
          <p className="kicker">{t.finder.selectedArea}</p>
          <h3 className="mt-3 font-display text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] leading-[1.15]">
            {activeMeta.label[locale]}
          </h3>
          {locale === 'de' ? (
            <p className="thai mt-1 text-sm text-ink-muted" lang="th">
              {activeMeta.label.th}
            </p>
          ) : null}
          <p className="mt-4 max-w-[52ch] leading-relaxed text-ink-muted">
            {activeMeta.description[locale]}
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            <span className="font-semibold text-ink">{t.finder.typicalReasons}</span>{' '}
            {activeMeta.complaint[locale]}
          </p>
        </div>

        <ul aria-live="polite" className="mt-8 border-t border-hairline">
          {activePrograms.map((program) => (
            <li key={program.id}>
              <a
                href={`#kurs-${program.slug}`}
                className="group flex items-baseline justify-between gap-6 border-b border-hairline py-4 transition-colors duration-150 hover:bg-paper/60"
              >
                <span className="flex-1">
                  <span className="font-display text-xl leading-tight transition-colors duration-150 group-hover:text-teal">
                    {program.title[locale]}
                  </span>
                  <span className="mt-1 block max-w-[46ch] text-sm text-ink-muted">
                    {program.subtitle[locale]}
                  </span>
                </span>
                <span className="numeric shrink-0 text-sm font-semibold">{program.price} €</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Full text alternative — every area, always reachable. */}
        <div className="mt-10">
          <p className="kicker">{t.finder.allAreas}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {AREA_ORDER.map((areaId) => {
              const meta = BODY_AREAS.find((a) => a.id === areaId)!;
              const isSelected = selected === areaId;
              return (
                <button
                  key={areaId}
                  type="button"
                  onClick={() => setSelected(areaId)}
                  aria-pressed={isSelected}
                  className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-150 ${
                    isSelected
                      ? 'border-teal bg-teal text-paper'
                      : 'border-hairline bg-paper text-ink hover:border-teal hover:text-teal'
                  }`}
                >
                  {meta.label[locale]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
