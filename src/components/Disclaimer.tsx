import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
      <div className="flex gap-4">
        <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
        <div>
          <h3 className="font-semibold text-amber-900 dark:text-amber-200">अस्वीकृती</h3>
          <p className="mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-300">
            या संकेतस्थळावरील माहिती ही केवळ शैक्षणिक आणि जनजागृतीसाठी आहे. ही माहिती डॉक्टरांच्या सल्ल्याचा किंवा उपचारांचा पर्याय नाही. कोणताही नवीन आहार, औषध किंवा उपचार सुरू करण्यापूर्वी आपल्या डॉक्टरांचा किंवा पात्र आरोग्यतज्ज्ञांचा सल्ला घ्या.
          </p>
        </div>
      </div>
    </div>
  );
}
