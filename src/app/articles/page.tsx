import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import { articles } from "@/data/articles";

const baseMetadata: Metadata = {
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
  searchParams: Promise<{ q?: string | string[] }>;
};

function normalizeQuery(q?: string | string[]) {
  return (Array.isArray(q) ? q[0] : q)?.trim() ?? "";
}

const guides = [
  { href: "/calculators/bmi", title: "BMI कॅल्क्युलेटर", excerpt: "उंची आणि वजनानुसार BMI मोजा.", category: "आरोग्य मोजणी", tags: ["bmi", "वजन", "उंची"] },
  { href: "/calculators/water", title: "पाण्याच्या गरजेचा अंदाज", excerpt: "दैनंदिन पाणी सेवनाचा साधारण अंदाज घ्या.", category: "आरोग्य मोजणी", tags: ["water", "पाणी सेवन"] },
  { href: "/calculators/calories", title: "कॅलरी कॅल्क्युलेटर", excerpt: "दैनंदिन ऊर्जेच्या गरजेचा अंदाज घ्या.", category: "आरोग्य मोजणी", tags: ["calories", "कॅलरी"] },
  { href: "/millets", title: "मिलेट्स म्हणजे काय?", excerpt: "मिलेट्सचे प्रकार आणि आहारातील वापर जाणून घ्या.", category: "पोषण", tags: ["millets", "नाचणी", "भरडधान्ये"] },
  { href: "/microgreens", title: "मायक्रोग्रीन्स घरी कसे वाढवावे?", excerpt: "कोवळ्या पालेभाज्यांची घरच्या घरी लागवड करण्याची माहिती.", category: "पोषण", tags: ["microgreens", "मायक्रोग्रीन्स", "बागकाम"] },
  { href: "/diabetes/diet", title: "मधुमेहासाठी आहार", excerpt: "संतुलित थाळी आणि जेवणातील पर्याय समजून घ्या.", category: "मधुमेह", tags: ["diabetes diet", "मधुमेह आहार", "शुगर"] },
  { href: "/nutrition", title: "संतुलित आहाराचे मार्गदर्शन", excerpt: "रोजच्या आहारातील पोषक घटकांविषयी माहिती.", category: "पोषण", tags: ["nutrition", "पोषण", "आहार"] },
  { href: "/diabetes", title: "मधुमेह माहिती", excerpt: "लक्षणे, तपासणी आणि दैनंदिन काळजीचे मार्गदर्शक.", category: "मधुमेह", tags: ["diabetes", "मधुमेह", "शुगर"] },
  { href: "/exercise", title: "व्यायाम आणि योग", excerpt: "नियमित हालचाल आणि व्यायामाची माहिती.", category: "व्यायाम", tags: ["exercise", "योग", "व्यायाम"] },
];

export async function generateMetadata({ searchParams }: ArticlesPageProps): Promise<Metadata> {
  const query = normalizeQuery((await searchParams).q);
  return {
    ...baseMetadata,
    ...(query ? { title: `शोध: ${query}`, robots: { index: false, follow: true } } : {}),
  };
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const q = normalizeQuery((await searchParams).q);
  const query = q.toLocaleLowerCase("mr-IN");
  const articleResults = articles.map((article) => ({ ...article, href: `/articles/${article.slug}` }));
  const results = query
    ? [...guides, ...articleResults].filter((item) => {
        const text = [item.title, item.excerpt, item.category, ...item.tags].join(" ").toLocaleLowerCase("mr-IN");
        return query.split(/\s+/).every((term) => text.includes(term));
      })
    : articleResults;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "आरोग्य लेख" }]} />

      <SectionTitle
        as="h1"
        eyebrow="आरोग्य लेख"
        title="रोजच्या आरोग्यासाठी मराठीतून उपयुक्त माहिती"
        description="मधुमेह, हृदय, पोषण आणि व्यायाम या विषयांवरील लेख तुम्हाला घरगुती जीवनात सहज लागू करता येतील अशा पद्धतीने लिहिले आहेत."
      />
      <form action="/articles" method="get" role="search" className="mt-6 flex flex-wrap gap-3">
        <label htmlFor="article-search" className="w-full text-sm font-semibold text-slate-700">लेख आणि मार्गदर्शक शोधा</label>
        <input id="article-search" name="q" type="search" defaultValue={q} placeholder="उदा. मधुमेह आहार, BMI, मिलेट्स" className="min-w-0 flex-1 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-slate-900" />
        <button type="submit" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">शोधा</button>
      </form>
      {query ? (
        <p className="mt-4 text-sm text-slate-600">
          &ldquo;{q}&rdquo; साठी {new Intl.NumberFormat("mr-IN").format(results.length)} निकाल सापडले.
        </p>
      ) : null}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((article) => (
          <article key={article.href} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-800">{article.category}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900"><Link href={article.href}>{article.title}</Link></h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
            <Link href={article.href} aria-label={`${article.title} — वाचा`} className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              वाचा →
            </Link>
          </article>
        ))}
      </div>
      {query && results.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-emerald-100 bg-white p-4 text-sm text-slate-700">
          सध्या या शोधासाठी माहिती सापडली नाही. कृपया वेगळा शब्द वापरून पुन्हा शोधा.
        </p>
      ) : null}
    </main>
  );
}


