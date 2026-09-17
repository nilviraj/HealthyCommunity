"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CalculatorBackButton() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.replace("/");
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
      aria-label="मागील पानावर जा"
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      मागे जा
    </button>
  );
}
