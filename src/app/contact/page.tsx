import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "संपर्क",
  description:
    "प्रश्न, अभिप्राय किंवा सहकार्यासाठी आरोग्य समुदायशी संपर्क साधा. आम्ही मराठीत मार्गदर्शन देण्यासाठी तयार आहोत.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "संपर्क",
    description:
      "प्रश्न, अभिप्राय किंवा सहकार्यासाठी आरोग्य समुदायशी संपर्क साधा. आम्ही मराठीत मार्गदर्शन देण्यासाठी तयार आहोत.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "संपर्क",
    description:
      "प्रश्न, अभिप्राय किंवा सहकार्यासाठी आरोग्य समुदायशी संपर्क साधा. आम्ही मराठीत मार्गदर्शन देण्यासाठी तयार आहोत.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}


