import type { Metadata } from "next";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Salad, Wheat } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "मिलेट्स म्हणजे काय? मराठी नावे, प्रकार आणि वापर",
  description:
    "नाचणी, वरी, कोदो, कांगणी, लिटल मिलेट आणि ब्राऊनटॉप मिलेटची ओळख, शास्त्रीय नावे, स्वयंपाकातील वापर आणि संतुलित आहारातील स्थान.",
  keywords: ["मिलेट्स म्हणजे काय", "मिलेट मराठी नाव", "नाचणी", "वरी", "लिटल मिलेट मराठी"],
  openGraph: {
    title: "मिलेट्स म्हणजे काय? मराठी नावे, प्रकार आणि वापर",
    description: "मिलेट्स ओळखण्यासाठी स्थानिक आणि शास्त्रीय नावे, तसेच रोजच्या जेवणातील व्यावहारिक उपयोग.",
    url: "/millets",
  },
  alternates: { canonical: "/millets" },
};

const milletHighlights = [
  {
    title: "वरी / सावा (Barnyard Millet)",
    botanicalName: "Echinochloa frumentacea",
    imageSrc: "/images/millets/barnyard-millet.jpg",
    imageAlt: "वरी किंवा बार्नयार्ड मिलेटची कणसे आणि दाणे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Echinochloa_frumentacea_MHNT.BOT.2013.22.37.jpg",
    uses: "महाराष्ट्रात वरी हा उपवासातील भात म्हणून परिचित आहे. खिचडी, भातासारखा प्रकार किंवा पेज करता येते.",
    benefit: "यातील फायबर पचन नियमित ठेवण्यास आणि जेवणानंतर जास्त वेळ पोट भरल्यासारखे वाटण्यास मदत करू शकते. लोह शरीरात हिमोग्लोबिन तयार करण्यासाठी आवश्यक असते.",
    nutrition: { protein: "६.२ ग्रॅम", fibre: "१०.१ ग्रॅम", calcium: "२० मिग्रॅ", iron: "१५ मिग्रॅ", phosphorus: "२९३ मिग्रॅ" },
  },
  {
    title: "नाचणी / रागी (Finger Millet)",
    botanicalName: "Eleusine coracana",
    imageSrc: "/images/millets/finger-millet.jpg",
    imageAlt: "नाचणी किंवा फिंगर मिलेटची कणसे आणि दाणे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Eleusine_coracana_MHNT.BOT.2015.34.17.jpg",
    uses: "नाचणीची भाकरी, आंबील, सत्त्व, डोसा किंवा थालीपीठ करता येते. साखर घातलेले तयार मिश्रण निवडताना लेबल तपासा.",
    benefit: "नाचणीतील कॅल्शियम हाडे आणि दातांच्या सामान्य आरोग्यासाठी महत्त्वाचे आहे. प्रथिने आणि फायबरमुळे ती संतुलित जेवणातील उपयुक्त धान्य ठरू शकते.",
    nutrition: { protein: "७.३ ग्रॅम", fibre: "३.६ ग्रॅम", calcium: "३४४ मिग्रॅ", iron: "३.९ मिग्रॅ", phosphorus: "२८३ मिग्रॅ" },
  },
  {
    title: "कोदो / कोद्रा (Kodo Millet)",
    botanicalName: "Paspalum scrobiculatum",
    imageSrc: "/images/millets/kodo-millet.jpg",
    imageAlt: "कोदो मिलेटचे दाणे",
    imageCredit: "Tonynirappathu / Wikimedia Commons (CC BY 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Kodo_Millet.jpg",
    uses: "दाणे नीट स्वच्छ करून शिजवा. खिचडी, पुलाव, पेज किंवा उपम्यासारख्या पदार्थांत वापरता येतात.",
    benefit: "यातील फायबर पचन आणि पोट भरल्याची भावना टिकवण्यास मदत करू शकते. विविध धान्यांचा आहारात समावेश करण्यासाठी हा एक पर्याय आहे.",
    nutrition: { protein: "८.३ ग्रॅम", fibre: "९.३ ग्रॅम", calcium: "२७ मिग्रॅ", iron: "०.६ मिग्रॅ", phosphorus: "१८९ मिग्रॅ" },
  },
  {
    title: "कांगणी (Foxtail Millet)",
    botanicalName: "Setaria italica",
    imageSrc: "/images/millets/foxtail-millet.jpg",
    imageAlt: "कांगणी किंवा फॉक्सटेल मिलेटची कणसे आणि दाणे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Setaria_italica_MHNT.BOT.2015.34.19.jpg",
    uses: "दाण्यांपासून उपमा, खिचडी किंवा पुलाव करता येतो; पीठाचा वापर डोसा किंवा इतर मिश्र पिठांत करता येतो.",
    benefit: "या सहा प्रकारांमध्ये कांगणीत प्रथिनांचे प्रमाण तुलनेने जास्त आहे. प्रथिने शरीरातील स्नायू आणि ऊतींच्या देखभालीसाठी आवश्यक असतात.",
    nutrition: { protein: "१२.३ ग्रॅम", fibre: "८ ग्रॅम", calcium: "३१ मिग्रॅ", iron: "१.१ मिग्रॅ", phosphorus: "२५८ मिग्रॅ" },
  },
  {
    title: "लिटल मिलेट / कुटकी (Little Millet)",
    botanicalName: "Panicum sumatrense",
    imageSrc: "/images/millets/little-millet.jpg",
    imageAlt: "लिटल मिलेट किंवा कुटकीचे दाणे",
    imageCredit: "Tonynirappathu / Wikimedia Commons (CC BY 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Little_Millet.jpg",
    uses: "लहान दाण्यांचे हे मिलेट खिचडी, पेज, उपमा किंवा भातासारखे शिजवता येते. पॅकेटवरील शास्त्रीय नाव पाहून प्रकार निश्चित करा.",
    benefit: "यातील प्रथिने, फायबर आणि लोह रोजच्या आहारातील पोषक विविधता वाढवू शकतात. फायबर पचनासाठी उपयुक्त ठरते.",
    nutrition: { protein: "७.७ ग्रॅम", fibre: "७.६ ग्रॅम", calcium: "१७ मिग्रॅ", iron: "९.३ मिग्रॅ", phosphorus: "२०७ मिग्रॅ" },
  },
  {
    title: "ब्राऊनटॉप मिलेट (Browntop Millet)",
    botanicalName: "Urochloa ramosa (syn. Brachiaria ramosa)",
    imageSrc: "/images/millets/browntop-millet.jpg",
    imageAlt: "ब्राऊनटॉप मिलेटचे रोप आणि कणसे",
    imageCredit: "Bat / Wikimedia Commons (CC0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Brachiaria_ramosa_from_Ambanja,_Madagascar.jpg",
    uses: "भारतात तुलनेने कमी परिचित असलेला प्रकार. दाणे शिजवून खिचडी, पेज किंवा पुलावात वापरता येतात.",
    benefit: "यातील प्रथिने शरीराच्या ऊतींच्या देखभालीसाठी, तर फायबर पचन आणि पोट भरल्याची भावना टिकवण्यासाठी उपयुक्त ठरू शकते.",
    nutrition: { protein: "८.९८ ग्रॅम", fibre: "७.३ ग्रॅम", calcium: "२८ मिग्रॅ", iron: "७.७२ मिग्रॅ", phosphorus: "२७६ मिग्रॅ" },
  },
];

