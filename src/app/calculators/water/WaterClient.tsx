"use client";

import { useState } from "react";
import { waterIntakeReferences, type WaterProfile } from "@/lib/health-calculators";
import { trackEvent } from "@/lib/analytics";

export default function WaterClient() {
  const [profile, setProfile] = useState<WaterProfile>("female");
  const reference = waterIntakeReferences[profile];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">पाणी सेवन संदर्भ</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">निरोगी प्रौढांसाठी अधिकृत पर्याप्त सेवनाचा (Adequate Intake) संदर्भ पाहा.</p>
        <form onSubmit={(event) => { event.preventDefault(); trackEvent("calculator_complete", { calculator_name: "water-reference" }); }} className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              योग्य पर्याय निवडा
              <select value={profile} onChange={(e) => setProfile(e.target.value as WaterProfile)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                {Object.entries(waterIntakeReferences).map(([value, option]) => <option key={value} value={value}>{option.label}</option>)}
              </select>
            </label>
            <button type="submit" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">संदर्भ पाहा</button>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">पाणी आणि इतर पेयांमधून</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-5xl font-semibold text-slate-900">{reference.beveragesLitres} L</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">अन्नातील पाण्यासह एकूण संदर्भ: {reference.totalWaterLitres} लिटर/दिवस.</p>
            </output>
          </div>
        </form>
        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
          <h2 className="font-semibold text-slate-900">हा लक्ष्यांक नाही</h2>
          <p className="mt-2">हा संदर्भ अमेरिकेतील सेवनाच्या आकडेवारीवर आधारित आहे; प्रत्येक व्यक्तीची निश्चित गरज नाही. उष्ण हवामान, व्यायाम, ताप, उलटी किंवा जुलाबामुळे गरज वाढू शकते.</p>
          <p className="mt-2">हृदय किंवा मूत्रपिंडाचा आजार असल्यास, डॉक्टरांनी सांगितलेली द्रव मर्यादा पाळा.</p>
          <a href="https://www.nationalacademies.org/read/10925/chapter/6" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-semibold text-emerald-800 underline underline-offset-4">स्रोत: National Academies—Dietary Reference Intakes</a>
        </section>
      </div>
    </main>
  );
}
