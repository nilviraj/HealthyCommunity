import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाचे सुरुवातीचे लक्षणे",
  description: "मधुमेहाच्या सुरुवातीच्या लक्षणे, थकवा, प्यास, वारंवार प्रस्राव आणि इतर चेतावणी संकेते.",
  keywords: ["मधुमेह लक्षणे", "थकवा", "प्यास", "प्रस्राव"],
  alternates: { canonical: "/diabetes/early-symptoms" },
  openGraph: {
    title: "मधुमेहाचे सुरुवातीचे लक्षणे",
    description: "मधुमेहाच्या सुरुवातीच्या लक्षणे, थकवा, प्यास, वारंवार प्रस्राव आणि इतर चेतावणी संकेते.",
    url: "/diabetes/early-symptoms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाचे सुरुवातीचे लक्षणे",
    description: "मधुमेहाच्या सुरुवातीच्या लक्षणे, थकवा, प्यास, वारंवार प्रस्राव आणि इतर चेतावणी संकेते.",
  },
};

export default function EarlySymptomPage() {
  const symptoms = [
    {
      title: "थकवा आणि आलस",
      description: "अचानक अत्यधिक थकवा जो विश्रांतीसह ठीक होत नाही. कोणत्याही कामात व्याजपणा आणि शक्तीची कमतरता.",
    },
    {
      title: "कमजोरी",
      description: "शरीरात सामान्य कमजोरी आणि ऊर्जेचा अभाव. मांसपेशीमध्ये दुर्बलता आणि थकवा.",
    },
    {
      title: "वारंवार प्रस्राव",
      description: "दिवसातून सामान्यपेक्षा जास्त वेळा प्रस्राव जाणे, विशेषतः रात्रीच्या वेळी.",
    },
    {
      title: "अत्यधिक प्यास",
      description: "अपरिपूर्ण प्यास जो खूप पाणी पिल्यानंतरही दूर होत नाही.",
    },
    {
      title: "वारंवार भूक",
      description: "नियमितपणे खाना खाल्यानंतरही भूक लागणे. अत्यधिक खाण्याची इच्छा.",
    },
    {
      title: "अस्पष्ट दृष्टि",
      description: "दृष्टी स्पष्ट नसणे किंवा धुकेमुळे दिसणे. लक्ष केंद्रित करण्यात अडचण.",
    },
    {
      title: "वजन कमी होणे",
      description: "स्पष्टीकरण न मिळालेला वजन कमी होणे, विशेषतः टाइप 1 मधुमेहात.",
    },
    {
      title: "धीमे जखमांचे उपचार",
      description: "कापल्या किंवा जखमांचे सामान्यपेक्षा धीमे उपचार. संक्रमण होण्याचा जोखीम वाढणे.",
    },
    {
      title: "त्वचा संक्रमण",
      description: "बार-बार त्वचा संक्रमण, खाज, किंवा व्यथा. जीवाणू संक्रमण होण्याचा जोखीम.",
    },
    {
      title: "खुश्क त्वचा",
      description: "त्वचा अत्यधिक कोरड्या आणि खुजलीयुक्त असणे.",
    },
    {
      title: "तंत्रिका समस्या",
      description: "हातांच्या किंवा पायांमध्ये झनझनाहट किंवा सुन्नपणा.",
    },
    {
      title: "तीव्र संक्रमण",
      description: "योनिमार्गातील संक्रमण (महिलांमध्ये) किंवा अन्य संक्रमण.",
    },
  ];

  const faqItems = [
    {
      question: "या लक्षणांचा अर्थ मधुमेह आहे का?",
      answer: "असो काही लक्षणे मधुमेहाशी संबंधित असू शकतात, परंतु याचा मतलब नक्की आहे असे नाही. अन्य स्थिती देखील समान लक्षणे देऊ शकते. डॉक्टरांचा सल्ला घ्या आणि रक्त परीक्षा करवा.",
    },
    {
      question: "मधुमेह कोणत्या वयात होऊ शकतो?",
      answer: "टाइप 1 सामान्यतः बाल्यावस्थात किंवा तरुणाईत होतो. टाइप 2 सामान्यतः 45 वर्षांपेक्षा जास्त वयात होतो, परंतु तरुणांमध्येही हो शकतो.",
    },
    {
      question: "काही लोकांमध्ये कोणतेही लक्षणे नाहीत का?",
      answer: "होय, अनेक लोकांमध्ये लक्षणे असत नाहीत, विशेषतः टाइप 2 मधुमेहात. त्यामुळे नियमित तपासणी महत्त्वाची आहे.",
    },
    {
      question: "या लक्षणांसाठी डॉक्टरांकडे कधी जावे?",
      answer: "जर तुमच्यात हे लक्षणे आहेत: अचानक थकवा, वारंवार प्रस्राव, अत्यधिक प्यास, किंवा वजन कमी होणे, तर लगेच डॉक्टरांकडे जा.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "सुरुवातीचे लक्षणे" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह लक्षणे"
          title="मधुमेहाचे सुरुवातीचे लक्षणे"
          description="मधुमेहाची चेतावणी संकेते जाणून घ्या आणि लगेच डॉक्टरांना मिळा."
        />
      </div>

      <MedicalTip type="warning" title="महत्त्वाचे - लक्षणे भिन्न असू शकतात">
        लक्षणे प्रत्येक व्यक्तीमध्ये भिन्न असतात. काही लोकांमध्ये एक किंवा दोन लक्षणे असू शकतात, तर काहींमध्ये एकापेक्षा जास्त. काही लोकांमध्ये सुरुवातीच्या मधुमेहात कोणतेही स्पष्ट लक्षणे नाहीत.
      </MedicalTip>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">मधुमेहाचे 12 मुख्य लक्षणे</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {symptoms.map((symptom, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex-shrink-0">
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{symptom.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{symptom.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">कधी डॉक्टरांना मिळावे?</h2>
        <div className="rounded-2xl border-2 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6">
          <h3 className="font-semibold text-red-900 dark:text-red-200">लगेच डॉक्टरांकडे जा जर तुमच्यात असे लक्षणे आहेत:</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">अचानक, अस्पष्ट थकवा जो सुधारत नाही</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">रात्री वारंवार प्रस्राव जाणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">अस्पष्टीकृत वजन कमी होणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">दृष्टी अचानक खराब होणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">बार-बार संक्रमण</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">वारंवार विचारलेले प्रश्न</h2>
        <FAQ items={faqItems} />
      </section>

           <RelatedLinks
             title="पुढची योग्य वाचन दिशा"
             description="लक्षणांनंतर कारणे, तपासणी आणि मूलभूत माहितीवर जा."
             links={[
               {
                 href: "/diabetes/what-is-diabetes",
                 title: "मधुमेह म्हणजे काय",
                 description: "रक्त शर्करा आणि इन्सुलीनची मूलभूत संकल्पना.",
               },
               {
                 href: "/diabetes/causes",
                 title: "मधुमेहाचे कारणे",
                 description: "जोखीम घटक आणि जीवनशैलीशी संबंधित कारणे.",
               },
               {
                 href: "/diabetes/diagnosis",
                 title: "निदान",
                 description: "लक्षणांनंतर कोणत्या चाचण्या उपयुक्त ठरतात ते पहा.",
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


