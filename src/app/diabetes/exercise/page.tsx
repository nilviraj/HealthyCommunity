import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह व्यायाम",
  description: "मधुमेह रुग्णांसाठी योग्य व्यायामप्रकार, चालणे, योग आणि सुरक्षिततेच्या सूचना.",
  alternates: { canonical: "/diabetes/exercise" },
  openGraph: {
    title: "मधुमेह व्यायाम",
    description: "मधुमेह रुग्णांसाठी योग्य व्यायामप्रकार, चालणे, योग आणि सुरक्षिततेच्या सूचना.",
    url: "/diabetes/exercise",
    type: "website",
    images: [{ url: "/images/diabetes/exercise-routine.webp", width: 1536, height: 1024, alt: "मधुमेहासाठी चालणे आणि सुरक्षित व्यायाम" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह व्यायाम",
    description: "मधुमेह रुग्णांसाठी योग्य व्यायामप्रकार, चालणे, योग आणि सुरक्षिततेच्या सूचना.",
    images: ["/images/diabetes/exercise-routine.webp"],
  },
};

export default function ExercisePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "व्यायाम" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह व्यायाम"
          title="मधुमेह असताना सुरक्षित व्यायाम"
          description="नियमित हालचाल रक्तातील साखर, हृदयाचे आरोग्य आणि शरीराची ताकद सांभाळण्यास मदत करते."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/exercise-routine.webp"
        alt="उद्यानात चालणे आणि हलके स्ट्रेचिंग करणारे विविध वयोगटांतील भारतीय प्रौढ"
        caption="चालणे, ताकद वाढवणारे व्यायाम आणि कमी वेळ बसणे—तुमच्या क्षमतेनुसार सुरक्षितपणे सुरुवात करा."
        priority
      />

      <section className="mt-6">
        <MedicalTip type="warning" title="महत्त्वाचे: व्यायाम सुरक्षितता">
          बराच काळ व्यायाम केला नसेल किंवा हृदय, डोळे, मूत्रपिंड, मज्जातंतू अथवा पायांशी संबंधित गुंतागुंत असेल तर नवीन व्यायाम सुरू करण्यापूर्वी डॉक्टरांचा सल्ला घ्या. इन्सुलिन किंवा साखर कमी करणारी काही औषधे घेत असल्यास कमी साखरेचा धोका समजून घ्या.
        </MedicalTip>
      </section>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">व्यायामप्रकार</h2>
          
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🚶 चालणे (Walking)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                चालणे हा सोपा पर्याय आहे. सुरुवातीला आरामदायक वेळ निवडा आणि क्षमता वाढल्यावर कालावधी किंवा वेग हळूहळू वाढवा.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• ५ ते १० मिनिटांपासूनही सुरुवात करता येते</li>
                <li>• सोयीच्या वेळी चालू शकता</li>
                <li>• प्रत्येकासाठी १०,००० पावले आवश्यक नसतात</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🚴 सायकलिंग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                सांध्यांवर तुलनेने कमी ताण देणारा एरोबिक व्यायाम.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• आरामदायक वेगाने सुरुवात करा</li>
                <li>• वाहतुकीत हेल्मेट आणि सुरक्षिततेची काळजी घ्या</li>
                <li>• स्थिर सायकल (Stationary bike) हाही पर्याय आहे</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🧘 योग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                लवचिकता, समतोल आणि मानसिक शांततेसाठी उपयोगी ठरू शकतो.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• प्रशिक्षकाकडून योग्य पद्धत शिका</li>
                <li>• वेदना किंवा चक्कर आल्यास थांबा</li>
                <li>• योग हा औषध किंवा इन्सुलिनचा पर्याय नाही</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">💪 प्रतिरोध प्रशिक्षण</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                स्नायूंना बळकट केल्यामुळे ग्लुकोज नियंत्रणात मदत होते.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• हल्क्या वजनाने सुरुवात करा</li>
                <li>• आठवड्यात किमान २ दिवस करण्याचे उद्दिष्ट ठेवता येते</li>
                <li>• योग्य तंत्रासाठी प्रशिक्षकाची मदत घ्या</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🤸 स्ट्रेचिंग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                हालचालींची लवचिकता राखण्यास मदत करते; ते एरोबिक किंवा ताकदीच्या व्यायामाची जागा घेत नाही.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• वार्मअप - 5-10 मिनिटे</li>
                <li>• कूलडाउन - 5-10 मिनिटे</li>
                <li>• शरीराला झटका न देता हळुवार हालचाल करा</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">विशेष गटांसाठी व्यायाम</h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200">कार्यालयीन कर्मचारी</h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-300">
                • जास्त वेळ बसणे टाळून मधूनमधून उठा आणि फिरा<br/>
                • डेस्क योगासने करा<br/>
                • लिफ्टऐवजी जिना वापरा
              </p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200">ज्येष्ठ नागरिक</h3>
              <p className="mt-2 text-sm text-green-800 dark:text-green-300">
                • हलके चालणे – २०-३० मिनिटे<br/>
                • योग आणि समतोल राखण्याचे व्यायाम<br/>
                • पडण्याचा धोका टाळण्यासाठी सावधगिरीने व्यायाम करा
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">व्यायामाची योग्य वेळ</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200">सकाळचा व्यायाम</h3>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-300">
                • ऊर्जा वाढवतो<br/>
                • मानसिक आरोग्य सुधारते<br/>
                • तुमच्या औषधांच्या, जेवणाच्या आणि झोपेच्या वेळेला जुळणारी वेळ निवडा
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200">सायंकाळचा व्यायाम</h3>
              <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">
                • जेवणानंतर हलके चालणे काही लोकांसाठी उपयोगी ठरू शकते<br/>
                • इन्सुलिन किंवा काही औषधे घेत असल्यास कमी साखरेची काळजी घ्या<br/>
                • प्रत्येकासाठी एकच योग्य वेळ नसते
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">व्यायामाच्या महत्त्वाच्या खबरदाऱ्या</h2>
          
          <MedicalTip type="warning" title="व्यायामापूर्वी लक्षात ठेवा">
            <ul className="mt-2 space-y-2 text-sm">
              <li>• तुमच्यासाठी योग्य प्रकार आणि तीव्रता डॉक्टरांकडून समजून घ्या</li>
              <li>• मधुमेहाच्या औषधांसह व्यायाम करताना विशेष काळजी घ्या</li>
              <li>• कमी साखरेची लक्षणे आणि डॉक्टरांनी दिलेली कृती-योजना माहिती ठेवा</li>
              <li>• पुरेसे पाणी प्या</li>
              <li>• योग्य बूट/चपला घाला</li>
            </ul>
          </MedicalTip>

          <div className="space-y-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
              <h4 className="font-semibold text-red-900 dark:text-red-200">हायपोग्लायसेमियाची लक्षणे</h4>
              <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                थरथर, घाम, चक्कर, तीव्र भूक, गोंधळ किंवा अशक्तपणा ही कमी साखरेची लक्षणे असू शकतात. शक्य असल्यास साखर तपासा आणि डॉक्टरांनी दिलेल्या कृती-योजनेनुसार उपचार करा. व्यक्ती बेशुद्ध असेल किंवा गिळू शकत नसेल तर तोंडाने काहीही देऊ नका; तातडीची वैद्यकीय मदत घ्या.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">व्यायाम योजना</h4>
              <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                बहुतेक प्रौढांसाठी आठवड्यात किमान १५० मिनिटे मध्यम तीव्रतेची हालचाल हे सामान्य उद्दिष्ट आहे. तुमची क्षमता कमी असल्यास थोड्या वेळापासून सुरुवात करून हळूहळू वाढवा.
              </p>
            </div>
          </div>
        </section>
      </section>

      <RelatedLinks
        title="संबंधित वाचन"
        description="व्यायामानंतर आहार, दिनचर्या आणि वजन व्यवस्थापनावर पुढे जा."
        links={[
          {
            href: "/diabetes/daily-routine",
            title: "दैनंदिन दिनचर्या",
            description: "व्यायाम कधी आणि कसा बसवायचा यासाठी पूर्ण रूटीन.",
          },
          {
            href: "/diabetes/diet",
            title: "मधुमेह आहार",
            description: "व्यायामाला पूरक असा आहार कसा ठेवावा ते शिका.",
          },
          {
            href: "/calculators/bmi",
            title: "BMI कॅल्क्युलेटर",
            description: "व्यायामाच्या उद्दिष्टांशी वजन स्थिती जोडून पहा.",
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
