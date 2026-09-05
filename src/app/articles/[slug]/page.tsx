import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleTrustPanel from "@/components/ArticleTrustPanel";
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import { articles, getArticleBySlug } from "@/data/articles";
import { resolveSiteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `/articles/${article.slug}`;
  const metadataTitle = article.seoTitle ?? article.title;

  return {
    title: metadataTitle,
    description: article.excerpt,
    keywords: article.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metadataTitle,
      description: article.excerpt,
      url,
      type: "article",
      locale: "mr_IN",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
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
  const authorUrl = new URL(article.author.href, siteUrl).toString();
  const articleJsonLd = {
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "mr-IN",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    articleSection: article.category,
    keywords: article.tags.join(", "),
    author: {
      "@type": article.author.schemaType,
      name: article.author.name,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "आरोग्य समुदाय महाराष्ट्र",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Healthy_Community_Logo.png`,
      },
    },
    ...(article.references?.length
      ? { citation: article.references.map((reference) => reference.url) }
      : {}),
  };

  const faqJsonLd = article.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": faqJsonLd ? [articleJsonLd, faqJsonLd] : [articleJsonLd],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "आरोग्य लेख", href: "/articles" },
          { label: article.title },
        ]}
      />

      <article className="mt-6 rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">{article.category}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="लेखाचे विषय">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {tag}
              </span>
            ))}
          </div>

          <ArticleTrustPanel
            author={article.author}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
            reviewStatus={article.reviewStatus}
            sourcesCount={article.references?.length ?? 0}
          />
        </header>

        <div className="mt-10 space-y-10 text-base leading-8 text-slate-700">
          {article.content?.length ? (
            <section aria-label="लेखाचा मजकूर" className="space-y-5">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ) : null}

          {article.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold leading-snug text-slate-950">{section.heading}</h2>
              {section.paragraphs?.length ? (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.items?.length ? (
                section.items.some((item) => item.title) ? (
                  <div className="mt-5 grid gap-4">
                    {section.items.map((item) => (
                      <div key={`${item.title ?? "item"}-${item.description}`} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                        {item.title ? <h3 className="font-bold text-slate-900">{item.title}</h3> : null}
                        <p className={item.title ? "mt-2 text-slate-700" : "text-slate-700"}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-5 space-y-3 pl-5">
                    {section.items.map((item) => (
                      <li key={item.description} className="list-disc pl-1 marker:text-emerald-600">
                        {item.description}
                      </li>
                    ))}
                  </ul>
                )
              ) : null}
            </section>
          ))}

          {article.relatedArticles?.length ? (
            <section aria-labelledby="related-articles-heading" className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6">
              <h2 id="related-articles-heading" className="text-2xl font-bold text-slate-950">पुढे काय वाचाल?</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {article.relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.href} href={relatedArticle.href} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100 transition hover:-translate-y-0.5 hover:ring-emerald-300">
                    <span className="font-bold text-emerald-800">{relatedArticle.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">{relatedArticle.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {article.faqs?.length ? (
            <section aria-labelledby="article-faq-heading">
              <h2 id="article-faq-heading" className="text-2xl font-bold text-slate-950">वारंवार विचारले जाणारे प्रश्न</h2>
              <div className="mt-5 divide-y divide-emerald-100 rounded-2xl border border-emerald-100">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="group p-5 open:bg-emerald-50/40">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {faq.question}
                        <span aria-hidden="true" className="text-xl text-emerald-700 group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 pr-8 text-slate-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {article.references?.length ? (
            <section aria-labelledby="article-references-heading">
              <h2 id="article-references-heading" className="text-2xl font-bold text-slate-950">विश्वसनीय संदर्भ</h2>
              <p className="mt-3 text-sm text-slate-600">लेख तयार करताना खालील अधिकृत सार्वजनिक आरोग्य स्रोतांचा आधार घेतला आहे.</p>
              <ol className="mt-4 space-y-3">
                {article.references.map((reference, index) => (
                  <li key={reference.url} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6">
                    <span className="mr-2 font-bold text-slate-500">{index + 1}.</span>
                    <a href={reference.url} target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950">
                      {reference.title}
                    </a>
                    <span className="block pl-6 text-slate-600">{reference.publisher}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <Disclaimer />
        </div>

        <Link href="/articles" className="mt-8 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900">
          ← सर्व आरोग्य लेख पाहा
        </Link>
      </article>
    </main>
  );
}
