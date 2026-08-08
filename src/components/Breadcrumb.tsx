import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { resolveSiteUrl } from "@/lib/site-url";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const siteUrl = resolveSiteUrl();
  const jsonLdItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${siteUrl}${item.href ?? (index === 0 ? "/" : "")}`,
  }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: jsonLdItems,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600 dark:text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight aria-hidden="true" className="h-4 w-4" /> : null}
              {item.href ? (
                <Link href={item.href} className="transition hover:text-emerald-700 dark:hover:text-emerald-300">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
