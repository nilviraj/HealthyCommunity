import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "चर्चा मंच",
  description:
    "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
  alternates: { canonical: "/forum" },
  openGraph: {
    title: "चर्चा मंच",
    description:
      "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
    url: "/forum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "चर्चा मंच",
    description:
      "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
  },
};

const discussions = [
  { category: "माझा अनुभव", title: "रोजच्या छोट्या सवयींमुळे शर्करा नियंत्रणात मदत", author: "स्मिता" },
  { category: "आहार", title: "मिलेट्सने आहारात अधिक ताजेपणा आणला", author: "अर्जुन" },
  { category: "व्यायाम", title: "दैनिक २० मिनिटे चालणे कसे उपयुक्त ठरत आहे", author: "प्रिया" },
  { category: "प्रश्न विचारा", title: "रात्रीच्या जेवणाबद्दल काही शंका आहेत", author: "विजय" },
  { category: "तज्ञांचे मार्गदर्शन", title: "मधुमेह आणि रक्तदाब याबद्दल काही सोपे उपाय", author: "डॉ. पाटील" },
  { category: "यशोगाथा", title: "वजन नियंत्रणानंतर मिळालेली उर्जावानता", author: "नंदा" },
];

export default function ForumPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "चर्चा मंच" }]} />

      <SectionTitle
        as="h1"
        eyebrow="चर्चा मंच"
        title="आपल्या अनुभवांची दैनंदिन चर्चा"
        description="तुमचे अनुभव, प्रश्न आणि सल्ले इतर सदस्यांसोबत शेअर करा. या मंचावर उपयुक्त आणि सुसंस्कृत संवाद होतो."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {discussions.map((discussion) => (
          <div key={discussion.title} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-800">{discussion.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{discussion.title}</h3>
            <p className="mt-3 text-sm text-slate-600">लेखक: {discussion.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


