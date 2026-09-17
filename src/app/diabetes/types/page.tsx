import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाचे प्रकार",
  description: "टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह समजून घ्या.",
  keywords: ["मधुमेह प्रकार", "टाइप 1", "टाइप 2", "प्रीडायबिटीज"],
  openGraph: {
    title: "मधुमेहाचे प्रकार",
    description: "टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह",
    images: [{ url: "/images/diabetes/diabetes-basics.webp", width: 1536, height: 1024, alt: "मधुमेहाचे विविध प्रकार समजून घेण्यासाठी संकल्पनाचित्र" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाचे प्रकार",
    description: "टाइप १, टाइप २, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह यांतील फरक.",
    images: ["/images/diabetes/diabetes-basics.webp"],
  },
  alternates: { canonical: "/diabetes/types" },
};

export default function TypesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "मधुमेहाचे प्रकार" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह प्रकार"
          title="मधुमेहाचे प्रमुख प्रकार"
          description="टाइप १, टाइप २, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह यांतील फरक समजून घ्या."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/diabetes-basics.webp"
        alt="इन्सुलिन, ग्लुकोज आणि शरीरातील पेशी यांचा संबंध दाखवणारे वैद्यकीय संकल्पनाचित्र"
        caption="मधुमेहाचे प्रकार वेगवेगळे असले, तरी प्रत्येक प्रकारात इन्सुलिन तयार होणे किंवा त्याचा वापर होणे यावर परिणाम होतो."
        priority
      />

      <div className="mt-12 space-y-12">
        <section id="type1" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">टाइप 1 मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">काय होते?</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">टाइप १ मधुमेह हा स्वयंप्रतिकाराशी संबंधित आजार आहे. शरीराची रोगप्रतिकारक यंत्रणा अग्न्याशयातील इन्सुलिन तयार करणाऱ्या पेशींना नुकसान करते. त्यामुळे शरीर फार कमी किंवा अजिबात इन्सुलिन तयार करत नाही.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">कारणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>• नेमके कारण अद्याप स्पष्ट नाही</li>
                <li>• जनुकीय आणि पर्यावरणीय घटकांचा संबंध असू शकतो</li>
                <li>• आहार किंवा चुकीच्या सवयींमुळे टाइप १ होत नाही</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200">लक्षणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>• अचानक थकवा</li>
                <li>• वारंवार लघवी होणे</li>
                <li>• सतत तहान लागणे</li>
                <li>• विनाकारण वजन कमी होणे</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200">उपचार</h4>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">टाइप १ मधुमेहात दररोज इन्सुलिन आवश्यक असते. इंजेक्शन किंवा इन्सुलिन पंप यांपैकी योग्य पर्याय डॉक्टर ठरवतात.</p>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200">लक्षात ठेवा</h4>
            <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">टाइप १ मधुमेह लहानपणी अधिक आढळतो, पण तो कोणत्याही वयात होऊ शकतो.</p>
          </div>
        </section>

        <section id="type2" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">टाइप 2 मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">काय होते?</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">टाइप २ मधुमेहात शरीर इन्सुलिनचा परिणामकारक वापर करू शकत नाही आणि कालांतराने अग्न्याशय पुरेसे इन्सुलिन तयार करू शकत नाही. हा मधुमेहाचा सर्वाधिक आढळणारा प्रकार आहे.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">कारणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>• जादा वजन किंवा लठ्ठपणा</li>
                <li>• शारीरिक हालचालींचा अभाव</li>
                <li>• कौटुंबिक इतिहास</li>
                <li>• वाढते वय</li>
                <li>• गर्भावस्थेतील मधुमेहाचा पूर्वेतिहास</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200">लक्षणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>• थकवा</li>
                <li>• वारंवार संक्रमण</li>
                <li>• जखम उशिरा भरून येणे</li>
                <li>• हात-पायांना मुंग्या किंवा सुन्नपणा</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200">उपचार</h4>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">उपचार व्यक्तीनुसार बदलतात. संतुलित आहार आणि नियमित हालचालींसोबत गोळ्या, इतर औषधे किंवा इन्सुलिनची गरज लागू शकते. औषध स्वतःहून सुरू किंवा बंद करू नका.</p>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200">जोखीम घटक</h4>
            <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">जादा वजन, कौटुंबिक इतिहास, कमी हालचाल, वाढते वय आणि काही आरोग्यस्थितींमुळे धोका वाढू शकतो. टाइप २ कोणत्याही वयात होऊ शकतो.</p>
          </div>
        </section>

        <section id="prediabetes" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">प्रीडायबिटीज</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">काय होते?</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">प्रीडायबिटीजमध्ये रक्तातील साखर सामान्यपेक्षा जास्त असते; पण ती टाइप २ मधुमेहाच्या निदानाइतकी वाढलेली नसते. त्यामुळे भविष्यात टाइप २ मधुमेह होण्याचा धोका वाढतो.</p>
          </div>

          <MedicalTip type="important" title="वेळीच कृती करा">
            संतुलित आहार, नियमित हालचाल आणि गरज असल्यास वजन कमी केल्याने टाइप २ मधुमेहाचा धोका कमी किंवा त्याची सुरुवात उशिरा होण्यास मदत होऊ शकते.
          </MedicalTip>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">प्रतिबंध</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-800 dark:text-emerald-300">
              <li>✓ डॉक्टरांनी सुचवलेले वजनाचे उद्दिष्ट ठेवा</li>
              <li>✓ आठवडाभर नियमित शारीरिक हालचाल करा</li>
              <li>✓ संतुलित आहार घ्या</li>
              <li>✓ साखरयुक्त पेये मर्यादित ठेवा</li>
              <li>✓ डॉक्टरांनी सांगितल्याप्रमाणे रक्ततपासणी करा</li>
            </ul>
          </div>
        </section>

        <section id="gestational" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">गर्भावस्थेतील मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">काय होते?</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">गर्भावस्थेत प्रथम निदान झालेल्या मधुमेहाला गर्भावस्थेतील मधुमेह म्हणतात. तो अनेकदा प्रसूतीनंतर कमी होतो; मात्र आईला पुढे टाइप २ मधुमेह होण्याचा धोका वाढतो.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950/30 p-4">
            <h4 className="font-semibold text-pink-900 dark:text-pink-200">जोखीम घटक</h4>
              <ul className="mt-3 space-y-2 text-sm text-pink-800 dark:text-pink-300">
                <li>• जादा वजन</li>
                <li>• मधुमेहाचा कौटुंबिक इतिहास</li>
                <li>• मागील गर्भावस्थेतील मधुमेह</li>
                <li>• PCOS किंवा इतर संबंधित स्थिती</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-4">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-200">काळजी का आवश्यक?</h4>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800 dark:text-indigo-300">
                <li>• आईचा रक्तदाब वाढण्याचा धोका</li>
                <li>• बाळाचे वजन जास्त होण्याची शक्यता</li>
                <li>• प्रसूतीवेळी अडचणींचा धोका</li>
                <li>• पुढे आईला टाइप २ मधुमेहाचा वाढलेला धोका</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-950/30 p-4">
            <h4 className="font-semibold text-teal-900 dark:text-teal-200">व्यवस्थापन</h4>
            <p className="mt-2 text-sm text-teal-800 dark:text-teal-300">आहार, सुरक्षित शारीरिक हालचाल, रक्तातील साखरेची तपासणी आणि आवश्यक असल्यास औषध किंवा इन्सुलिन यांची योजना प्रसूतीतज्ज्ञ व मधुमेहतज्ज्ञ ठरवतात.</p>
          </div>
        </section>

        <section className="mt-12">
          <RelatedLinks
            title="पुढे वाचण्यासाठी"
            description="मधुमेहाच्या प्रकारांनंतर या जोडलेल्या विषयांमधून पुढे जा."
            links={[
              {
                href: "/diabetes/what-is-diabetes",
                title: "मधुमेह म्हणजे काय",
                description: "ग्लुकोज, इन्सुलिन आणि रक्तातील साखरेची मूलभूत माहिती.",
              },
              {
                href: "/diabetes/diagnosis",
                title: "निदान",
                description: "मधुमेहाची तपासणी आणि चाचण्या कशा होतात ते समजून घ्या.",
              },
              {
                href: "/diabetes/diet",
                title: "मधुमेह आहार",
                description: "रोजच्या आहारातून रक्तातील साखर कशी सांभाळावी.",
              },
            ]}
          />

          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">टाइप १ आणि टाइप २: थोडक्यात तुलना</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-emerald-300">
                    <th className="px-2 py-2 text-left font-semibold">बाब</th>
                    <th className="px-2 py-2 text-left font-semibold">टाइप 1</th>
                    <th className="px-2 py-2 text-left font-semibold">टाइप 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-200">
                    <td className="px-2 py-2">कारण</td>
                    <td className="px-2 py-2">स्वप्रतिरक्षा</td>
                    <td className="px-2 py-2">इन्सुलिन प्रतिरोध</td>
                  </tr>
                  <tr className="border-b border-emerald-200">
                    <td className="px-2 py-2">सामान्यतः निदान</td>
                    <td className="px-2 py-2">बहुतेकदा लहान वयात; कोणत्याही वयात शक्य</td>
                    <td className="px-2 py-2">बहुतेकदा प्रौढांमध्ये; कोणत्याही वयात शक्य</td>
                  </tr>
                  <tr className="border-b border-emerald-200">
                    <td className="px-2 py-2">इन्सुलिन</td>
                    <td className="px-2 py-2">नेहमी आवश्यक</td>
                    <td className="px-2 py-2">व्यक्तीनुसार गरज लागू शकते</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2">प्रतिबंध</td>
                    <td className="px-2 py-2">सध्या खात्रीशीर मार्ग नाही</td>
                    <td className="px-2 py-2">धोका कमी किंवा सुरुवात उशिरा करता येऊ शकते</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <CTA />
        </div>
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </main>
  );
}
