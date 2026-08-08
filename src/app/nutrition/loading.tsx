export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" aria-busy="true" aria-live="polite">
      <div className="h-5 w-52 animate-pulse rounded bg-slate-200" />
      <div className="mt-6 h-44 animate-pulse rounded-3xl bg-emerald-50" />
      <div className="mt-8 space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
