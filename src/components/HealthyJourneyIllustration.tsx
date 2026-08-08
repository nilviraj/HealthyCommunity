"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Brain, Leaf, RefreshCw, Sprout } from "lucide-react";

const milestones = [
  {
    title: "संतुलित व्यायाम",
    description: "नियमित चालणे, योग, स्ट्रेचिंग आणि दैनंदिन शारीरिक हालचाल",
    icon: Activity,
    className: "lg:left-[0.5rem] lg:top-[0.5rem]",
    accent: "from-[#dcfce7] to-[#bbf7d0]",
  },
  {
    title: "संतुलित, सकस व कमीतकमी प्रक्रिया केलेला आहार",
    description: "ताज्या भाज्या, मिलेट्स, मायक्रोग्रीन्स आणि कमी प्रक्रिया केलेले नैसर्गिक अन्न",
    icon: Leaf,
    className: "lg:right-[0.5rem] lg:top-[0.5rem]",
    accent: "from-[#f0fdf4] to-[#dcfce7]",
  },
  {
    title: "मानसिक आरोग्य",
    description: "तणावमुक्त मन, गुणवत्तापूर्ण झोप, सकारात्मक विचार आणि भावनिक संतुलन",
    icon: Brain,
    className: "lg:left-[0.5rem] lg:bottom-[0.5rem]",
    accent: "from-[#ecfccb] to-[#dcfce7]",
  },
  {
    title: "सातत्य",
    description: "लहान दैनंदिन सवयी, नियमितता आणि दीर्घकालीन जीवनशैलीतील बदल",
    icon: RefreshCw,
    className: "lg:right-[0.5rem] lg:bottom-[0.5rem]",
    accent: "from-[#f0fdf4] to-[#bbf7d0]",
  },
];

function MilestoneCard({
  milestone,
  index,
  className,
}: {
  milestone: (typeof milestones)[number];
  index: number;
  className: string;
}) {
  const Icon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 * index }}
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 24px 50px -24px rgba(22, 163, 74, 0.35)" }}
      className={`relative w-full rounded-[22px] border border-white/70 bg-white/80 p-3 shadow-[0_16px_44px_-28px_rgba(15,23,42,0.85)] backdrop-blur xl:p-4 ${className}`}
    >
      <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A] text-[11px] font-semibold text-white">
        {index + 1}
      </div>
      <div className="ml-8 flex items-start gap-2.5">
        <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${milestone.accent} text-[#16A34A] shadow-sm`}>
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-slate-900">{milestone.title}</h3>
          <p className="mt-1 text-xs leading-6 text-slate-600">{milestone.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HealthyJourneyIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)] backdrop-blur-md sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="relative rounded-[24px] border border-[#dcfce7]/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,253,244,0.95))] p-3 sm:p-5">
        <div className="relative mx-auto flex max-w-[560px] flex-col items-center gap-4 lg:min-h-[500px] lg:justify-center">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 560 500" fill="none" aria-hidden="true">
            <motion.path
              d="M155 125C205 92 248 88 292 108C336 128 372 168 398 208"
              stroke="#22C55E"
              strokeWidth="2.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.95 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            />
            <motion.path
              d="M398 208C430 240 438 280 428 320"
              stroke="#16A34A"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 0.95, ease: "easeOut", delay: 0.35 }}
            />
            <motion.path
              d="M238 295C252 332 258 356 254 390"
              stroke="#4ADE80"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.95, ease: "easeOut", delay: 0.5 }}
            />
            <motion.path
              d="M254 390C280 410 324 412 356 388"
              stroke="#22C55E"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            />
            <motion.circle
              cx="152"
              cy="127"
              r="5"
              fill="#16A34A"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            />
            <motion.circle
              cx="398"
              cy="208"
              r="5"
              fill="#16A34A"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <motion.circle
              cx="252"
              cy="392"
              r="5"
              fill="#22C55E"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            />
            <motion.circle
              cx="356"
              cy="388"
              r="5"
              fill="#22C55E"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
          </svg>

          <div className="flex w-full flex-col gap-3 lg:hidden">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.title} milestone={milestone} index={index} className="" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.25, rotate: { duration: 360, repeat: Infinity, ease: "linear" } }}
            className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#16A34A]/20 bg-gradient-to-br from-[#f0fdf4] via-white to-[#dcfce7] shadow-[0_0_0_12px_rgba(34,197,94,0.08),0_18px_55px_-22px_rgba(15,23,42,0.55)] lg:h-[250px] lg:w-[250px]"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-3 rounded-full border border-[#22C55E]/25"
            />
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.2),transparent_55%)]" />
            <div className="absolute left-1/2 top-[-12px] h-8 w-8 -translate-x-1/2 rounded-full border border-[#22C55E]/20 bg-white/80 shadow-sm" />
            <div className="relative z-10 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">निरोगी जीवनाची</p>
              <p className="mt-1 text-lg font-semibold text-[#14532d]">४ मूलभूत सूत्रे</p>
              <div className="mt-3 flex justify-center">
                <div className="relative h-[86px] w-[86px] overflow-hidden rounded-full border border-[#dcfce7] bg-white/80 shadow-sm">
                  <Image
                    src="/images/hero-person/vecteezy_silhouette-of-triumphant-person-standing-on-mountain-peak_56216008.jpg"
                    alt="निरोगी जीवनशैलीचे प्रतीक म्हणून डोंगरशिखरावर उभ्या व्यक्तीची आकृती"
                    fill
                    className="object-cover"
                    sizes="86px"
                  />
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-10 rounded-full border border-[#22C55E]/20 bg-white/90 p-2 text-[#16A34A] shadow-sm"
            >
              <Leaf className="h-4 w-4" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -right-2 top-12 rounded-full border border-[#22C55E]/20 bg-white/90 p-2 text-[#16A34A] shadow-sm"
            >
              <Activity className="h-4 w-4" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -3.5, 0], rotate: [0, 2.5, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute bottom-6 left-3 rounded-full border border-[#22C55E]/20 bg-white/90 p-2 text-[#16A34A] shadow-sm"
            >
              <Brain className="h-4 w-4" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 3.5, 0], rotate: [0, -2.5, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-5 right-3 rounded-full border border-[#22C55E]/20 bg-white/90 p-2 text-[#16A34A] shadow-sm"
            >
              <RefreshCw className="h-4 w-4" />
            </motion.div>
          </motion.div>

          <div className="hidden w-full lg:block">
            <div className="relative h-[360px] w-full">
              {milestones.map((milestone, index) => (
                <MilestoneCard key={milestone.title} milestone={milestone} index={index} className={milestone.className} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9 }}
            className="w-full rounded-[24px] border border-[#dcfce7] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,253,244,0.95))] p-5 text-center shadow-[0_18px_44px_-28px_rgba(15,23,42,0.8)] backdrop-blur"
          >
            <div className="flex items-center justify-center gap-2 text-[#16A34A]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dcfce7] shadow-sm">
                <Sprout className="h-4 w-4" />
              </div>
              <div className="max-w-[420px]">
                <p className="text-sm font-semibold leading-7 text-slate-800 sm:text-base">
                  “निरोगी जीवन हा<br />
                  एक दिवसाचा निर्णय नसून,<br />
                  आयुष्यभराचा प्रवास आहे.”
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#16A34A] sm:text-[11px]">
                  — Healthy Community
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
