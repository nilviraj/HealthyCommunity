"use client";

import { useMemo, useState } from "react";

export default function BmiClient() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = useMemo(() => {
    const heightInMeters = height / 100;
    return Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
  }, [height, weight]);

  const category = bmi < 18.5 ? "अतिशय कमी" : bmi < 25 ? "सामान्य" : bmi < 30 ? "जास्त वजन" : "लठ्ठपणा";

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">BMI कॅल्क्युलेटर</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">उंची आणि वजनानुसार BMI मोजा आणि आपल्या वजन श्रेणीबद्दल माहिती मिळवा.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              उंची (से.मी.)
              <input type="range" min="120" max="220" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{height} से.मी.</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              वजन (किग्रा)
              <input type="range" min="35" max="140" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{weight} कि.ग्रा.</span>
            </label>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">तुमचा BMI</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-5xl font-semibold text-slate-900">{bmi}</p>
              <p className="mt-3 text-sm text-slate-600">वर्गीकरण: {category}</p>
            </output>
          </div>
        </div>
      </div>
    </main>
  );
}