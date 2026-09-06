import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Droplets, Sun, CheckCircle2, AlertCircle, Sprout } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "मायक्रोग्रीन्स म्हणजे काय? घरी कसे वाढवावे?",
  description:
    "मायक्रोग्रीन्स म्हणजे काय, घरी कसे वाढवावे, आणि संतुलित आहारात कसे वापरावे - विस्तृत मार्गदर्शन.",
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
    description: "मायक्रोग्रीन्स घरच्या घरी कसे वाढवावे आणि आहारात कसे वापरावे.",
    url: "/microgreens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मायक्रोग्रीन्स म्हणजे काय? घरी कसे वाढवावे?",
    description: "मायक्रोग्रीन्स घरच्या घरी कसे वाढवावे आणि आहारात कसे वापरावे.",
  },
  alternates: { canonical: "/microgreens" },
};

export default function MicrogreensPage() {
  const benefits = [
    { icon: Leaf, title: "व्हिटामिन", desc: "A, C, E, K आणि B विटामिन" },
    { icon: Droplets, title: "खनिज", desc: "पोटॅशियम, लोह, कॅल्शियम, जस्त" },
    { icon: Sun, title: "अँटिऑक्सिडंट्स", desc: "कोशिकांचे संरक्षण करते" },
    { icon: CheckCircle2, title: "फायबर", desc: "पाचन आणि आंत स्वास्थ्य" },
    { icon: Sprout, title: "ताजी स्वाद", desc: "कच्चे खाऊ शकतात" },
    { icon: AlertCircle, title: "सहज वाढवणे", desc: "घरात फक्त २ आठवडेत" },
  ];

  const microgreensTypes = [
    {
      emoji: "🌱",
      name: "मटकी",
      difficulty: "सहज",
      harvestDays: "७-८",
      taste: "हलकी, थोडी कडवी",
      nutrients: "प्रोटीन, B विटामिन",
    },
    {
      emoji: "🌱",
      name: "नाचणी",
      difficulty: "सहज",
      harvestDays: "१०-१२",
      taste: "हलकी, मधुर",
      nutrients: "कॅल्शियम, लोह",
    },
    {
      emoji: "🌱",
      name: "मूग",
      difficulty: "अतिसहज",
      harvestDays: "७-९",
      taste: "कोमल, मधुर",
      nutrients: "प्रोटीन, फायबर",
    },
    {
      emoji: "🌱",
      name: "मेथी",
      difficulty: "मध्यम",
      harvestDays: "१०-१३",
      taste: "थोडी कडवी, मसालेदार",
      nutrients: "लोह, फायबर, अँटिऑक्सिडंट्स",
    },
    {
      emoji: "🌱",
      name: "सूर्यफूल",
      difficulty: "सहज",
      harvestDays: "८-१०",
      taste: "कोमल, तटस्थ",
      nutrients: "विटामिन E, सेलेनियम",
    },
    {
      emoji: "🌱",
      name: "वाटाणा",
      difficulty: "सहज",
      harvestDays: "९-११",
      taste: "गोड, कोमल",
      nutrients: "प्रोटीन, A विटामिन",
    },
    {
      emoji: "🌱",
      name: "मोहरी",
      difficulty: "मध्यम",
      harvestDays: "१२-१४",
      taste: "कडवी, तीक्ष्ण",
      nutrients: "अँटिऑक्सिडंट्स, C विटामिन",
    },
    {
      emoji: "🌱",
      name: "ब्रोकली",
      difficulty: "मध्यम",
      harvestDays: "१०-१२",
      taste: "हलकी, साधी",
      nutrients: "सल्फोराफेन, C विटामिन",
    },
  ];

  const steps = [
    { num: "१", title: "बीज निवडा", desc: "उच्च गुणवत्तेचे, निरोगी बीज घ्या" },
    { num: "२", title: "ट्रे तयार करा", desc: "छिद्रे असलेली कोणतीही छोटी ट्रे वापरा" },
    { num: "३", title: "कोकोपीट घाला", desc: "१-२ इंच कोकोपीट किंवा मिट्टी लावा" },
    { num: "४", title: "बीज पसरा", desc: "समान रीतीने बीज पसरून हल्के दाबा" },
    { num: "५", title: "पाणी द्या", desc: "रोज हल्के हाताने पाणी द्या" },
    { num: "६", title: "धूप द्या", desc: "दिवसभर अप्रत्यक्ष सूर्यप्रकाश द्या" },
    { num: "७", title: "कापा आणि खा", desc: "२-३ आठवडेत कापून खावयाचे आहे" },
  ];

  const eatingWays = [
    { icon: "🥗", title: "सलाद", desc: "कच्च्या भाज्या सह मिक्स करा" },
    { icon: "🍞", title: "सँडविच", desc: "ब्रेडवर पसरून वापरा" },
    { icon: "🍳", title: "पोहा", desc: "पोह्यावर वरती टाका" },
    { icon: "🍲", title: "उपमा", desc: "शेवटी हलक्या हातून मिक्स करा" },
    { icon: "🍛", title: "दाल", desc: "दालच्या वरती सजवा" },
    { icon: "🥤", title: "स्मूदी", desc: "फळ आणि दहीसह ब्लेंड करा" },
    { icon: "🫓", title: "रोटी", desc: "गरम रोटीच्या वरती घाला" },
    { icon: "🥛", title: "दही", desc: "दहीत मिश्रित करा" },
  ];

  const tips = [
    { icon: "🧼", title: "हाताचे धुलाई", desc: "नेहमी स्वच्छ हाताने हाताळा" },
    { icon: "✓", title: "स्वच्छ बीज", desc: "विश्वसनीय स्रोतातून बीज घ्या" },
    { icon: "💧", title: "स्वच्छ पाणी", desc: "शुद्ध पाणी वापरा" },
    { icon: "⚠️", title: "जलभराव न करा", desc: "जास्त पाणी सडपेशाचा कारण बनते" },
    { icon: "✂️", title: "योग्य वेळी कापा", desc: "पाने पुरेशी मजबूत होताच कापा" },
  ];

  const faqItems = [
    {
      q: "मायक्रोग्रीन्स म्हणजे काय?",
      a: "मायक्रोग्रीन्स हे अंकुरल्यानंतर २-३ आठवडेत कापली जाणारी कोवळी पाने आहेत. ही स्प्राउट्स आणि परिपक्व पत्तीमधील हरकत आहे.",
    },
    {
      q: "स्प्राउट्स आणि मायक्रोग्रीन्समध्ये काय फरक आहे?",
      a: "स्प्राउट्स: उघड्या पाण्यात वाढते, संपूर्ण बीज खाते. मायक्रोग्रीन्स: माती/कोकोपीट मध्ये वाढते, फक्त पाने खाते, अधिक पोषण.",
    },
    {
      q: "बेबी लीव्हज आणि मायक्रोग्रीन्समध्ये काय फरक?",
      a: "बेबी लीव्हज: संपूर्ण वनस्पती लहान असते, अधिक वेळ वाढवावे लागते. मायक्रोग्रीन्स: केवळ पाने, जलद वाढते.",
    },
    {
      q: "मायक्रोग्रीन्स घरी वाढवायला किती काळ लागते?",
      a: "बहुतांश प्रकारांसाठी २-३ आठवडे लागते. काही २ आठवडेत आणि काही अधिक वेळ लागू शकते.",
    },
    {
      q: "कोणती मायक्रोग्रीन्स सुरुवातीसाठी सर्वोत्तम आहे?",
      a: "मूग, मटकी, आणि सूर्यफूल सर्वोत्तम आहे. हे अतिसहज वाढतात आणि कमी गरज असते.",
    },
    {
      q: "मायक्रोग्रीन्स कच्च्या खाता येतात?",
      a: "हो, मायक्रोग्रीन्स कच्च्या खाता येतात. या हरकतीने अधिक पोषण मिळते.",
    },
    {
      q: "मायक्रोग्रीन्स कोणता पाणी वापरावा?",
      a: "शुद्ध पाणी वापरा. फिल्टर केलेले किंवा उपचारित पाणी योग्य आहे. क्लोरीन युक्त पाणी हलके प्रमाणात ठीक आहे.",
    },
    {
      q: "मायक्रोग्रीन्स किती काळ संग्रहित होऊ शकतात?",
      a: "ताजी मायक्रोग्रीन्स ३-५ दिवस रेफ्रिजरेटरमध्ये टिकते. उपयोग करण्यापूर्वी धुवा आणि सुकवा.",
    },
    {
      q: "जर मायक्रोग्रीन्स सडून गेल्या तर?",
      a: "अधिक पाणी, खराब हवा संचार, किंवा अपरिच्छन्नता हे कारण असू शकते. धुळी किंवा मोल्ड दिसल्यास संपूर्ण ट्रे फेकून द्या.",
    },
    {
      q: "मायक्रोग्रीन्स मधुमेहासाठी फायदेशीर आहेत?",
      a: "मायक्रोग्रीन्स उच्च फायबर, कमी कार्बोहायड्रेट असते आणि संतुलित आहाराचा भाग बनू शकते. परंतु ते औषध नाहीत.",
    },
    {
      q: "मायक्रोग्रीन्स दररोज खाऊ शकतात?",
      a: "हो, दररोज खाऊ शकतात. संतुलित आहारचा भाग म्हणून नियमित वापरला जाऊ शकतो.",
    },
    {
      q: "मायक्रोग्रीन्स साठी कोणती माती वापरावी?",
      a: "कोकोपीट, बीज बेड माती, किंवा सामान्य बाग मातीचा मिश्रण वापरा. मातीला वाळू मिश्रित करा.",
    },
    {
      q: "कोणत्या प्रकारचे ट्रे वापरावे?",
      a: "कोणतीही उथळ ट्रे योग्य आहे - प्लास्टिक ट्रे, मातीचे ट्रे, किंवा बेकिंग ट्रे. छिद्रे महत्त्वाची आहेत.",
    },
    {
      q: "मायक्रोग्रीन्स कापताना काय काळजी घ्यावी?",
      a: "तीक्ष्ण कैचीने मुळापासून २-३ इंच वर कापा. हलक्या हातने कापा जेणेकरून इतर पाने दुखापत होणार नाहीत.",
    },
    {
      q: "एकाच ट्रेवर दोनदा वाढवता येते?",
      a: "काही प्रकारांसाठी हो. कापल्यानंतर थोडा पाणी द्या, परंतु अधिकांशात दोन फसली मिळणार नाही.",
    },
    {
      q: "मायक्रोग्रीन्स सायंकाळी कापावेत?",
      a: "हो, सायंकाळी कापणे उत्तम आहे कारण पाने संपूर्ण दिवस सूर्यप्रकाश पेलते.",
    },
    {
      q: "मायक्रोग्रीन्स कोणत्या तापमानात वाढतात?",
      a: "अधिकांश १५-२५ डिग्री सेल्सियसमध्ये सर्वोत्तम वाढतात. अतिशय उष्ण किंवा थंड टाळा.",
    },
    {
      q: "मायक्रोग्रीन्स प्रिजर्व्ह करता येतात?",
      a: "ताजी मायक्रोग्रीन्स सर्वोत्तम आहेत. फ्रीजर किंवा ड्राय करणे कमी मूल्यवान बनवते.",
    },
    {
      q: "बेकृत स्टोरमधील बीज वापरता येतात?",
      a: "ते काही प्रमाणात कार्य करू शकतात, परंतु बागेरी किंवा कृषी स्टोरमधील विशेष बीज सर्वोत्तम आहेत.",
    },
    {
      q: "मायक्रोग्रीन्स व्यावसायिकरित्या वाढवता येतात?",
      a: "हो, हे छोटे व्यवसायाचा एक अच्छा पर्याय आहे. कमी जागा, जलद वाढ, मोठी मागणी.",
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
          description="मायक्रोग्रीन्स म्हणजे अंकुरल्यानंतर काही दिवसांत कापली जाणारी कोवळी पाने. ही जीवनसत्त्वे, खनिजे आणि अँटिऑक्सिडंट्सने समृद्ध असतात आणि संतुलित आहाराचा एक चांगला भाग बनू शकतात."
        />
      </div>

      {/* Section 1: What are Microgreens? */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मायक्रोग्रीन्स म्हणजे काय?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          मायक्रोग्रीन्स हे खूप लहान, सुस्वादु आणि पोषकतत्वांनी भरलेले वनस्पतीचे भाग आहेत. हे अंकुरल्यानंतर २-३ आठवडेत कापली जाणारी पहिली कोवळी पाने आहेत. प्रत्येक मायक्रोग्रीन हे जीवनसत्त्व, खनिज आणि अँटिऑक्सिडंट्सचा एक छोटा पॅकेज आहे.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">स्प्राउट्स</h4>
            <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-2">
              <li>✓ उघड्या पाण्यात वाढते</li>
              <li>✓ संपूर्ण बीज खाते</li>
              <li>✓ ५-७ दिवस</li>
              <li>✓ कमी पोषण</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">मायक्रोग्रीन्स</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-2">
              <li>✓ माती/कोकोपीट मध्ये वाढते</li>
              <li>✓ फक्त पाने खाते</li>
              <li>✓ १०-१४ दिवस</li>
              <li>✓ अधिक पोषण</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">बेबी लीव्हज</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-300 space-y-2">
              <li>✓ संपूर्ण वनस्पती लहान</li>
              <li>✓ पत्ते आणि तने</li>
              <li>✓ २०-३० दिवस</li>
              <li>✓ सर्वोच्च पोषण</li>
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
          मधुमेहासाठी मायक्रोग्रीन्स
        </h2>
        <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-8 shadow-sm">
          <p className="text-amber-900 dark:text-amber-200 mb-4 leading-relaxed">
            मायक्रोग्रीन्स संतुलित आहाराचा एक उत्तम भाग असू शकतात, विशेषतः मधुमेहाग्रस्तांसाठी:
          </p>
          <ul className="space-y-3 text-amber-800 dark:text-amber-300">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>उच्च फायबर:</strong> कमी कार्बोहायड्रेट, अधिक फायबर रक्त शर्करा नियंत्रणास मदत करते</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>कमी कैलोरी:</strong> संतुलित वजन व्यवस्थापनास मदत</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>संतुलित आहार:</strong> प्रोटीन, भाज्या, आणि पूर्ण अनाजांसह वापरा</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-600" />
              <span><strong>पूरक, उपचार नाही:</strong> मायक्रोग्रीन्स औषध नाहीत, परंतु स्वास्थ्यकर खाणे समर्थन करतात</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-6 shadow-sm flex gap-4">
          <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-orange-900 dark:text-orange-200 mb-2">महत्त्वाचे:</p>
            <p className="text-sm text-orange-800 dark:text-orange-300">
              मायक्रोग्रीन्स मधुमेहाचे उपचार किंवा प्रतिबंध करत नाहीत. नेहमी आपल्या डॉक्टरांचा सल्ला घ्या.
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
          सुरुवातीसाठी सर्वोत्तम मायक्रोग्रीन्स
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
                <p><strong>कठिनता:</strong> {type.difficulty}</p>
                <p><strong>दिवस:</strong> {type.harvestDays}</p>
                <p><strong>स्वाद:</strong> {type.taste}</p>
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
        description="लहान जागा, जलद वाढ, मोठे पोषण. आपल्या घरातून आरोग्यदायी अन्न उगवा."
      />

      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          संबंधित मार्गदर्शन
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/nutrition" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">पोषण आणि आहार</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">संतुलित प्लेट, फायबर, आणि रोजच्या जेवणात चांगले पर्याय शोधा.</p>
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
                मायक्रोग्रीन्स एक आरोग्यदायी आहाराचा भाग आहेत. परंतु ते मधुमेह, हृदय रोग किंवा इतर आजारांचे उपचार किंवा प्रतिबंध करत नाहीत. कोणताही आहार बदल करण्यापूर्वी आपल्या डॉक्टरांचा सल्ला घ्या. हे माहिती केवळ शैक्षणिक उद्देशासाठी आहे.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


