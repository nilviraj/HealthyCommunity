import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "आरोग्य लेख",
  description:
    "मधुमेह, पोषण, व्यायाम आणि जीवनशैलीवर मराठीत उपयुक्त, कृतीयोग्य आणि समुदाय-केंद्रित आरोग्य लेख.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "आरोग्य लेख",
    description:
      "मधुमेह, पोषण, व्यायाम आणि जीवनशैलीवर मराठीत उपयुक्त, कृतीयोग्य आणि समुदाय-केंद्रित आरोग्य लेख.",
    url: "/articles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "आरोग्य लेख",
    description:
      "मधुमेह, पोषण, व्यायाम आणि जीवनशैलीवर मराठीत उपयुक्त, कृतीयोग्य आणि समुदाय-केंद्रित आरोग्य लेख.",
  },
};

type ArticlesPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase() ?? "";

  const filteredArticles = query
    ? articles.filter((article) => {
        const searchableText = [article.title, article.excerpt, article.category, ...article.tags].join(" ").toLowerCase();
        return searchableText.includes(query);
      })
    : articles;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "आरोग्य लेख" }]} />

      <SectionTitle
        as="h1"
        eyebrow="आरोग्य लेख"
        title="रोजच्या आरोग्यासाठी मराठीतून उपयुक्त माहिती"
        description="मधुमेह, हृदय, पोषण आणि व्यायाम या विषयांवरील लेख तुम्हाला घरगुती जीवनात सहज लागू करता येतील अशा पद्धतीने लिहिले आहेत."
      />
      {query ? (
        <p className="mt-4 text-sm text-slate-600">
          &ldquo;{q}&rdquo; साठी {filteredArticles.length} निकाल सापडले.
        </p>
      ) : null}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <article key={article.slug} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-800">{article.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
            <Link href={`/articles/${article.slug}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              वाचा →
            </Link>
          </article>
        ))}
      </div>
      {query && filteredArticles.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-emerald-100 bg-white p-4 text-sm text-slate-700">
          सध्या या शोधासाठी लेख सापडला नाही. कृपया वेगळा शब्द वापरून पुन्हा शोधा.
        </p>
      ) : null}
    </main>
  );
}


