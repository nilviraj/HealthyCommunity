import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेह - पायांची काळजी",
  description: "मधुमेहात पायांची दैनंदिन तपासणी, स्वच्छता, नखांची काळजी, योग्य पादत्राणे आणि धोक्याची लक्षणे समजून घ्या.",
  alternates: { canonical: "/diabetes/foot-care" },
  openGraph: {
    title: "मधुमेह - पायांची काळजी",
    description: "मधुमेहात पायांची दैनंदिन तपासणी, स्वच्छता, योग्य पादत्राणे आणि धोक्याची लक्षणे.",
    url: "/diabetes/foot-care",
    type: "website",
    images: [{ url: "/images/diabetes/foot-care.webp", width: 1536, height: 1024, alt: "मधुमेहात पायांची दैनंदिन तपासणी" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेह - पायांची काळजी",
    description: "मधुमेहात पायांची दैनंदिन तपासणी, स्वच्छता, योग्य पादत्राणे आणि धोक्याची लक्षणे.",
    images: ["/images/diabetes/foot-care.webp"],
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
          eyebrow="मधुमेहात पायांची काळजी"
          title="पायांची रोज काळजी कशी घ्यावी?"
          description="छोटी जखमही जाणवली नाही तर ती वाढू शकते. दररोज तपासणी केल्याने समस्या लवकर लक्षात येते."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/foot-care.webp"
        alt="आरशाच्या मदतीने पायांची त्वचा तपासणारी ज्येष्ठ भारतीय महिला"
        caption="दररोज पाय तपासल्याने सूज, फोड, कापलेली जागा किंवा रंगातील बदल लवकर लक्षात येऊ शकतात."
        priority
      />

      <MedicalTip type="warning" title="मधुमेहात पाय धोक्यात का आहेत?">
        मधुमेहामुळे काही लोकांच्या पायातील मज्जातंतूंची संवेदना कमी होऊ शकते आणि रक्तपुरवठ्यावर परिणाम होऊ शकतो. त्यामुळे छोटी जखम, फोड किंवा भाजलेली जागा लक्षात न येता वाढू शकते.
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
                  <h4 className="font-semibold">जखम, खरचटणे किंवा फोड</h4>
                  <p className="text-xs">बोटांच्या मध्ये, तळपायावर, टाचेवर आणि नखांजवळ नीट पाहा</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">सूज</h4>
                  <p className="text-xs">नवीन किंवा वाढती सूज दुर्लक्षित करू नका</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <div>
                  <h4 className="font-semibold">रंगबदल</h4>
                  <p className="text-xs">लालसर, फिकट, निळसर किंवा काळा रंग दिसल्यास डॉक्टरांचा सल्ला घ्या</p>
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
                  <h4 className="font-semibold">कोरडेपणा किंवा भेगा</h4>
                  <p className="text-xs">त्वचेतील भेगांमधून संसर्ग होऊ शकतो</p>
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
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">पायांची योग्य काळजी</h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">🚰 आंघोळ</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• कोमट पाण्याने हळूवार धुवा</li>
                <li>• खूप गरम पाण्यापासून दूर राहा</li>
                <li>• सौम्य साबणाचा वापर करा</li>
                <li>• मऊ कपड्याने पाय कोरडे करा, विशेषतः बोटांच्या मधील जागा</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">🧴 मॉइस्चरायझर</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• कोरड्या त्वचेवर साधे मॉइस्चरायझर लावा</li>
                <li>• बोटांच्या मधील जागेत लावू नका; ओलावा राहू शकतो</li>
                <li>• तळपाय आणि टाचांवरील कोरडेपणाकडे लक्ष द्या</li>
                <li>• जखम किंवा संसर्गावर स्वतःहून क्रीम लावू नका</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">✂️ नखे कापणे</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• नखे सरळ कापा; कोपरे खोलवर कापू नका</li>
                <li>• स्वच्छ नेलकटर वापरा</li>
                <li>• नख खूप लहान करू नका</li>
                <li>• फाइलने गुळगुळीत करा</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">💟 बूट आणि मोजे</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• योग्य मापाचे, पायाला न घासणारे बूट घाला</li>
                <li>• बूट घालण्यापूर्वी आत दगड किंवा टोकदार वस्तू नाही ना ते पाहा</li>
                <li>• नवीन बूट सुरुवातीला थोड्या वेळासाठी वापरा</li>
                <li>• स्वच्छ, कोरडे आणि घट्ट नसलेले मोजे घाला</li>
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
                <li>• तापासह लालसरपणा किंवा सूज</li>
                <li>• पायांतून दुर्गंधी येत आहे</li>
              </ul>
            </div>
          </div>
        </div>

        <MedicalTip type="important" title="लक्षात ठेवा">
          <ul className="mt-2 space-y-2 text-sm">
            <li>• घरातही अनवाणी चालणे टाळा</li>
            <li>• पाण्याचे तापमान हाताने किंवा थर्मामीटरने तपासा; पायाची संवेदना कमी असू शकते</li>
            <li>• कॉर्न किंवा घट्ट त्वचा स्वतः कापू नका आणि रासायनिक कॉर्न रिमूव्हर वापरू नका</li>
            <li>• प्रत्येक वैद्यकीय भेटीत पायांची तपासणी करून घ्या; किमान वर्षातून एक सविस्तर तपासणी आवश्यक असू शकते</li>
            <li>• धूम्रपान रक्तपुरवठ्यावर परिणाम करते; ते सोडण्यासाठी मदत घ्या</li>
          </ul>
        </MedicalTip>
      </section>

      <RelatedLinks
        title="पायांची काळजी आणि पुढील विषय"
        description="फूट केअरमधून तपासणी, देखरेख आणि गुंतागुंत प्रतिबंधाकडे पुढे जा."
        links={[
          {
            href: "/diabetes/blood-sugar-monitoring",
            title: "रक्तातील साखरेची तपासणी",
            description: "पायांच्या आरोग्यासाठी रक्तातील साखरेचे व्यवस्थापन का महत्त्वाचे आहे ते समजून घ्या.",
          },
          {
            href: "/diabetes/complications",
            title: "गुंतागुंत",
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
