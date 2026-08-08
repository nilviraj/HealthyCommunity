import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह आहार",
  description: "मधुमेह रुग्णांसाठी योग्य आहार, प्लेट पद्धती, पोषक घटक आणि जेवण योजना.",
  alternates: { canonical: "/diabetes/diet" },
  openGraph: {
    title: "मधुमेह आहार",
    description: "मधुमेह रुग्णांसाठी योग्य आहार, प्लेट पद्धती, पोषक घटक आणि जेवण योजना.",
    url: "/diabetes/diet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह आहार",
    description: "मधुमेह रुग्णांसाठी योग्य आहार, प्लेट पद्धती, पोषक घटक आणि जेवण योजना.",
  },
};

export default function DietPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "आहार" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह आहार"
          title="मधुमेह रोगींसाठी योग्य आहार"
          description="संतुलित, पौष्टिक आणि चविष्ट आहाराद्वारे रक्तशर्करा नियंत्रणात ठेवा."
        />
      </div>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">प्लेट पद्धती (Plate Method)</h2>
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">आपल्या ताटाचे तीन समान भागांत विभाजन करा:</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="text-2xl">🥗</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">१/२ - भाज्या</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">हिरव्या, रंगीबेरंगी भाज्या (कमी स्टार्चयुक्त)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">🥔</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">१/४ - कर्बोदके</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">संपूर्ण धान्य, डाळ, बटाटे</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">🥛</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">१/४ - प्रथिने</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">मासे, कोंबडी, अंडी, डाळ, दही</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">पोषक घटक</h2>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">प्रथिने</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">प्रत्येक जेवणात २५-३५ ग्रॅम प्रथिनांचा समावेश करा. मासे, कोंबडी, अंडी, दूध, दही, डाळी.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">तंतुमय पदार्थ (फायबर)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">दररोज २५-३० ग्रॅम फायबर घ्या. भाज्या, फळे (मर्यादित), संपूर्ण धान्य.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">निरोगी स्निग्ध पदार्थ</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">ऑलिव्ह तेल, खोबरेल तेल, सुकामेवा, बिया. तेलाचा वापर कमीत कमी करा. भारतीय मधुमेह संघाच्या मार्गदर्शनानुसार, दैनिक स्निग्ध सेवन एकूण उष्मांकाच्या २०-३०% असावे.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">पाणी</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">दररोज किमान ८-१० ग्लास पाणी प्या. चहा-कॉफीचे सेवन मर्यादित ठेवा.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">जेवण योजना</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200">सकाळ (सकाळी ६-७)</h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-300">कोमट पाणी, लिंबूसह. १५-२० मिनिटे व्यायाम.</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200">न्याहारी (सकाळी ७:३०-८)</h3>
              <p className="mt-2 text-sm text-green-800 dark:text-green-300">उपमा, थालीपीठ, खिचडी किंवा डाळीची भाजी. साखर न घालता चहा.</p>
            </div>
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30 p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200">मध्यान्ह नाश्ता (सकाळी १०-११)</h3>
              <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-300">हलका नाश्ता – नारळपाणी, मूठभर सुकामेवा किंवा लिंबूपाणी.</p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200">दुपारचे जेवण (दुपारी १२:३०-१)</h3>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-300">भात/चपाती, डाळ, भाजी, कोशिंबीर. दही किंवा ताक.</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-200">सायंकाळचा नाश्ता (संध्याकाळी ४-५)</h3>
              <p className="mt-2 text-sm text-red-800 dark:text-red-300">हलका नाश्ता – मोड आलेली डाळ, भाजलेली शेंगदाणे, चहा (कमी साखर).</p>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200">रात्रीचे जेवण (रात्री ७-८)</h3>
              <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">सूप, भाजी, चपाती किंवा भात. मासे किंवा कोंबडी (आठवड्यातून २-३ वेळा).</p>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-4">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-200">झोपण्यापूर्वी (रात्री ९-१०)</h3>
              <p className="mt-2 text-sm text-indigo-800 dark:text-indigo-300">कोमट दूध (कमी साखर) किंवा चहा. बदाम (५-६ दाणे).</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">टाळावयाचे पदार्थ</h2>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-3">
              <h4 className="font-semibold text-red-900 dark:text-red-200">✗ गोड पदार्थ</h4>
              <p className="text-sm text-red-800 dark:text-red-300">साखर, खीर, हलवा, केक, आइस्क्रीम, पेस्ट्री</p>
            </div>
            <div className="rounded-2xl border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-3">
              <h4 className="font-semibold text-red-900 dark:text-red-200">✗ साखरयुक्त पेये</h4>
              <p className="text-sm text-red-800 dark:text-red-300">साखरयुक्त शीतपेये, फळांचा रस, कृत्रिम सरबत</p>
            </div>
            <div className="rounded-2xl border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-3">
              <h4 className="font-semibold text-red-900 dark:text-red-200">✗ तळलेले पदार्थ</h4>
              <p className="text-sm text-red-800 dark:text-red-300">समोसे, चिप्स, खोल तेलात तळलेले पदार्थ</p>
            </div>
            <div className="rounded-2xl border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-3">
              <h4 className="font-semibold text-red-900 dark:text-red-200">✗ प्रक्रिया केलेले अन्नपदार्थ</h4>
              <p className="text-sm text-red-800 dark:text-red-300">डब्याबंद अन्नपदार्थ, नूडल्स, पिझ्झा, बर्गर</p>
            </div>
            <div className="rounded-2xl border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-3">
              <h4 className="font-semibold text-red-900 dark:text-red-200">✗ पांढरे/परिष्कृत पदार्थ</h4>
              <p className="text-sm text-red-800 dark:text-red-300">पांढरा भात, पांढरी ब्रेड, मैदा</p>
            </div>
          </div>
        </div>

        <MedicalTip type="important" title="महत्त्वाचे सूचना">
          भारतीय मधुमेह संघ (Indian Diabetes Association) आणि ICMR च्या मार्गदर्शनानुसार, योग्य अन्नराज व पोषक तत्वांसह वजन व्यवस्थापन अत्यंत महत्त्वाचे आहे. प्रमाणित पोषण तज्ज्ञांचा सल्ला घेणे शिफारस केले जाते. नैसर्गिक खाद्य पदार्थ, दाल, संपूर्ण धान्य आणि भारतीय मिलेट्स हे पुरेसे आणि पोषणाने भरलेले आहेत.
        </MedicalTip>
      </section>

      <RelatedLinks
        title="आहाराशी संबंधित पुढील विषय"
        description="आहारानंतर पूरक मार्गदर्शन आणि मापन याकडे जा."
        links={[
          {
            href: "/nutrition",
            title: "पोषण आणि आहार",
            description: "संतुलित प्लेट आणि रोजच्या आरोग्यदायी सवयी.",
          },
          {
            href: "/diabetes/exercise",
            title: "व्यायाम",
            description: "जेवणासोबत हालचालींचे वेळापत्रक जुळवा.",
          },
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्त शर्करा मापन",
            description: "आहाराचा साखरेवर काय परिणाम होतो ते ट्रॅक करा.",
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


