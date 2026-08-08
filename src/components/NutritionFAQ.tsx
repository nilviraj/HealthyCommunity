interface FAQItem {
  q: string;
  a: string;
}

interface NutritionFAQProps {
  items: FAQItem[];
}

export default function NutritionFAQ({ items }: NutritionFAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details
          key={idx}
          className="rounded-3xl border-2 border-emerald-200 bg-white dark:bg-slate-900 dark:border-emerald-800 p-4 shadow-sm group cursor-pointer hover:shadow-md transition-shadow"
        >
          <summary className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="group-open:rotate-90 transition-transform">▶</span>
            {item.q}
          </summary>
          <p className="mt-3 ml-6 text-sm text-slate-600 dark:text-slate-400">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
