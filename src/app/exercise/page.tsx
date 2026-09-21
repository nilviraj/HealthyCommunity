import type { Metadata } from "next";
import Image from "next/image";
import { Activity, AlertCircle, CheckCircle2, Clock, Heart, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "सर्वोत्तम व्यायाम कोणता? सुरक्षित सुरुवातीचे मार्गदर्शन",
  description:
    "चालणे, शक्तिवर्धक व्यायाम आणि हालचालींची सुरक्षित सुरुवात कशी करावी? प्रौढांसाठी आठवड्याचे उद्दिष्ट आणि सोपी योजना मराठीत समजून घ्या.",
  keywords: [
    "सर्वोत्तम व्यायाम",
    "व्यायाम कसा सुरू करावा",
    "चालणे",
    "शक्तिवर्धक व्यायाम",
    "फिटनेस",
  ],
  openGraph: {
    title: "सर्वोत्तम व्यायाम कोणता? सुरक्षित सुरुवातीचे मार्गदर्शन",
    description:
      "आपल्या उद्दिष्टाला, तब्येतीला आणि दिनक्रमाला बसणारा व्यायाम निवडण्यासाठी सोपे मार्गदर्शन.",
    url: "/exercise",
  },
  alternates: { canonical: "/exercise" },
};

const choices = [
  {
    icon: "🚶",
    title: "सुरुवात करण्यासाठी",
    activity: "आरामदायी वेगाने चालणे",
    detail: "१०–१५ मिनिटांपासून सुरुवात करा आणि शरीराचा प्रतिसाद पाहून वेळ हळूहळू वाढवा.",
  },
  {
    icon: "🫀",
    title: "सहनशक्तीसाठी",
    activity: "वेगात चालणे, सायकल चालवणे किंवा पोहणे",
    detail: "श्वासाचा वेग वाढेल, पण मध्यम तीव्रतेत थोडक्यात बोलता येईल असा वेग ठेवा.",
  },
  {
    icon: "💪",
    title: "स्नायूंच्या ताकदीसाठी",
    activity: "शरीराच्या वजनाने किंवा हलक्या प्रतिकाराने व्यायाम",
    detail: "स्क्वॅटचा सोपा प्रकार, भिंतीवर पुश-अप किंवा रेसिस्टन्स बँड वापरता येतो.",
  },
  {
    icon: "🧘",
    title: "लवचिकता व संतुलनासाठी",
    activity: "सौम्य स्ट्रेचिंग, योग किंवा संतुलनाचे व्यायाम",
    detail: "हालचाल वेदनारहित मर्यादेत करा; स्ट्रेच करताना झटके देऊ नका.",
  },
];

