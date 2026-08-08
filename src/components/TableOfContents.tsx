import Link from "next/link";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/50">
      <h3 className="font-semibold text-slate-900 dark:text-white">या पृष्ठावरील विषय</h3>
      <nav className="mt-4 space-y-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 ${item.level === 2 ? "pl-4" : ""}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
