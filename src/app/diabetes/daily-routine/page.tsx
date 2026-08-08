import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह दैनंदिन दिनचर्या",
  description: "मधुमेह रुग्णांसाठी संपूर्ण दैनंदिन दिनचर्या – सकाळपासून रात्रीपर्यंत.",
  alternates: { canonical: "/diabetes/daily-routine" },
  openGraph: {
    title: "मधुमेह दैनंदिन दिनचर्या",
    description: "मधुमेह रुग्णांसाठी संपूर्ण दैनंदिन दिनचर्या – सकाळपासून रात्रीपर्यंत.",
    url: "/diabetes/daily-routine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह दैनंदिन दिनचर्या",
    description: "मधुमेह रुग्णांसाठी संपूर्ण दैनंदिन दिनचर्या – सकाळपासून रात्रीपर्यंत.",
  },
};

export default function DailyRoutinePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "दैनिक दिनचर्या" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह दिनचर्या"
          title="संपूर्ण दैनंदिन दिनचर्या"
          description="दिवसभराची आखलेली दिनचर्या रक्तशर्करा नियंत्रणात ठेवण्यासाठी."
        />
      </div>

      <section className="mt-12 space-y-6">
        <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">सकाळी ५:३०-६:००</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-800 dark:text-blue-300">
            <li>✓ लवकर उठा आणि अंथरुणातून बाहेर पडा</li>
            <li>✓ १ ग्लास कोमट पाणी प्या (लिंबूसह उत्तम)</li>
            <li>✓ ५ मिनिटे ध्यान/प्राणायाम करा</li>
            <li>✓ दात घासा आणि तोंड धुवा</li>
            <li>✓ आवश्यक असल्यास जेवणापूर्वीची औषधे घ्या</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6">
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-200">६:००-६:३० - व्यायाम</h3>
          <ul className="mt-4 space-y-3 text-sm text-green-800 dark:text-green-300">
            <li>✓ २०-३० मिनिटे चालणे किंवा योग</li>
            <li>✓ हळूहळू सुरुवात करा, वेग वाढवत जा</li>
            <li>✓ हलका घाम येणे आवश्यक</li>
            <li>✓ औषधांची वेळ पाहा – काही सकाळची औषधे व्यायामापूर्वी घ्यावीत</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30 p-6">
          <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-200">७:००-७:३० - न्याहारी</h3>
          <ul className="mt-4 space-y-3 text-sm text-yellow-800 dark:text-yellow-300">
            <li>✓ आंघोळ घ्या आणि कपडे बदला</li>
            <li>✓ संतुलित न्याहारी घ्या (प्रथिने + कर्बोदके + भाजी)</li>
            <li>✓ साखररहित चहा/कॉफी</li>
            <li>✓ न्याहारीनंतर औषधे घ्या (आवश्यक असल्यास)</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-orange-300 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-6">
          <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200">दुपारी १२:३०-१:०० - जेवण</h3>
          <ul className="mt-4 space-y-3 text-sm text-orange-800 dark:text-orange-300">
            <li>✓ संपूर्ण व संतुलित दुपारचे जेवण घ्या</li>
            <li>✓ भात/चपाती + डाळ + भाजी + कोशिंबीर</li>
            <li>✓ हळूहळू आणि नीट चावून जेवा</li>
            <li>✓ जेवणानंतर लगेच झोपू नका – १०-१५ मिनिटे हलके काम करा</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6">
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-200">संध्याकाळी ४:००-५:०० - सनाक</h3>
          <ul className="mt-4 space-y-3 text-sm text-red-800 dark:text-red-300">
            <li>✓ हलका नाश्ता – दही, सुकामेवा किंवा मोड आलेली डाळ</li>
            <li>✓ चहा किंवा लिंबूपाणी (साखररहित)</li>
            <li>✓ १०-१५ मिनिटे फिर्याला जा</li>
            <li>✓ रक्तशर्करा तपासा (आवश्यक असल्यास)</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-purple-300 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-6">
          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200">रात्री ७:००-८:०० - जेवण</h3>
          <ul className="mt-4 space-y-3 text-sm text-purple-800 dark:text-purple-300">
            <li>✓ हलके जेवण – सूप, भाजी, चपाती</li>
            <li>✓ रात्रीच्या जेवणानंतर १-२ तासांनी व्यायाम करा (शक्य असल्यास)</li>
            <li>✓ जेवणानंतर औषधे घ्या (रात्रीची औषधे असल्यास)</li>
            <li>✓ हळूहळू आणि शांतपणे जेवा</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-6">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200">झोपण्यापूर्वी रात्री ९:००-१०:००</h3>
          <ul className="mt-4 space-y-3 text-sm text-indigo-800 dark:text-indigo-300">
            <li>✓ पायांची तपासणी करा (इजा किंवा संसर्ग नाही ना पहा)</li>
            <li>✓ कोमट दूध किंवा चहा (साखररहित) प्या</li>
            <li>✓ ५-६ बदाम खा</li>
            <li>✓ ध्यान किंवा खोल श्वास घ्या</li>
            <li>✓ ७-८ तासांची गाढ झोप घ्या</li>
          </ul>
        </div>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">विशेष सूचना</h2>
          
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">ताणतणाव व्यवस्थापन</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              दिवसातून ३ वेळा ५-१० मिनिटे ध्यान करा. खोल श्वासाचा सराव करा. चांगले पुस्तक वाचा किंवा संगीत ऊका.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">पुरेशी झोप</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              रात्री १०-११ वाजता झोपा आणि सकाळी ५-६ वाजता उठा. झोपण्यापूर्वी १ तास स्क्रीनपासून दूर राहा.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">नियमित तपासणी</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              रक्तशर्करा नियमितपणे मोजा. महिन्यातून किमान १ वेळा डॉक्टरांना भेटा.
            </p>
          </div>

          <MedicalTip type="tip" title="व्यक्तिगत अनुकूलन">
            ही एक सामान्य दिनचर्या आहे. आपल्या गरजा आणि डॉक्टरांच्या सल्ल्यानुसार ती अनुकूलित करा.
          </MedicalTip>
        </section>
      </section>

      <RelatedLinks
        title="दैनंदिन दिनचर्येशी जोडलेले विषय"
        description="रूटीनमधून व्यायाम, आहार आणि मापनाकडे सहज जा."
        links={[
          {
            href: "/diabetes/exercise",
            title: "व्यायाम",
            description: "चालणे, योग आणि सुरक्षित हालचालींबद्दल माहिती.",
          },
          {
            href: "/diabetes/diet",
            title: "मधुमेह आहार",
            description: "दिवसभरच्या जेवणात काय ठेवायचे ते ठरवा.",
          },
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्त शर्करा मापन",
            description: "रूटीनसोबत तपासणीची सवय मजबूत करा.",
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


