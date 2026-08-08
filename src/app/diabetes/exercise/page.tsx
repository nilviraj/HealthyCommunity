import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह व्यायाम",
    description: "मधुमेह रुग्णांसाठी योग्य व्यायामप्रकार, चालणे, योग आणि सुरक्षिततेच्या सूचना.",
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
          title="मधुमेह रुग्णांसाठी व्यायाम"
          description="WHO मार्गदर्शनानुसार नियमित व्यायामाद्वारे रक्तशर्करा नियंत्रणात ठेवा."
        />
      </div>

      <section className="mt-6">
        <MedicalTip type="warning" title="महत्त्वाचे: व्यायाम सुरक्षितता">
          व्यायाम सुरुवात करण्यापूर्वी परिणीत डॉक्टरांचा सल्ला घ्या. WHO मार्गदर्शन आणि आपल्या वैयक्तिक स्वास्थ्य स्थितीनुसार व्यायाम योजना तयार करा. डॉक्टरच आपल्या व्यायाम कार्यक्रमच मंजूरी देऊ शकतात.
        </MedicalTip>
      </section>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">व्यायामप्रकार</h2>
          
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🚶 चालणे (Walking)</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                सर्वात सोपा आणि प्रभावी व्यायाम. दररोज ३०-४५ मिनिटे वेगाने चाला.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• साप्ताहिक 5 दिवस चला</li>
                <li>• सकाळी किंवा संध्याकाळी चालू शकता</li>
                <li>• प्रतिदिन 10,000 पायरी लक्ष्य करा</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🚴 सायकलिंग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                हृदय मजबूत करण्याचा उत्तम मार्ग.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• 30 मिनिटे नियमित सायकलिंग</li>
                <li>• साप्ताहिक 3-4 दिवस</li>
                <li>• स्टेशनरी बाईक सुद्धा चांगली आहे</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🧘 योग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                शारीरिक आणि मानसिक स्वास्थ्यासाठी.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• सूर्य नमस्कार - 20-30 मिनिटे</li>
                <li>• आसन - 30-45 मिनिटे</li>
                <li>• प्राणायाम - 10-15 मिनिटे</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">💪 प्रतिरोध प्रशिक्षण</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                स्नायूंना बळकट केल्यामुळे ग्लुकोज नियंत्रणात मदत होते.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• हल्क्या वजनाने सुरुवात करा</li>
                <li>• साप्ताहिक 2 दिवस</li>
                <li>• डॉक्टरांचा सल्ला घ्या</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">🤸 स्ट्रेचिंग</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                व्यायामापूर्वी आणि व्यायामानंतर अत्यावश्यक.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• वार्मअप - 5-10 मिनिटे</li>
                <li>• कूलडाउन - 5-10 मिनिटे</li>
                <li>• सर्व स्नायूंना स्ट्रेच करा</li>
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
                • दर २ तासांनी ५-१० मिनिटे फिरा<br/>
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
                • सकाळी ६-७ वाजता सर्वोत्तम
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200">सायंकाळचा व्यायाम</h3>
              <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">
                • जेवणानंतर १-२ तासांनी करा<br/>
                • रक्तशर्करा कमी करण्यास मदत होते<br/>
                • संध्याकाळी ५-६ वाजता योग्य
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">व्यायामाच्या महत्त्वाच्या खबरदाऱ्या</h2>
          
          <MedicalTip type="warning" title="व्यायामापूर्वी लक्षात ठेवा">
            <ul className="mt-2 space-y-2 text-sm">
              <li>• डॉक्टरांचा सल्ला घ्या</li>
              <li>• मधुमेहाच्या औषधांसह व्यायाम करताना विशेष काळजी घ्या</li>
              <li>• कमी ग्लुकोजचा धोका ओळखा – तत्काळ उपचार करा</li>
              <li>• पुरेसे पाणी प्या</li>
              <li>• योग्य बूट/चपला घाला</li>
            </ul>
          </MedicalTip>

          <div className="space-y-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
              <h4 className="font-semibold text-red-900 dark:text-red-200">हायपोग्लायसेमियाची लक्षणे</h4>
              <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                थरथर कापणे, घाम येणे, हृदयाची धडधड वाढणे, चिडचिड होणे – तत्काळ रस किंवा मध घ्या.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">व्यायाम योजना</h4>
              <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                आठवड्यातून किमान १५० मिनिटांचे उद्दिष्ट ठेवा. हळूहळू सुरुवात करा.
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


