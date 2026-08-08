import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह निदान",
  description: "मधुमेहाचे निदान - HbA1c, FBS, PPBS, OGTT परीक्षा आणि सामान्य स्तर.",
  alternates: { canonical: "/diabetes/diagnosis" },
  openGraph: {
    title: "मधुमेह निदान",
    description: "मधुमेहाचे निदान - HbA1c, FBS, PPBS, OGTT परीक्षा आणि सामान्य स्तर.",
    url: "/diabetes/diagnosis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह निदान",
    description: "मधुमेहाचे निदान - HbA1c, FBS, PPBS, OGTT परीक्षा आणि सामान्य स्तर.",
  },
};

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
          eyebrow="मधुमेह निदान"
          title="मधुमेहाचे निदान कसे होते"
          description="विविध परीक्षा आणि त्यांचे सामान्य स्तर समजून घ्या."
        />
      </div>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">मुख्य परीक्षा</h2>
          
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">HbA1c (हेमोग्लोबिन A1c)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">पिछले 2-3 महीनातील सरासरी रक्त शर्करा</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">सामान्य</td>
                      <td className="px-3 py-2">5.7% पेक्षा कम</td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">प्रीडायबिटीज</td>
                      <td className="px-3 py-2">5.7% - 6.4%</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">मधुमेह</td>
                      <td className="px-3 py-2">6.5% किंवा अधिक</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">FBS (उपवासातील रक्त शर्करा)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">8 तास उपवास नंतर रक्त शर्करा</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">सामान्य</td>
                      <td className="px-3 py-2">70 - 100 mg/dL</td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">प्रीडायबिटीज</td>
                      <td className="px-3 py-2">101 - 125 mg/dL</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">मधुमेह</td>
                      <td className="px-3 py-2">126 mg/dL किंवा अधिक</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">PPBS (खाल्यानंतर रक्त शर्करा)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">भोजनानंतर 2 तास रक्त शर्करा</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">सामान्य</td>
                      <td className="px-3 py-2">140 mg/dL पेक्षा कम</td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">प्रीडायबिटीज</td>
                      <td className="px-3 py-2">140 - 199 mg/dL</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">मधुमेह</td>
                      <td className="px-3 py-2">200 mg/dL किंवा अधिक</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">OGTT (ग्लूकोज सहिष्णुता परीक्षा)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">ग्लूकोज पिल्यानंतर 2 तास रक्त शर्करा</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">सामान्य</td>
                      <td className="px-3 py-2">140 mg/dL पेक्षा कम</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">मधुमेह</td>
                      <td className="px-3 py-2">200 mg/dL किंवा अधिक</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">RBS (यादृच्छिक रक्त शर्करा)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">कधी कसे परीक्षा घेतले जाते</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-semibold">सामान्य</td>
                      <td className="px-3 py-2">140 mg/dL पेक्षा कम</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">मधुमेह संदेह</td>
                      <td className="px-3 py-2">200 mg/dL किंवा अधिक (लक्षणांसह)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">परीक्षेच्या आधी तयारी</h2>
          <div className="space-y-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">FBS साठी</h4>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-300">8-10 तास उपवास करा. सकाळी परीक्षा घेणे चांगले.</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200">PPBS साठी</h4>
              <p className="mt-2 text-sm text-green-800 dark:text-green-300">सामान्य भोजन घ्या. भोजनानंतर अचूक 2 तास परीक्षा घेणे महत्त्वाचे.</p>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-200">OGTT साठी</h4>
              <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">8-10 तास उपवास करा. ग्लूकोज पिल्यानंतर 2 तास परीक्षा.</p>
            </div>
          </div>
        </section>

        <MedicalTip type="important" title="निदान महत्त्वाचा आहे">
          यदि आपल्याला मधुमेह आहे असा संदेह असेल, तर डॉक्टरांकडे जा. एक पूर्ण परीक्षा आवश्यक आहे. एकटी परीक्षा पुरेशी नाही.
        </MedicalTip>
      </section>

      <RelatedLinks
        title="निदानानंतर पुढील पावले"
        description="चाचण्यांनंतर व्यवस्थापन, देखरेख आणि माहितीपूर्ण वाचनासाठी हे दुवे वापरा."
        links={[
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्त शर्करा मापन",
            description: "घरच्या घरी साखर कशी तपासायची ते शिका.",
          },
          {
            href: "/diabetes/diet",
            title: "मधुमेह आहार",
            description: "चाचण्यांनंतर आहार कसा बदलायचा ते समजून घ्या.",
          },
          {
            href: "/diabetes/faq",
            title: "मधुमेह FAQ",
            description: "निदान आणि उपचारांबद्दल सामान्य प्रश्नांची उत्तरे.",
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


