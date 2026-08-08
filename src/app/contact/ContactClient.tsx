"use client";

import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const fieldErrorId = (field: "name" | "phone" | "email" | "message") => `${field}-error`;

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!form.name.trim()) nextErrors.name = "कृपया पूर्ण नाव भरा.";
    if (!/^\d{10}$/.test(form.phone)) nextErrors.phone = "मोबाईल क्रमांक १० अंकी असावा.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "कृपया वैध ईमेल लिहा.";
    if (!form.message.trim()) nextErrors.message = "संदेश भरणे अनिवार्य आहे.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setSubmitted(false);

    if (!validate()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setServerError(
          result.message ?? "संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
        );
        return;
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "", website: "" });
    } catch {
      setServerError("सध्या सर्व्हरशी संपर्क होऊ शकला नाही. कृपया नंतर प्रयत्न करा.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">संपर्क</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">आमच्याशी संपर्क साधा</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">तुमचे प्रश्न, सूचना किंवा सहकार्याची इच्छा असल्यास खालील फॉर्म भरून आम्हाला संदेश पाठवा. आम्ही लवकरात लवकर उत्तर देण्याचा प्रयत्न करतो.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm" noValidate>
          <div className="grid gap-4">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="hidden"
              aria-hidden="true"
            />
            <label className="text-sm font-medium text-slate-700">
              पूर्ण नाव
              <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? fieldErrorId("name") : undefined} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-emerald-500" />
              {errors.name ? <span id={fieldErrorId("name")} role="alert" className="mt-2 block text-sm text-red-600">{errors.name}</span> : null}
            </label>
            <label className="text-sm font-medium text-slate-700">
              मोबाईल क्रमांक
              <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? fieldErrorId("phone") : undefined} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-emerald-500" />
              {errors.phone ? <span id={fieldErrorId("phone")} role="alert" className="mt-2 block text-sm text-red-600">{errors.phone}</span> : null}
            </label>
            <label className="text-sm font-medium text-slate-700">
              ईमेल
              <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? fieldErrorId("email") : undefined} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-emerald-500" />
              {errors.email ? <span id={fieldErrorId("email")} role="alert" className="mt-2 block text-sm text-red-600">{errors.email}</span> : null}
            </label>
            <label className="text-sm font-medium text-slate-700">
              संदेश
              <textarea id="message" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? fieldErrorId("message") : undefined} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-emerald-500" />
              {errors.message ? <span id={fieldErrorId("message")} role="alert" className="mt-2 block text-sm text-red-600">{errors.message}</span> : null}
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "पाठवत आहे..." : "प्रस्तुत करा"}
          </button>
          <div className="mt-4 space-y-2" aria-live="polite" aria-atomic="true">
            {serverError ? <p role="alert" className="text-sm font-medium text-red-600">{serverError}</p> : null}
            {submitted ? <p className="text-sm font-medium text-emerald-700">तुमचा संदेश आम्हाला मिळाला आहे. लवकरच आपण संपर्क करणार आहोत.</p> : null}
          </div>
        </form>
      </div>
    </main>
  );
}