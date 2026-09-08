import type { Metadata } from "next";
import Image from "next/image";
import { Wheat, HeartPulse, Salad, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "मिलेट्स म्हणजे काय? प्रकार आणि आहारातील वापर",
  description:
    "मधुमेह व्यवस्थापनासाठी उपयुक्त मिलेट्स: बार्नयार्ड, नाचणी, कोदो, फॉक्सटेल, लिटल आणि ब्राऊनटॉप यांची माहिती.",
  keywords: ["मिलेट्स", "तृणधान्य", "मधुमेह", "नाचणी", "बार्नयार्ड"],
  openGraph: {
    title: "मिलेट्स म्हणजे काय? प्रकार आणि आहारातील वापर",
    description:
      "मधुमेह असलेल्या व्यक्तींनी आहारात कोणती मिलेट्स कशी समाविष्ट करावी यावरील मार्गदर्शन.",
  },
  alternates: { canonical: "/millets" },
};

const milletHighlights = [
  {
    title: "बार्नयार्ड मिलेट (Barnyard Millet)",
    imageSrc: "/images/millets/barnyard-millet.jpg",
    imageAlt: "बार्नयार्ड मिलेट (Barnyard Millet) चे दाणे आणि कणसे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Echinochloa_frumentacea_MHNT.BOT.2013.22.37.jpg",
    description:
      "बार्नयार्ड मिलेट (सांवा, समक तांदूळ, कुतिरावली) हे मधुमेहासाठी सर्वोत्तम मानल्या जाणाऱ्या तृणधान्यांपैकी एक आहे. यामध्ये भरपूर फायबर, प्रथिने, लोह, कॅल्शियम, मॅग्नेशियम आणि बी-समूह जीवनसत्त्वे आढळतात. याचा ग्लायसेमिक इंडेक्स (GI) पांढऱ्या तांदळापेक्षा कमी असल्यामुळे जेवणानंतर रक्तातील साखर झपाट्याने वाढत नाही. हे जास्त वेळ पोट भरल्यासारखे ठेवते, वजन नियंत्रणात मदत करते आणि पचन सुधारते. उपमा, खिचडी, पुलाव, पेज किंवा भाताच्या पर्याय म्हणून याचा वापर करता येतो. मधुमेह असलेल्या व्यक्तींनी आठवड्यातून २ ते ३ वेळा मर्यादित प्रमाणात सेवन करणे फायदेशीर ठरते."
  },

  {
    title: "नाचणी (Ragi / Finger Millet)",
    imageSrc: "/images/millets/finger-millet.jpg",
    imageAlt: "नाचणी किंवा फिंगर मिलेट (Finger Millet) ची कणसे आणि दाणे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Eleusine_coracana_MHNT.BOT.2015.34.17.jpg",
    description:
      "नाचणी हे कॅल्शियम, लोह, फायबर आणि अँटिऑक्सिडंट्सने समृद्ध असलेले अत्यंत पौष्टिक धान्य आहे. हाडे मजबूत ठेवण्यासाठी हे सर्वोत्तम नैसर्गिक स्रोतांपैकी एक मानले जाते. फायबरमुळे अन्नाचे पचन हळूहळू होते, त्यामुळे रक्तातील साखर नियंत्रित राहण्यास मदत मिळते. तसेच वजन कमी करण्यासाठी, बद्धकोष्ठता कमी करण्यासाठी आणि दीर्घकाळ पोट भरल्यासारखे वाटण्यासाठी नाचणी उपयुक्त आहे. नाचणीची भाकरी, सत्त्व, डोसा, इडली किंवा रागी माल्ट स्वरूपात सेवन करता येते."
  },

  {
    title: "कोदो मिलेट (Kodo Millet)",
    imageSrc: "/images/millets/kodo-millet.jpg",
    imageAlt: "कोदो मिलेट (Kodo Millet) चे दाणे",
    imageCredit: "Tonynirappathu / Wikimedia Commons (CC BY 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Kodo_Millet.jpg",
    description:
      "कोदो मिलेट (कोद्रा) हे उच्च फायबरयुक्त आणि कमी ग्लायसेमिक इंडेक्स असलेले तृणधान्य आहे. यामध्ये प्रथिने, लोह, मॅग्नेशियम, फॉस्फरस आणि अँटिऑक्सिडंट्स मुबलक प्रमाणात असतात. हे रक्तातील साखर नियंत्रित ठेवण्यास, पचन सुधारण्यास, वजन कमी करण्यास आणि हृदयाचे आरोग्य चांगले ठेवण्यास मदत करते. कोदो मिलेट भाताचा उत्तम पर्याय असून त्यापासून खिचडी, पुलाव, उपमा आणि पेज तयार करता येते. मधुमेह असलेल्या व्यक्तींनी आठवड्यातून २ वेळा याचा आहारात समावेश करावा."
  },

  {
    title: "फॉक्सटेल मिलेट (Foxtail Millet)",
    imageSrc: "/images/millets/foxtail-millet.jpg",
    imageAlt: "फॉक्सटेल मिलेट (Foxtail Millet) ची कणसे आणि दाणे",
    imageCredit: "Roger Culos / Wikimedia Commons (CC BY-SA 4.0)",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Setaria_italica_MHNT.BOT.2015.34.19.jpg",
    description:
      "फॉक्सटेल मिलेट (कांगणी/काकूम) हे प्रथिने आणि फायबरचा उत्कृष्ट स्रोत आहे. यामध्ये लोह, मॅग्नेशियम, फॉस्फरस आणि बी-समूह जीवनसत्त्वे भरपूर प्रमाणात असतात. हे पचन सुधारते, ऊर्जा टिकवून ठेवते, वजन नियंत्रणात मदत करते आणि रक्तातील साखरेची पातळी स्थिर ठेवण्यास सहाय्य करते. सकाळच्या नाश्त्यासाठी उपमा, डोसा, इडली किंवा पुलाव बनवण्यासाठी हे उत्तम धान्य आहे. नियमित पण मर्यादित प्रमाणात सेवन केल्यास मधुमेह नियंत्रणासाठी फायदेशीर ठरते."
  },

  {
    title: "लिटल मिलेट (Little Millet)",
    imageSrc: "/images/millets/little-millet.jpg",
    imageAlt: "लिटल मिलेट (Little Millet) चे दाणे",
    imageCredit: "Tonynirappathu / Wikimedia Commons (CC BY 4.0)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Little_Millet.jpg",
    description:
      "लिटल मिलेट (सामई/कुटकी) आकाराने लहान असले तरी पोषणमूल्यांनी समृद्ध आहे. यामध्ये फायबर, प्रथिने, लोह, मॅग्नेशियम, फॉस्फरस आणि अँटिऑक्सिडंट्स मुबलक प्रमाणात असतात. हे पचन सुधारते, दीर्घकाळ पोट भरल्याची भावना देते, रक्तातील साखर नियंत्रित ठेवण्यास मदत करते आणि हृदयाच्या आरोग्यासाठी लाभदायक आहे. यापासून उपमा, खिचडी, पुलाव, पेज आणि डोसा सहज बनवता येतो. आठवड्यातून १ ते २ वेळा सेवन केल्यास आरोग्यासाठी चांगला पर्याय ठरतो."
  },

  {
    title: "ब्राऊनटॉप मिलेट (Browntop Millet)",
    imageSrc: "/images/millets/browntop-millet.jpg",
    imageAlt: "ब्राऊनटॉप मिलेट (Browntop Millet) चे रोप आणि कणसे",
    imageCredit: "Bat / Wikimedia Commons (CC0)",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Brachiaria_ramosa_from_Ambanja,_Madagascar.jpg",
    description:
      "ब्राऊनटॉप मिलेट हे सर्वाधिक फायबर असलेल्या तृणधान्यांपैकी एक आहे. यामध्ये लोह, मॅग्नेशियम, फॉस्फरस, प्रथिने आणि अँटिऑक्सिडंट्स भरपूर असतात. हे आतड्यांचे आरोग्य सुधारते, रक्तातील साखर हळूहळू वाढू देते, वजन नियंत्रणात मदत करते आणि दीर्घकाळ पोट भरल्यासारखे वाटते. याचा वापर उपमा, पुलाव, खिचडी किंवा पेज बनवण्यासाठी करता येतो. मधुमेह असलेल्या व्यक्तींनी आठवड्यातून १ वेळा याचा आहारात समावेश करावा."
  }
];

