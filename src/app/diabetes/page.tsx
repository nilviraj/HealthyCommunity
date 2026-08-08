import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Droplets, Heart, Lightbulb, Pill, Utensils, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह माहिती",
  description: "मधुमेह व्यवस्थापन, लक्षणे, कारणे, आहार, व्यायाम आणि दैनंदिन जीवनशैलीबाबत संपूर्ण मार्गदर्शन.",
  keywords: ["मधुमेह", "डायबिटीज", "रक्त शर्करा", "स्वास्थ्य", "आहार"],
  openGraph: {
    title: "मधुमेह माहिती",
    description: "मधुमेह व्यवस्थापन आणि निरोगी जीवनशैलीचे संपूर्ण मार्गदर्शन",
    type: "website",
  },
  alternates: { canonical: "/diabetes" },
};

const sections = [
  {
    href: "/diabetes/what-is-diabetes",
    title: "मधुमेह म्हणजे काय?",
    description: "मधुमेह म्हणजे काय, तो का होतो, रक्तातील साखर, ग्लुकोज आणि इन्सुलिन यांचे कार्य सोप्या मराठीत समजून घ्या.",
    icon: Lightbulb,
  },
  {
    href: "/diabetes/types",
    title: "मधुमेहाचे प्रकार",
    description: "टाइप १, टाइप २, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह म्हणजे काय, त्यांची कारणे, लक्षणे आणि व्यवस्थापन समजून घ्या.",
    icon: Pill,
  },
  {
    href: "/diabetes/early-symptoms",
    title: "सुरुवातीची लक्षणे",
    description: "मधुमेहाची सुरुवातीची लक्षणे, चेतावणीची चिन्हे आणि वेळेत निदानाचे महत्त्व समजून घ्या.",
    icon: Heart,
  },
  {
    href: "/diabetes/causes",
    title: "मधुमेहाची कारणे",
    description: "आनुवंशिकता, लठ्ठपणा, असंतुलित आहार, शारीरिक निष्क्रियता आणि इतर कारणांमुळे मधुमेहाचा धोका कसा वाढतो ते जाणून घ्या.",
    icon: Zap,
  },
  {
    href: "/diabetes/diagnosis",
    title: "मधुमेहाचे निदान",
    description: "FBS, PPBS, HbA1c, OGTT यांसारख्या चाचण्या, त्यांचे सामान्य मूल्य आणि मधुमेहाचे निदान कसे केले जाते ते समजून घ्या.",
    icon: Droplets,
  },
  {
    href: "/diabetes/diet",
    title: "आहार आणि पोषण",
    description: "मधुमेहासाठी योग्य आहार, संतुलित पोषण, प्लेट पद्धत, मिलेट्स, फळे, भाज्या आणि दैनंदिन आहार नियोजनाविषयी सविस्तर माहिती.",
    icon: Utensils,
  },
  {
    href: "/diabetes/exercise",
    title: "व्यायाम आणि शारीरिक हालचाल",
    description: "मधुमेह नियंत्रणासाठी योग्य व्यायाम, योग आणि नियमित शारीरिक हालचालींबाबत मार्गदर्शन.",
    icon: Zap,
  },
  {
    href: "/diabetes/daily-routine",
    title: "दैनंदिन दिनचर्या",
    description: "मधुमेह नियंत्रणासाठी सकाळपासून रात्रीपर्यंतच्या निरोगी सवयी, आहार, व्यायाम आणि औषधांचे योग्य नियोजन.",
    icon: BookOpen,
  },
  {
    href: "/diabetes/foot-care",
    title: "मधुमेही पायांची काळजी",
    description: "पायांची दैनंदिन तपासणी, स्वच्छता, योग्य पादत्राणे आणि जखमांपासून संरक्षणासाठी संपूर्ण मार्गदर्शन.",
    icon: Heart,
  },
  {
    href: "/diabetes/blood-sugar-monitoring",
    title: "घरी रक्तातील साखरेची तपासणी",
    description: "ग्लुकोमीटर वापरून रक्तातील साखरेची योग्य पद्धतीने तपासणी, निकाल समजून घेणे आणि नोंदी ठेवणे.",
    icon: Droplets,
  },
  {
    href: "/diabetes/complications",
    title: "मधुमेहाच्या गुंतागुंती",
    description: "मधुमेहामुळे होणाऱ्या दीर्घकालीन गुंतागुंती, त्यांची लक्षणे, प्रतिबंध आणि योग्य काळजी याविषयी संपूर्ण माहिती.",
    icon: Heart,
  },
  {
    href: "/diabetes/faq",
    title: "वारंवार विचारले जाणारे प्रश्न",
    description: "मधुमेहाविषयीचे सामान्य प्रश्न, रक्तातील साखर, आहार, औषधे, इन्सुलिन, व्यायाम आणि जीवनशैली यांसंबंधी तज्ज्ञांनी सुचवलेली माहिती.",
    icon: BookOpen,
  },
];

export default function DiabetesIndexPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "मधुमेह माहिती" }]} />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह माहिती"
          title="मधुमेह व्यवस्थापनाचा संपूर्ण मार्गदर्शन"
          description="मधुमेह समजून घ्या, त्याचे लक्षणे, कारणे आणि व्यवस्थापन. एक निरोगी जीवनशैली सुरू करण्यासाठी संपूर्ण मार्गदर्शन."
        />
      </div>

      <div className="mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">विस्तृत मार्गदर्शन विषय</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">मधुमेहाबद्दल सर्व महत्त्वाची माहिती एक जागेवर</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href} className="group">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-800 h-full">
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{section.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <CTA
          title="सामान्य मधुमेह नियंत्रण सूचना"
          description="या मार्गदर्शनांचा वापर करून तुमचे आरोग्य सुधारा आणि एक निरोगी जीवन जगा."
        />
      </div>

      <div className="mt-16">
        <Disclaimer />
      </div>
    </main>
  );
}


