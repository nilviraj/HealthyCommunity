import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleImage from "@/components/ArticleImage";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "मधुमेहाची कारणे आणि जोखीम घटक",
  description: "टाइप २ मधुमेहाचा धोका वाढवणारे आनुवंशिक, आरोग्यविषयक आणि जीवनशैलीशी संबंधित घटक समजून घ्या.",
  alternates: { canonical: "/diabetes/causes" },
  openGraph: {
    title: "मधुमेहाची कारणे आणि जोखीम घटक",
    description: "टाइप २ मधुमेहाचा धोका वाढवणारे आनुवंशिक, आरोग्यविषयक आणि जीवनशैलीशी संबंधित घटक.",
    url: "/diabetes/causes",
    type: "website",
    images: [{ url: "/images/diabetes/diabetes-basics.webp", width: 1536, height: 1024, alt: "मधुमेहाची कारणे आणि जोखीम घटक" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहाची कारणे आणि जोखीम घटक",
    description: "टाइप २ मधुमेहाचा धोका वाढवणारे आनुवंशिक, आरोग्यविषयक आणि जीवनशैलीशी संबंधित घटक.",
    images: ["/images/diabetes/diabetes-basics.webp"],
  },
};

export default function CausesPage() {
  const causes = [
    {
      category: "जीवनशैली",
      items: [
        { title: "जादा वजन किंवा लठ्ठपणा", desc: "विशेषतः पोटाभोवती जादा चरबी असल्यास टाइप २ मधुमेहाचा धोका वाढू शकतो." },
        { title: "हालचालींचा अभाव", desc: "दिवसभर कमी हालचाल आणि नियमित व्यायामाचा अभाव यामुळे धोका वाढू शकतो." },
        { title: "असंतुलित आहार", desc: "साखरयुक्त पेये, अतिप्रक्रिया केलेले पदार्थ आणि जास्त कॅलरीचा आहार वजन व रक्तातील साखरेवर परिणाम करू शकतो." },
        { title: "दीर्घकाळचा ताण", desc: "ताणामुळे झोप, खाण्याच्या सवयी आणि रक्तातील साखरेचे व्यवस्थापन बिघडू शकते; तो एकमेव कारण नसतो." },
        { title: "अपुरी झोप", desc: "सतत अपुरी किंवा अनियमित झोप चयापचयाच्या आरोग्यावर परिणाम करू शकते." },
      ],
    },
    {
      category: "आरोग्य आणि कौटुंबिक घटक",
      items: [
        { title: "कौटुंबिक इतिहास", desc: "आई-वडील किंवा भावंडांना टाइप २ मधुमेह असल्यास धोका वाढू शकतो." },
        { title: "उच्च रक्तदाब", desc: "उच्च रक्तदाब आणि टाइप २ मधुमेहाचे अनेक जोखीम घटक समान असतात." },
        { title: "रक्तातील चरबीचे असामान्य प्रमाण", desc: "ट्रायग्लिसराइड्स जास्त किंवा HDL कोलेस्टेरॉल कमी असणे वाढलेल्या धोक्याशी संबंधित असू शकते." },
        { title: "PCOS", desc: "पॉलिसिस्टिक ओव्हरी सिंड्रोम (PCOS) असलेल्या महिलांमध्ये टाइप २ मधुमेहाचा धोका वाढू शकतो." },
      ],
    },
    {
      category: "इतर घटक",
      items: [
        { title: "वाढते वय", desc: "वयानुसार धोका वाढतो; मात्र टाइप २ मधुमेह कोणत्याही वयात होऊ शकतो." },
        { title: "धूम्रपान", desc: "धूम्रपानामुळे हृदय व रक्तवाहिन्यांचा धोका वाढतो आणि मधुमेहाचे व्यवस्थापन कठीण होऊ शकते." },
        { title: "काही औषधे किंवा आजार", desc: "काही औषधे आणि हार्मोन्सशी संबंधित आजार रक्तातील साखरेवर परिणाम करू शकतात." },
        { title: "गर्भावस्थेतील मधुमेहाचा इतिहास", desc: "पूर्वी गर्भावस्थेतील मधुमेह झाला असल्यास पुढे टाइप २ मधुमेहाचा धोका वाढतो." },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "कारणे" },
        ]}
      />

      <div className="mt-8">
        <HeroBanner
          eyebrow="कारणे आणि जोखीम"
          title="मधुमेहाचा धोका कशामुळे वाढतो?"
          description="मधुमेहाचा प्रत्येक प्रकार वेगळा असतो. येथे प्रामुख्याने टाइप २ मधुमेहाचे जोखीम घटक समजावले आहेत."
        />
      </div>

      <ArticleImage
        src="/images/diabetes/diabetes-basics.webp"
        alt="अग्न्याशय, इन्सुलिन आणि रक्तातील ग्लुकोज यांची प्रक्रिया दर्शवणारे चित्र"
        caption="मधुमेहामागे आनुवंशिकता, इन्सुलिनची कमतरता किंवा इन्सुलिन प्रतिरोध यांसह अनेक घटक असू शकतात."
        priority
      />

      <MedicalTip type="info" title="जाणून घ्या">
        टाइप १ मधुमेह हा चुकीच्या आहारामुळे होत नाही. टाइप २ मधुमेहामागे आनुवंशिकता, शरीराची इन्सुलिन वापरण्याची क्षमता, वजन, हालचाल आणि इतर आरोग्यविषयक घटक एकत्र काम करतात.
      </MedicalTip>

      <div className="mt-12 space-y-12">
        {causes.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{category.category}</h2>
            <div className="grid gap-4">
              {category.items.map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">बदल करता येणाऱ्या गोष्टी</h2>
        <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-6">
          <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
            आनुवंशिकता किंवा वय बदलता येत नाही. मात्र नियमित हालचाल, संतुलित आहार, पुरेशी झोप, धूम्रपान टाळणे आणि गरज असल्यास वजन कमी करणे यामुळे टाइप २ मधुमेहाचा धोका कमी किंवा उशिरा होण्यास मदत होऊ शकते.
          </p>
        </div>
      </section>

      <RelatedLinks
        title="संबंधित मार्गदर्शन"
        description="जोखीम घटक समजून घेतल्यानंतर या पुढील पानांवरून प्रतिबंधाकडे जा."
        links={[
          {
            href: "/diabetes/early-symptoms",
            title: "सुरुवातीची लक्षणे",
            description: "लक्षणे लवकर ओळखली तर तपासणी लवकर सुरू होते.",
          },
          {
            href: "/diabetes/exercise",
            title: "व्यायाम",
            description: "दैनंदिन हालचाल आणि व्यायाम जोखीम कमी करण्यास मदत करतात.",
          },
          {
            href: "/nutrition",
            title: "पोषण आणि आहार",
            description: "जीवनशैली बदलासाठी संतुलित आहाराचा आधार घ्या.",
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
