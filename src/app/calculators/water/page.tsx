import type { Metadata } from "next";
import WaterClient from "./WaterClient";

export const metadata: Metadata = {
  title: "पाणी सेवन कॅल्क्युलेटर",
  description:
    "वजन आणि सक्रियतेनुसार दररोज किती पाणी घ्यावे याचा साधा अंदाज मिळवा.",
  alternates: { canonical: "/calculators/water" },
  openGraph: {
    title: "पाणी सेवन कॅल्क्युलेटर",
    description:
      "वजन आणि सक्रियतेनुसार दररोज किती पाणी घ्यावे याचा साधा अंदाज मिळवा.",
    url: "/calculators/water",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "पाणी सेवन कॅल्क्युलेटर",
    description:
      "वजन आणि सक्रियतेनुसार दररोज किती पाणी घ्यावे याचा साधा अंदाज मिळवा.",
  },
};

export default function WaterPage() {
  return <WaterClient />;
}


