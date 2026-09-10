import type { Metadata } from "next";
import WaterClient from "./WaterClient";

export const metadata: Metadata = {
  title: "दैनंदिन पाणी सेवन संदर्भ",
  description:
    "प्रौढ, गर्भावस्था आणि स्तनपानासाठी पाणी व इतर पेयांच्या पर्याप्त सेवनाचा अधिकृत संदर्भ पाहा.",
  alternates: { canonical: "/calculators/water" },
  openGraph: {
    title: "दैनंदिन पाणी सेवन संदर्भ",
    description:
      "प्रौढ, गर्भावस्था आणि स्तनपानासाठी पाणी व इतर पेयांच्या पर्याप्त सेवनाचा अधिकृत संदर्भ पाहा.",
    url: "/calculators/water",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "दैनंदिन पाणी सेवन संदर्भ",
    description:
      "प्रौढ, गर्भावस्था आणि स्तनपानासाठी पाणी व इतर पेयांच्या पर्याप्त सेवनाचा अधिकृत संदर्भ पाहा.",
  },
};

export default function WaterPage() {
  return <WaterClient />;
}

