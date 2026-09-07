import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Droplets, Sun, CheckCircle2, AlertCircle, Sprout } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "मायक्रोग्रीन्स म्हणजे काय? घरी कसे वाढवावे?",
  description:
    "मायक्रोग्रीन्स म्हणजे काय, ती घरच्या घरी कशी वाढवावीत, सुरक्षितपणे कशी हाताळावीत आणि आहारात कशी वापरावीत याचे सोप्या मराठीत मार्गदर्शन.",
  keywords: [
    "मायक्रोग्रीन्स",
    "अंकुर",
    "घरच्या घरी बागकाम",
    "पोषण",
    "आरोग्यदायी अन्न",
    "मधुमेह",
  ],
  openGraph: {
    title: "मायक्रोग्रीन्स म्हणजे काय? घरी कसे वाढवावे?",
    description: "मायक्रोग्रीन्स घरच्या घरी कशी वाढवावीत, सुरक्षितपणे हाताळावीत आणि आहारात वापरावीत याची माहिती.",
    url: "/microgreens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मायक्रोग्रीन्स म्हणजे काय? घरी कसे वाढवावे?",
    description: "मायक्रोग्रीन्स घरच्या घरी कशी वाढवावीत, सुरक्षितपणे हाताळावीत आणि आहारात वापरावीत याची माहिती.",
  },
  alternates: { canonical: "/microgreens" },
};

