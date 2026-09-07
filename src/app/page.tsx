import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight, BookOpen, Dumbbell, HeartPulse, MessageCircle, ShieldCheck, Sparkles, Stethoscope, UtensilsCrossed, Wind } from "lucide-react";
import { articles as allArticles } from "@/data/articles";
import { resolveSiteUrl } from "@/lib/site-url";

const homeTitle = "मराठी आरोग्य मार्गदर्शन, मधुमेह आणि पोषण | Healthy Community";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description:
    "मधुमेह, पोषण, व्यायाम, मिलेट्स आणि आरोग्यदायी जीवनशैलीबद्दल मराठीतून विश्वासार्ह मार्गदर्शन.",
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description:
      "मधुमेह, पोषण, व्यायाम, मिलेट्स आणि आरोग्यदायी जीवनशैलीबद्दल मराठीतून विश्वासार्ह मार्गदर्शन.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description:
      "मधुमेह, पोषण, व्यायाम, मिलेट्स आणि आरोग्यदायी जीवनशैलीबद्दल मराठीतून विश्वासार्ह मार्गदर्शन.",
  },
};

const features = [
  { title: "मधुमेह माहिती", href: "/diabetes", description: "सुलभ मार्गदर्शन आणि नियमित तपासणीचे महत्त्व." },
  { title: "आमच्याबद्दल", href: "/about", description: "वेबसाईटच्या प्रवासाविषयी अधिक माहिती" },
  { title: "निरोगी आहार", href: "/nutrition", description: "पोषक आणि संतुलित पदार्थांचे टिप्स." },
  { title: "मिलेट्स", href: "/millets", description: "सर्वसामान्य आणि पौष्टिक धान्यांचा परिचय." },
  { title: "मायक्रोग्रीन्स", href: "/microgreens", description: "लहान, पण प्रभावी पौष्टिक वनस्पती." },
  { title: "व्यायाम", href: "/exercise", description: "घरात आणि बाहेर सहज केला जाणारा व्यायाम." },
  { title: "आरोग्य टिप्स", href: "/articles", description: "दैनिक जीवनात अंमलात आणण्याजोग्या सवयी." },
  { title: "समुदायाशी जुळा", href: "/contact", description: "अनुभव शेअर करा, प्रेरणा मिळवा." },
];

const calculators = [
  { title: "BMI कॅल्क्युलेटर", href: "/calculators/bmi", description: "वजन आणि उंचीवर आधारित BMI तपासा." },
  { title: "मधुमेह जोखीम", href: "/calculators/diabetes-risk", description: "आपला जोखीम स्तर समजून घ्या." },
  { title: "पाणी सेवन", href: "/calculators/water", description: "दैनिक पाण्याची गरज मोजा." },
  { title: "कॅलरी कॅल्क्युलेटर", href: "/calculators/calories", description: "दैनंदिन ऊर्जा गरजाची कल्पना मिळवा." },
];

const forumHighlights = [
  { title: "माझा मधुमेह अनुभव", description: "दैनिक सवयी आणि आपल्या अनुभवाची माहिती." },
  { title: "आहार", description: "मिलेट्स आणि पौष्टिक आहाराविषयी चर्चा." },
  { title: "व्यायाम", description: "घरात आणि बाहेरचा व्यायाम याविषयी मार्गदर्शन." },
];

export default function Home() {
  const siteUrl = resolveSiteUrl();
  const featuredArticles = allArticles.slice(0, 3);
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "आरोग्य समुदाय महाराष्ट्र",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.jpeg`,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "आरोग्य समुदाय महाराष्ट्र",
    url: siteUrl,
    inLanguage: "mr-IN",
  };

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.08),transparent_26%)]" />
      <Hero />

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="वैशिष्ट्ये"
          title="आयुष्यातील महत्त्वाच्या आरोग्य क्षेत्रांसाठी मार्गदर्शन"
          description="मधुमेह, हृदय, पोषण आणि व्यायाम या सर्व विषयांवर मराठीत सुलभ माहिती उपलब्ध आहे."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.75)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-32px_rgba(34,197,94,0.55)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#0F766E] to-[#2563EB]" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22C55E]/15 via-white to-[#2563EB]/10 text-[#0F766E] shadow-sm transition-transform duration-300 group-hover:scale-105">
                {feature.title === "मधुमेह माहिती" && <ShieldCheck className="h-5 w-5" />}
                {feature.title === "आमच्याबद्दल" && <HeartPulse className="h-5 w-5" />}
                {feature.title === "निरोगी आहार" && <UtensilsCrossed className="h-5 w-5" />}
                {feature.title === "मिलेट्स" && <Sparkles className="h-5 w-5" />}
                {feature.title === "मायक्रोग्रीन्स" && <BookOpen className="h-5 w-5" />}
                {feature.title === "व्यायाम" && <Dumbbell className="h-5 w-5" />}
                {feature.title === "आरोग्य टिप्स" && <Stethoscope className="h-5 w-5" />}
                {feature.title === "समुदायाशी जुळा" && <ArrowRight className="h-5 w-5" />}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] transition group-hover:gap-3">
                पुढे पाहा <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="आरोग्य कॅल्क्युलेटर"
          title="आपल्या आरोग्याची मोजणी सहजपणे"
          description="BMI, पाणी सेवन, कॅलरी आणि मधुमेह जोखीम यांसारखी माहिती आपण आपल्या गरजेनुसार वापरू शकता."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="group relative overflow-hidden rounded-[28px] border border-[#22C55E]/15 bg-[linear-gradient(180deg,rgba(240,253,244,0.95)_0%,rgba(255,255,255,0.95)_100%)] p-6 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.78)] transition duration-300 hover:-translate-y-1 hover:border-[#22C55E]/30 hover:shadow-[0_28px_65px_-35px_rgba(34,197,94,0.5)]"
            >
              <div className="absolute right-4 top-4 rounded-full bg-white p-2 text-[#0F766E] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#166534]">Smart Tool</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{calculator.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-7 text-slate-600">{calculator.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="आरोग्य लेख"
          title="नवीन लेख आणि मार्गदर्शक"
          description="मराठीतून उपलब्ध असलेली आजची माहिती तुम्हाला आरोग्याबद्दल अधिक सजग करते."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.75)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-35px_rgba(37,99,235,0.35)]">
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#22C55E] to-[#2563EB] transition-all duration-300 group-hover:w-28" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">{article.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] transition group-hover:gap-3"
              >
                वाचा <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="चर्चा मंच"
          title="समुदायात तुमचे अनुभव सामायिक करा"
          description="समुदायात सहभागी होण्याची माहिती आणि उपयुक्त वाचन येथे पाहा."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {forumHighlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.75)] backdrop-blur">
              <div className="flex items-center gap-2 text-[#22C55E]">
                <Wind className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">चर्चेचा विषय</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              <Link href="/forum" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                सहभागाची माहिती <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#0F172A_0%,#0F766E_52%,#2563EB_100%)] px-5 py-8 text-center text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.85)] sm:px-10 sm:py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              अंतिम पाऊल
            </span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">आमच्या समुदायात सामील व्हा</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-200">
            आरोग्य, पोषण आणि जीवनशैलीविषयी अधिक माहिती मिळवण्यासाठी आता सहभागी व्हा.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://chat.whatsapp.com/Bmp0kLqqEfW6gRr6gipqOm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#16A34A]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp समुदाय
              </Link>
              <Link href="/forum" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100">
                समुदायात सामील व्हा
              </Link>
              <Link href="/articles" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                लेख वाचा
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

