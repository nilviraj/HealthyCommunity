export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" aria-busy="true" aria-live="polite">
      <div className="h-5 w-56 animate-pulse rounded bg-slate-200" />
      <div className="mt-6 h-48 animate-pulse rounded-3xl bg-emerald-50" />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="h-7 w-7 animate-pulse rounded bg-emerald-100" />
            <div className="mt-3 h-5 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
