import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाची सुरुवातीची लक्षणे",
  description: "वारंवार लघवी होणे, सतत तहान लागणे, थकवा, वजन कमी होणे आणि मधुमेहाची इतर संभाव्य लक्षणे समजून घ्या.",
  keywords: ["मधुमेहाची लक्षणे", "थकवा", "तहान", "वारंवार लघवी"],
  alternates: { canonical: "/diabetes/early-symptoms" },
  openGraph: {
    title: "मधुमेहाची सुरुवातीची लक्षणे",
    description: "वारंवार लघवी होणे, सतत तहान लागणे, थकवा आणि मधुमेहाची इतर संभाव्य लक्षणे.",
    url: "/diabetes/early-symptoms",
    type: "website",
    images: [{ url: "/images/diabetes/early-symptoms.webp", width: 1536, height: 1024, alt: "मधुमेहाची संभाव्य सुरुवातीची लक्षणे" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाची सुरुवातीची लक्षणे",
    description: "वारंवार लघवी होणे, सतत तहान लागणे, थकवा आणि मधुमेहाची इतर संभाव्य लक्षणे.",
    images: ["/images/diabetes/early-symptoms.webp"],
  },
};

export default function EarlySymptomPage() {
  const symptoms = [
    {
      title: "सतत थकवा जाणवणे",
      description: "पुरेशी विश्रांती घेतल्यानंतरही नेहमीपेक्षा जास्त थकवा किंवा ऊर्जा कमी वाटणे.",
    },
    {
      title: "अशक्तपणा",
      description: "दैनंदिन काम करताना शरीरात अशक्तपणा किंवा स्नायूंमध्ये ताकद कमी वाटणे.",
    },
    {
      title: "वारंवार लघवी होणे",
      description: "नेहमीपेक्षा जास्त वेळा लघवीला जावे लागणे, विशेषतः रात्री वारंवार उठावे लागणे.",
    },
    {
      title: "सतत तहान लागणे",
      description: "पाणी प्यायल्यानंतरही वारंवार किंवा नेहमीपेक्षा जास्त तहान लागणे.",
    },
    {
      title: "वारंवार भूक",
      description: "जेवल्यानंतरही लवकर भूक लागणे किंवा नेहमीपेक्षा जास्त भूक जाणवणे.",
    },
    {
      title: "दृष्टी धूसर होणे",
      description: "समोरचे स्पष्ट न दिसणे किंवा अधूनमधून दृष्टी धूसर होणे.",
    },
    {
      title: "वजन कमी होणे",
      description: "आहार किंवा हालचालीत बदल नसतानाही वजन कमी होणे, विशेषतः टाइप १ मधुमेहात.",
    },
    {
      title: "जखम उशिरा भरून येणे",
      description: "कापलेली जागा किंवा छोटी जखम नेहमीपेक्षा उशिरा भरून येणे.",
    },
    {
      title: "वारंवार संसर्ग होणे",
      description: "त्वचा, हिरड्या, मूत्रमार्ग किंवा इतर ठिकाणी वारंवार संसर्ग होणे.",
    },
    {
      title: "कोरडी किंवा खाज येणारी त्वचा",
      description: "त्वचा नेहमीपेक्षा कोरडी होणे किंवा वारंवार खाज येणे.",
    },
    {
      title: "हात-पायांना मुंग्या येणे",
      description: "हात किंवा पाय सुन्न होणे, मुंग्या येणे किंवा जळजळ जाणवणे.",
    },
    {
      title: "यीस्ट संसर्ग",
      description: "महिला किंवा पुरुषांमध्ये वारंवार जननेंद्रियाजवळ यीस्ट संसर्ग होणे.",
    },
  ];

  const faqItems = [
    {
      question: "या लक्षणांचा अर्थ मधुमेह आहे का?",
      answer: "नाही. ही लक्षणे मधुमेहात दिसू शकतात, पण इतर आजारांमुळेही होऊ शकतात. मधुमेहाचे निदान केवळ योग्य रक्ततपासणीने होते.",
    },
    {
      question: "मधुमेह कोणत्या वयात होऊ शकतो?",
      answer: "मधुमेह कोणत्याही वयात होऊ शकतो. टाइप १ लहानपणी अधिक आढळतो, पण प्रौढांनाही होऊ शकतो. टाइप २ प्रौढांमध्ये अधिक आढळतो, मात्र तो तरुणांमध्येही दिसतो.",
    },
    {
      question: "काही लोकांना कोणतीही लक्षणे नसतात का?",
      answer: "होय. विशेषतः टाइप २ मधुमेहात अनेकांना बराच काळ स्पष्ट लक्षणे जाणवत नाहीत. जोखीम जास्त असल्यास डॉक्टरांच्या सल्ल्याने तपासणी करणे महत्त्वाचे आहे.",
    },
    {
      question: "या लक्षणांसाठी डॉक्टरांकडे कधी जावे?",
      answer: "वारंवार लघवी, सतत तहान, विनाकारण वजन कमी होणे किंवा दृष्टी धूसर होणे अशी लक्षणे टिकून राहिल्यास डॉक्टरांकडून तपासणी करून घ्या. उलट्या, पोटदुखी, वेगाने श्वास घेणे, गुंगी किंवा गोंधळ असल्यास तातडीची वैद्यकीय मदत घ्या.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "सुरुवातीची लक्षणे" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह लक्षणे"
          title="मधुमेहाची सुरुवातीची लक्षणे"
          description="संभाव्य लक्षणे ओळखा; खात्री करण्यासाठी डॉक्टरांच्या सल्ल्याने रक्ततपासणी करा."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/early-symptoms.webp"
        alt="वारंवार तहान, थकवा आणि अस्पष्ट दिसणे अशी संभाव्य लक्षणे जाणवणारी व्यक्ती"
        caption="जास्त तहान, वारंवार लघवी, थकवा किंवा अस्पष्ट दिसणे अशी लक्षणे आढळल्यास तपासणीसाठी डॉक्टरांचा सल्ला घ्या."
        priority
      />

      <MedicalTip type="warning" title="महत्त्वाचे - लक्षणे भिन्न असू शकतात">
        प्रत्येक व्यक्तीमध्ये लक्षणे वेगळी असू शकतात. विशेषतः टाइप २ मधुमेहात सुरुवातीला कोणतीही स्पष्ट लक्षणे नसू शकतात. लक्षणांवरून स्वतः निदान करू नका.
      </MedicalTip>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">मधुमेहाची १२ संभाव्य लक्षणे</h2>
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
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">डॉक्टरांना कधी भेटावे?</h2>
        <div className="rounded-2xl border-2 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6">
          <h3 className="font-semibold text-red-900 dark:text-red-200">ही लक्षणे टिकून राहिल्यास तपासणी करून घ्या:</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">अचानक, अस्पष्ट थकवा जो सुधारत नाही</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">वारंवार लघवी होणे आणि सतत तहान लागणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">विनाकारण वजन कमी होणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">दृष्टी धूसर होणे</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-600">✗</span>
              <span className="text-red-800 dark:text-red-300">जखम उशिरा भरणे किंवा वारंवार संसर्ग होणे</span>
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
                 description: "रक्तातील साखर आणि इन्सुलिनची मूलभूत माहिती.",
               },
               {
                 href: "/diabetes/causes",
                 title: "मधुमेहाची कारणे",
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
