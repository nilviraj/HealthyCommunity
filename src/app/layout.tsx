import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { normalizeAdSenseClientId } from "@/lib/google-ids";
import { resolveSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const adsenseClientId = normalizeAdSenseClientId(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID);

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: {
    default: "आरोग्य समुदाय महाराष्ट्र",
    template: "%s | आरोग्य समुदाय महाराष्ट्र",
  },
  description:
    "आरोग्य, पोषण, मधुमेह, व्यायाम आणि निरोगी जीवनशैलीसाठी महाराष्ट्रातील मराठी समुदाय.",
  keywords: ["मधुमेह", "हृदय आरोग्य", "पोषण", "व्यायाम", "मिलेट्स", "मायक्रोग्रीन्स", "मराठी आरोग्य"],
  openGraph: {
    title: "आरोग्य समुदाय महाराष्ट्र",
    description: "मराठीत आरोग्य, पोषण, मधुमेह आणि जीवनशैलीची माहिती.",
    type: "website",
    locale: "mr_IN",
    siteName: "आरोग्य समुदाय महाराष्ट्र",
  },
  twitter: {
    card: "summary_large_image",
    title: "आरोग्य समुदाय महाराष्ट्र",
    description: "मराठीत आरोग्य, पोषण आणि समुदायात्मक आरोग्य माहिती.",
  },
  ...(adsenseClientId
    ? {
        other: {
          "google-adsense-account": adsenseClientId,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {adsenseClientId ? (
          <script
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          />
        ) : null}
      </head>
      <body className="min-h-full bg-[#f7fff9] text-slate-800">
        {gaMeasurementId ? (
          <>
            <Script
              src={`/google-analytics-init.js?id=${encodeURIComponent(gaMeasurementId)}`}
              strategy="beforeInteractive"
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="beforeInteractive"
            />
          </>
        ) : null}
        <a href="#main-content" className="skip-link">
          मुख्य मजकुराकडे जा
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
