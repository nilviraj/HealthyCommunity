"use client";

import { trackEvent } from "@/lib/analytics";

export default function ArticleSearchForm({ initialQuery }: { initialQuery: string }) {
  return (
    <form
      action="/articles"
      method="get"
      role="search"
      className="mt-6 flex flex-wrap gap-3"
      onSubmit={(event) => {
        const formData = new FormData(event.currentTarget);
        const searchTerm = String(formData.get("q") ?? "").trim();
        if (searchTerm) trackEvent("search", { search_term: searchTerm });
      }}
    >
      <label htmlFor="article-search" className="w-full text-sm font-semibold text-slate-700">लेख आणि मार्गदर्शक शोधा</label>
      <input id="article-search" name="q" type="search" defaultValue={initialQuery} placeholder="उदा. मधुमेह आहार, BMI, मिलेट्स" className="min-w-0 flex-1 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-slate-900" />
      <button type="submit" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">शोधा</button>
    </form>
  );
}
