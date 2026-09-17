import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह दैनंदिन दिनचर्या",
  description: "मधुमेह असताना औषधे, जेवण, हालचाल, तपासणी आणि झोप यांची सुरक्षित व लवचिक दिनचर्या कशी ठेवावी.",
  alternates: { canonical: "/diabetes/daily-routine" },
  openGraph: {
    title: "मधुमेह दैनंदिन दिनचर्या",
    description: "औषधे, जेवण, हालचाल, तपासणी आणि झोप यांची सुरक्षित व लवचिक दिनचर्या.",
    url: "/diabetes/daily-routine",
    type: "website",
    images: [{ url: "/images/diabetes/exercise-routine.webp", width: 1536, height: 1024, alt: "मधुमेहासाठी नियमित चालणे आणि दैनंदिन दिनचर्या" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह दैनंदिन दिनचर्या",
    description: "औषधे, जेवण, हालचाल, तपासणी आणि झोप यांची सुरक्षित व लवचिक दिनचर्या.",
    images: ["/images/diabetes/exercise-routine.webp"],
  },
};

export default function DailyRoutinePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "दैनंदिन दिनचर्या" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह दिनचर्या"
          title="मधुमेहासाठी लवचिक दैनंदिन दिनचर्या"
          description="सर्वांसाठी एकच वेळापत्रक योग्य नसते. तुमची औषधे, काम आणि झोप यानुसार सातत्यपूर्ण सवयी तयार करा."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/exercise-routine.webp"
        alt="सकाळच्या उद्यानात नियमित चालणे आणि व्यायाम करणारे भारतीय प्रौढ"
        caption="जेवण, औषधे, हालचाल, तपासणी आणि झोप यांची नियमित पण वास्तववादी दिनचर्या व्यवस्थापन सोपे करते."
        priority
      />

      <section className="mt-12 space-y-6">
        <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">उठल्यानंतर</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-800 dark:text-blue-300">
            <li>✓ शक्यतो रोज साधारण एकाच वेळी उठा</li>
            <li>✓ तहानेनुसार साधे पाणी प्या; लिंबूपाणी आवश्यक नाही</li>
            <li>✓ डॉक्टरांनी सांगितले असल्यास रक्तातील साखर तपासा</li>
            <li>✓ औषधे किंवा इन्सुलिन नेमक्या सूचनेप्रमाणे घ्या</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6">
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-200">दिवसभरातील हालचाल</h3>
          <ul className="mt-4 space-y-3 text-sm text-green-800 dark:text-green-300">
            <li>✓ चालणे, सायकल किंवा योग यांपैकी आवडणारी हालचाल निवडा</li>
            <li>✓ थोड्या वेळापासून सुरुवात करून हळूहळू वाढवा</li>
            <li>✓ जास्त वेळ बसत असाल तर मधूनमधून उठा</li>
            <li>✓ औषधांची वेळ स्वतः बदलू नका</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30 p-6">
          <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-200">पहिले जेवण किंवा न्याहारी</h3>
          <ul className="mt-4 space-y-3 text-sm text-yellow-800 dark:text-yellow-300">
            <li>✓ भाज्या, प्रथिनांचा स्रोत आणि योग्य प्रमाणातील कर्बोदके ठेवा</li>
            <li>✓ चहा किंवा कॉफीत साखर कमी किंवा न घालणे निवडा</li>
            <li>✓ औषधांशी जोडलेली जेवणाची वेळ डॉक्टरांनी सांगितल्याप्रमाणे पाळा</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-orange-300 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-6">
          <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200">मुख्य जेवण</h3>
          <ul className="mt-4 space-y-3 text-sm text-orange-800 dark:text-orange-300">
            <li>✓ अर्धे ताट कमी स्टार्चच्या भाज्या ठेवण्याचा प्रयत्न करा</li>
            <li>✓ प्रथिनांचा स्रोत आणि योग्य प्रमाणात भात, पोळी किंवा भाकरी घ्या</li>
            <li>✓ हळूहळू आणि नीट चावून जेवा</li>
            <li>✓ शक्य असल्यास जेवणानंतर थोडे हलके चाला</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6">
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-200">दोन जेवणांच्या मध्ये भूक लागल्यास</h3>
          <ul className="mt-4 space-y-3 text-sm text-red-800 dark:text-red-300">
            <li>✓ प्रत्येकाला दोन जेवणांच्या मध्ये काही खाण्याची गरज नसते</li>
            <li>✓ भूक आणि औषधांच्या वेळेनुसार संपूर्ण फळ, साखर न घातलेले दही किंवा भाजलेले हरभरे निवडता येतात</li>
            <li>✓ डॉक्टरांनी सांगितल्यास रक्तातील साखर तपासा</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-purple-300 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-6">
          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200">दिवसातील शेवटचे मुख्य जेवण</h3>
          <ul className="mt-4 space-y-3 text-sm text-purple-800 dark:text-purple-300">
            <li>✓ दुपारच्या ताटासारखे संतुलन ठेवा</li>
            <li>✓ सोयीचे असल्यास जेवणानंतर हलके चाला</li>
            <li>✓ रात्रीची औषधे नेमक्या सूचनेप्रमाणे घ्या</li>
            <li>✓ हळूहळू आणि शांतपणे जेवा</li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-6">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200">झोपण्यापूर्वी</h3>
          <ul className="mt-4 space-y-3 text-sm text-indigo-800 dark:text-indigo-300">
            <li>✓ पायांची तपासणी करा (इजा किंवा संसर्ग नाही ना पहा)</li>
            <li>✓ डॉक्टरांनी सांगितल्यास झोपण्यापूर्वी साखर तपासा</li>
            <li>✓ दूध, चहा किंवा बदाम घेणे सर्वांसाठी आवश्यक नाही</li>
            <li>✓ शांत झोपेसाठी स्क्रीनचा वापर कमी करा</li>
            <li>✓ शक्यतो नियमित वेळेत पुरेशी झोप घ्या</li>
          </ul>
        </div>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">विशेष सूचना</h2>
          
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">ताणतणाव व्यवस्थापन</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              खोल श्वास, ध्यान, आवडते संगीत, वाचन किंवा विश्वासू व्यक्तीशी संवाद यांपैकी तुम्हाला उपयोगी वाटणारा पर्याय निवडा.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">पुरेशी झोप</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              प्रत्येकाची झोपेची वेळ वेगळी असू शकते. नियमित वेळ पाळा, पुरेशी झोप घ्या आणि झोपण्यापूर्वी स्क्रीनचा वापर कमी करा.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">नियमित तपासणी</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              साखर तपासण्याची वारंवारता आणि डॉक्टरांच्या भेटींचे वेळापत्रक तुमचा मधुमेहाचा प्रकार, औषधे आणि तब्येत यांनुसार ठरते.
            </p>
          </div>

          <MedicalTip type="tip" title="वैयक्तिक नियोजन">
            ही फक्त सवयींची चौकट आहे. इन्सुलिन, औषधे, कामाची वेळ, गर्भावस्था किंवा इतर आजार असल्यास डॉक्टरांच्या मदतीने वैयक्तिक दिनचर्या ठरवा.
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
            title: "रक्तातील साखरेची तपासणी",
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
