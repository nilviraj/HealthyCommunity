import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import TableOfContents from "@/components/TableOfContents";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह म्हणजे काय",
  description: "मधुमेह म्हणजे काय, ग्लुकोज आणि इन्सुलिन कसे काम करतात आणि रक्तातील साखर का वाढते ते सोप्या मराठीत समजून घ्या.",
  keywords: ["मधुमेह", "डायबिटीज", "इन्सुलिन", "ग्लुकोज", "रक्तातील साखर"],
  openGraph: {
    title: "मधुमेह म्हणजे काय",
    description: "ग्लुकोज, इन्सुलिन आणि रक्तातील साखर यांचा संबंध सोप्या भाषेत समजून घ्या.",
    type: "article",
    images: [{ url: "/images/diabetes/diabetes-basics.webp", width: 1536, height: 1024, alt: "इन्सुलिन आणि ग्लुकोज यांची प्रक्रिया" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह म्हणजे काय",
    description: "ग्लुकोज, इन्सुलिन आणि रक्तातील साखर यांचा संबंध सोप्या भाषेत समजून घ्या.",
    images: ["/images/diabetes/diabetes-basics.webp"],
  },
  alternates: { canonical: "/diabetes/what-is-diabetes" },
};

const tocItems = [
  { id: "what-is-diabetes", title: "मधुमेह म्हणजे काय", level: 2 },
  { id: "glucose", title: "ग्लुकोज म्हणजे काय", level: 2 },
  { id: "insulin", title: "इन्सुलिन म्हणजे काय", level: 2 },
  { id: "insulin-works", title: "इन्सुलिन कसे काम करते", level: 2 },
  { id: "blood-sugar", title: "रक्तातील साखर का वाढते", level: 2 },
  { id: "difference", title: "मधुमेहात काय बदलते", level: 2 },
  { id: "long-term", title: "दीर्घकालीन परिणाम", level: 2 },
  { id: "prevention", title: "प्रतिबंध", level: 2 },
];

export default function WhatIsDiabetesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "मधुमेह म्हणजे काय" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेहाची मूलभूत माहिती"
          title="मधुमेह म्हणजे काय"
          description="मधुमेह हा दीर्घकालीन आजार आहे. तो समजून घेणे ही योग्य काळजीची पहिली पायरी आहे."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/diabetes-basics.webp"
        alt="अग्न्याशय, इन्सुलिन आणि ग्लुकोज पेशींपर्यंत पोहोचण्याची संकल्पना दर्शवणारे चित्र"
        caption="इन्सुलिन ग्लुकोजला रक्तातून पेशींमध्ये पोहोचण्यास मदत करते; ही प्रक्रिया बिघडल्यास रक्तातील साखर वाढू शकते."
        priority
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <TableOfContents items={tocItems} />

          <section id="what-is-diabetes" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">मधुमेह म्हणजे काय</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेह (Diabetes) हा दीर्घकालीन आजार आहे. यात रक्तातील ग्लुकोजचे, म्हणजेच साखरेचे, प्रमाण जास्त राहते. शरीर पुरेसे इन्सुलिन तयार करत नसल्यामुळे किंवा तयार झालेले इन्सुलिन नीट वापरू शकत नसल्यामुळे असे होते.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              आपण खाल्लेल्या अन्नातील कर्बोदके पचनानंतर ग्लुकोजमध्ये बदलतात. हा ग्लुकोज रक्तात येतो. अग्न्याशयातून तयार होणारे इन्सुलिन हे हार्मोन ग्लुकोजला पेशींमध्ये पोहोचण्यास मदत करते; पेशी त्याचा ऊर्जेसाठी वापर करतात.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेहात ही प्रक्रिया नीट होत नाही. शरीर पुरेसे इन्सुलिन तयार करत नाही किंवा पेशी इन्सुलिनला योग्य प्रतिसाद देत नाहीत. त्यामुळे ग्लुकोज रक्तात साचतो आणि रक्तातील साखर वाढते.
            </p>
            <MedicalTip type="info" title="हे जाणून घ्या">
              योग्य उपचार, आहार, नियमित हालचाल आणि तपासणी यांच्या मदतीने मधुमेहाचे व्यवस्थापन करता येते. औषधे किंवा इन्सुलिन स्वतःहून बदलू नका.
            </MedicalTip>
          </section>

          <section id="glucose" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">ग्लुकोज म्हणजे काय?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              ग्लुकोज ही साधी साखर असून शरीरासाठी ऊर्जेचा महत्त्वाचा स्रोत आहे. भात, पोळी, भाकरी, दूध, फळे आणि इतर कर्बोदकयुक्त पदार्थांच्या पचनातून ग्लुकोज मिळतो.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              शरीरातील पेशींना काम करण्यासाठी ग्लुकोजची गरज असते. मात्र रक्तातील ग्लुकोज दीर्घकाळ जास्त राहिल्यास रक्तवाहिन्या, डोळे, मूत्रपिंड, मज्जातंतू आणि हृदयावर परिणाम होऊ शकतो.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              इन्सुलिन ग्लुकोजला रक्तातून पेशींमध्ये जाण्यास मदत करते. तेथे ग्लुकोज ऊर्जेसाठी वापरला जातो किंवा पुढील वापरासाठी साठवला जातो.
            </p>
          </section>

          <section id="insulin" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">इन्सुलिन म्हणजे काय?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              इन्सुलिन हे अग्न्याशयात (Pancreas) तयार होणारे हार्मोन आहे. ते रक्तातील ग्लुकोजचे प्रमाण संतुलित ठेवण्यास मदत करते.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              जेवल्यानंतर रक्तातील ग्लुकोज वाढल्यावर अग्न्याशय इन्सुलिन सोडतो. इन्सुलिनमुळे स्नायू आणि इतर पेशींना ग्लुकोज आत घेऊन ऊर्जेसाठी वापरता येतो.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              शरीराला लगेच गरज नसलेला काही ग्लुकोज यकृत आणि स्नायूंमध्ये साठवला जातो. पुढे ऊर्जा लागल्यावर शरीर हा साठा वापरते.
            </p>
          </section>

          <section id="insulin-works" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">इन्सुलिन कसे काम करते?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              रक्तातील ग्लुकोज नियंत्रित ठेवण्याची प्रक्रिया साधारण अशी असते:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">१. संकेत पाठवणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">जेवल्यानंतर रक्तातील ग्लुकोज वाढतो.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">२. इन्सुलिन सोडणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">अग्न्याशय रक्तात इन्सुलिन सोडतो.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">३. दरवाजे उघडणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">इन्सुलिनमुळे ग्लुकोज पेशींमध्ये प्रवेश करतो.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">४. ऊर्जा वापर किंवा संचय</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">ग्लुकोज ऊर्जेसाठी वापरला जातो किंवा पुढील वापरासाठी साठवला जातो.</p>
              </div>
            </div>
            <MedicalTip type="tip" title="टिप">
              मधुमेहात ही प्रक्रिया बिघडते. नेमका बदल मधुमेहाच्या प्रकारानुसार वेगळा असतो.
            </MedicalTip>
          </section>

          <section id="blood-sugar" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">रक्तातील साखर का वाढते?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेहात रक्तातील साखर वाढण्याची प्रमुख कारणे अशी आहेत:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">इन्सुलिनची कमतरता</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">अग्न्याशय पुरेसे इन्सुलिन तयार करत नाही.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">इन्सुलिन प्रतिरोध</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">शरीरातील पेशी इन्सुलिनला योग्य प्रतिसाद देत नाहीत.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">आहार आणि औषधांचा मेळ</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">कर्बोदकांचे प्रमाण, जेवणाची वेळ आणि औषधांचा परिणाम यामुळे रीडिंग बदलू शकते.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">व्यायाम न करणे</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">नियमित हालचालीमुळे स्नायूंना ग्लुकोज वापरण्यास मदत होते.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="difference" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">मधुमेहात काय बदलते?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">बाब</th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">सामान्य व्यक्ती</th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">मधुमेह असलेली व्यक्ती</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">रक्तातील साखरेचे नियंत्रण</td>
                    <td className="px-4 py-3">शरीर आपोआप संतुलित ठेवते</td>
                    <td className="px-4 py-3">साखर जास्त राहू शकते</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">इन्सुलिन निर्मिती</td>
                    <td className="px-4 py-3">पुरेसे आणि परिणामकारक</td>
                    <td className="px-4 py-3">कमी किंवा कमी परिणामकारक</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">ऊर्जा स्तर</td>
                    <td className="px-4 py-3">स्थिर</td>
                    <td className="px-4 py-3">अस्थिर - थकवा</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">उपचार आवश्यक</td>
                    <td className="px-4 py-3">नाही</td>
                    <td className="px-4 py-3">प्रकारानुसार आहार, औषधे किंवा इन्सुलिन</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="long-term" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">दीर्घकालीन परिणाम</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              रक्तातील साखर दीर्घकाळ जास्त राहिल्यास काही गुंतागुंतींचा धोका वाढू शकतो:
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
                <h4 className="font-semibold text-red-900 dark:text-red-200">हृदय रोग</h4>
                <p className="text-sm text-red-800 dark:text-red-300 mt-1">रक्त वाहिन्यांचे नुकसान होऊ शकते.</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200">मूत्रपिंडाचा आजार</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">मूत्रपिंडाच्या कार्यावर परिणाम होऊ शकतो.</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
                <h4 className="font-semibold text-amber-900 dark:text-amber-200">दृष्टीच्या समस्या</h4>
                <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">डायबेटिक रेटिनोपॅथीमुळे दृष्टीवर परिणाम होऊ शकतो.</p>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
                <h4 className="font-semibold text-purple-900 dark:text-purple-200">पायांच्या समस्या</h4>
                <p className="text-sm text-purple-800 dark:text-purple-300 mt-1">मज्जातंतूंचे नुकसान, जखम किंवा संसर्ग होऊ शकतो.</p>
              </div>
            </div>
            <MedicalTip type="warning" title="महत्त्वाचे">
              रक्तातील साखर, रक्तदाब आणि कोलेस्टेरॉल यांचे योग्य व्यवस्थापन केल्याने गुंतागुंतींचा धोका कमी होऊ शकतो. तपासण्यांचे वेळापत्रक डॉक्टरांकडून ठरवून घ्या.
            </MedicalTip>
          </section>

          <RelatedLinks
            title="संबंधित मधुमेह विषय"
            description="या विषयानंतर या संबंधित पानांवरून पुढे वाचा."
            links={[
              {
                href: "/diabetes/types",
                title: "मधुमेहाचे प्रकार",
                description: "टाइप 1, टाइप 2, प्रीडायबिटीज आणि गर्भावस्थेतील मधुमेह.",
              },
              {
                href: "/diabetes/early-symptoms",
                title: "सुरुवातीची लक्षणे",
                description: "मधुमेहाची सुरुवातीची चेतावणी चिन्हे ओळखा.",
              },
              {
                href: "/diabetes/faq",
                title: "मधुमेह FAQ",
                description: "सामान्य प्रश्न आणि संक्षिप्त उत्तरे एका ठिकाणी.",
              },
            ]}
          />

          <section id="prevention" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">प्रतिबंध</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              टाइप १ मधुमेह टाळण्याचा सध्या खात्रीशीर मार्ग उपलब्ध नाही. खालील सवयी टाइप २ मधुमेहाचा धोका कमी किंवा उशिरा होण्यास मदत करू शकतात:
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ तुमच्यासाठी योग्य वजन राखा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">जादा वजन असल्यास डॉक्टरांच्या मार्गदर्शनाने हळूहळू वजन कमी करा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ नियमित व्यायाम करा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">क्षमता आणि आरोग्यानुसार नियमित चालणे किंवा इतर हालचाल करा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ संतुलित आहार घ्या</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">भाज्या, कडधान्ये, योग्य प्रमाणातील धान्य आणि संपूर्ण फळांना प्राधान्य द्या.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ साखरयुक्त पेये कमी करा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">शीतपेये, गोड चहा आणि पॅकेज्ड गोड पेय मर्यादित ठेवा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ ताण सांभाळा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">श्वसनाचा सराव, आवडते काम आणि गरज असल्यास तज्ज्ञांची मदत घ्या.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ पुरेशी झोप</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">नियमित वेळेत पुरेशी आणि शांत झोप घेण्याचा प्रयत्न करा.</p>
              </div>
            </div>
          </section>

          <div className="mt-12">
            <CTA />
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">पुढील पृष्ठ</h3>
            <Link
              href="/diabetes/types"
              className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              मधुमेहाचे प्रकार →
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </main>
  );
}
