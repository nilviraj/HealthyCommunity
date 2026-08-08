import Link from "next/link";

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type RelatedLinksProps = {
  title: string;
  description?: string;
  links: RelatedLink[];
};

export default function RelatedLinks({ title, description, links }: RelatedLinksProps) {
  return (
    <section className="mt-12 space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      {description ? (
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{link.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
