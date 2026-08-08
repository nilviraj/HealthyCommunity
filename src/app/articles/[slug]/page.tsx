import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { resolveSiteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const siteUrl = resolveSiteUrl();
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    mainEntityOfPage: articleUrl,
    inLanguage: "mr-IN",
    author: {
      "@type": "Organization",
      name: "आरोग्य समुदाय महाराष्ट्र",
    },
    publisher: {
      "@type": "Organization",
      name: "आरोग्य समुदाय महाराष्ट्र",
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Link href="/articles" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
        ← सर्व लेखांवर परत जा
      </Link>
      <div className="mt-6 rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">{article.category}</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">{article.title}</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">{article.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">{tag}</span>
          ))}
        </div>
        <div className="mt-8 space-y-5 text-sm leading-8 text-slate-700">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
