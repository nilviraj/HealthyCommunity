"use client";

import { useMemo, useState } from "react";

export default function WaterClient() {
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState(1);

  const waterGoal = useMemo(() => {
    const base = weight * 0.033;
    return Math.round(base + activity * 0.3);
  }, [weight, activity]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">पाणी सेवन कॅल्क्युलेटर</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">आपल्या वजन आणि सक्रियतेनुसार दैनंदिन पाण्याची गरज roughly मोजा.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              वजन (किग्रा)
              <input type="range" min="35" max="120" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{weight} कि.ग्रा.</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              सक्रियता
              <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value={1}>हलकी</option>
                <option value={2}>मध्यम</option>
                <option value={3}>उच्च</option>
              </select>
            </label>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">दैनंदिन पाणी</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-5xl font-semibold text-slate-900">{waterGoal}L</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">हा अंदाज आहे; गरजेनुसार पाणी वाढवा.</p>
            </output>
          </div>
        </div>
      </div>
    </main>
  );
}