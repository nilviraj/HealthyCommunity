import type { Metadata } from "next";
import DiabetesRiskClient from "./DiabetesRiskClient";

export const metadata: Metadata = {
  title: "मधुमेह जोखीम कॅल्क्युलेटर",
  description:
    "वय, BMI आणि कुटुंबातील इतिहासावर आधारित मधुमेह जोखीमचे साधे मूल्यमापन करा.",
  alternates: { canonical: "/calculators/diabetes-risk" },
  openGraph: {
    title: "मधुमेह जोखीम कॅल्क्युलेटर",
    description:
      "वय, BMI आणि कुटुंबातील इतिहासावर आधारित मधुमेह जोखीमचे साधे मूल्यमापन करा.",
    url: "/calculators/diabetes-risk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह जोखीम कॅल्क्युलेटर",
    description:
      "वय, BMI आणि कुटुंबातील इतिहासावर आधारित मधुमेह जोखीमचे साधे मूल्यमापन करा.",
  },
};

export default function DiabetesRiskPage() {
  return <DiabetesRiskClient />;
}


