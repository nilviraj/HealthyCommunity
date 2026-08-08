import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Heart, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import NutritionFAQ from "@/components/NutritionFAQ";
import HealthyHabitsChecklist from "@/components/HealthyHabitsChecklist";
import GroceryList from "@/components/GroceryList";
import { AvoidFoodsGrid } from "@/components/NutritionCard";

export const metadata: Metadata = {
  title: "पोषण - संतुलित आहाराचे मार्गदर्शन",
  description:
    "पोषण म्हणजे काय, संतुलित आहार, प्रोटीन, कार्बोहायड्रेट, फायबर, आरोग्यदायी चरबी, आणि महाराष्ट्र संदर्भात आरोग्यदायी जीवनशैली.",
  keywords: [
    "पोषण",
    "संतुलित आहार",
    "पोषकद्रव्य",
    "आरोग्यदायी खाना",
    "महाराष्ट्र",
    "भारतीय आहार",
  ],
  openGraph: {
    title: "पोषण - संतुलित आहाराचे मार्गदर्शन",
    description: "योग्य पोषणाने आरोग्यदायी जीवन जिवा.",
    url: "/nutrition",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "पोषण - संतुलित आहाराचे मार्गदर्शन",
    description: "योग्य पोषणाने आरोग्यदायी जीवन जिवा.",
  },
  alternates: { canonical: "/nutrition" },
};

