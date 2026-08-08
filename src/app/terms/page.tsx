import SectionTitle from "@/components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "अटी व शर्ती",
  description:
    "आरोग्य समुदाय संकेतस्थळाचा वापर करताना लागू होणाऱ्या अटी, जबाबदारीची मर्यादा, वैद्यकीय अस्वीकरण आणि वापर नियम.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "अटी व शर्ती",
    description:
      "आरोग्य समुदाय संकेतस्थळाचा वापर करताना लागू होणाऱ्या अटी, जबाबदारीची मर्यादा, वैद्यकीय अस्वीकरण आणि वापर नियम.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "अटी व शर्ती",
    description:
      "आरोग्य समुदाय संकेतस्थळाचा वापर करताना लागू होणाऱ्या अटी, जबाबदारीची मर्यादा, वैद्यकीय अस्वीकरण आणि वापर नियम.",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "अटी व शर्ती" }]} />

      <SectionTitle
        as="h1"
        eyebrow="अटी आणि शर्ती"
        title="सुविधा वापरण्याबद्दल महत्त्वाच्या अटी"
        description="आमच्या वेबसाइटनुसार माहिती वापरण्यापूर्वी या अटी वाचल्या पाहिजेत."
      />
      <div className="mt-8 space-y-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm text-sm leading-8 text-slate-600">
        <section>
          <h2 className="text-base font-semibold text-slate-900">1. सेवेचा उद्देश</h2>
          <p className="mt-2">
            ही वेबसाइट आरोग्य जनजागृती आणि शैक्षणिक उद्देशासाठी आहे. येथे दिलेली माहिती सामान्य मार्गदर्शनासाठी आहे.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">2. वैद्यकीय सल्ला नाही</h2>
          <p className="mt-2">
            येथे दिलेली माहिती डॉक्टरांचा प्रत्यक्ष सल्ला, निदान किंवा उपचारांचा पर्याय नाही. उपचार किंवा औषधांत
            बदल करण्यापूर्वी पात्र आरोग्यतज्ज्ञांचा सल्ला घ्या.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">3. वापरकर्त्यांची जबाबदारी</h2>
          <p className="mt-2">
            आपण दिलेल्या माहितीचा वापर स्वविवेकाने आणि स्वतःच्या जबाबदारीवर करता. आपल्या आरोग्यस्थितीनुसार
            योग्य निर्णय घेणे ही वापरकर्त्याची जबाबदारी आहे.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">4. निषिद्ध वापर</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>भ्रामक, हानीकारक किंवा कायदेशीरदृष्ट्या प्रतिबंधित सामग्री प्रसारित करणे</li>
            <li>साइटच्या सुरक्षेला बाधा आणण्याचा प्रयत्न करणे</li>
            <li>अनधिकृत स्वयंचलित स्क्रॅपिंग किंवा दुरुपयोग</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">5. बौद्धिक संपदा</h2>
          <p className="mt-2">
            साइटवरील मजकूर, डिझाईन आणि इतर साहित्य हे लागू हक्कांच्या अधीन असू शकतात. परवानगीशिवाय पुनर्वापर,
            मोठ्या प्रमाणात कॉपी किंवा व्यावसायिक वापर करू नये.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">6. बाह्य दुवे</h2>
          <p className="mt-2">
            तृतीय पक्ष संकेतस्थळांचे दुवे उपलब्ध असू शकतात. अशा साइटवरील सामग्री, धोरणे किंवा सेवांसाठी
            आम्ही जबाबदार राहणार नाही.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">7. जबाबदारीची मर्यादा</h2>
          <p className="mt-2">
            वेबसाइटवरील माहितीवर अवलंबून घेतलेल्या निर्णयांमुळे होणाऱ्या प्रत्यक्ष/अप्रत्यक्ष नुकसानीसाठी
            आम्ही जबाबदार राहणार नाही.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">8. अटींमधील बदल</h2>
          <p className="mt-2">
            या अटी वेळोवेळी सुधारित केल्या जाऊ शकतात. अद्ययावत आवृत्ती या पृष्ठावर प्रकाशित होईल.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">9. संपर्क</h2>
          <p className="mt-2">
            कोणतेही प्रश्न असल्यास संपर्क पृष्ठाद्वारे संपर्क साधा.
          </p>
        </section>
      </div>
    </main>
  );
}


