/** Skeleton rows matching the real row geometry — no spinner. */
export function ScheduleSkeleton({ label }: { label: string }) {
  return (
    <div aria-hidden className="animate-pulse">
      {[0, 1, 2, 3].map((row) => (
        <div
          key={row}
          className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 border-b border-border py-7 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-x-8"
        >
          <div className="space-y-2">
            <div className="h-7 rounded bg-hairline/70" />
            <div className="h-2.5 rounded bg-hairline/50" />
          </div>
          <div className="space-y-3">
            <div className="h-5 w-2/3 rounded bg-hairline/70" />
            <div className="h-3 w-full max-w-md rounded bg-hairline/50" />
            <div className="h-3 w-1/3 rounded bg-hairline/40" />
          </div>
          <div className="hidden h-9 w-32 self-center rounded-md bg-hairline/50 md:block" />
        </div>
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}
