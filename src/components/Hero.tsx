import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  BadgeCheck,
  Search,
  Sparkles,
} from "lucide-react";

const HealthyJourneyIllustration = dynamic(() => import("@/components/HealthyJourneyIllustration"), {
  loading: () => (
    <div
      aria-hidden="true"
      className="h-[280px] w-full rounded-[32px] border border-white/70 bg-white/60 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)] backdrop-blur-md sm:h-[420px]"
    />
  ),
});

const trustBadges = ["ICMR Inspired", "Evidence Based", "Marathi First", "Community Driven", "Free Resources"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-blob absolute -left-20 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.28)_0%,_rgba(34,197,94,0)_72%)]" />
      <div className="hero-blob absolute right-4 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.22)_0%,_rgba(37,99,235,0)_72%)] [animation-delay:1.2s]" />
      <div className="hero-blob absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(15,118,110,0.22)_0%,_rgba(15,118,110,0)_72%)] [animation-delay:2.2s]" />

      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.7)] backdrop-blur sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#22C55E]" />
            महाराष्ट्रासाठी प्रीमियम हेल्थ कम्युनिटी अनुभव
          </span>

          <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.08] text-[#0F172A] sm:text-4xl lg:text-5xl xl:text-6xl">
            मधुमेह आणि जीवनशैली आजारांसाठी
            <span className="mt-6 block leading-[1.5] bg-gradient-to-r from-[#22C55E] via-[#0F766E] to-[#2563EB] bg-clip-text text-transparent sm:mt-6">
              विश्वासार्ह मराठी मार्गदर्शन
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            वैज्ञानिक माहिती, साधे टूल्स आणि समुदायाची साथ यामुळे तुमचा आरोग्य प्रवास अधिक सोपा, सजग आणि आत्मविश्वासपूर्ण बनतो.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/articles"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_-20px_rgba(34,197,94,0.75)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(34,197,94,0.85)]"
            >
              लेख वाचा
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/calculators/bmi"
              className="inline-flex items-center justify-center rounded-full border border-[#22C55E]/30 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0F766E] backdrop-blur transition hover:border-[#22C55E]/50 hover:bg-white"
            >
              आरोग्य मोजणी
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
              सहभागी व्हा
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.8)] backdrop-blur"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-[#22C55E]" />
                {badge}
              </span>
            ))}
          </div>

          <form action="/articles" method="get" className="mt-7 max-w-xl rounded-[26px] border border-white/70 bg-white/80 p-2 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
            <div className="flex items-center gap-2 rounded-[20px] border border-slate-100 bg-white px-3 py-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                name="q"
                aria-label="आरोग्य लेख शोध"
                placeholder="उदा. मधुमेह आहार, BMI, पाणी सेवन..."
                className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#0F172A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
              >
                शोधा
              </button>
            </div>
          </form>

        </div>

        <div className="relative z-10 mt-2 lg:mt-0">
          <div className="hero-float">
            <HealthyJourneyIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
