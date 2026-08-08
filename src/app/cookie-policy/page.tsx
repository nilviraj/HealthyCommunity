import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "कुकी धोरण",
  description:
    "आरोग्य समुदाय वेबसाइटवर कुकीज कशा वापरल्या जातात, कोणते प्रकार वापरले जातात आणि वापरकर्ता नियंत्रण पर्याय काय आहेत.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: "कुकी धोरण",
    description:
      "आरोग्य समुदाय वेबसाइटवर कुकीज कशा वापरल्या जातात, कोणते प्रकार वापरले जातात आणि वापरकर्ता नियंत्रण पर्याय काय आहेत.",
    url: "/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "कुकी धोरण",
    description:
      "आरोग्य समुदाय वेबसाइटवर कुकीज कशा वापरल्या जातात, कोणते प्रकार वापरले जातात आणि वापरकर्ता नियंत्रण पर्याय काय आहेत.",
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "कुकी धोरण" }]} />

      <SectionTitle
        as="h1"
        eyebrow="कुकी धोरण"
        title="कुकीजचा वापर आणि तुमचे नियंत्रण"
        description="साइट अनुभव सुधारण्यासाठी आणि मोजमापासाठी कुकीज वापरल्या जाऊ शकतात."
      />

      <div className="mt-8 space-y-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm text-sm leading-8 text-slate-600">
        <section>
          <h2 className="text-base font-semibold text-slate-900">1. कुकी म्हणजे काय</h2>
          <p className="mt-2">
            कुकी ही ब्राउझरमध्ये साठवली जाणारी छोटी टेक्स्ट फाईल असते जी वेबसाइटला आपली प्राधान्ये लक्षात
            ठेवण्यास मदत करते.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">2. आम्ही वापरणारे कुकी प्रकार</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>आवश्यक कुकीज: वेबसाइट चालण्यासाठी आवश्यक</li>
            <li>विश्लेषण कुकीज: वापर नमुने समजण्यासाठी</li>
            <li>प्राधान्य कुकीज: भाषा/थीम सारखी सेटिंग्ज लक्षात ठेवण्यासाठी</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">3. तृतीय पक्ष कुकीज</h2>
          <p className="mt-2">
            काही सेवा (उदा. analytics किंवा ad tools) तृतीय पक्ष कुकीज वापरू शकतात. अशा कुकीजवर त्या
            पुरवठादारांच्या धोरणांचा देखील परिणाम होतो.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">4. कुकी नियंत्रण</h2>
          <p className="mt-2">
            आपण ब्राउझर सेटिंग्जद्वारे कुकीज हटवू किंवा ब्लॉक करू शकता. मात्र काही आवश्यक कुकीज बंद केल्यास
            साइटची काही वैशिष्ट्ये व्यवस्थित काम करू शकत नाहीत.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">5. धोरण अद्यतन</h2>
          <p className="mt-2">
            कुकी धोरण वेळोवेळी अद्ययावत होऊ शकते. अद्ययावत आवृत्ती या पृष्ठावर उपलब्ध राहील.
          </p>
        </section>
      </div>
    </main>
  );
}