export default function MicrogreensPage() {
  const benefits = [
    { icon: Leaf, title: "जीवनसत्त्वे", desc: "प्रकारानुसार A, C, E आणि K जीवनसत्त्वे" },
    { icon: Droplets, title: "खनिजे", desc: "प्रकारानुसार पोटॅशियम, लोह, कॅल्शियम आणि जस्त" },
    { icon: Sun, title: "वनस्पतीजन्य घटक", desc: "कॅरोटिनॉइड्स आणि इतर जैवसक्रिय घटक" },
    { icon: CheckCircle2, title: "जेवणातील भर", desc: "चव, रंग आणि कुरकुरीतपणा वाढवतात" },
    { icon: Sprout, title: "ताजी चव", desc: "स्वच्छ धुऊन सॅलड किंवा जेवणात वापरता येतात" },
    { icon: AlertCircle, title: "लवकर कापणी", desc: "अनेक प्रकार ७ ते २१ दिवसांत तयार होतात" },
  ];

  const microgreensTypes = [
    {
      emoji: "🌱",
      name: "मटकी",
      difficulty: "सहज",
      harvestDays: "७-८",
      taste: "सौम्य, किंचित कडवट",
      nutrients: "प्रथिने, B समूहातील जीवनसत्त्वे",
    },
    {
      emoji: "🌱",
      name: "नाचणी",
      difficulty: "सहज",
      harvestDays: "१०-१२",
      taste: "सौम्य, किंचित गोडसर",
      nutrients: "कॅल्शियम, लोह",
    },
    {
      emoji: "🌱",
      name: "मूग",
      difficulty: "खूप सोपे",
      harvestDays: "७-९",
      taste: "मऊ, किंचित गोडसर",
      nutrients: "प्रथिने, फायबर",
    },
    {
      emoji: "🌱",
      name: "मेथी",
      difficulty: "मध्यम",
      harvestDays: "१०-१३",
      taste: "किंचित कडवट, तिखटसर",
      nutrients: "लोह, फायबर, अँटिऑक्सिडंट्स",
    },
    {
      emoji: "🌱",
      name: "सूर्यफूल",
      difficulty: "सहज",
      harvestDays: "८-१०",
      taste: "मऊ, सौम्य",
      nutrients: "जीवनसत्त्व E, सेलेनियम",
    },
    {
      emoji: "🌱",
      name: "वाटाणा",
      difficulty: "सहज",
      harvestDays: "९-११",
      taste: "गोडसर, मऊ",
      nutrients: "प्रथिने, जीवनसत्त्व A",
    },
    {
      emoji: "🌱",
      name: "मोहरी",
      difficulty: "मध्यम",
      harvestDays: "१२-१४",
      taste: "कडवट, तिखटसर",
      nutrients: "अँटिऑक्सिडंट्स, जीवनसत्त्व C",
    },
    {
      emoji: "🌱",
      name: "ब्रोकली",
      difficulty: "मध्यम",
      harvestDays: "१०-१२",
      taste: "सौम्य",
      nutrients: "सल्फोराफेन, जीवनसत्त्व C",
    },
  ];

  const steps = [
    { num: "१", title: "योग्य बियाणे निवडा", desc: "खाद्यपिकांसाठी योग्य आणि रासायनिक प्रक्रिया न केलेले बियाणे घ्या" },
    { num: "२", title: "ट्रे स्वच्छ करा", desc: "पाणी निचरा होण्यासाठी छिद्रे असलेली स्वच्छ, अन्नासाठी सुरक्षित ट्रे वापरा" },
    { num: "३", title: "वाढीचे माध्यम भरा", desc: "ट्रेमध्ये १ ते २ इंच स्वच्छ कोकोपीट किंवा खाद्यपिकांसाठी योग्य माध्यम भरा" },
    { num: "४", title: "बियाणे पेरा", desc: "बियाणे समान अंतरावर पसरवा आणि हलक्या हाताने दाबा" },
    { num: "५", title: "ओलावा टिकवा", desc: "फवारणीने आवश्यक तेवढे पाणी द्या; पाणी साचू देऊ नका" },
    { num: "६", title: "प्रकाश आणि हवा द्या", desc: "अप्रत्यक्ष सूर्यप्रकाश आणि खेळती हवा मिळेल अशा ठिकाणी ट्रे ठेवा" },
    { num: "७", title: "स्वच्छपणे कापणी करा", desc: "प्रकार तयार झाल्यावर स्वच्छ कात्रीने माध्यमाच्या थोडे वरून पाने कापा" },
  ];

  const eatingWays = [
    { icon: "🥗", title: "सॅलड", desc: "स्वच्छ धुऊन कच्च्या भाज्यांत मिसळा" },
    { icon: "🍞", title: "सँडविच", desc: "सँडविचच्या भरावात थोडे घाला" },
    { icon: "🍳", title: "पोहे", desc: "वाढताना वरून थोडे घाला" },
    { icon: "🍲", title: "उपमा", desc: "गॅस बंद केल्यानंतर हलक्या हाताने मिसळा" },
    { icon: "🍛", title: "डाळ", desc: "वाढताना डाळीवर थोडे घाला" },
    { icon: "🥤", title: "स्मूदी", desc: "योग्य प्रकार फळे किंवा दह्यासोबत मिसळा" },
    { icon: "🫓", title: "पोळी किंवा भाकरी", desc: "भाजीसोबत किंवा भरावात वापरा" },
    { icon: "🥛", title: "दही", desc: "स्वच्छ धुऊन दह्यात मिसळा" },
  ];

  const tips = [
    { icon: "🧼", title: "हात स्वच्छ धुवा", desc: "पेरणी, कापणी आणि खाण्यापूर्वी हात स्वच्छ धुवा" },
    { icon: "✓", title: "सुरक्षित बियाणे", desc: "विश्वसनीय विक्रेत्याकडून रासायनिक प्रक्रिया न केलेले बियाणे घ्या" },
    { icon: "💧", title: "पिण्यायोग्य पाणी", desc: "भिजवणे, फवारणी आणि धुण्यासाठी स्वच्छ पिण्यायोग्य पाणी वापरा" },
    { icon: "⚠️", title: "पाणी साचू देऊ नका", desc: "अतिरिक्त ओलावा आणि हवा न खेळल्यास बुरशी किंवा कुज वाढू शकते" },
    { icon: "✂️", title: "स्वच्छ कात्री वापरा", desc: "पाने तयार झाल्यावर स्वच्छ कात्रीने माध्यमाला स्पर्श न करता कापा" },
  ];

  const faqItems = [
    {
      q: "मायक्रोग्रीन्स म्हणजे काय?",
      a: "मायक्रोग्रीन्स म्हणजे खाण्यायोग्य भाज्या किंवा औषधी वनस्पतींची अगदी कोवळी रोपे. बी उगवल्यानंतर पहिली पाने विकसित झाल्यावर आणि बेबी लीफ अवस्थेपूर्वी त्यांची कापणी केली जाते.",
    },
    {
      q: "स्प्राउट्स आणि मायक्रोग्रीन्समध्ये काय फरक आहे?",
      a: "स्प्राउट्स प्रामुख्याने मातीशिवाय ओलसर वातावरणात उगवतात आणि बी, मुळे व कोंबासह खाल्ले जातात. मायक्रोग्रीन्स माध्यमात किंवा जलपद्धतीने वाढवून मुळांच्या वरून कापली जातात.",
    },
    {
      q: "बेबी लीव्हज आणि मायक्रोग्रीन्समध्ये काय फरक?",
      a: "बेबी लीव्हजची कापणी मायक्रोग्रीन्सपेक्षा उशिरा केली जाते आणि त्यांची पाने मोठी असतात. मायक्रोग्रीन्सची कापणी पहिली कोवळी पाने दिसल्यानंतर केली जाते.",
    },
    {
      q: "मायक्रोग्रीन्स घरी वाढवायला किती काळ लागते?",
      a: "प्रकार, तापमान आणि प्रकाशानुसार साधारण ७ ते २१ दिवस लागू शकतात. बियाण्याच्या पाकिटावरील कापणीची सूचना तपासा.",
    },
    {
      q: "कोणती मायक्रोग्रीन्स सुरुवातीसाठी सर्वोत्तम आहे?",
      a: "सुरुवातीला मूग, मटकी, मेथी किंवा मोहरीसारख्या सहज उगवणाऱ्या प्रकारांपासून सुरुवात करता येते. एका छोट्या ट्रेमध्ये आधी चाचणी घ्या.",
    },
    {
      q: "मायक्रोग्रीन्स कच्च्या खाता येतात?",
      a: "अनेक मायक्रोग्रीन्स कच्च्या खाता येतात. खाण्यापूर्वी त्या स्वच्छ वाहत्या पाण्याखाली धुवा; साबण किंवा ब्लीच वापरू नका.",
    },
    {
      q: "मायक्रोग्रीन्ससाठी कोणते पाणी वापरावे?",
      a: "भिजवणे, फवारणी आणि धुण्यासाठी पिण्यायोग्य स्वच्छ पाणी वापरा. पाण्याच्या गुणवत्तेबाबत शंका असल्यास सुरक्षित पर्याय निवडा.",
    },
    {
      q: "मायक्रोग्रीन्स किती काळ संग्रहित होऊ शकतात?",
      a: "कापणीनंतर मायक्रोग्रीन्स पूर्ण कोरड्या करून स्वच्छ डब्यात फ्रिजमध्ये ठेवा आणि शक्य तितक्या लवकर वापरा. चिकटपणा, दुर्गंधी किंवा कुज दिसल्यास त्या खाऊ नका.",
    },
    {
      q: "जर मायक्रोग्रीन्स सडून गेल्या तर?",
      a: "जास्त पाणी, कमी हवा किंवा अस्वच्छ ट्रेमुळे कुज अथवा बुरशी होऊ शकते. बुरशी, दुर्गंधी किंवा चिकटपणा दिसल्यास प्रभावित ट्रेमधील मायक्रोग्रीन्स खाऊ नका; ट्रे रिकामी करून नीट स्वच्छ करा.",
    },
    {
      q: "मायक्रोग्रीन्स मधुमेहासाठी फायदेशीर आहेत?",
      a: "मायक्रोग्रीन्स संतुलित जेवणात भाजीपाला म्हणून थोड्या प्रमाणात वापरता येतात. मात्र त्या मधुमेहाचा उपचार नाहीत आणि औषधे किंवा डॉक्टरांनी दिलेल्या आहारयोजनेची जागा घेऊ शकत नाहीत.",
    },
    {
      q: "मायक्रोग्रीन्स दररोज खाऊ शकतात?",
      a: "बहुतेक लोक विविध भाज्यांसोबत मर्यादित प्रमाणात मायक्रोग्रीन्स खाऊ शकतात. ॲलर्जी, विशेष आजार किंवा औषधोपचार असल्यास डॉक्टर किंवा आहारतज्ज्ञांचा सल्ला घ्या.",
    },
    {
      q: "मायक्रोग्रीन्स साठी कोणती माती वापरावी?",
      a: "स्वच्छ कोकोपीट किंवा खाद्यपिकांसाठी तयार केलेले निर्जंतुक वाढीचे माध्यम वापरा. दूषित होण्याचा धोका असलेली सामान्य बागेची माती टाळा.",
    },
    {
      q: "कोणत्या प्रकारचे ट्रे वापरावे?",
      a: "स्वच्छ, उथळ आणि अन्नासाठी सुरक्षित ट्रे वापरा. पाणी निचरा होण्यासाठी छिद्रे असणे आणि प्रत्येक वापरानंतर ट्रे नीट स्वच्छ करणे महत्त्वाचे आहे.",
    },
    {
      q: "मायक्रोग्रीन्स कापताना काय काळजी घ्यावी?",
      a: "स्वच्छ, धारदार कात्रीने वाढीच्या माध्यमाच्या थोडे वरून कापा. कापताना माती किंवा कोकोपीट पानांना लागू देऊ नका.",
    },
    {
      q: "एकाच ट्रेवर दोनदा वाढवता येते?",
      a: "काही प्रकार पुन्हा थोडे वाढू शकतात; मात्र बहुतेक मायक्रोग्रीन्सची दुसरी कापणी कमी आणि अनियमित असते. सुरक्षित व चांगल्या उत्पादनासाठी नवीन ट्रे सुरू करणे सोपे ठरते.",
    },
    {
      q: "मायक्रोग्रीन्स सायंकाळी कापावेत?",
      a: "कापणीसाठी एकच अनिवार्य वेळ नाही. पाने कोरडी असताना आणि स्वच्छ हात व साधने वापरून कापणी करणे अधिक महत्त्वाचे आहे.",
    },
    {
      q: "मायक्रोग्रीन्स कोणत्या तापमानात वाढतात?",
      a: "अनेक प्रकार साधारण १५ ते २५ अंश सेल्सिअस तापमानात वाढतात; योग्य तापमान प्रकारानुसार बदलते. बियाण्यावरील सूचना पाळा आणि अतिउष्णता टाळा.",
    },
    {
      q: "मायक्रोग्रीन्स जास्त काळ साठवता येतात का?",
      a: "ताज्या मायक्रोग्रीन्सची चव आणि पोत चांगली राहते. गोठवल्यास किंवा वाळवल्यास पोत बदलू शकतो, म्हणून गरजेपुरतीच कापणी करणे योग्य.",
    },
    {
      q: "दुकानातील कोणतेही बियाणे वापरता येते का?",
      a: "मायक्रोग्रीन्स किंवा अंकुरांसाठी विकलेले, रासायनिक प्रक्रिया न केलेले आणि खाण्यायोग्य पिकाचे बियाणे वापरा. प्रक्रिया केलेले किंवा ओळख नसलेले बियाणे वापरू नका.",
    },
    {
      q: "मायक्रोग्रीन्स व्यावसायिकरित्या वाढवता येतात?",
      a: "हो, छोट्या प्रमाणात व्यवसाय सुरू करता येतो. मात्र मागणी, उत्पादनखर्च, स्वच्छता, पॅकिंग, शीतसाखळी आणि लागू असलेले अन्नसुरक्षा नियम तपासून आधी मर्यादित ग्राहकांसोबत चाचणी घ्या.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मायक्रोग्रीन्स" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मायक्रोग्रीन्स"
          title="मायक्रोग्रीन्स म्हणजे काय आणि घरी कसे वाढवावे?"
          description="मायक्रोग्रीन्स म्हणजे खाण्यायोग्य वनस्पतींची अगदी कोवळी रोपे. योग्य बियाणे, स्वच्छ ट्रे, पिण्यायोग्य पाणी आणि सुरक्षित हाताळणी वापरून ती घरच्या घरी वाढवता येतात."
        />
      </div>

      {/* Section 1: What are Microgreens? */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मायक्रोग्रीन्स म्हणजे काय?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          मायक्रोग्रीन्स म्हणजे खाण्यायोग्य भाज्या किंवा औषधी वनस्पतींची कोवळी रोपे. बी उगवल्यानंतर पहिली पाने विकसित झाली की त्यांची कापणी केली जाते. त्यांचा रंग, चव आणि पोषकघटकांचा प्रकार पिकानुसार बदलतो.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">स्प्राउट्स</h4>
            <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-2">
              <li>✓ मातीशिवाय ओलसर वातावरणात वाढवले जातात</li>
              <li>✓ बी, मुळे आणि कोंबासह खाल्ले जातात</li>
              <li>✓ साधारण काही दिवसांत तयार होतात</li>
              <li>✓ कच्चे असल्याने स्वच्छतेची विशेष काळजी आवश्यक</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">मायक्रोग्रीन्स</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-2">
              <li>✓ माती, कोकोपीट किंवा जलपद्धतीत वाढवले जातात</li>
              <li>✓ मुळांच्या वरून कापून खाल्ले जातात</li>
              <li>✓ साधारण ७ ते २१ दिवसांत तयार होतात</li>
              <li>✓ पोषकघटकांचे प्रमाण प्रकारानुसार बदलते</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">बेबी लीव्हज</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-300 space-y-2">
              <li>✓ मायक्रोग्रीन्सपेक्षा पुढची वाढीची अवस्था</li>
              <li>✓ मोठी पाने आणि कोवळे देठ वापरले जातात</li>
              <li>✓ कापणीस तुलनेने अधिक वेळ लागतो</li>
              <li>✓ पोषकघटकांचे प्रमाण पिकानुसार बदलते</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मायक्रोग्रीन्सचे फायदे
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: For Diabetes */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मधुमेह असताना मायक्रोग्रीन्स कशी वापरावीत?
        </h2>
        <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-8 shadow-sm">
          <p className="text-amber-900 dark:text-amber-200 mb-4 leading-relaxed">
            मधुमेह असलेल्या व्यक्ती मायक्रोग्रीन्सचा वापर संतुलित जेवणातील एका छोट्या भाजीच्या भागाप्रमाणे करू शकतात:
          </p>
          <ul className="space-y-3 text-amber-800 dark:text-amber-300">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>प्रमाण महत्त्वाचे:</strong> प्रकार आणि खाल्लेल्या प्रमाणानुसार पोषकघटक बदलतात</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>संपूर्ण जेवण पहा:</strong> रक्तातील साखरेवर परिणाम हा पूर्ण जेवण आणि प्रमाणावर अवलंबून असतो</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>संतुलित ताट:</strong> प्रथिने, इतर भाज्या आणि योग्य प्रमाणातील धान्यासोबत वापरा</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>उपचार नाही:</strong> मायक्रोग्रीन्स औषधे किंवा डॉक्टरांनी दिलेल्या आहारयोजनेची जागा घेत नाहीत</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-6 shadow-sm flex gap-4">
          <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-orange-900 dark:text-orange-200 mb-2">महत्त्वाचे:</p>
            <p className="text-sm text-orange-800 dark:text-orange-300">
              मायक्रोग्रीन्स मधुमेहावर उपचार करत नाहीत. औषधे सुरू असतील किंवा आहारात मोठा बदल करायचा असेल तर डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञांचा सल्ला घ्या.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How to Grow */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          घरच्या घरी कसे वाढवावे?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {step.num}
              </div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Best Varieties */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          सुरुवातीसाठी सोपे प्रकार
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {microgreensTypes.map((type, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{type.emoji}</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">
                {type.name}
              </h4>
              <div className="space-y-2 text-xs text-emerald-800 dark:text-emerald-300">
                <p><strong>अवघडपणा:</strong> {type.difficulty}</p>
                <p><strong>दिवस:</strong> {type.harvestDays}</p>
                <p><strong>चव:</strong> {type.taste}</p>
                <p><strong>पोषण:</strong> {type.nutrients}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: How to Eat */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मायक्रोग्रीन्स कसे खावेत?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {eatingWays.map((way, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-950/30 p-4 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="text-3xl mb-2">{way.icon}</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 text-sm mb-1">
                {way.title}
              </h4>
              <p className="text-xs text-teal-800 dark:text-teal-300">
                {way.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Tips */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          महत्त्वाच्या सूचना
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4 shadow-sm"
            >
              <div className="text-2xl mb-2">{tip.icon}</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 text-sm mb-1">
                {tip.title}
              </h4>
              <p className="text-xs text-blue-800 dark:text-blue-300">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          वारंवार विचारले जाणारे प्रश्न
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <details
              key={idx}
              className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <summary className="font-bold text-emerald-900 dark:text-emerald-100 flex items-center justify-between">
                {item.q}
                <span className="ml-2 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <CTA
        title="आजपासूनच मायक्रोग्रीन्स वाढवणे सुरू करा"
        description="स्वच्छ बियाणे आणि छोट्या ट्रेपासून सुरुवात करा. आधी एका प्रकाराची चाचणी घ्या आणि स्वच्छतेच्या सूचना पाळा."
      />

      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          संबंधित मार्गदर्शन
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/nutrition" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">पोषण आणि आहार</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">संतुलित ताट, फायबर आणि रोजच्या जेवणातील योग्य पर्याय समजून घ्या.</p>
          </Link>
          <Link href="/diabetes/faq" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">मधुमेह FAQ</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">मधुमेह, आहार, आणि दैनंदिन काळजीबद्दल सामान्य प्रश्नांची उत्तरे वाचा.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-6 shadow-sm">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-2">वैद्यकीय अस्वीकरण</h3>
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                मायक्रोग्रीन्स संतुलित आहाराचा भाग असू शकतात; मात्र त्या मधुमेह, हृदयरोग किंवा इतर आजारांवरील उपचार नाहीत. आहारात मोठा बदल करण्यापूर्वी डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञांचा सल्ला घ्या. ही माहिती केवळ सर्वसाधारण शैक्षणिक उद्देशासाठी आहे.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


