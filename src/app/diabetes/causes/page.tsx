import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाचे कारणे",
  description: "मधुमेह होण्याचे मुख्य कारणे - मोटापा, व्यायाम न करणे, आहार आणि अन्य जोखीम घटक.",
  alternates: { canonical: "/diabetes/causes" },
  openGraph: {
    title: "मधुमेहाचे कारणे",
    description: "मधुमेह होण्याचे मुख्य कारणे - मोटापा, व्यायाम न करणे, आहार आणि अन्य जोखीम घटक.",
    url: "/diabetes/causes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाचे कारणे",
    description: "मधुमेह होण्याचे मुख्य कारणे - मोटापा, व्यायाम न करणे, आहार आणि अन्य जोखीम घटक.",
  },
};

export default function CausesPage() {
  const causes = [
    {
      category: "जीवनशैली",
      items: [
        { title: "मोटापा", desc: "जास्त वजन इन्सुलीन प्रतिरोधाचा मुख्य कारण आहे." },
        { title: "व्यायाम न करणे", desc: "शारीरिक निष्क्रियता रक्त शर्करा नियंत्रणे व्यथित करते." },
        { title: "खराब आहार", desc: "प्रक्रिया केलेला खाना, शर्करा आणि वसा." },
        { title: "तनाव", desc: "दीर्घकालीन तनाव रक्त शर्करा वाढवते." },
        { title: "पुरेशी झोप नाही", desc: "अपर्याप्त झोप इन्सुलीन संवेदनशीलता कमी करते." },
      ],
    },
    {
      category: "चिकित्सा घटक",
      items: [
        { title: "अनुवंशिकता", desc: "पारिवारिक इतिहास मधुमेहाचा जोखीम वाढवते." },
        { title: "उच्च रक्तचाप", desc: "उच्च रक्तचाप मधुमेह जोखीम वाढवते." },
        { title: "उच्च कोलेस्ट्रॉल", desc: "उच्च कोलेस्ट्रॉल हृदय रोग आणि मधुमेह संबंधित आहे." },
        { title: "PCOS", desc: "महिलांमध्ये पॉलीसिस्टिक ओव्हरी सिंड्रोम जोखीम वाढवते." },
      ],
    },
    {
      category: "इतर घटक",
      items: [
        { title: "वय", desc: "45 वर्षांपेक्षा जास्त वय जोखीम वाढवते." },
        { title: "धूम्रपान", desc: "सिगारेट पिणे इन्सुलीन प्रतिरोध वाढवते." },
        { title: "अल्कोहल", desc: "अत्यधिक अल्कोहल रक्त शर्करा प्रभावित करते." },
        { title: "गर्भावस्था", desc: "गर्भावस्थेतील मधुमेह भविष्य जोखीम वाढवते." },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "कारणे" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह कारणे"
          title="मधुमेह होण्याचे कारणे"
          description="मधुमेहाच्या जोखीमीचे घटक आणि कारणे समजून घ्या."
        />
      </div>

      <MedicalTip type="info" title="जाणून घ्या">
        मधुमेह साधारणतः अनेक घटकांचे संयोजन यामुळे होतो, फक्त एकाच घटकामुळे नाही.
      </MedicalTip>

      <div className="mt-12 space-y-12">
        {causes.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{category.category}</h2>
            <div className="grid gap-4">
              {category.items.map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">कारणे नियंत्रित करा</h2>
        <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
          <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
            अनेक कारणे नियंत्रित करण्यायोग्य आहेत. वजन कमी करणे, नियमित व्यायाम करणे, स्वस्थ आहार खाणे आणि तनाव कमी करणे या सर्व गोष्टींनी मधुमेहाचा खतरा कमी करू शकते.
          </p>
        </div>
      </section>

      <RelatedLinks
        title="संबंधित मार्गदर्शन"
        description="जोखीम घटक समजून घेतल्यानंतर या पुढील पानांवरून प्रतिबंधाकडे जा."
        links={[
          {
            href: "/diabetes/early-symptoms",
            title: "सुरुवातीची लक्षणे",
            description: "लक्षणे लवकर ओळखली तर तपासणी लवकर सुरू होते.",
          },
          {
            href: "/diabetes/exercise",
            title: "व्यायाम",
            description: "दैनंदिन हालचाल आणि व्यायाम जोखीम कमी करण्यास मदत करतात.",
          },
          {
            href: "/nutrition",
            title: "पोषण आणि आहार",
            description: "जीवनशैली बदलासाठी संतुलित आहाराचा आधार घ्या.",
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