export default function NutritionPage() {
  const plateMethod = [
    { icon: "🥗", label: "५०% भाज्या", description: "विविध रंगांची भाज्या आणि पालक" },
    {
      icon: "🍛",
      label: "२५% प्रोटीन",
      description: "दाल, दही, अंडे, किंवा मांस",
    },
    {
      icon: "🌾",
      label: "२५% धान्य",
      description: "ज्वारी, बाजरी, गहू, भातजीरो",
    },
  ];

  const vegetarianProteins = [
    "दाल (तूर, मूग, मसूर, उडीद)",
    "तूरीची दाल (महाराष्ट्रात लोकप्रिय)",
    "छोले",
    "सोयाबीन",
    "दही आणि पनीर",
    "अंडे",
    "दुध",
    "मूंगफळी आणि काजू",
    "तिल आणि सूर्यफूल बीज",
  ];

  const nonVegetarianProteins = [
    "मुर्गीचे मांस",
    "मासे (वेंग्याचे, सार्डिन, मॅकेरल)",
    "अंडे",
    "दही",
    "दुध",
    "पनीर",
    "शेळी आणि बकरीचे मांस",
  ];

  const carbsComparison = [
    {
      type: "चांगले धान्य",
      foods: "ज्वारी, बाजरी, गहू, भातजीरो, दाल",
      benefits: "ऊर्जा हळूहळू, पोषकद्रव्य भरपूर",
    },
    {
      type: "उत्तम नसलेले धान्य",
      foods: "पांढरा चावल, मैदा, साखरयुक्त आहार",
      benefits: "रक्त शर्करा वेगाने वाढवते",
    },
  ];

  const healthyBreakfasts = [
    {
      name: "पोहा",
      description: "भाज्या सहित, कमी तेलात तयार, सकाळचा पारंपरिक पदार्थ",
      time: "15 मिनिट",
    },
    {
      name: "उपमा",
      description: "शेमाळा, भाज्या, आणि मूंगफळी सहित",
      time: "20 मिनिट",
    },
    {
      name: "इडली",
      description: "नारियळाची चटनी आणि सांभार सहित",
      time: "10 मिनिट",
    },
    {
      name: "डोसा",
      description: "संपूर्ण धान्य डोसा, भाज्या भरतीसह",
      time: "25 मिनिट",
    },
    {
      name: "मूंग चिल्ला",
      description: "प्रोटीन समृद्ध, भाज्या आणि दही सहित",
      time: "15 मिनिट",
    },
    {
      name: "दुध आणि ज्वारीचे भरकुळे",
      description: "संपूर्ण पोषण, महाराष्ट्रात परंपरागत",
      time: "10 मिनिट",
    },
  ];

  const healthyHabits = [
    "हळूहळू जेवा - कमीतकमी २०-३० मिनिटात",
    "चांगले चावून खा - पाचन सुधारा",
    "वेळेवर जेवा - नियमित व्यवस्था ठेवा",
    "जास्त पाणी प्या - दिवसभर ८-१० गिलास",
    "रोज चालणे - ३०-४५ मिनिट",
    "पूर्ण झोप - ७-८ तास रोज",
    "तणाव कमी करा - योग, ध्यान",
  ];

  const groceryList = {
    भाज्या: [
      "बीन्स",
      "ब्रोकली",
      "पालक",
      "गाजर",
      "टोमॅटो",
      "प्याज",
      "हिरवी शिमला",
      "भिंडी",
    ],
    प्रोटीन: [
      "दाल विविध प्रकार",
      "अंडे",
      "दही",
      "पनीर",
      "मूंगफळी",
      "काजू",
    ],
    धान्य: ["ज्वारी", "बाजरी", "गहू", "भातजीरो", "ओट्स"],
    बीज: ["तिल", "सूर्यफूल बीज", "बादाम", "अखरोट"],
    तेल: ["जैतून तेल", "नारियळ तेल", "सूर्यफूल तेल"],
  };

  const avoidFoods = [
    "तळलेले खाद्य पदार्थ",
    "अतिप्रक्रियात संसाधित खाना",
    "कोल्ड ड्रिंक्स आणि सोडा",
    "उच्च साखरयुक्त पदार्थ",
    "मैदेचे बेकरी उत्पादन",
  ];

  const ageNutrition = [
    {
      age: "बाळे (०-१ वर्ष)",
      nutrition: "स्तनाचे दुध किंवा फॉर्म्युला दुध, अन्नाचे हळूहळू सुरुवात",
    },
    {
      age: "लहान मुले (१-५ वर्ष)",
      nutrition: "दुध, दही, अंडे, दाल, फळ, भाज्या, मुलाविदा खिचडी",
    },
    {
      age: "मुले (६-१२ वर्ष)",
      nutrition: "संतुलित आहार, प्रोटीन, कॅल्शियम, लोह, वर्धकाची व्यायाम",
    },
    {
      age: "किशोरवयीन (१३-१९ वर्ष)",
      nutrition: "अतिरिक्त कॅलोरी, प्रोटीन, कॅल्शियम, लोह",
    },
    {
      age: "प्रौढ (२०-५९ वर्ष)",
      nutrition: "संतुलित आहार, व्यायाम, कमी मीठ साखर",
    },
    {
      age: "वृद्ध (६० वर्षानंतर)",
      nutrition: "कॅल्शियम, प्रोटीन, फायबर, सहज पचनीय पदार्थ",
    },
  ];

  const dailyChecklist = [
    "५०% भाज्या खाल्या?",
    "२५% प्रोटीन घेतला?",
    "२५% संपूर्ण धान्य खाल्या?",
    "८-१० गिलास पाणी प्या?",
    "कमी मीठ-साखर ठेवला?",
    "फळे खाल्या?",
    "दही किंवा दुध घेतले?",
    "व्यायाम केला?",
    "पूर्ण झोप घेतली?",
    "तणाव कमी राखला?",
  ];

  const faqItems = [
    {
      q: "पोषण म्हणजे काय?",
      a: "पोषण म्हणजे शरीरला आवश्यक असलेल्या सर्व पोषकद्रव्यांचा समावेश - प्रोटीन, कार्बोहायड्रेट, चरबी, व्हिटामिन, खनिज आणि पाणी.",
    },
    {
      q: "संतुलित आहार म्हणजे काय?",
      a: "संतुलित आहारात सर्व पोषकद्रव्य योग्य प्रमाणात असतात - भाज्या, प्रोटीन, धान्य, फळे आणि दुग्ध उत्पादन.",
    },
    {
      q: "दिवसभर किती कॅलोरीज आवश्यक आहेत?",
      a: "महिलांसाठी २०००-२२०० कॅलोरीज, पुरुषांसाठी २५००-२८०० कॅलोरीज. व्यायाम आणि वजनानुसार बदलते.",
    },
    {
      q: "प्रोटीन कितपत आवश्यक आहे?",
      a: "प्रत्येक किलोग्राम शरीर वजनासाठी ०.८-१.२ ग्राम प्रोटीन आवश्यक आहे.",
    },
    {
      q: "कार्बोहायड्रेट सर्वदा खराब आहेत?",
      a: "नाही! संपूर्ण अनाज, दाल आणि भाज्यांचे कार्बोहायड्रेट अत्यंत स्वास्थ्यदायी आहेत.",
    },
    {
      q: "चरबी बिल्कुल टाळावी का?",
      a: "नाही. आरोग्यदायी चरबी (जैतून तेल, अखरोट) हृदयासाठी फायदेशीर आणि आवश्यक आहे.",
    },
    {
      q: "दिवसभर किती पाणी प्यावे?",
      a: "कमीतकमी ८-१० गिलास पाणी. व्यायाम आणि हवामानानुसार अधिक प्या.",
    },
    {
      q: "मीठ कितपत घेऊ शकतो?",
      a: "दिवसभर ५ ग्रामपेक्षा कमी (एक चमचा). जास्त मीठ उच्च रक्तदाब वाढवते.",
    },
    {
      q: "साखर कितपत घेऊ शकतो?",
      a: "महिलांसाठी २५ ग्राम, पुरुषांसाठी ३६ ग्राम दिवसभर. लपलेली साखर देखील गणा.",
    },
    {
      q: "नाश्ता छोडणे ठीक आहे?",
      a: "नाही! नाश्ता दिवसाची सुरुवात करतो आणि मेंदूला ऊर्जा देतो.",
    },
    {
      q: "दुपारचे जेवण किती महत्त्वाचे आहे?",
      a: "अत्यंत महत्त्वाचे! दुपारचे जेवण दिवसाचा मुख्य भोजन आणि ऊर्जा स्रोत असावे.",
    },
    {
      q: "रात्रीचे जेवण किती हलके असावे?",
      a: "दिवसाच्या २५-३०% कॅलोरीज. सोण्यापूर्वी २-३ तास आधी जेवा.",
    },
    {
      q: "फायबर का महत्त्वाचा आहे?",
      a: "फायबर पाचन सुधारतो, कोलेस्ट्रॉल कमी करतो, आणि वजन व्यवस्थापनात मदत करतो.",
    },
    {
      q: "डेयरी उत्पादन किती आवश्यक आहे?",
      a: "दिवसभर १-२ कप दुध किंवा समतुल्य दही आणि पनीर. कॅल्शियम हाडांसाठी महत्त्वाचा.",
    },
    {
      q: "गर्भवती महिलांचे पोषण वेगळे असावे?",
      a: "हो! अधिक प्रोटीन, आयरन, कॅल्शियम, फोलिक ऍसिड आणि अन्य पोषकद्रव्य आवश्यक.",
    },
    {
      q: "स्तनपान कराणाऱ्या आईंचे खान-पान कसे असावे?",
      a: "अतिरिक्त कॅलोरीज, जास्त पाणी, प्रोटीन, कॅल्शियम आणि आयरन.",
    },
    {
      q: "मधुमेहांसाठी विशेष आहार आवश्यक?",
      a: "हो! कमी साखरयुक्त, उच्च फायबर, संपूर्ण अनाज, नियमित जेवण वेळ.",
    },
    {
      q: "हृदय आजारांसाठी काय खावे?",
      a: "कमी मीठ, कमी संतृप्त चरबी, आरोग्यदायी चरबी, अधिक फायबर.",
    },
    {
      q: "वजन कमी करण्यासाठी काय करावे?",
      a: "संतुलित कॅलोरी कमी, व्यायाम, पाणी, आणि नियमित आहार.",
    },
    {
      q: "जीवनशैली बदल कितपत काळ लागते?",
      a: "नियमित प्रयत्नांसह ३-६ महिन्यांत लक्षणीय सुधार दिसतो.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "पोषण" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="पोषण आणि आहार"
          title="संतुलित आहाराने आरोग्यदायी जीवनाची सुरुवात"
          description="महाराष्ट्रातील परंपरागत आणि आधुनिक खाद्य पदार्थांचा समावेश करून, योग्य पोषण आणि स्वास्थ्यकर जीवनशैली यांचे मार्गदर्शन."
        />
      </div>

      {/* Section 1: पोषण म्हणजे काय? */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          पोषण म्हणजे काय?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          पोषण म्हणजे शरीरचे जीवन्त राहण्यासाठी, वृद्ध होण्यासाठी, आणि सुस्वस्थ राहण्यासाठी आवश्यक असलेल्या पोषकद्रव्यांचे विज्ञान. संतुलित आहार हा पोषणाचा मूळ आधार आहे. कोणत्याही वयातील व्यक्तीला आरोग्यदायी जीवनासाठी योग्य पोषण महत्त्वाचा आहे.
        </p>
        <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm">
          <p className="text-slate-900 dark:text-slate-100">
            शरीरला <strong>प्रोटीन</strong> (स्नायू), <strong>कार्बोहायड्रेट</strong> (ऊर्जा), <strong>चरबी</strong> (हार्मोन), <strong>व्हिटामिन</strong> (रोग प्रतिकार), <strong>खनिज</strong> (हाडे), आणि <strong>पाणी</strong> (पाचन) यांची गरज असते.
          </p>
        </div>
      </section>

      {/* Section 2: संतुलित आहाराचे महत्त्व */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          संतुलित आहाराचे महत्त्व
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          संतुलित आहार म्हणजे सर्व पोषकद्रव्य योग्य प्रमाणात असलेला भोजन. हा आहार हृदय रोग, मधुमेह, लठ्ठपणा, आणि इतर जीवनशैलीशी संबंधित आजारांचा धोका कमी करतो.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-3 text-lg">
              संतुलित आहाराचे फायदे
            </h4>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
              <li>✓ ऊर्जा आणि सहनशक्ती वाढवते</li>
              <li>✓ रोगप्रतिकारक शक्ती मजबूत करते</li>
              <li>✓ मानसिक स्वास्थ्य सुधारते</li>
              <li>✓ वजन नियंत्रण ठेवते</li>
              <li>✓ दीर्घ आयुष्य देते</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-rose-900 dark:text-rose-200 mb-3 text-lg">
              असंतुलित आहाराचे नुकसान
            </h4>
            <ul className="space-y-2 text-sm text-rose-800 dark:text-rose-300">
              <li>✗ मधुमेह होण्याचा धोका</li>
              <li>✗ हृदय विकार</li>
              <li>✗ उच्च रक्तदाब</li>
              <li>✗ मोटापा आणि लठ्ठपणा</li>
              <li>✗ कर्करोग आणि इतर आजार</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Plate Method */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          संतुलित प्लेट पद्धति
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          प्रत्येक जेवणात आपली प्लेट या तीन भागांमध्ये विभाजित करा:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {plateMethod.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-200 mb-2">
                {item.label}
              </h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: प्रोटीन */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          प्रोटीन - शरीराचा आधार
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          प्रोटीन स्नायू, हाडे, त्वचा, आणि इतर ऊतकांची निर्मिती करते. प्रत्येक किलोग्राम शरीर वजनासाठी ०.८-१.२ ग्राम प्रोटीन आवश्यक आहे.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 mb-4 text-lg">
              शाकाहारी प्रोटीन स्रोत
            </h4>
            <div className="space-y-2">
              {vegetarianProteins.map((protein, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 p-4 border border-emerald-200 dark:border-emerald-700 flex items-center gap-3"
                >
                  <Leaf className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{protein}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-4 text-lg">
              मांसाहारी प्रोटीन स्रोत
            </h4>
            <div className="space-y-2">
              {nonVegetarianProteins.map((protein, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-blue-50 dark:bg-blue-950/30 p-4 border border-blue-200 dark:border-blue-700 flex items-center gap-3"
                >
                  <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{protein}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: कार्बोहायड्रेट्स */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          कार्बोहायड्रेट्स - ऊर्जा स्रोत
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          कार्बोहायड्रेट शरीरला ऊर्जा देते. पण सर्व कार्बोहायड्रेट समान नसते - काही चांगले आहेत, काही खराब आहेत.
        </p>
        <div className="space-y-4">
          {carbsComparison.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border-2 p-6 shadow-sm ${
                idx === 0
                  ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30"
                  : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
              }`}
            >
              <h4
                className={`font-bold mb-2 text-lg ${
                  idx === 0
                    ? "text-emerald-900 dark:text-emerald-200"
                    : "text-red-900 dark:text-red-200"
                }`}
              >
                {item.type}
              </h4>
              <p
                className={`text-sm mb-2 ${
                  idx === 0
                    ? "text-emerald-800 dark:text-emerald-300"
                    : "text-red-800 dark:text-red-300"
                }`}
              >
                <strong>खाद्य पदार्थ:</strong> {item.foods}
              </p>
              <p
                className={`text-sm ${
                  idx === 0
                    ? "text-emerald-800 dark:text-emerald-300"
                    : "text-red-800 dark:text-red-300"
                }`}
              >
                <strong>फायदे:</strong> {item.benefits}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: फायबर */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          फायबर - पाचन आणि आरोग्य
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              फायबर पाचन सुधारतो, कोलेस्ट्रॉल कमी करतो, आणि वजन व्यवस्थापनात मदत करतो. दिवसभर २५-३५ ग्राम फायबर आवश्यक आहे.
            </p>
            <div className="rounded-3xl border-2 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30 p-6 shadow-sm">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                उच्च फायबर असलेले खाद्य पदार्थ:
              </h4>
              <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
                <li>✓ दाल आणि बीन्स</li>
                <li>✓ संपूर्ण धान्य (ज्वारी, बाजरी)</li>
                <li>✓ पालक आणि अन्य हिरवे भाज्या</li>
                <li>✓ फळे (सेब, केळी, संत्री)</li>
                <li>✓ कच्च्या भाज्या</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-green-900 dark:text-green-200 mb-4">
              फायबरचे मुख्य फायदे
            </h4>
            <ul className="space-y-3 text-sm text-green-800 dark:text-green-300">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>पाचन क्रिया सुधारते</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>कोलेस्ट्रॉल कमी करते</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>रक्त शर्करा नियंत्रण</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>वजन नियंत्रण</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: आरोग्यदायी चरबी */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          आरोग्यदायी चरबी - हृदयासाठी फायदेशीर
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 mb-3">
              आरोग्यदायी चरबी (खावी):
            </h4>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-300">
              <li>✓ जैतून तेल</li>
              <li>✓ नारियळ तेल</li>
              <li>✓ अखरोट</li>
              <li>✓ बादाम</li>
              <li>✓ मछली (ओमेगा-३)</li>
              <li>✓ एव्होकाडो</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-red-900 dark:text-red-200 mb-3">
              अस्वास्थ्यकर चरबी (टाळावी):
            </h4>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li>✗ ट्रांस चरबी</li>
              <li>✗ संतृप्त चरबी</li>
              <li>✗ तळलेले पदार्थ</li>
              <li>✗ प्रोसेस्ड मीट</li>
              <li>✗ डेयरी (अतिरिक्त)</li>
              <li>✗ बेकरी आइटम</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: पाणी */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          पाणी - जीवनचा स्रोत
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-4">
              पाण्याचे महत्त्व:
            </h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
              <li>✓ शरीरतापमान नियंत्रण</li>
              <li>✓ पाचन क्रिया सुधार</li>
              <li>✓ संयुक्त तरलीकरण</li>
              <li>✓ विषमुक्त करण्यात मदत</li>
              <li>✓ ऊर्जा वाढवण्यात</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-200 mb-4">
              पाण्याच्या कमीचे लक्षण:
            </h4>
            <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-300">
              <li>✗ थकव आणि संथपणा</li>
              <li>✗ डोकेदुखी</li>
              <li>✗ हलकेपणा</li>
              <li>✗ शुष्क त्वचा</li>
              <li>✗ गडद रंगाचे मूत्र</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-200 mb-3">
            <Droplets className="w-5 h-5 inline mr-2" />
            दिवसभर किती पाणी प्यावे?
          </h4>
          <p className="text-emerald-800 dark:text-emerald-300">
            <strong>कमीतकमी ८-१० गिलास</strong> (२-३ लिटर). व्यायाम, हवामान, आणि आरोग्य स्थितीनुसार अधिक. गरम हवामानात आणि व्यायाम करताना अधिक पाणी प्या.
          </p>
        </div>
      </section>

      {/* Section 9: मीठ आणि साखर */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          मीठ आणि साखर - सीमित ठेवा
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-3xl border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-orange-900 dark:text-orange-200 mb-3">
              मीठ
            </h4>
            <p className="text-sm text-orange-800 dark:text-orange-300 mb-3">
              दिवसभर <strong>५ ग्रामपेक्षा कमी</strong> (एक चमचा)
            </p>
            <p className="text-xs text-orange-700 dark:text-orange-400">
              जास्त मीठ उच्च रक्तदाब, हृदय रोग, आणि मधुमेह वाढवते. अचारात, सॉसमध्ये, आणि चिप्समध्ये लपलेला मीठ असतो.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950/30 p-6 shadow-sm">
            <h4 className="font-bold text-pink-900 dark:text-pink-200 mb-3">
              साखर
            </h4>
            <p className="text-sm text-pink-800 dark:text-pink-300 mb-3">
              महिलांसाठी <strong>२५ ग्राम</strong>, पुरुषांसाठी <strong>३६ ग्राम</strong>
            </p>
            <p className="text-xs text-pink-700 dark:text-pink-400">
              जास्त साखर मधुमेह, दातांचे रोग, वजन वाढ, आणि कर्करोग वाढवते. कोल्ड ड्रिंक्स, जूस, आणि मिठायींमध्ये साखर भरपूर असते.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: आरोग्यदायी नाश्ता */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          आरोग्यदायी नाश्ता - दिवसाची सुरुवात
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          नाश्ता दिवसाचा सर्वात महत्त्वाचा भोजन आहे. हा मेंदू, व्यायाम क्षमता, आणि एकाग्रता सुधारतो. महाराष्ट्रातील परंपरागत आणि आधुनिक पर्याय:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthyBreakfasts.map((breakfast, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2">
                {breakfast.name}
              </h4>
              <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
                {breakfast.description}
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                ⏱ {breakfast.time}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 11: आरोग्यदायी दुपारचे जेवण */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          आरोग्यदायी दुपारचे जेवण
        </h2>
        <div className="rounded-3xl border-2 border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 p-6 shadow-sm">
          <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
            दुपारचे जेवण दिवसाचा मुख्य भोजन असावे. यात संतुलित पदार्थांचा समावेश असावा:
          </p>
          <ul className="mt-4 space-y-2 text-slate-800 dark:text-slate-300">
            <li>✓ <strong>५०% भाज्या</strong> - पालक, गाजर, भिंडी, इत्यादी</li>
            <li>✓ <strong>२५% प्रोटीन</strong> - दाल, अंडे, दही, किंवा मांस</li>
            <li>✓ <strong>२५% धान्य</strong> - संपूर्ण गहू, ज्वारी, बाजरी, भात</li>
            <li>✓ <strong>तरावळ</strong> - दही किंवा छाछ</li>
          </ul>
        </div>
      </section>

      {/* Section 12: आरोग्यदायी रात्रीचे जेवण */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          आरोग्यदायी रात्रीचे जेवण
        </h2>
        <div className="space-y-4">
          <div className="rounded-3xl border-2 border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30 p-6 shadow-sm">
            <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
              रात्रीचे जेवण हलके आणि सोयाचे असावे. सोण्यापूर्वी २-३ तास आधी जेवा. दिवसाच्या २५-३०% कॅलोरीज रात्री घ्या.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl border-2 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-6 shadow-sm">
              <h4 className="font-bold text-green-900 dark:text-green-200 mb-3">
                चांगले पर्याय:
              </h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>✓ खिचडी (दाल + भात)</li>
                <li>✓ सूप (भाज्या + दाल)</li>
                <li>✓ दहीचा तरावळ</li>
                <li>✓ भाज्या आणि दाल</li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-6 shadow-sm">
              <h4 className="font-bold text-red-900 dark:text-red-200 mb-3">
                टाळावयाचे:
              </h4>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                <li>✗ तेली मसाले</li>
                <li>✗ दूध, चॉकलेट</li>
                <li>✗ कॉफी, चहा</li>
                <li>✗ मसालेदार खाना</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: आरोग्यदायी सवयी */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          आरोग्यदायी सवयी - दैनंदिन चेकलिस्ट
        </h2>
        <HealthyHabitsChecklist habits={healthyHabits} />
      </section>

      {/* Section 14: किराणा खरेदी यादी */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          किराणा खरेदी यादी
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          संतुलित आहारासाठी आवश्यक खाद्य पदार्थ. नियमित बाजारात या वस्तू उपलब्ध आहेत:
        </p>
        <GroceryList items={groceryList} />
      </section>

      {/* Section 15: टाळावयाचे पदार्थ */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          टाळावयाचे पदार्थ
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          या खाद्य पदार्थांचा सेवन कमी किंवा बिल्कुल टाळा:
        </p>
        <AvoidFoodsGrid foods={avoidFoods} />
      </section>

      {/* Section 16: वयोगटानुसार पोषण */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          वयोगटानुसार पोषण मार्गदर्शन
        </h2>
        <div className="space-y-4">
          {ageNutrition.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-950/30 p-6 shadow-sm"
            >
              <h4 className="font-bold text-teal-900 dark:text-teal-200 mb-2">
                {item.age}
              </h4>
              <p className="text-teal-800 dark:text-teal-300">{item.nutrition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 17: दैनंदिन पोषण तपासणी यादी */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          दैनंदिन पोषण तपासणी यादी
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          प्रत्येक दिवस हे तपास करा आणि आपले दैनंदिन आहार संतुलित असल्याची खात्री करा:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {dailyChecklist.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-100 dark:bg-slate-800 p-4 flex items-center gap-3 border border-slate-300 dark:border-slate-700"
            >
              <input
                type="checkbox"
                className="w-5 h-5 rounded text-emerald-600"
                disabled
              />
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 18: FAQ */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          वारंवार विचारले जाणारे प्रश्न (FAQ)
        </h2>
        <NutritionFAQ items={faqItems} />
      </section>

      {/* Section 19: Important Notes */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          महत्त्वाची सूचना
        </h2>
        <div className="rounded-3xl border-2 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30 p-6 shadow-sm">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <p className="text-yellow-900 dark:text-yellow-200 leading-relaxed">
                <strong>याद ठेवा:</strong>
              </p>
              <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
                <li>✓ प्रत्येक व्यक्तीचे पोषण आवश्यकता वेगवेगळे असते</li>
                <li>✓ नियमित व्यायाम आणि योग्य पोषण एकत्रितपणे काम करते</li>
                <li>✓ अचानक आहार बदल टाळा - हळूहळू बदल करा</li>
                <li>✓ वर्ष भर नियमित राहा, सर्वकाही मर्यादित ठेवा</li>
                <li>✓ मानसिक आरोग्य देखील पोषण जेवढे महत्त्वाचे आहे</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-6 shadow-sm">
          <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
            आरोग्य व्यावसायिकांचा सल्ला घ्या जर:
          </h4>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
            <li>✓ आपल्याला मधुमेह, हृदय रोग, किंवा इतर आजार असेल</li>
            <li>✓ आहार बदलून वजन, ऊर्जा, किंवा पचन प्रभावित होत असेल</li>
            <li>✓ औषध घेत असाल आणि आहार बदल करायचा असेल</li>
            <li>✓ गर्भवती किंवा स्तनपान कराणारी असाल</li>
          </ul>
        </div>
      </section>

      <CTA
        title="आरोग्यदायी जीवनाची सुरुवात करा"
        description="संतुलित आहार आणि नियमित व्यायामाने आपल्या आरोग्यचा सुधार करा."
      />

      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          संबंधित मार्गदर्शन
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/calculators/bmi" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">BMI कॅल्क्युलेटर</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">वजन आणि उंचीवर आधारित आरोग्य जोखीमचा जलद अंदाज घ्या.</p>
          </Link>
          <Link href="/diabetes" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">मधुमेह माहिती</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">पोषण, रक्तशर्करा, आणि जीवनशैली बदल यांचा मधुमेहाशी संबंध जाणून घ्या.</p>
          </Link>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}


