"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Search, Sun, UserRound, X } from "lucide-react";

const links = [
  { href: "/", label: "मुख्यपृष्ठ" },
  { href: "/about", label: "आमच्याबद्दल" },
  { href: "/diabetes", label: "मधुमेह माहिती" },
  { href: "/nutrition", label: "पोषण" },
  { href: "/exercise", label: "व्यायाम" },
  { href: "/millets", label: "मिलेट्स" },
  { href: "/microgreens", label: "मायक्रोग्रीन्स" },
  { href: "/articles", label: "आरोग्य लेख" },
  { href: "/forum", label: "चर्चा मंच" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    let frameId = 0;

    const onScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const nextScrolled = window.scrollY > 12;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkMode = theme === "dark";
  const themeToggleLabel = isDarkMode ? "लाइट मोड सुरू करा" : "डार्क मोड सुरू करा";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"
          : "border-transparent bg-white/70 backdrop-blur-xl dark:bg-slate-950/70"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="आरोग्य समुदाय महाराष्ट्र">
          <Image
            src="/images/logo.jpeg"
            alt="Healthy Community Logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-2xl object-cover shadow-lg"
            priority
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-wide text-slate-900 dark:text-white sm:text-lg">
              Healthy Community
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">मराठी आरोग्य मंच</span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <nav
            aria-label="प्रमुख नेव्हिगेशन"
            className="flex flex-wrap items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-2 flex items-center gap-2">
            <Link
              href="/articles"
              aria-label="लेख शोधा"
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={themeToggleLabel}
              aria-pressed={isDarkMode}
              onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/contact"
              aria-label="संपर्क पृष्ठ उघडा"
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <UserRound className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/articles"
            aria-label="लेख शोधा"
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label={themeToggleLabel}
            aria-pressed={isDarkMode}
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label={isOpen ? "मेनू बंद करा" : "मेनू उघडा"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200/80 bg-white/95 px-4 py-4 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
        >
          <nav aria-label="मोबाइल नेव्हिगेशन" className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              प्रश्न विचारा
            </Link>
            <Link
              href="/forum"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:text-slate-200"
            >
              समुदायात सामील व्हा
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