const usageTips = [
  "ओळखीच्या धान्याचा काही भाग मिलेटने बदला; एकदम संपूर्ण आहार बदलू नका.",
  "मिलेटसोबत भरपूर भाज्या आणि डाळ, कडधान्य, अंडी किंवा इतर प्रथिनांचा स्रोत जोडा.",
  "संपूर्ण दाणे, पीठ, रवा आणि पफ्स यांचा शरीरावर होणारा परिणाम सारखा असेलच असे नाही.",
  "पॅकेज्ड पदार्थांमध्ये साखर, मीठ, तेल आणि मैदा किती आहे हे पोषणमूल्य तक्त्यात तपासा.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "मिलेट्स म्हणजे काय? मराठी नावे, प्रकार आणि वापर",
  description: "मिलेट्सची मराठी व शास्त्रीय नावे आणि संतुलित आहारातील व्यावहारिक वापर.",
  inLanguage: "mr-IN",
  dateModified: "2026-09-19",
  mainEntityOfPage: "https://www.healthycommunity.in/millets",
};

export default function MilletsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "मिलेट्स" }]} />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मिलेट्स"
          title="मिलेट्स म्हणजे काय?"
          description="मिलेट्स म्हणजे बाजरीसदृश लहान दाण्यांची अनेक तृणधान्ये. प्रत्येक प्रकाराचे नाव, चव आणि उपयोग वेगळा असतो; ते संतुलित आहारातील धान्याचा एक पर्याय आहेत, औषध नाहीत."
        />
      </div>

      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex gap-4">
          <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-700 dark:text-amber-400" />
          <div>
            <h2 className="text-xl font-bold text-amber-950 dark:text-amber-100">नावे प्रदेशानुसार बदलतात</h2>
            <p className="mt-2 leading-relaxed text-amber-900 dark:text-amber-200">
              एकाच स्थानिक नावाचा वापर वेगवेगळ्या धान्यांसाठी होऊ शकतो. खरेदी करताना पॅकेटवरील इंग्रजी आणि शास्त्रीय नाव तपासल्यास योग्य प्रकार ओळखणे सोपे जाते.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">मिलेट्सचे प्रमुख प्रकार</h2>
        <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-200">
          खालील पोषणमूल्ये <strong>प्रति १०० ग्रॅम कच्च्या धान्यासाठी</strong> आहेत. प्रकार, हवामान, प्रक्रिया आणि ब्रँडनुसार प्रत्यक्ष मूल्ये बदलू शकतात. शिजवलेल्या १०० ग्रॅममधील मूल्ये पाण्यामुळे यापेक्षा वेगळी असतात.
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {milletHighlights.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <figure>
                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                  <Image src={item.imageSrc} alt={item.imageAlt} fill sizes="(min-width: 640px) 416px, calc(100vw - 32px)" className="object-cover" />
                </div>
                <figcaption className="px-5 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  छायाचित्र:{" "}
                  <a href={item.imageSource} target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-2 hover:text-emerald-700 dark:decoration-slate-600 dark:hover:text-emerald-400">
                    {item.imageCredit}
                  </a>
                </figcaption>
              </figure>
              <div className="p-5 pt-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-400">शास्त्रीय नाव: {item.botanicalName}</p>
                <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{item.uses}</p>
                <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
                  <h4 className="font-semibold text-slate-900 dark:text-white">पोषणमूल्ये — प्रति १०० ग्रॅम</h4>
                  <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div><dt className="text-slate-500 dark:text-slate-400">प्रथिने</dt><dd className="font-semibold text-slate-900 dark:text-white">{item.nutrition.protein}</dd></div>
                    <div><dt className="text-slate-500 dark:text-slate-400">फायबर</dt><dd className="font-semibold text-slate-900 dark:text-white">{item.nutrition.fibre}</dd></div>
                    <div><dt className="text-slate-500 dark:text-slate-400">कॅल्शियम</dt><dd className="font-semibold text-slate-900 dark:text-white">{item.nutrition.calcium}</dd></div>
                    <div><dt className="text-slate-500 dark:text-slate-400">लोह</dt><dd className="font-semibold text-slate-900 dark:text-white">{item.nutrition.iron}</dd></div>
                    <div><dt className="text-slate-500 dark:text-slate-400">फॉस्फरस</dt><dd className="font-semibold text-slate-900 dark:text-white">{item.nutrition.phosphorus}</dd></div>
                  </dl>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">पोषणातून मिळणारा उपयोग</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.benefit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
        <div className="flex items-start gap-4">
          <Salad className="mt-1 h-7 w-7 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
          <div>
            <h2 className="text-2xl font-bold text-emerald-950 dark:text-emerald-100">मिलेट्स संतुलित जेवणात कसे बसवायचे?</h2>
            <p className="mt-3 leading-relaxed text-emerald-900 dark:text-emerald-200">
              मिलेट हा जेवणातील धान्याचा भाग समजा. भाजी, प्रथिनांचा स्रोत आणि इतर अन्नगटांसोबत विविधता ठेवा. “मिलेट” असे नाव असलेला प्रत्येक पॅकेज्ड पदार्थ आपोआप पौष्टिक ठरत नाही.
            </p>
            <div className="mt-5 grid gap-3">
              {usageTips.map((tip) => (
                <div key={tip} className="flex gap-3 text-emerald-900 dark:text-emerald-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
        <div className="flex gap-4">
          <Wheat className="mt-1 h-6 w-6 flex-shrink-0 text-blue-700 dark:text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-blue-950 dark:text-blue-100">मधुमेह असल्यास काय लक्षात ठेवावे?</h2>
            <p className="mt-3 leading-relaxed text-blue-900 dark:text-blue-200">
              मिलेट्समध्येही कर्बोदके असतात. रक्तातील साखरेवर होणारा परिणाम प्रकाराबरोबरच प्रमाण, दाण्यावरील प्रक्रिया, पाककृती आणि सोबतच्या पदार्थांवर अवलंबून असतो. औषधे स्वतःहून बदलू नका; आहारातील मोठा बदल डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञांशी चर्चा करून करा.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">संदर्भ</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-300">
          <li><a className="underline underline-offset-4 hover:text-emerald-700" href="https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf" target="_blank" rel="noreferrer">ICMR–National Institute of Nutrition: Dietary Guidelines for Indians, 2024</a></li>
          <li><a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1346869/full" target="_blank" rel="noreferrer">Frontiers in Nutrition: आठ प्रकारच्या मिलेट्सची पोषणमूल्ये, 2024</a></li>
          <li><a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.fao.org/millets-2023/en" target="_blank" rel="noreferrer">Food and Agriculture Organization: International Year of Millets</a></li>
        </ul>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">माहिती अद्ययावत: १९ सप्टेंबर २०२६</p>
      </section>

      <RelatedLinks
        title="आहाराबद्दल पुढे काय वाचाल?"
        links={[
          { href: "/diabetes/diet", title: "मधुमेहासाठी आहार", description: "प्रमाण, ताटाची रचना आणि जेवणाचे नियोजन समजून घ्या." },
          { href: "/nutrition", title: "संतुलित आहार", description: "धान्ये, डाळी, भाज्या आणि इतर अन्नगटांचा समतोल जाणून घ्या." },
        ]}
      />

      <div className="mt-12"><Disclaimer /></div>
      <div className="mt-10">
        <CTA title="नवीन धान्य हळूहळू वापरून पाहा" description="चव, पचन आणि आपल्या आरोग्याच्या गरजा लक्षात घेऊन योग्य प्रकार व प्रमाण निवडा." />
      </div>
    </main>
  );
}
