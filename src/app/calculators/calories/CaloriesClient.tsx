"use client";

import { useMemo, useState } from "react";
import { activityFactors, calculateDailyEnergy, calculateRestingEnergy, type ActivityLevel, type BinarySex } from "@/lib/health-calculators";
import { trackEvent } from "@/lib/analytics";

export default function CaloriesClient() {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [sex, setSex] = useState<BinarySex>("female");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");

  const restingEnergy = useMemo(
    () => calculateRestingEnergy({ age, weightKg: weight, heightCm: height, sex }),
    [age, height, sex, weight],
  );
  const calories = useMemo(() => calculateDailyEnergy(restingEnergy, activity), [activity, restingEnergy]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">कॅलरी कॅल्क्युलेटर</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">आपल्या जीवनशैलीनुसार अंदाजे कॅलरी गरज मोजा.</p>
        <form onSubmit={(event) => { event.preventDefault(); trackEvent("calculator_complete", { calculator_name: "calories" }); }} className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              वय
              <input type="range" min="18" max="80" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{age} वर्ष</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              वजन (किग्रा)
              <input type="range" min="35" max="120" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{weight} कि.ग्रा.</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              उंची (से.मी.)
              <input type="range" min="120" max="220" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{height} से.मी.</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              सूत्रासाठी लिंग
              <select value={sex} onChange={(e) => setSex(e.target.value as BinarySex)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value="female">महिला</option>
                <option value="male">पुरुष</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              शारीरिक हालचाल
              <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityLevel)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                {Object.entries(activityFactors).map(([value, option]) => <option key={value} value={value}>{option.label}</option>)}
              </select>
            </label>
            <button type="submit" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">निकाल पाहा</button>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">अंदाजे दैनिक कॅलरी</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-5xl font-semibold text-slate-900">{calories}</p>
              <p className="mt-3 text-sm text-slate-700">किलो-कॅलरी/दिवस</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">विश्रांतीतील अंदाज: {restingEnergy} किलो-कॅलरी. हा वजन टिकवण्यासाठीचा साधारण अंदाज आहे.</p>
            </output>
          </div>
        </form>
        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
          <h2 className="font-semibold text-slate-900">ही गणना कशी होते?</h2>
          <p className="mt-2">विश्रांतीतील ऊर्जा Mifflin–St Jeor समीकरणाने मोजून निवडलेल्या हालचालीच्या गुणकाने अंदाजे दैनिक ऊर्जा काढली जाते.</p>
          <p className="mt-2">हा १८ वर्षांवरील निरोगी प्रौढांसाठी अंदाज आहे. गर्भावस्था, स्तनपान, आजार किंवा क्रीडा प्रशिक्षणासाठी आहारतज्ज्ञांचा सल्ला घ्या.</p>
          <a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-semibold text-emerald-800 underline underline-offset-4">स्रोत: Mifflin–St Jeor संशोधन</a>
        </section>
      </div>
    </main>
  );
}