const starterWeek = [
  { day: "३ दिवस", plan: "१०–३० मिनिटे चालणे किंवा आवडणारी मध्यम हालचाल" },
  { day: "२ दिवस", plan: "शरीरातील प्रमुख स्नायूंसाठी हलका शक्तिवर्धक व्यायाम" },
  { day: "बहुतेक दिवस", plan: "दीर्घकाळ बसणे अधूनमधून थांबवून थोडे चालणे किंवा हालचाल" },
  { day: "गरजेनुसार", plan: "विश्रांती किंवा सौम्य हालचाल; थकवा आणि वेदना लक्षात घ्या" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "सर्वोत्तम व्यायाम कोणता? सुरक्षित सुरुवातीचे मार्गदर्शन",
  description:
    "प्रौढांसाठी व्यायाम निवड, आठवड्याचे उद्दिष्ट, सुरुवातीची योजना आणि सुरक्षिततेचे मार्गदर्शन.",
  inLanguage: "mr-IN",
  dateModified: "2026-09-19",
  mainEntityOfPage: "https://www.healthycommunity.in/exercise",
};

export default function ExercisePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "व्यायाम" }]} />

      <div className="mt-8">
        <HeroBanner
          eyebrow="व्यायाम"
          title="सर्वोत्तम व्यायाम कोणता?"
          description="जो व्यायाम सुरक्षित आहे, आपल्या क्षमतेला बसतो आणि नियमित करता येतो, तोच आपल्यासाठी योग्य. बहुतेक नवशिक्यांसाठी चालणे हा सोपा प्रारंभ ठरू शकतो."
        />
      </div>

      <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
          <div>
            <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-100">थेट उत्तर</h2>
            <p className="mt-2 leading-relaxed text-emerald-900 dark:text-emerald-200">
              एकच व्यायाम सर्वांसाठी सर्वोत्तम नसतो. हृदय व फुफ्फुसांसाठी हालचाल, स्नायूंसाठी शक्तिवर्धक व्यायाम आणि बसण्याचा वेळ कमी करणे—या तिन्हींचा समतोल अधिक उपयोगी ठरतो. कमी वेळेपासून सुरुवात करून सातत्य राखा.
            </p>
          </div>
        </div>
      </section>

      <figure className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <Image
          src="/images/exercise/balanced-weekly-activity.webp"
          alt="चालणे, शक्तिवर्धक व्यायाम, स्ट्रेचिंग आणि बसण्याच्या वेळेत छोटे चालण्याचे ब्रेक घेणारे भारतीय प्रौढ"
          width={1400}
          height={788}
          sizes="(min-width: 1024px) 896px, calc(100vw - 32px)"
          priority
          className="h-auto w-full"
        />
        <figcaption className="p-5">
          <p className="font-semibold text-slate-900 dark:text-white">संतुलित हालचालीचे चार भाग</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-4">
            <li>🚶 चालणे</li>
            <li>💪 शक्तिवर्धक व्यायाम</li>
            <li>🧘 लवचिकता व संतुलन</li>
            <li>🪑 बसण्यात छोटे ब्रेक</li>
          </ul>
        </figcaption>
      </figure>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">उद्दिष्टानुसार व्यायाम निवडा</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {choices.map((choice) => (
            <article
              key={choice.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="text-3xl" aria-hidden="true">{choice.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{choice.title}</h3>
              <p className="mt-2 font-medium text-emerald-700 dark:text-emerald-400">{choice.activity}</p>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">{choice.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-7 dark:border-blue-900 dark:bg-blue-950/30">
        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-7 w-7 flex-shrink-0 text-blue-700 dark:text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-blue-950 dark:text-blue-100">प्रौढांसाठी आठवड्याचे उद्दिष्ट</h2>
            <p className="mt-3 leading-relaxed text-blue-900 dark:text-blue-200">
              जागतिक आरोग्य संघटनेनुसार प्रौढांनी आठवड्याला किमान १५०–३०० मिनिटे मध्यम तीव्रतेची किंवा ७५–१५० मिनिटे तीव्र हालचाल करावी. प्रमुख स्नायूंसाठी शक्तिवर्धक व्यायाम आठवड्यात किमान २ दिवस करावा.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
              हे अंतिम लक्ष्य आहे—पहिल्याच आठवड्यात पूर्ण करणे आवश्यक नाही. थोडी हालचालही निष्क्रिय राहण्यापेक्षा चांगली आहे.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">नवशिक्यांसाठी लवचिक आठवडा</h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
          हा नमुना आहे, नियम नाही. दिवसांची अदलाबदल करा आणि सध्याच्या क्षमतेनुसार वेळ कमी-जास्त करा.
        </p>
        <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
          {starterWeek.map((item) => (
            <div key={item.day} className="grid gap-1 p-5 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <p className="font-semibold text-emerald-700 dark:text-emerald-400">{item.day}</p>
              <p className="text-slate-700 dark:text-slate-300">{item.plan}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
          <Activity className="h-6 w-6 text-emerald-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">हळूहळू वाढवा</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">आधी वेळ आणि नियमितता वाढवा; नंतरच वेग किंवा प्रतिकार वाढवा.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
          <Heart className="h-6 w-6 text-rose-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">शरीराचे संकेत पहा</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">छातीत वेदना, बेशुद्ध पडल्यासारखे वाटणे किंवा असामान्य दम लागल्यास थांबा आणि वैद्यकीय मदत घ्या.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
          <Zap className="h-6 w-6 text-amber-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">सातत्याला प्राधान्य</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">आवडणारी, उपलब्ध आणि दीर्घकाळ करता येणारी हालचाल निवडा.</p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex gap-4">
          <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-700 dark:text-amber-400" />
          <div>
            <h2 className="text-xl font-bold text-amber-950 dark:text-amber-100">सुरुवातीपूर्वी सल्ला कधी घ्यावा?</h2>
            <p className="mt-2 leading-relaxed text-amber-900 dark:text-amber-200">
              हृदयविकार, श्वसनाचा आजार, मधुमेहातील गुंतागुंत, अलीकडील शस्त्रक्रिया, गर्भधारणा किंवा हालचालीत अडथळा आणणारी वेदना असल्यास योग्य प्रकार आणि तीव्रता ठरवण्यासाठी डॉक्टर किंवा पात्र आरोग्यतज्ज्ञांचा सल्ला घ्या.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">संदर्भ</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-300">
          <li><a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noreferrer">World Health Organization: Physical activity</a></li>
          <li><a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.cdc.gov/physical-activity/php/about/index.html" target="_blank" rel="noreferrer">CDC: About Physical Activity</a></li>
        </ul>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">माहिती अद्ययावत: १९ सप्टेंबर २०२६</p>
      </section>

      <RelatedLinks
        title="पुढे काय वाचाल?"
        links={[
          { href: "/diabetes/exercise", title: "मधुमेह आणि व्यायाम", description: "रक्तातील साखरेचा विचार करून व्यायाम करताना घ्यायची काळजी समजून घ्या." },
          { href: "/calculators/calories", title: "कॅलरी कॅल्क्युलेटर", description: "आपल्या अंदाजे दैनंदिन ऊर्जेच्या गरजेची माहिती मिळवा." },
        ]}
      />

      <div className="mt-12"><Disclaimer /></div>
      <div className="mt-10">
        <CTA title="आजची सुरुवात सोपी ठेवा" description="दहा मिनिटे चालणेही चांगली सुरुवात ठरू शकते. आपल्या क्षमतेनुसार हळूहळू पुढे जा." />
      </div>
    </main>
  );
}
