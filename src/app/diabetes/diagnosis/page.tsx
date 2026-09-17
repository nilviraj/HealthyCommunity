import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाचे निदान: HbA1c आणि रक्ततपासण्या",
  description: "HbA1c, उपाशीपोटी रक्तातील ग्लुकोज, OGTT आणि रँडम प्लाझ्मा ग्लुकोज या चाचण्यांनी मधुमेहाचे निदान कसे होते ते समजून घ्या.",
  alternates: { canonical: "/diabetes/diagnosis" },
  openGraph: {
    title: "मधुमेहाचे निदान: HbA1c आणि रक्ततपासण्या",
    description: "मधुमेह आणि प्रीडायबिटीज ओळखण्यासाठी वापरल्या जाणाऱ्या प्रमुख चाचण्या व त्यांचे निकष.",
    url: "/diabetes/diagnosis",
    type: "article",
    images: [{ url: "/images/diabetes/diagnosis-monitoring.webp", width: 1536, height: 1024, alt: "मधुमेहासाठी रक्ततपासणी आणि वैद्यकीय सल्ला" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाचे निदान: HbA1c आणि रक्ततपासण्या",
    description: "मधुमेह आणि प्रीडायबिटीज ओळखण्यासाठी वापरल्या जाणाऱ्या प्रमुख चाचण्या व त्यांचे निकष.",
    images: ["/images/diabetes/diagnosis-monitoring.webp"],
  },
};

const diagnosticTests = [
  {
    name: "HbA1c",
    detail: "मागील साधारण २ ते ३ महिन्यांतील रक्तातील ग्लुकोजची सरासरी स्थिती दाखवते. बहुतेक वेळा उपाशी राहण्याची गरज नसते.",
    rows: [
      ["सामान्य", "५.७% पेक्षा कमी"],
      ["प्रीडायबिटीज", "५.७% ते ६.४%"],
      ["मधुमेह", "६.५% किंवा अधिक"],
    ],
  },
  {
    name: "उपाशीपोटी प्लाझ्मा ग्लुकोज (FPG/FBS)",
    detail: "किमान ८ तास काहीही न खाता केलेली रक्ततपासणी. पाणी पिता येते; औषधांबद्दल प्रयोगशाळा किंवा डॉक्टरांच्या सूचना पाळा.",
    rows: [
      ["सामान्य", "९९ mg/dL किंवा कमी"],
      ["प्रीडायबिटीज", "१०० ते १२५ mg/dL"],
      ["मधुमेह", "१२६ mg/dL किंवा अधिक"],
    ],
  },
  {
    name: "तोंडावाटे ग्लुकोज सहनशीलता चाचणी (OGTT)",
    detail: "ठरावीक ग्लुकोज द्रावण घेतल्यानंतर २ तासांनी प्लाझ्मा ग्लुकोज तपासले जाते. ही चाचणी डॉक्टर किंवा प्रयोगशाळेच्या सूचनेनुसारच करा.",
    rows: [
      ["सामान्य", "१३९ mg/dL किंवा कमी"],
      ["प्रीडायबिटीज", "१४० ते १९९ mg/dL"],
      ["मधुमेह", "२०० mg/dL किंवा अधिक"],
    ],
  },
];

export default function DiagnosisPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "निदान" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेहाचे निदान"
          title="मधुमेहाचे निदान कसे होते?"
          description="लक्षणांवरून किंवा घरच्या ग्लुकोमीटरच्या एका रीडिंगवरून निदान होत नाही. डॉक्टर प्रयोगशाळेतील रक्ततपासण्यांचा वापर करतात."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/diagnosis-monitoring.webp"
        alt="ग्लुकोमीटर आणि डॉक्टरांसोबत रक्तातील साखरेच्या निकालांवर चर्चा"
        caption="एकच घरगुती रीडिंग म्हणजे निदान नाही; योग्य प्रयोगशाळा चाचण्या आणि डॉक्टरांचे मूल्यमापन आवश्यक असते."
        priority
      />

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">निदानासाठी वापरल्या जाणाऱ्या चाचण्या</h2>
          <div className="space-y-6">
            {diagnosticTests.map((test) => (
              <div key={test.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{test.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{test.detail}</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {test.rows.map(([label, value]) => (
                        <tr key={label} className="border-b border-slate-200 last:border-0 dark:border-slate-700">
                          <td className="px-3 py-2 font-semibold">{label}</td>
                          <td className="px-3 py-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-800 dark:bg-sky-950/30">
          <h2 className="text-xl font-bold text-sky-950 dark:text-sky-100">रँडम प्लाझ्मा ग्लुकोज चाचणी</h2>
          <p className="mt-3 text-sm leading-7 text-sky-900 dark:text-sky-200">
            वारंवार लघवी, सतत तहान किंवा विनाकारण वजन कमी होणे यांसारखी मधुमेहाची ठरावीक लक्षणे असताना रँडम प्लाझ्मा ग्लुकोज २०० mg/dL किंवा अधिक आल्यास डॉक्टर मधुमेहाचे निदान करू शकतात. लक्षणे नसतील तर साधारणपणे दुसऱ्या दिवशी किंवा दुसऱ्या चाचणीने निकालाची खात्री केली जाते.
          </p>
        </div>

        <MedicalTip type="warning" title="PPBS आणि OGTT एकच चाचणी नाहीत">
          नेहमीचे जेवण झाल्यानंतर केलेली PPBS तपासणी उपचारांचे निरीक्षण करण्यासाठी उपयोगी असू शकते. निदानासाठी वापरली जाणारी २ तासांची OGTT मात्र ठरावीक ग्लुकोज द्रावणासह नियंत्रित पद्धतीने केली जाते.
        </MedicalTip>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">तपासणीपूर्वी काय लक्षात ठेवावे?</h2>
          <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <li>• उपाशीपोटी चाचणी किंवा OGTT साठी डॉक्टर अथवा प्रयोगशाळेने सांगितलेला उपवास पाळा.</li>
            <li>• सुरू असलेली औषधे स्वतः थांबवू नका; आधी डॉक्टरांना विचारा.</li>
            <li>• आजारपण, गर्भावस्था, रक्तक्षय किंवा काही औषधांमुळे निकालांच्या अर्थावर परिणाम होऊ शकतो.</li>
            <li>• गर्भावस्थेतील मधुमेहासाठी वेगळे निकष वापरले जातात.</li>
          </ul>
        </section>

        <MedicalTip type="important" title="निकाल डॉक्टरांकडून समजून घ्या">
          एकाच घरगुती रीडिंगवरून स्वतः निदान किंवा औषधबदल करू नका. तुमची लक्षणे, वैद्यकीय इतिहास आणि प्रयोगशाळेतील निकाल पाहून डॉक्टर निदान ठरवतात.
        </MedicalTip>
      </section>

      <RelatedLinks
        title="निदानानंतर पुढील पावले"
        description="चाचण्यांनंतर देखरेख, आहार आणि सामान्य प्रश्नांसाठी हे दुवे वापरा."
        links={[
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्तातील साखरेची तपासणी",
            description: "घरी ग्लुकोमीटर कधी आणि कसा वापरायचा ते समजून घ्या.",
          },
          {
            href: "/diabetes/diet",
            title: "मधुमेहासाठी आहार",
            description: "संतुलित ताट आणि योग्य प्रमाण निवडण्याची पद्धत पहा.",
          },
          {
            href: "/diabetes/faq",
            title: "मधुमेहाबद्दल प्रश्न",
            description: "निदान आणि उपचारांबद्दल सामान्य प्रश्नांची उत्तरे वाचा.",
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
