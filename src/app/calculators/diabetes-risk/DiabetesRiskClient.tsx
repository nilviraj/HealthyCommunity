"use client";

import { useMemo, useState } from "react";
import { calculateIdrs, getIdrsCategory, type BinarySex, type FamilyHistory, type PhysicalActivity } from "@/lib/health-calculators";
import { trackEvent } from "@/lib/analytics";

export default function DiabetesRiskClient() {
  const [age, setAge] = useState(40);
  const [sex, setSex] = useState<BinarySex>("female");
  const [waist, setWaist] = useState(85);
  const [familyHistory, setFamilyHistory] = useState<FamilyHistory>("none");
  const [physicalActivity, setPhysicalActivity] = useState<PhysicalActivity>("regular-or-strenuous");

  const score = useMemo(
    () => calculateIdrs({ age, sex, waistCm: waist, familyHistory, physicalActivity }),
    [age, familyHistory, physicalActivity, sex, waist],
  );
  const risk = getIdrsCategory(score);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">मधुमेह जोखीम तपासणी</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">भारतासाठी विकसित केलेल्या IDRS पद्धतीने टाइप २ मधुमेहाची तपासणी करून घेण्याची गरज समजून घ्या.</p>
        <form onSubmit={(event) => { event.preventDefault(); trackEvent("calculator_complete", { calculator_name: "diabetes-risk" }); }} className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              वय
              <input type="range" min="20" max="80" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{age} वर्ष</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              सूत्रासाठी लिंग
              <select value={sex} onChange={(e) => setSex(e.target.value as BinarySex)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value="female">महिला</option>
                <option value="male">पुरुष</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              कंबरेचा घेर (से.मी.)
              <input type="range" min="60" max="130" value={waist} onChange={(e) => setWaist(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
              <span className="mt-2 block text-emerald-700">{waist} से.मी.</span>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              आई-वडिलांमध्ये मधुमेह
              <select value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value as FamilyHistory)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value="none">कोणालाही नाही</option>
                <option value="one-parent">आई किंवा वडील—एकाला</option>
                <option value="both-parents">दोघांनाही</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              शारीरिक हालचाल
              <select value={physicalActivity} onChange={(e) => setPhysicalActivity(e.target.value as PhysicalActivity)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value="regular-and-strenuous">नियमित व्यायाम आणि शारीरिक श्रमाचे काम</option>
                <option value="regular-or-strenuous">नियमित व्यायाम किंवा शारीरिक श्रमाचे काम</option>
                <option value="none">व्यायाम नाही आणि मुख्यतः बैठी दिनचर्या</option>
              </select>
            </label>
            <button type="submit" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">निकाल पाहा</button>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">तुमचा अंदाज</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-2xl font-semibold text-slate-900">{risk}</p>
              <p className="mt-2 text-lg font-semibold text-emerald-800">IDRS गुण: {score}/१००</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{score >= 60 ? "रक्तातील साखरेची तपासणी करण्याबद्दल डॉक्टरांशी बोला." : "ही फक्त प्राथमिक तपासणी आहे; लक्षणे किंवा शंका असल्यास डॉक्टरांचा सल्ला घ्या."}</p>
            </output>
          </div>
        </form>
        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
          <h2 className="font-semibold text-slate-900">ही गणना कशी होते?</h2>
          <p className="mt-2">Indian Diabetes Risk Score (IDRS) मध्ये वय, कंबरेचा घेर, शारीरिक हालचाल आणि आई-वडिलांचा मधुमेह इतिहास वापरला जातो. ६० किंवा अधिक गुण उच्च जोखीम दर्शवतात.</p>
          <p className="mt-2">IDRS मधुमेहाचे निदान करत नाही. निदानासाठी प्रमाणित रक्ततपासणी आवश्यक आहे.</p>
          <a href="https://pubmed.ncbi.nlm.nih.gov/16334618/" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-semibold text-emerald-800 underline underline-offset-4">स्रोत: मूळ IDRS संशोधन</a>
        </section>
      </div>
    </main>
  );
}