const usageTips = [
  "एकदम मोठा बदल न करता आठवड्यात १-२ वेळा मिलेट वापरून सुरुवात करा.",
  "मिलेट्स भिजवून आणि नीट शिजवून खाल्ल्यास पचनास मदत होते.",
  "पांढऱ्या तांदळाऐवजी मिलेट्सचे प्रमाण हळूहळू वाढवा.",
  "मिलेटसोबत भाज्या, प्रथिने (डाळ/कडधान्य) आणि सॅलड जोडा.",
];

export default function MilletsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "मिलेट्स" }]} />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मिलेट्स"
          title="मिलेट्स म्हणजे काय? प्रकार आणि आहारातील वापर"
          description="मिलेट्समध्ये फायबर, खनिजे आणि सूक्ष्म पोषकद्रव्ये मुबलक असतात. संतुलित प्रमाणात आहारात समावेश केल्यास रक्तातील साखर नियंत्रणासाठी मदत होऊ शकते."
        />
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {milletHighlights.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <figure>
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 640px) 416px, calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 pt-2 text-xs text-slate-500 dark:text-slate-400">
                छायाचित्र:{" "}
                <a
                  href={item.imageSource}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-slate-300 underline-offset-2 hover:text-emerald-700 dark:decoration-slate-600 dark:hover:text-emerald-400"
                >
                  {item.imageCredit}
                </a>
              </figcaption>
            </figure>
            <div className="p-5 pt-3">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">आहारात मिलेट्स कसे समाविष्ट कराल?</h2>
        <div className="mt-5 grid gap-3">
          {usageTips.map((tip) => (
            <div key={tip} className="flex gap-3 text-emerald-900 dark:text-emerald-100">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <Wheat className="h-6 w-6 text-amber-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">उच्च फायबर</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">हळूहळू पचन होऊन साखर अचानक वाढण्याची शक्यता कमी होते.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <HeartPulse className="h-6 w-6 text-rose-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">हृदयासाठी उपयुक्त</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">चांगले फॅट प्रोफाइल आणि खनिजांमुळे हृदय आरोग्याला हातभार लागू शकतो.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <Salad className="h-6 w-6 text-emerald-600" />
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">संतुलित जेवण</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">मिलेट + भाज्या + डाळ/प्रथिने असा थाळी पॅटर्न जास्त फायदेशीर ठरतो.</p>
        </div>
      </section>

      <RelatedLinks
        title="आहाराबद्दल पुढे काय वाचाल?"
        links={[
          { href: "/diabetes/diet", title: "मधुमेहासाठी आहार", description: "जेवणातील इतर पदार्थांसोबत मिलेट्सचा विचार कसा करावा ते समजून घ्या." },
          { href: "/nutrition", title: "संतुलित आहार", description: "धान्ये, डाळी आणि भाज्या यांचा रोजच्या आहारातील सहभाग जाणून घ्या." },
        ]}
      />

      <div className="mt-12">
        <Disclaimer />
      </div>

      <div className="mt-10">
        <CTA
          title="मधुमेह आहार नियोजनासाठी मार्गदर्शन हवे आहे?"
          description="आहार, व्यायाम आणि जीवनशैलीतील छोटे बदल दीर्घकालीन आरोग्य सुधारू शकतात."
        />
      </div>
    </main>
  );
}

