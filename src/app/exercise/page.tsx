import type { Metadata } from "next";
import { Activity, Heart, Zap, Brain, Moon, Smile, Droplets, Flame, Clock, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "व्यायाम - नियमित व्यायाम आणि योग मार्गदर्शन",
  description:
    "नियमित व्यायाम, योग, ध्यान, आणि फिटनेस टिप्स - मधुमेह, हृदयविकार, आणि तणाव नियंत्रणासाठी आरोग्य मार्गदर्शन.",
  keywords: [
    "व्यायाम",
    "योग",
    "फिटनेस",
    "ध्यान",
    "आरोग्य",
    "व्यायामाचे फायदे",
  ],
  openGraph: {
    title: "व्यायाम - नियमित व्यायाम मार्गदर्शन",
    description:
      "नियमित व्यायामाने निरोगी आणि सक्रिय जीवन जिवा.",
  },
  alternates: { canonical: "/exercise" },
};

export default function ExercisePage() {
  const benefits = [
    { icon: Zap, title: "ऊर्जा वाढते", color: "bg-yellow-50 text-yellow-600 border-yellow-200 dark:border-yellow-800 dark:bg-yellow-950/30" },
    { icon: Heart, title: "रक्तातील साखर नियंत्रणास मदत", color: "bg-red-50 text-red-600 border-red-200 dark:border-red-800 dark:bg-red-950/30" },
    { icon: Activity, title: "वजन नियंत्रण", color: "bg-blue-50 text-blue-600 border-blue-200 dark:border-blue-800 dark:bg-blue-950/30" },
    { icon: Flame, title: "हृदय मजबूत", color: "bg-rose-50 text-rose-600 border-rose-200 dark:border-rose-800 dark:bg-rose-950/30" },
    { icon: Moon, title: "चांगली झोप", color: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:border-indigo-800 dark:bg-indigo-950/30" },
    { icon: Brain, title: "मानसिक आरोग्य सुधारते", color: "bg-purple-50 text-purple-600 border-purple-200 dark:border-purple-800 dark:bg-purple-950/30" },
  ];

  const exercises = [
    {
      icon: "🚶",
      title: "चालणे",
      benefits: "पाचन सुधारते, हृदय मजबूत करते, वजन कमी करते",
      duration: "२०-३० मिनिट",
    },
    {
      icon: "🧘",
      title: "योग",
      benefits: "लवचिकता वाढवते, मांसपेशी मजबूत करते, तणाव कमी करते",
      duration: "३०-४५ मिनिट",
    },
    {
      icon: "🤸",
      title: "स्ट्रेचिंग",
      benefits: "जोडांचा लवचिकता, मांसपेशीतील अकडापणा दूर करते",
      duration: "१०-१५ मिनिट",
    },
    {
      icon: "🚴",
      title: "सायकलिंग",
      benefits: "पायांची ताकद, हृदय व्यायाम, वजन नियंत्रण",
      duration: "३०-४५ मिनिट",
    },
    {
      icon: "💪",
      title: "हलका शक्तिवर्धक व्यायाम",
      benefits: "मांसपेशी निर्माण, हाडे मजबूत, चयापचय वाढ",
      duration: "२०-३० मिनिट",
    },
  ];

  const dailySchedule = [
    { time: "सकाळी", exercises: "स्ट्रेचिंग १० मिनिट + चालणे २० मिनिट" },
    { time: "सायंकाळी", exercises: "योग १५ मिनिट + ध्यान १० मिनिट" },
  ];

  const precautions = [
    { icon: Droplets, title: "पाणी", desc: "व्यायामाआधी, दरम्यान, आणि नंतर पाणी प्या" },
    { icon: Activity, title: "वार्मअप", desc: "व्यायाम सुरू करण्यापूर्वी शरीर तयार करा" },
    { icon: Clock, title: "कूल डाउन", desc: "व्यायामानंतर मांसपेशी शांत करा" },
    { icon: Smile, title: "आरामदायक जूते", desc: "योग्य समर्थन असलेले जूते परिधान करा" },
    { icon: AlertCircle, title: "आजारी असल्यास व्यायाम न करा", desc: "ताप किंवा इतर समस्या असल्यास विश्राम घ्या" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "व्यायाम" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="व्यायाम"
          title="नियमित व्यायामाने निरोगी आणि सक्रिय जीवन"
          description="दररोज फक्त ३० मिनिटांचा व्यायाम मधुमेह, हृदयविकार, लठ्ठपणा आणि तणाव कमी करण्यासाठी उपयुक्त ठरू शकतो."
        />
      </div>

      {/* Important Note */}
      <div className="mt-12 rounded-3xl border-2 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-6 shadow-sm flex gap-4">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <p className="text-amber-900 dark:text-amber-200 font-semibold">महत्त्वाचे:</p>
          <p className="text-sm text-amber-800 dark:text-amber-300 mt-2">
            जर आपल्याला मधुमेह, हृदय रोग किंवा इतर औषधी स्थिती असेल, तर नवीन व्यायाम सुरू करण्यापूर्वी आपल्या डॉक्टरांचा सल्ला घ्या.
          </p>
        </div>
      </div>

      {/* Section 1: Benefits */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">व्यायाम का महत्त्वाचा आहे?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl border-2 p-6 shadow-sm hover:shadow-md transition-shadow ${benefit.color}`}
              >
                <Icon className="w-8 h-8 mb-3" />
                <p className="font-semibold text-slate-900 dark:text-white">{benefit.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Weekly Recommendation */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">आठवड्यात किती व्यायाम?</h2>
        <div className="rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/40 dark:border-emerald-700 p-8 shadow-md">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">
                प्रौढ व्यक्तींसाठी (Adults)
              </h3>
              <div className="space-y-2 text-slate-800 dark:text-slate-200">
                <p className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-600"></span>
                  <strong>१५० मिनिटे</strong> Moderate Exercise (मध्यम व्यायाम)
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">किंवा</p>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-600"></span>
                  <strong>७५ मिनिटे</strong> Vigorous Exercise (तीव्र व्यायाम)
                </p>
              </div>
            </div>
            <div className="border-t border-emerald-300 dark:border-emerald-700 pt-4">
              <p className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <strong>+</strong>
                <span><strong>२ दिवस</strong> Strength Training (शक्तिवर्धक व्यायाम)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Best Exercises */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">सर्वोत्तम व्यायाम</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {exercises.map((exercise, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{exercise.icon}</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                {exercise.title}
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-4 leading-relaxed">
                {exercise.benefits}
              </p>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-200 border-t border-emerald-200 dark:border-emerald-700 pt-3">
                ⏱ {exercise.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Meditation */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">ध्यान (Meditation)</h2>
        <div className="rounded-3xl border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-8 shadow-sm">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">मानसिक शांतता आणि आरोग्य</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-bold text-blue-900 dark:text-blue-200">ध्यानाचे फायदे:</h4>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>मानसिक शांतता आणि एकाग्रता वाढ</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>तणाव, चिंता, आणि उदासीनता कमी करते</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>रक्तदाब नियंत्रणास मदत</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>झोपेचे गुणवत्ता सुधारते</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-blue-900 dark:text-blue-200">ध्यान पद्धती:</h4>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                  <li className="flex gap-2">
                    <span>🫁</span>
                    <span><strong>Deep Breathing</strong> - गहरे श्वास</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🧘</span>
                    <span><strong>Anulom Vilom</strong> - नाडीशोधन प्राणायाम</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🧠</span>
                    <span><strong>Mindfulness</strong> - वर्तमानात जगण्याचा अभ्यास</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-blue-200 dark:border-blue-700 pt-4 mt-4">
              <p className="text-blue-900 dark:text-blue-200 font-semibold">
                ⏱ दैनंदिन शिफारस: <strong>१०-१५ मिनिटे</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Daily Schedule */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">दैनंदिन व्यायाम वेळापत्रक</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {dailySchedule.map((schedule, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-2 border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-6 shadow-sm"
            >
              <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
                {schedule.time}
              </h4>
              <p className="text-purple-800 dark:text-purple-300">{schedule.exercises}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Precautions */}
      <section className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">व्यायाम करताना घ्यावयाची काळजी</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {precautions.map((precaution, idx) => {
            const Icon = precaution.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-4 shadow-sm"
              >
                <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
                <h4 className="font-bold text-orange-900 dark:text-orange-100 text-sm mb-1">
                  {precaution.title}
                </h4>
                <p className="text-xs text-orange-800 dark:text-orange-300">
                  {precaution.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <CTA
        title="आजपासून दररोज किमान ३० मिनिटे स्वतःसाठी द्या"
        description="छोट्या सवयी दीर्घकाळ मोठे बदल घडवू शकतात. आजच सुरुवात करा!"
      />

      <Disclaimer />
    </main>
  );
}


