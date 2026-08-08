"use client";

import { useMemo, useState } from "react";

export default function CaloriesClient() {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [gender, setGender] = useState("female");

  const calories = useMemo(() => {
    const base = gender === "male" ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    return Math.round(base * 1.2);
  }, [age, weight, height, gender]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900">कॅलरी कॅल्क्युलेटर</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">आपल्या जीवनशैलीनुसार अंदाजे कॅलरी गरज मोजा.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
              लिंग
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500">
                <option value="female">महिला</option>
                <option value="male">पुरुष</option>
              </select>
            </label>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-700">अंदाजे दैनिक कॅलरी</p>
            <output aria-live="polite" aria-atomic="true" className="block">
              <p className="mt-3 text-5xl font-semibold text-slate-900">{calories}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">हा अंदाजे मूल्य आहे. हळूहळू आहारात बदल करा.</p>
            </output>
          </div>
        </div>
      </div>
    </main>
  );
}