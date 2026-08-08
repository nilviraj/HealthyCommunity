"use client";

import { useMemo, useState } from "react";

export default function DiabetesRiskClient() {
  const [age, setAge] = useState(40);
  const [bmi, setBmi] = useState(27);
  const [familyHistory, setFamilyHistory] = useState(false);

  const risk = useMemo(() => {
    let score = age > 40 ? 2 : 1;
    score += bmi > 25 ? 2 : 0;
    score += familyHistory ? 2 : 0;
    if (score >= 4) return "उच्च जोखीम";
    if (score === 3) return "मध्यम जोखीम";
    return "कमी जोखीम";
  }, [age, bmi, familyHistory]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">मधुमेह जोखीम तपासणी</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">आपल्या वय, BMI आणि कुटुंबातील इतिहासावरून साधारण जोखीमचे मूल्यमापन करा.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              वय
              <input type="range" min="20" max="80" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{age} वर्ष</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              BMI
              <input type="range" min="18" max="35" value={bmi} onChange={(e) => setBmi(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{bmi}</span>
            </label>
            <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <input type="checkbox" checked={familyHistory} onChange={(e) => setFamilyHistory(e.target.checked)} className="h-4 w-4 rounded border-slate-300 accent-emerald-600" />
              कुटुंबात मधुमेहाचा इतिहास आहे
            </label>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">तुमचा अंदाज</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-2xl font-semibold text-slate-900">{risk}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">हे एक साधारण अंदाज आहे. अधिक accurate माहितीसाठी डॉक्टरांचा सल्ला घ्या.</p>
            </output>
          </div>
        </div>
      </div>
    </main>
  );
}