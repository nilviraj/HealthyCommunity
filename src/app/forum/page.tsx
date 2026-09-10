import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";
import TrackedCommunityLink from "@/components/TrackedCommunityLink";

export const metadata: Metadata = {
  title: "चर्चा मंच",
  description:
    "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/forum" },
  openGraph: {
    title: "चर्चा मंच",
    description:
      "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
    url: "/forum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "चर्चा मंच",
    description:
      "समुदायातील अनुभव, प्रश्न, आणि आरोग्यदायी जीवनशैलीसाठी मराठीत सकारात्मक चर्चेचा मंच.",
  },
};

export default function ForumPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "चर्चा मंच" }]} />

      <SectionTitle
        as="h1"
        eyebrow="चर्चा मंच"
        title="Healthy Community मध्ये सहभागी व्हा"
        description="या संकेतस्थळावर थेट प्रश्न किंवा प्रतिक्रिया लिहिण्याची सुविधा सध्या उपलब्ध नाही. समुदायात सहभागी होण्यासाठी खालील पर्याय वापरा."
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <TrackedCommunityLink href="https://chat.whatsapp.com/Bmp0kLqqEfW6gRr6gipqOm" placement="forum" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white">WhatsApp समुदाय पाहा</TrackedCommunityLink>
        <Link href="/contact" className="rounded-xl border border-emerald-200 bg-white px-5 py-3 font-semibold text-emerald-800">आमच्याशी संपर्क साधा</Link>
        <Link href="/articles" className="rounded-xl border border-emerald-200 bg-white px-5 py-3 font-semibold text-emerald-800">आरोग्य लेख वाचा</Link>
      </div>
    </main>
  );
}

