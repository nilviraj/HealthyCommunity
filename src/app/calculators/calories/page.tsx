import type { Metadata } from "next";
import CaloriesClient from "./CaloriesClient";

export const metadata: Metadata = {
  title: "कॅलरी कॅल्क्युलेटर",
  description:
    "वय, वजन, उंची आणि लिंगानुसार अंदाजे दैनिक कॅलरी गरज मोजण्यासाठी साधे साधन.",
  alternates: { canonical: "/calculators/calories" },
  openGraph: {
    title: "कॅलरी कॅल्क्युलेटर",
    description:
      "वय, वजन, उंची आणि लिंगानुसार अंदाजे दैनिक कॅलरी गरज मोजण्यासाठी साधे साधन.",
    url: "/calculators/calories",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "कॅलरी कॅल्क्युलेटर",
    description:
      "वय, वजन, उंची आणि लिंगानुसार अंदाजे दैनिक कॅलरी गरज मोजण्यासाठी साधे साधन.",
  },
};

export default function CaloriesPage() {
  return <CaloriesClient />;
}


