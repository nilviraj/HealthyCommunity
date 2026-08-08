import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहचे प्रकार",
  description: "टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह समजून घ्या.",
  keywords: ["मधुमेह प्रकार", "टाइप 1", "टाइप 2", "प्रीडायबिटीज"],
  openGraph: {
    title: "मधुमेहचे प्रकार",
    description: "टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह",
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
          { label: "मधुमेहचे प्रकार" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह प्रकार"
          title="मधुमेहचे चार मुख्य प्रकार"
          description="टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह यांचे मध्ये फरक जाणून घ्या."
        />
      </div>

      <div className="mt-12 space-y-12">
        <section id="type1" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">टाइप 1 मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">परिभाषा</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">टाइप 1 मधुमेह एक स्वप्रतिरक्षा स्थिती आहे जिथे शरीरचा प्रतिरक्षा प्रणाली अग्न्याशयातील इन्सुलीन-उत्पादक कोशिका नष्ट करते.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">कारणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>• अनुवंशिकता</li>
                <li>• व्हायरल संक्रमण</li>
                <li>• प्रतिरक्षा प्रणाली विकार</li>
                <li>• स्पष्ट कारण अज्ञात</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200">लक्षणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>• अचानक थकवा</li>
                <li>• वारंवार प्रस्राव</li>
                <li>• तीव्र प्यास</li>
                <li>• अस्पष्ट दृष्टि</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200">उपचार</h4>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">टाइप 1 मधुमेह इन्सुलीन उपचार आवश्यक आहे. रोजचे इन्सुलीन इंजेक्शन किंवा इन्सुलीन पंप वापरणे आवश्यक असते.</p>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200">जोखीमीचे कारण</h4>
            <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">अनुवंशिकता, पारिवारिक इतिहास, वय (सामान्यतः बाल्यावस्थात किंवा तरुणाईत)</p>
          </div>
        </section>

        <section id="type2" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">टाइप 2 मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">परिभाषा</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">टाइप 2 मधुमेह इन्सुलीन प्रतिरोध आणि अग्न्याशयचे अपर्याप्त इन्सुलीन उत्पादन यांच्या कारणामुळे होते. हे सर्वात सामान्य प्रकार आहे.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">कारणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>• मोटापा</li>
                <li>• व्यायाम न करणे</li>
                <li>• वय (45+)</li>
                <li>• खराब आहार</li>
                <li>• अनुवंशिकता</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200">लक्षणे</h4>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>• थकवा</li>
                <li>• वारंवार संक्रमण</li>
                <li>• धीमे जखमांचे उपचार</li>
                <li>• हलके संवेदनशीलता नुकसान</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200">उपचार</h4>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">आहार आणि व्यायाम बदलांसह सुरुवात करा. औषध किंवा इन्सुलीन आवश्यक असू शकते. अनेकांना आहार आणि जीवनशैली बदल पुरेसे असते.</p>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200">जोखीमीचे कारण</h4>
            <p className="mt-2 text-sm text-purple-800 dark:text-purple-300">45 वर्षांपेक्षा जास्त वय, मोटापा, परिवारातील इतिहास, शारीरिक निष्क्रियता</p>
          </div>
        </section>

        <section id="prediabetes" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">प्रीडायबिटीज</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">परिभाषा</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">प्रीडायबिटीज हा एक अवस्था आहे जिथे रक्त शर्करा सामान्यपेक्षा जास्त आहे परंतु अजून मधुमेहतक पोहोचलेला नाही. हे मधुमेहाचे चेतावणी संकेत आहे.</p>
          </div>

          <MedicalTip type="important" title="सुवर्ण संधी">
            प्रीडायबिटीज हा एक महत्त्वपूर्ण चेतावणी आहे. योग्य जीवनशैली बदलांसह, आपण पूर्ण मधुमेह होण्यास प्रतिबंध करू शकता.
          </MedicalTip>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">प्रतिबंध</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-800 dark:text-emerald-300">
              <li>✓ 5-10% वजन कमी करा</li>
              <li>✓ साप्ताहिक 150 मिनिट व्यायाम करा</li>
              <li>✓ स्वस्थ आहार खा</li>
              <li>✓ शर्करा कमी करा</li>
              <li>✓ नियमित रक्त शर्करा तपासणी करा</li>
            </ul>
          </div>
        </section>

        <section id="gestational" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">गर्भावस्थेतील मधुमेह</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50 p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">परिभाषा</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">गर्भावस्थेतील मधुमेह गर्भवती महिलांमध्ये होतो. सामान्यतः प्रसूतीनंतर दूर होतो परंतु भविष्यात टाइप 2 मधुमेहाचा खतरा वाढवते.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950/30 p-4">
              <h4 className="font-semibold text-pink-900 dark:text-pink-200">जोखीमीचे कारण</h4>
              <ul className="mt-3 space-y-2 text-sm text-pink-800 dark:text-pink-300">
                <li>• 25 वर्षांपेक्षा जास्त वय</li>
                <li>• मोटापा</li>
                <li>• पारिवारिक इतिहास</li>
                <li>• मधुमेहाचा व्यक्तिगत इतिहास</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-4">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-200">परिणाम</h4>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800 dark:text-indigo-300">
                <li>• मातृत्व जटिलता</li>
                <li>• भ्रूण जटिलता</li>
                <li>• जन्म नंतर बाल मधुमेह</li>
                <li>• मातृ दीर्घकालीन मधुमेह</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-950/30 p-4">
            <h4 className="font-semibold text-teal-900 dark:text-teal-200">व्यवस्थापन</h4>
            <p className="mt-2 text-sm text-teal-800 dark:text-teal-300">गर्भावस्थेतील मधुमेह व्यवस्थापनासाठी आहार, व्यायाम आणि गर्भपात रक्त शर्करा मापन आवश्यक आहे.</p>
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
                description: "ग्लूकोज, इन्सुलीन आणि रक्त शर्करेची मूलभूत माहिती.",
              },
              {
                href: "/diabetes/diagnosis",
                title: "निदान",
                description: "मधुमेहाची तपासणी आणि चाचण्या कशा होतात ते समजून घ्या.",
              },
              {
                href: "/diabetes/diet",
                title: "मधुमेह आहार",
                description: "रोजच्या आहारातून रक्त शर्करा कशी सांभाळावी.",
              },
            ]}
          />

          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">तुलना तालिका</h3>
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
                    <td className="px-2 py-2">इन्सुलीन प्रतिरोध</td>
                  </tr>
                  <tr className="border-b border-emerald-200">
                    <td className="px-2 py-2">आयु</td>
                    <td className="px-2 py-2">बाल्यावस्था</td>
                    <td className="px-2 py-2">45+</td>
                  </tr>
                  <tr className="border-b border-emerald-200">
                    <td className="px-2 py-2">इन्सुलीन</td>
                    <td className="px-2 py-2">नेहमी आवश्यक</td>
                    <td className="px-2 py-2">कधी-कधी</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2">प्रतिबंध</td>
                    <td className="px-2 py-2">असंभव</td>
                    <td className="px-2 py-2">संभव</td>
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


