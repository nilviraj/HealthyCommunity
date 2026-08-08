import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाची गुंतागुंत",
  description: "मधुमेहाची दीर्घकालीन गुंतागुंत आणि त्यांची रोखथाम.",
  alternates: { canonical: "/diabetes/complications" },
  openGraph: {
    title: "मधुमेहाची गुंतागुंत",
    description: "मधुमेहाची दीर्घकालीन गुंतागुंत आणि त्यांची रोखथाम.",
    url: "/diabetes/complications",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाची गुंतागुंत",
    description: "मधुमेहाची दीर्घकालीन गुंतागुंत आणि त्यांची रोखथाम.",
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
  prevention: "रक्तातील साखर आणि रक्तदाब नियंत्रणात ठेवा, डॉक्टरांनी दिलेली औषधे नियमित घ्या, मीठाचे प्रमाण कमी ठेवा, पुरेसे पाणी प्या आणि मूत्रपिंडाच्या कार्याची नियमित तपासणी करा."
    },
    {
  title: "हृदयविकार (Cardiovascular Disease)",
  symptoms: "छातीत दुखणे, श्वास घेण्यास त्रास होणे, हृदयाचे ठोके अनियमित होणे, लवकर थकवा जाणवणे.",
  prevention: "रक्तातील साखर, रक्तदाब आणि कोलेस्टेरॉल नियंत्रणात ठेवा, नियमित व्यायाम करा, संतुलित आहार घ्या, धूम्रपान व मद्यपान टाळा आणि नियमित आरोग्य तपासणी करून घ्या."
    },
    {
  title: "स्ट्रोक (Stroke)",
  symptoms: "शरीराच्या एका बाजूला अचानक अशक्तपणा किंवा सुन्नपणा येणे, बोलण्यात अडचण येणे, चेहरा एका बाजूला वाकणे, अचानक दिसण्यात अडचण येणे.",
  prevention: "रक्तातील साखर, रक्तदाब आणि कोलेस्टेरॉल नियंत्रणात ठेवा, नियमित व्यायाम करा, संतुलित आहार घ्या, धूम्रपान व मद्यपान टाळा आणि नियमित आरोग्य तपासणी करून घ्या."
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
  prevention: "दिवसातून दोन वेळा दात घासा, नियमित फ्लॉसचा वापर करा, रक्तातील साखर नियंत्रणात ठेवा आणि दर ६ महिन्यांनी दंतवैद्यांकडून तपासणी करून घ्या."
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
          description="योग्य नियंत्रणामुळे या गुंतागुंत रोखू शकतात."
        />
      </div>

      <MedicalTip type="warning" title="महत्वाची">
        मधुमेह दीर्घकाळ नियंत्रित न राहिल्यास विविध अंगांना नुकसान होऊ शकते. नियमित रक्तशर्करा नियंत्रण या समस्या रोकण्यास मदत करू शकते.
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
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">प्रतिबंध:</p>
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
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ नियमित रक्तशर्करा नियंत्रण</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">रक्तशर्करा सामान्य पातळीवर ठेवल्याने गुंतागुंत होण्याचा धोका कमी होतो.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ स्वस्थ आहार</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">संपूर्ण धान्य, भाज्या, फळे आणि प्रोटीनयुक्त खाद्य.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ नियमित व्यायाम</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">आठवड्यात कमीत कमी 150 मिनिटे व्यायाम करा.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ वजन व्यवस्थापन</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">स्वस्थ वजन राखा - हे इन्सुलिन संवेदनशीलतेत सुधार करते.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ औषध नियमितता</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">डॉक्टरांनी सांगितलेल्या सर्व औषधे वेळेवर घ्या.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ तणाव कमी करा</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">ध्यान, योग आणि विश्राम तणाव कमी करतात.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ नियमित तपासणी</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">महिन्यामध्ये कमीत कमी एक वेळा डॉक्टरांना भेट दे.</p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">✓ जीवनशैली बदल</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">धूम्रपान आणि अल्कोहोलपासून दूर राहा.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">नियमित तपासणी</h2>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4">प्रत्येक 3-6 महिन्यामध्ये:</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
            <li>• HbA1c परीक्षा</li>
            <li>• रक्तशर्करा परीक्षा</li>
            <li>• लिपिड प्रोफाईल</li>
            <li>• रक्तचाप तपासणी</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6">
          <h3 className="font-semibold text-green-900 dark:text-green-200 mb-4">प्रत्येक वर्षी:</h3>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
            <li>• संपूर्ण आरोग्य तपासणी</li>
            <li>• डोळ्यांची तपासणी (नेत्र वैद्यांद्वारे)</li>
            <li>• वुकल कार्य परीक्षा</li>
            <li>• दंत तपासणी</li>
            <li>• पायांची तपासणी</li>
          </ul>
        </div>
      </section>

      <RelatedLinks
        title="जटिलता समजून घेतल्यानंतर"
        description="जोखीम कमी करणाऱ्या मूलभूत पानांकडे परत जा."
        links={[
          {
            href: "/diabetes/diagnosis",
            title: "निदान",
            description: "नियमित चाचण्यांनी समस्या लवकर सापडतात.",
          },
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्त शर्करा मापन",
            description: "घरी मोजणी करून गुंतागुंत कमी करा.",
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


