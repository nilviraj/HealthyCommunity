import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import TableOfContents from "@/components/TableOfContents";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह म्हणजे काय",
  description: "मधुमेह, ग्लूकोज, इन्सुलीन आणि रक्त शर्करा वाढण्याचे कारण समजून घ्या.",
  keywords: ["मधुमेह", "डायबिटीज", "इन्सुलीन", "ग्लूकोज", "रक्त शर्करा"],
  openGraph: {
    title: "मधुमेह म्हणजे काय",
    description: "मधुमेह, ग्लूकोज, इन्सुलीन आणि रक्त शर्करा वाढण्याचे कारण समजून घ्या.",
    type: "article",
  },
  alternates: { canonical: "/diabetes/what-is-diabetes" },
};

const tocItems = [
  { id: "what-is-diabetes", title: "मधुमेह म्हणजे काय", level: 2 },
  { id: "glucose", title: "ग्लूकोज काय आहे", level: 2 },
  { id: "insulin", title: "इन्सुलीन काय आहे", level: 2 },
  { id: "insulin-works", title: "इन्सुलीन कसे काम करते", level: 2 },
  { id: "blood-sugar", title: "रक्त शर्करा वाढते कसे", level: 2 },
  { id: "difference", title: "सामान्य व्यक्ती आणि मधुमेह रोगी", level: 2 },
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
          eyebrow="मधुमेह आधारभूत माहिती"
          title="मधुमेह म्हणजे काय"
          description="मधुमेह एक दीर्घकालीन आरोग्य स्थिती आहे. त्याला समजून घेणे व्यवस्थापन सुरू करण्यासाठी पहिली पावल आहे."
        />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <TableOfContents items={tocItems} />

          <section id="what-is-diabetes" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">मधुमेह म्हणजे काय</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेह (डायबिटीज) एक दीर्घकालीन आरोग्य स्थिती आहे जिथे शरीरात रक्त शर्करा (ग्लूकोज) स्तर असामान्यपणे वाढलेला असतो. हे एक अंतःस्रावी विकार आहे जो अग्न्याशयाच्या (पँक्रिएजच्या) कार्यक्षमतेशी संबंधित आहे.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              जेव्हा आपण खाना खाताे, विशेषतः कार्बोहायड्रेट्स, ते पचता आणि ग्लूकोजमध्ये रूपांतरित होतात. हा ग्लूकोज रक्तप्रवाहात प्रवेश करतो. सामान्य परिस्थितीत, अग्न्याशयातून इन्सुलीन नामक हार्मोन सोडला जातो जो ग्लूकोजला कोशिकांत प्रवेश करण्यास मदत करतो, जिथे तो ऊर्जेसाठी वापरला जातो.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेहात, ही प्रक्रिया व्यथित असते. शरीर पर्याप्त इन्सुलीन तयार करू शकत नाही किंवा ते इन्सुलीन योग्यरित्या वापरू शकत नाही (इन्सुलीन प्रतिरोध). परिणामी, ग्लूकोज रक्तात जमा होतो, ज्यामुळे रक्त शर्करा स्तर वाढते.
            </p>
            <MedicalTip type="info" title="हे जाणून घ्या">
              मधुमेह एक व्यवस्थापनीय स्थिती आहे. विश्व आरोग्य संघटनेच्या मार्गदर्शनानुसार, योग्य देखभाल, आहार आणि जीवनशैली बदलांसह, मधुमेह रोगी एक सामान्य आणि स्वस्थ जीवन जगू शकता.
            </MedicalTip>
          </section>

          <section id="glucose" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">ग्लूकोज काय आहे</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              ग्लूकोज एक साधा शर्करा आहे जो आपल्या शरीरासाठी मुख्य ऊर्जा स्रोत आहे. हे खाद्य पदार्थ, विशेषतः कार्बोहायड्रेट्स (तांदूळ, ब्रेड, दुध, फळे) पचन करून मिळते.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              आपल्या शरीरातील प्रत्येक पेशीला कार्य करण्यासाठी ऊर्जा आवश्यक आहे. ग्लूकोज ही ऊर्जा प्रदान करते. परंतु अगदी थोड्या प्रमाणात ग्लूकोज आवश्यक आहे. जेव्हा रक्तातील ग्लूकोज स्तर बहुत जास्त असतो, तेव्हा ते शरीरासाठी हानिकारक होऊ शकते.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              ग्लूकोज सामान्य स्तर ठेवण्यासाठी, इन्सुलीन नामक हार्मोन ग्लूकोजला कोशिकांत घेण्यास मदत करते, जिथे ते ऊर्जेसाठी वापरला जातो किंवा भविष्यासाठी साठवला जातो.
            </p>
          </section>

          <section id="insulin" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">इन्सुलीन काय आहे</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              इन्सुलीन अग्न्याशयातून (पँक्रिएजमधून) सोडला जाणारा एक हार्मोन आहे. ही एक रासायनिक संदेशवाहक आहे जो आपल्या शरीरातील ग्लूकोज स्तर नियंत्रित करण्यास मदत करते.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              जेव्हा आपण काही खाता, विशेषतः कार्बोहायड्रेट्स, रक्त शर्करा स्तर वाढते. अग्न्याशय हे संवेदनशील होतो आणि इन्सुलीन सोडण्यास सुरुवात करतो. इन्सुलीन कोशिकांना सांगतो: &quot;तुमच्या दरवाजे उघडा आणि या ग्लूकोजला अंदर घ्या आणि ऊर्जेसाठी वापरा किंवा भविष्यासाठी साठवा.&quot;
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              बिनामुळे, रक्तातील अतिरिक्त ग्लूकोज साठवले जाते (मुख्यतः यकृत आणि मांसपेशीमध्ये). नंतर, जेव्हा आपणास ऊर्जा आवश्यक असते, अग्न्याशय कमी इन्सुलीन सोडतो, आणि शरीर साठवलेल्या ग्लूकोज वापरण्यास सुरुवात करतो.
            </p>
          </section>

          <section id="insulin-works" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">इन्सुलीन कसे काम करते</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              इन्सुलीन रक्त शर्करा नियंत्रण करण्याच्या प्रक्रियेत महत्त्वपूर्ण भूमिका निभाते:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">१. संकेत पाठवणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">जेव्हा रक्त शर्करा वाढते, अग्न्याशय हे संकेत स्वीकारतो.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">२. इन्सुलीन सोडणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">अग्न्याशय इन्सुलीन हार्मोन सोडतो रक्तप्रवाहात.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">३. दरवाजे उघडणे</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">इन्सुलीन कोशिकांना रक्तातून ग्लूकोज घेण्यास सांगतो.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">४. ऊर्जा वापर किंवा संचय</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">ग्लूकोज ऊर्जेसाठी वापरला जातो किंवा भविष्यासाठी साठवला जातो.</p>
              </div>
            </div>
            <MedicalTip type="tip" title="टिप">
              इन्सुलीन शरीरचा एक महत्त्वपूर्ण हार्मोन आहे. मधुमेहात, या प्रक्रिया व्यथित असते, ज्यामुळे रक्त शर्करा नियंत्रणात आत नाही.
            </MedicalTip>
          </section>

          <section id="blood-sugar" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">रक्त शर्करा वाढते कसे</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              मधुमेहात, रक्त शर्करा स्तर विविध कारणांसाठी वाढू शकते:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">अपूर्ण इन्सुलीन</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">अग्न्याशय पर्याप्त इन्सुलीन तयार करत नाही.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">इन्सुलीन प्रतिरोध</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">कोशिका इन्सुलीनचे ठीकच प्रतिसाद देत नाहीत.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">अधिक खाना</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">जास्त कार्बोहायड्रेट्स खाल्यास रक्त शर्करा वाढते.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-emerald-600">•</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">व्यायाम न करणे</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">व्यायाम ग्लूकोज वापरण्यात मदत करतो.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="difference" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">सामान्य व्यक्ती आणि मधुमेह रोगी</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">बाब</th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">सामान्य व्यक्ती</th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">मधुमेह रोगी</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">रक्त शर्करा नियंत्रण</td>
                    <td className="px-4 py-3">योग्य ऑटोमॅटिक</td>
                    <td className="px-4 py-3">व्यथित - उच्च स्तर</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">इन्सुलीन उत्पादन</td>
                    <td className="px-4 py-3">पर्याप्त</td>
                    <td className="px-4 py-3">कमी किंवा अकार्यक्षम</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3">ऊर्जा स्तर</td>
                    <td className="px-4 py-3">स्थिर</td>
                    <td className="px-4 py-3">अस्थिर - थकवा</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">उपचार आवश्यक</td>
                    <td className="px-4 py-3">नाही</td>
                    <td className="px-4 py-3">हो - औषध/इंजेक्शन</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="long-term" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">दीर्घकालीन परिणाम</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              जर मधुमेह व्यवस्थापित न केलेला असेल, तर दीर्घकालीन जटिलतांचा खतरा असतो:
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
                <h4 className="font-semibold text-red-900 dark:text-red-200">हृदय रोग</h4>
                <p className="text-sm text-red-800 dark:text-red-300 mt-1">रक्त वाहिन्यांचे नुकसान होऊ शकते.</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200">किडनी रोग</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">किडनीचे कार्य व्यथित होऊ शकते.</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
                <h4 className="font-semibold text-amber-900 dark:text-amber-200">दृष्टि समस्या</h4>
                <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">डायबिटीक रेटिनोपॅथी होऊ शकते.</p>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
                <h4 className="font-semibold text-purple-900 dark:text-purple-200">पाद समस्या</h4>
                <p className="text-sm text-purple-800 dark:text-purple-300 mt-1">तंत्रिका नुकसान आणि संक्रमण.</p>
              </div>
            </div>
            <MedicalTip type="warning" title="महत्त्वाचे">
              योग्य व्यवस्थापन या जटिलतांचे खतरा कमी करू शकते. नियमित रक्त शर्करा तपासणी आणि डॉक्टरांचा सल्ला आवश्यक आहे.
            </MedicalTip>
          </section>

          <RelatedLinks
            title="संबंधित मधुमेह विषय"
            description="या विषयानंतर या संबंधित पानांवरून पुढे वाचा."
            links={[
              {
                href: "/diabetes/types",
                title: "मधुमेहचे प्रकार",
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
              जरी मधुमेह एक गंभीर स्थिती आहे, परंतु काही उपाय प्रतिबंध किंवा विलंबित करण्यात मदत करू शकते:
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ स्वस्थ वजन राखा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">मोटापा मधुमेहाचा मुख्य जोखीम घटक आहे.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ नियमित व्यायाम करा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">दिवसातून कमीतकमी 30 मिनिट व्यायाम करा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ स्वस्थ आहार</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">संपूर्ण धान्य, फळे आणि सब्जी खा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ चिनी कमी करा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">शर्करायुक्त पेय आणि खाद्य पदार्थ कमी करा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ तनाव कमी करा</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">ध्यान आणि विश्रांती यांचा अभ्यास करा.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4">
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">✓ पुरेशी झोप</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1">रातमध्ये 7-8 तास झोप घ्या.</p>
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
              मधुमेहचे प्रकार →
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


