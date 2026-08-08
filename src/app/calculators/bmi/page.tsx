import type { Metadata } from "next";
import BmiClient from "./BmiClient";

export const metadata: Metadata = {
  title: "BMI कॅल्क्युलेटर",
  description:
    "उंची आणि वजनावर आधारित BMI मोजा आणि आपल्या वजन श्रेणीचे साधे मूल्यमापन करा.",
  alternates: { canonical: "/calculators/bmi" },
  openGraph: {
    title: "BMI कॅल्क्युलेटर",
    description:
      "उंची आणि वजनावर आधारित BMI मोजा आणि आपल्या वजन श्रेणीचे साधे मूल्यमापन करा.",
    url: "/calculators/bmi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI कॅल्क्युलेटर",
    description:
      "उंची आणि वजनावर आधारित BMI मोजा आणि आपल्या वजन श्रेणीचे साधे मूल्यमापन करा.",
  },
};

export default function BmiPage() {
  return <BmiClient />;
}


