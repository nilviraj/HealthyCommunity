import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह - पायांची काळजी",
  description: "मधुमेहात पायांची विशेष काळजी कशी घ्यावी, दैनंदिन तपासणी आणि खबरदार्या.",
  alternates: { canonical: "/diabetes/foot-care" },
  openGraph: {
    title: "मधुमेह - पायांची काळजी",
    description: "मधुमेहात पायांची विशेष काळजी कशी घ्यावी, दैनंदिन तपासणी आणि खबरदार्या.",
    url: "/diabetes/foot-care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह - पायांची काळजी",
    description: "मधुमेहात पायांची विशेष काळजी कशी घ्यावी, दैनंदिन तपासणी आणि खबरदार्या.",
  },
};

export default function FootCarePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "पायांची काळजी" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="मधुमेह पाय काळजी"
          title="पायांची विशेष काळजी"
          description="मधुमेहात पायांकडे विशेष लक्ष देणे आवश्यक आहे. समस्या सुरुवातीच्या अवस्थेत रोखा."
        />
      </div>

      <MedicalTip type="warning" title="मधुमेहात पाय धोक्यात का आहेत?">
        मधुमेहामुळे नसांना इजा होते (न्युरोपॅथी), त्यामुळे पायांतील संवेदनशीलता कमी होते. यामुळेच छोट्या समस्या मोठ्या समस्यांमध्ये रूपांतरित होओू शकतात.
      </MedicalTip>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">दैनंदिन पाय तपासणी</h2>
          
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-4">दररोज हे तपासा:</h3>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-300">
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">जखम, खरचट किंवा फोड</h4>
                  <p className="text-xs">मोठ्या अंगठ्याजवळ, तळवट, आणि नखांजवळ</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">सूज</h4>
                  <p className="text-xs">पायांमध्ये कोणतीही सूज दिसल्यास नोंद करा</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">रंगबदल</h4>
                  <p className="text-xs">लाल, निळा किंवा काळा रंग होणे धोक्याचे संकेत आहे</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">संसर्गाची लक्षणे</h4>
                  <p className="text-xs">उष्णता, पू येणे, किंवा दुर्गंधी</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">कोरडेपणा किंवा भेगानी</h4>
                  <p className="text-xs">त्वचेची भेग संसर्गाला कारणीभूत होओू शकते</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">नखांची समस्या</h4>
                  <p className="text-xs">नखे जाड होणे, पिवळे पडणे किंवा संसर्गित होणे</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">योग्य पाय काळजी</h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">🚰 आंघोळ</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• कोमट पाण्याने हळूवार धुवा</li>
                <li>• खूप गरम पाण्यापासून दूर राहा</li>
                <li>• सौम्य साबणाचा वापर करा</li>
                <li>• कोरड्या कपड्याने पूर्णपणे कोरडे करा, विशेषत: बोटांमध्ये</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">🧴 मॉइस्चरायझर</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• हलके कोल्ड क्रीम किंवा लोशन लावा</li>
                <li>• बोटांमध्ये लावू नका (संसर्गाचा धोका)</li>
                <li>• तळवटावर चांगले लावा</li>
                <li>• दररोज लावा, विशेषत: उन्हाळ्यात</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">✂️ नखे कापणे</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• सरळ रेषेत कापा, कोपऱ्याहून नको</li>
                <li>• तीक्ष्ण कातरीचा वापर करा</li>
                <li>• नख खूप लहान करू नका</li>
                <li>• फाइलने गुळगुळीत करा</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">💟 बूट आणि मोजे</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• आरामदायक, सहज स्वीकारणारे बूट घाला</li>
                <li>• घट्ट बूटांपासून दूर राहा</li>
                <li>• दररोज नवे बूट घालू नकोत</li>
                <li>• सूती कापडाचे मोजे घाला</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">धोक्याची लक्षणे</h2>

          <div className="grid gap-3">
            <div className="rounded-2xl border-2 border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-200">⚠️ तत्काळ डॉक्टरांना भेटा जर:</h3>
              <ul className="mt-3 space-y-2 text-sm text-red-800 dark:text-red-300">
                <li>• पायांमध्ये तीव्र वेदना</li>
                <li>• सूज वाढत आहे</li>
                <li>• जखमातून पू येत आहे</li>
                <li>• काळी किंवा निळी त्वचा</li>
                <li>• तापसह सूज</li>
                <li>• पायांतून दुर्गंधी येत आहे</li>
              </ul>
            </div>
          </div>
        </div>

        <MedicalTip type="important" title="लक्षात ठेवा">
          <ul className="mt-2 space-y-2 text-sm">
            <li>• कधीही अनवाण्याने चालू नका</li>
            <li>• गरम वाळू किंवा फरशीवर सावध राहा</li>
            <li>• नखांमध्ये व त्वचेमध्ये संसर्ग टाळा</li>
            <li>• नियमित व्यायाम करा – हे रक्तअभिसरणाला मदत करते</li>
            <li>• धूम्रपान करू नका – ते रक्तप्रवाहावर परिणाम करते</li>
          </ul>
        </MedicalTip>
      </section>

      <RelatedLinks
        title="पायांची काळजी आणि पुढील विषय"
        description="फूट केअरमधून तपासणी, देखरेख आणि गुंतागुंत प्रतिबंधाकडे पुढे जा."
        links={[
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्त शर्करा मापन",
            description: "पायांच्या आरोग्यावर रक्त शर्करा नियंत्रणाचा परिणाम समजून घ्या.",
          },
          {
            href: "/diabetes/complications",
            title: "जटिलता",
            description: "नवीन समस्या टाळण्यासाठी दीर्घकालीन गुंतागुंत वाचा.",
          },
          {
            href: "/diabetes/diagnosis",
            title: "निदान",
            description: "जोखीम लवकर ओळखण्यासाठी तपासणीबद्दल अधिक जाणून घ्या.",
          },
        ]}
      />

      <div className="mt-12">
        <CTA />
      </div>

      <div className="mt-12">
        <Disclaimer />
      </div>
    </main>
  );
}


