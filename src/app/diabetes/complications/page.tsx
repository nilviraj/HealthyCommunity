import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाची गुंतागुंत",
  description: "मधुमेहामुळे डोळे, मूत्रपिंड, हृदय, मज्जातंतू आणि पायांवर होणारे परिणाम, धोक्याची लक्षणे आणि आवश्यक तपासण्या.",
  alternates: { canonical: "/diabetes/complications" },
  openGraph: {
    title: "मधुमेहाची गुंतागुंत",
    description: "मधुमेहाची संभाव्य गुंतागुंत, धोक्याची लक्षणे आणि आवश्यक काळजी.",
    url: "/diabetes/complications",
    type: "website",
    images: [{ url: "/images/diabetes/complications-care.webp", width: 1536, height: 1024, alt: "मधुमेहाच्या गुंतागुंतींसाठी नियमित वैद्यकीय काळजी" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाची गुंतागुंत",
    description: "मधुमेहाची संभाव्य गुंतागुंत, धोक्याची लक्षणे आणि आवश्यक काळजी.",
    images: ["/images/diabetes/complications-care.webp"],
  },
};

export default function ComplicationsPage() {
  const complications = [
    {
  title: "डोळ्यांचा आजार (Diabetic Retinopathy)",
  symptoms: "धूसर दिसणे, डोळ्यासमोर काळे ठिपके किंवा तरंगणारे डाग दिसणे, रंग ओळखण्यात अडचण येणे किंवा दृष्टी कमी होणे.",
  prevention: "रक्तातील साखर आणि रक्तदाब नियंत्रणात ठेवा, नियमित डोळ्यांची तपासणी करून घ्या आणि दृष्टीत कोणताही बदल जाणवल्यास त्वरित नेत्रतज्ज्ञांचा सल्ला घ्या."
    },
    {
  title: "मूत्रपिंडाचा आजार (Diabetic Nephropathy)",
  symptoms: "पाय, घोटे किंवा चेहऱ्यावर सूज येणे, लघवीमध्ये प्रथिने जाणे, थकवा जाणवणे, रक्तदाब वाढणे.",
  prevention: "रक्तातील साखर आणि रक्तदाब सांभाळा, डॉक्टरांनी दिलेली औषधे नियमित घ्या आणि मूत्रपिंडाच्या कार्यासाठी रक्त व लघवीच्या चाचण्या वेळेवर करा. पाणी व मीठाचे प्रमाण डॉक्टरांच्या सल्ल्याने ठरवा."
    },
    {
  title: "हृदयविकार (Cardiovascular Disease)",
  symptoms: "छातीत दुखणे, श्वास घेण्यास त्रास होणे, हृदयाचे ठोके अनियमित होणे, लवकर थकवा जाणवणे.",
  prevention: "रक्तातील साखर, रक्तदाब आणि कोलेस्टेरॉल सांभाळा, नियमित हालचाल करा, संतुलित आहार घ्या, धूम्रपान टाळा आणि डॉक्टरांनी सांगितलेल्या तपासण्या करा."
    },
    {
  title: "स्ट्रोक (Stroke)",
  symptoms: "शरीराच्या एका बाजूला अचानक अशक्तपणा किंवा सुन्नपणा येणे, बोलण्यात अडचण येणे, चेहरा एका बाजूला वाकणे, अचानक दिसण्यात अडचण येणे.",
  prevention: "रक्तातील साखर, रक्तदाब आणि कोलेस्टेरॉल सांभाळा, नियमित हालचाल करा, संतुलित आहार घ्या, धूम्रपान टाळा आणि डॉक्टरांनी सांगितलेल्या तपासण्या करा."
    },
    {
      title: "मज्जातंतूंचे नुकसान (Neuropathy)",
      symptoms: "हात किंवा पाय सुन्न होणे, मुंग्या येणे, जळजळ होणे किंवा वेदना जाणवणे.",
      prevention: "रक्तातील साखर नियंत्रणात ठेवा, दररोज पायांची तपासणी करा आणि पायांची योग्य काळजी घ्या.",
    },
    {
      title: "मधुमेहामुळे पायावरील जखमा (Diabetic Foot Ulcer)",
      symptoms: "पायावर जखम होणे, जखम लवकर न भरणे, सूज येणे, लालसरपणा किंवा संसर्ग होणे.",
      prevention: "दररोज पायांची तपासणी करा, अनवाणी चालणे टाळा, आरामदायक पादत्राणे वापरा आणि जखम दिसल्यास त्वरित डॉक्टरांचा सल्ला घ्या.",
    },
    {
      title: "त्वचेचे संसर्ग",
      symptoms: "त्वचेवर खाज येणे, लालसरपणा, बुरशीचा संसर्ग, जखम उशिरा भरून येणे किंवा वारंवार त्वचेचे संसर्ग होणे.",
      prevention: "त्वचा स्वच्छ व कोरडी ठेवा, दररोज अंघोळ करा आणि संसर्गाची लक्षणे दिसल्यास त्वरित डॉक्टरांचा सल्ला घ्या.",
    },
    {
  title: "दात व हिरड्यांच्या समस्या",
  symptoms: "हिरड्यांतून रक्त येणे, हिरड्यांना सूज येणे, तोंडाला दुर्गंधी येणे, दात सैल होणे किंवा गळणे.",
  prevention: "दिवसातून दोनदा दात घासा, दातांमधील जागा स्वच्छ ठेवा, रक्तातील साखरेचे व्यवस्थापन करा आणि दंतवैद्याने सुचवलेल्या वेळेनुसार तपासणी करून घ्या."
    },
    {
  title: "मानसिक आरोग्य",
  symptoms: "सतत उदास वाटणे, चिंता वाटणे, तणाव जाणवणे, झोप न लागणे किंवा कोणत्याही कामात रस कमी होणे.",
  prevention: "नियमित व्यायाम करा, योग व ध्यानाचा सराव करा, कुटुंबीय आणि मित्रांसोबत वेळ घालवा, पुरेशी झोप घ्या आणि गरज वाटल्यास मानसोपचार तज्ज्ञांचा सल्ला घ्या."
    },
    {
  title: "लैंगिक आरोग्याशी संबंधित समस्या",
  symptoms: "पुरुषांमध्ये ताठरता टिकवण्यात अडचण येणे, महिलांमध्ये योनीमार्गात कोरडेपणा किंवा लैंगिक संबंधांदरम्यान अस्वस्थता जाणवणे.",
  prevention: "रक्तातील साखर नियंत्रणात ठेवा, नियमित व्यायाम करा, धूम्रपान व मद्यपान टाळा आणि समस्या असल्यास डॉक्टरांचा मोकळेपणाने सल्ला घ्या."
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "गुंतागुंत" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह गुंतागुंत"
          title="मधुमेहाची दीर्घकालीन गुंतागुंत"
          description="योग्य उपचार आणि नियमित तपासण्यांमुळे अनेक गुंतागुंतींचा धोका कमी किंवा त्यांची सुरुवात उशिरा होऊ शकते."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/complications-care.webp"
        alt="हृदय, डोळे, मूत्रपिंड, मज्जातंतू आणि पायांची काळजी डॉक्टरांकडून समजून घेणारा रुग्ण"
        caption="नियमित तपासण्या आणि रक्तातील साखर, रक्तदाब व कोलेस्टेरॉलचे व्यवस्थापन गुंतागुंतींचा धोका कमी करण्यास मदत करते."
        priority
      />

      <MedicalTip type="warning" title="महत्त्वाचे">
        रक्तातील साखर दीर्घकाळ जास्त राहिल्यास रक्तवाहिन्या आणि मज्जातंतूंना नुकसान होऊ शकते. रक्तातील साखरेसोबत रक्तदाब, कोलेस्टेरॉल, धूम्रपान आणि इतर जोखीम घटकांचे व्यवस्थापनही महत्त्वाचे आहे.
      </MedicalTip>

      <section className="mt-12 space-y-6">
        {complications.map((comp, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 flex-shrink-0">
                <span className="text-sm font-bold text-red-700 dark:text-red-300">{idx + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{comp.title}</h3>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">लक्षणे:</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{comp.symptoms}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">धोका कमी करण्यासाठी:</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{comp.prevention}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">गुंतागुंतीपासून सुरक्षित राहण्यासाठी सामान्य सूचना</h2>

        <div className="grid gap-4">
          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ रक्तातील साखरेचे व्यवस्थापन</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">डॉक्टरांनी ठरवलेल्या वैयक्तिक लक्ष्याच्या दिशेने सातत्याने काम करा.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ संतुलित आहार</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">भाज्या, योग्य प्रमाणातील धान्य, कडधान्ये व इतर प्रथिनांचे स्रोत आणि संपूर्ण फळे निवडा.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ नियमित व्यायाम</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">तुमच्या क्षमतेनुसार नियमित हालचाल करा; गुंतागुंत असल्यास योग्य व्यायाम डॉक्टरांकडून समजून घ्या.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ वजन व्यवस्थापन</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">जादा वजन असल्यास सुरक्षित आणि वास्तववादी उद्दिष्ट डॉक्टर किंवा आहारतज्ज्ञासोबत ठरवा.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ औषधे नियमित घेणे</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">औषधे आणि इन्सुलिन नेमक्या सूचनेप्रमाणे घ्या; स्वतःहून बदल करू नका.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ तणाव कमी करा</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">श्वसनाचा सराव, आवडते काम, पुरेशी झोप आणि गरज असल्यास तज्ज्ञांची मदत घ्या.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ नियमित तपासणी</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">तुमचा मधुमेहाचा प्रकार, औषधे आणि तब्येत यानुसार डॉक्टर भेटींचे वेळापत्रक ठरवा.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ जीवनशैली बदल</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">धूम्रपान टाळा. मद्य घेत असल्यास त्याचा औषधे आणि रक्तातील साखरेवर होणारा परिणाम डॉक्टरांकडून समजून घ्या.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">नियमित तपासणी</h2>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4">डॉक्टरांनी सुचवलेल्या वेळेनुसार:</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
            <li>• HbA1c चाचणी</li>
            <li>• रक्तातील साखरेच्या नोंदींचा आढावा</li>
            <li>• लिपिड प्रोफाईल</li>
            <li>• रक्तदाब तपासणी</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6">
          <h3 className="font-semibold text-green-900 dark:text-green-200 mb-4">प्रत्येक वर्षी:</h3>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
            <li>• संपूर्ण आरोग्य तपासणी</li>
            <li>• डोळ्यांची तपासणी (नेत्र वैद्यांद्वारे)</li>
            <li>• मूत्रपिंडासाठी रक्त व लघवीच्या चाचण्या</li>
            <li>• दंत तपासणी</li>
            <li>• पायांची तपासणी</li>
          </ul>
        </div>
      </section>

      <RelatedLinks
        title="गुंतागुंत समजून घेतल्यानंतर"
        description="जोखीम कमी करणाऱ्या मूलभूत पानांकडे परत जा."
        links={[
          {
            href: "/diabetes/diagnosis",
            title: "निदान",
            description: "नियमित चाचण्यांनी समस्या लवकर सापडतात.",
          },
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्तातील साखरेची तपासणी",
            description: "घरी केलेल्या तपासणीची नोंद उपचारांचा परिणाम समजण्यास मदत करते.",
          },
          {
            href: "/diabetes/foot-care",
            title: "पायांची काळजी",
            description: "डायबिटीजच्या गुंतागुंतींपासून संरक्षणासाठी पायांची निगा.",
          },
        ]}
      />

      <div className="mt-12">
        <CTA />
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </main>
  );
}
