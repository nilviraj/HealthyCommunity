import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Droplets, Heart, Lightbulb, Pill, Utensils, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह माहिती",
  description: "मधुमेहाची लक्षणे, कारणे, तपासण्या, आहार, व्यायाम आणि दैनंदिन काळजी यांची सोप्या मराठीत माहिती.",
  keywords: ["मधुमेह", "डायबिटीज", "रक्तातील साखर", "आरोग्य", "आहार"],
  openGraph: {
    title: "मधुमेह माहिती",
    description: "मधुमेह समजून घेण्यासाठी आणि दैनंदिन काळजीसाठी सोपे मराठी मार्गदर्शन",
    type: "website",
    images: [{ url: "/images/diabetes/overview.webp", width: 1536, height: 1024, alt: "मधुमेह व्यवस्थापनासाठी आरोग्यदायी सवयी" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह माहिती",
    description: "मधुमेह समजून घेण्यासाठी आणि दैनंदिन काळजीसाठी सोपे मराठी मार्गदर्शन",
    images: ["/images/diabetes/overview.webp"],
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
    description: "HbA1c, उपाशीपोटी रक्तातील ग्लुकोज आणि OGTT यांसारख्या चाचण्यांद्वारे मधुमेहाचे निदान कसे होते ते समजून घ्या.",
    icon: Droplets,
  },
  {
    href: "/diabetes/diet",
    title: "आहार आणि पोषण",
    description: "संतुलित ताट, भात-पोळीचे प्रमाण, फळे, भाज्या आणि महाराष्ट्रातील घरगुती पदार्थांबद्दल व्यावहारिक माहिती.",
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
    description: "औषधे, जेवण, हालचाल, तपासणी आणि झोप यांची सुरक्षित व लवचिक दिनचर्या कशी ठेवावी ते समजून घ्या.",
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
    description: "मधुमेहामुळे डोळे, मूत्रपिंड, हृदय, मज्जातंतू आणि पायांवर होणारे परिणाम व आवश्यक काळजी.",
    icon: Heart,
  },
  {
    href: "/diabetes/faq",
    title: "वारंवार विचारले जाणारे प्रश्न",
    description: "मधुमेह, तपासण्या, आहार, औषधे, इन्सुलिन आणि व्यायामाबद्दलच्या सामान्य प्रश्नांची स्पष्ट उत्तरे.",
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
          title="मधुमेह समजून घेण्यासाठी सोपे मार्गदर्शन"
          description="लक्षणे आणि तपासण्यांपासून आहार, व्यायाम व दैनंदिन काळजीपर्यंतची माहिती सोप्या मराठीत वाचा."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/overview.webp"
        alt="आरोग्यदायी आहार, नियमित चालणे आणि डॉक्टरांचा सल्ला घेणारे भारतीय कुटुंब"
        caption="मधुमेहाची काळजी म्हणजे संतुलित आहार, नियमित हालचाल, तपासणी आणि वैद्यकीय मार्गदर्शन यांचा मेळ."
        priority
      />

      <div className="mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">मधुमेहाबद्दल महत्त्वाचे विषय</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">तुम्हाला हवी असलेली माहिती खालील विषयांतून निवडा</p>
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
          title="तुमच्या उपचारांबद्दल शंका आहे?"
          description="औषधे, इन्सुलिन किंवा तपासणीचे वेळापत्रक स्वतः बदलू नका. डॉक्टरांचा सल्ला घ्या."
        />
      </div>

      <div className="mt-16">
        <Disclaimer />
      </div>
    </main>
  );
}
