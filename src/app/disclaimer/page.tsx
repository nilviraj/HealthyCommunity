import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "अस्वीकृती",
  description:
    "या संकेतस्थळावरील माहिती शैक्षणिक उद्देशासाठी आहे. वैयक्तिक वैद्यकीय सल्ला आणि उपचारांसाठी पात्र डॉक्टरांचा सल्ला घ्या.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "अस्वीकृती",
    description:
      "या संकेतस्थळावरील माहिती शैक्षणिक उद्देशासाठी आहे. वैयक्तिक वैद्यकीय सल्ला आणि उपचारांसाठी पात्र डॉक्टरांचा सल्ला घ्या.",
    url: "/disclaimer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "अस्वीकृती",
    description:
      "या संकेतस्थळावरील माहिती शैक्षणिक उद्देशासाठी आहे. वैयक्तिक वैद्यकीय सल्ला आणि उपचारांसाठी पात्र डॉक्टरांचा सल्ला घ्या.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "अस्वीकृती" }]} />

      <SectionTitle
        as="h1"
        eyebrow="अस्वीकृती"
        title="आरोग्य माहितीबाबत महत्त्वाची सूचना"
        description="येथील माहिती जनजागृतीसाठी आहे, वैद्यकीय उपचाराचा पर्याय नाही."
      />

      <div className="mt-8 space-y-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm text-sm leading-8 text-slate-600">
        <Disclaimer />

        <section>
          <h2 className="text-base font-semibold text-slate-900">मर्यादा</h2>
          <p className="mt-2">
            लेख, कॅल्क्युलेटर आणि मार्गदर्शन हे सर्वसाधारण माहिती म्हणून दिले आहे. ते निदान किंवा वैयक्तिक
            उपचार योजना म्हणून वापरू नये.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">कधी डॉक्टरांचा सल्ला घ्यावा</h2>
          <p className="mt-2">
            सततची लक्षणे, अचानक बिघाड, औषधांवरील शंका किंवा दीर्घकालीन आजार असल्यास त्वरित पात्र डॉक्टरांचा
            सल्ला घ्या.
          </p>
        </section>
      </div>
    </main>
  );
}


