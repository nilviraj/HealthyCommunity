import type { Metadata } from "next";
import ArticleTrustPanel from "@/components/ArticleTrustPanel";
import ArticleImage from "@/components/ArticleImage";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import FAQ from "@/components/FAQ";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import RelatedLinks from "@/components/RelatedLinks";
import { defaultArticleAuthor } from "@/data/articles";
import { resolveSiteUrl } from "@/lib/site-url";

const publishedAt = "2026-08-08";
const updatedAt = "2026-09-15";

const references = [
  {
    title: "Guidelines for Management of Type 2 Diabetes",
    publisher: "Indian Council of Medical Research (ICMR)",
    url: "https://www.icmr.gov.in/icmrobject/custom_data/pdf/resource-guidelines/ICMR_GuidelinesType2diabetes2018_0.pdf",
  },
  {
    title: "Dietary Guidelines for Indians 2024",
    publisher: "ICMR–National Institute of Nutrition (NIN)",
    url: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    title: "Healthy Living with Diabetes",
    publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
    url: "https://www.niddk.nih.gov/health-information/diabetes/overview/healthy-living-with-diabetes",
  },
  {
    title: "Low Blood Glucose (Hypoglycemia)",
    publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
    url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia",
  },
  {
    title: "Eating Well & Managing Diabetes",
    publisher: "American Diabetes Association (ADA)",
    url: "https://diabetes.org/food-nutrition/eating-healthy",
  },
];

const faqs = [
  {
    question: "मधुमेहात भात किंवा पोळी पूर्णपणे बंद करावी का?",
    answer:
      "सर्वांसाठी भात किंवा पोळी पूर्णपणे बंद करण्याचा नियम नाही. धान्याचा प्रकार, प्रमाण, त्यासोबत घेतलेल्या भाज्या व प्रथिने, औषधे आणि जेवणानंतरची साखर यांचा एकत्रित विचार करावा. तुमच्यासाठी योग्य प्रमाण डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञ ठरवू शकतात.",
  },
  {
    question: "मधुमेहात फळे खाता येतात का?",
    answer:
      "होय, बहुतेक लोक संपूर्ण फळ योग्य प्रमाणात आहारात घेऊ शकतात. फळांचा रस टाळणे चांगले, कारण त्यातून साखर पटकन मिळते आणि तंतू कमी मिळतात. फळाचा प्रकार व प्रमाण तुमच्या रक्तातील साखरेच्या नोंदींनुसार ठरवा.",
  },
  {
    question: "मधुमेहासाठी वेगळे महागडे पदार्थ घ्यावे लागतात का?",
    answer:
      "बहुतेक वेळा नाही. घरातील पालेभाज्या, इतर भाज्या, डाळी-कडधान्ये, अंडी किंवा इतर प्रथिनांचे स्रोत, दही आणि योग्य प्रमाणातील धान्य वापरून संतुलित जेवण करता येते. ‘डायबेटिक’ असा दावा असलेला पदार्थ आपोआप आरोग्यदायी ठरत नाही.",
  },
  {
    question: "भरडधान्ये किंवा गूळ साखरेपेक्षा सुरक्षित आहेत का?",
    answer:
      "ज्वारी, बाजरी, नाचणी यांसारख्या भरडधान्यांत उपयुक्त पोषक घटक असू शकतात, पण त्यातही कर्बोदके असतात; प्रमाण महत्त्वाचे आहे. गूळ, मध आणि साखर या सर्वांमुळे रक्तातील ग्लुकोज वाढू शकतो. त्यामुळे ‘नैसर्गिक’ म्हणून अमर्याद सेवन करणे योग्य नाही.",
  },
  {
    question: "दिवसभर थोडे-थोडे खाणे प्रत्येकासाठी आवश्यक आहे का?",
    answer:
      "नाही. जेवणाची वेळ आणि नाश्त्याची गरज औषधे, इन्सुलिन, कामाचे वेळापत्रक, व्यायाम आणि इतर आजारांवर अवलंबून असते. विशेषतः इन्सुलिन किंवा साखर कमी करणारी काही औषधे घेत असल्यास जेवणाची वेळ स्वतः बदलू नका.",
  },
];

export const metadata: Metadata = {
  title: "मधुमेहासाठी आहार: काय खावे, किती खावे?",
  description:
    "मधुमेहात ताट कसे भरावे, भात-पोळी व फळांचे प्रमाण कसे ठरवावे आणि महाराष्ट्रातील घरगुती पदार्थांमधून संतुलित जेवण कसे निवडावे ते समजून घ्या.",
  keywords: ["मधुमेहासाठी आहार", "शुगरमध्ये काय खावे", "diabetes diet Marathi", "मधुमेह आहार तक्ता"],
  alternates: { canonical: "/diabetes/diet" },
  openGraph: {
    title: "मधुमेहासाठी आहार: काय खावे, किती खावे?",
    description: "महाराष्ट्रातील घरगुती पदार्थ वापरून संतुलित ताट तयार करण्याचे सोपे, संदर्भाधारित मार्गदर्शन.",
    url: "/diabetes/diet",
    type: "article",
    images: [{ url: "/images/diabetes/balanced-diet.webp", width: 1536, height: 1024, alt: "मधुमेहासाठी संतुलित भारतीय ताट" }],
    locale: "mr_IN",
    publishedTime: publishedAt,
    modifiedTime: updatedAt,
    authors: [defaultArticleAuthor.name],
  },
  twitter: {
    card: "summary_large_image",
    title: "मधुमेहासाठी आहार: काय खावे, किती खावे?",
    description: "भात-पोळी बंद करण्याऐवजी प्रमाण, संतुलित ताट आणि रक्तातील साखरेच्या नोंदींवर भर द्या.",
    images: ["/images/diabetes/balanced-diet.webp"],
  },
};

const reviewStatus = {
  label: "विश्वसनीय स्रोतांसह संपादकीय तपासणी",
  description:
    "लेखातील प्रमुख दावे ICMR, ICMR–NIN, NIDDK आणि ADA यांच्या सार्वजनिक मार्गदर्शनासोबत तुलना करून संपादकीय पातळीवर तपासले आहेत.",
  medicallyReviewed: false,
};

export default function DietPage() {
  const siteUrl = resolveSiteUrl();
  const pageUrl = `${siteUrl}/diabetes/diet`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "मधुमेहासाठी आहार: काय खावे, किती खावे?",
        description: metadata.description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/diabetes/balanced-diet.webp`,
          width: 1536,
          height: 1024,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        inLanguage: "mr-IN",
        datePublished: publishedAt,
        dateModified: updatedAt,
        author: {
          "@type": defaultArticleAuthor.schemaType,
          name: defaultArticleAuthor.name,
          url: new URL(defaultArticleAuthor.href, siteUrl).toString(),
        },
        publisher: {
          "@type": "Organization",
          name: "आरोग्य समुदाय महाराष्ट्र",
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/Healthy_Community_Logo.png` },
        },
        citation: references.map((reference) => reference.url),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <Breadcrumb
        items={[
          { label: "मुख्यपृष्ठ", href: "/" },
          { label: "मधुमेह माहिती", href: "/diabetes" },
          { label: "आहार" },
        ]}
      />

      <article className="mt-8">
        <HeroBanner
          eyebrow="मधुमेहासाठी आहार"
          title="काय खावे, किती खावे?"
          description="भात-पोळी पूर्ण बंद करण्यापेक्षा ताटातील प्रमाण, पदार्थांची जोड आणि तुमच्या रक्तातील साखरेचा प्रतिसाद समजून घेणे अधिक महत्त्वाचे आहे."
        />

        <ArticleImage
          src="/images/diabetes/balanced-diet.webp"
          alt="भाज्या, कडधान्य, पोळी, दही आणि कोशिंबिरीचे संतुलित भारतीय ताट"
          caption="ताटाचा मोठा भाग भाज्यांसाठी आणि उरलेला भाग प्रथिने व योग्य प्रमाणातील धान्यासाठी ठेवणे हा सोपा सुरुवातीचा नमुना आहे."
          priority
        />

        <ArticleTrustPanel
          author={defaultArticleAuthor}
          publishedAt={publishedAt}
          updatedAt={updatedAt}
          reviewStatus={reviewStatus}
          sourcesCount={references.length}
        />

        <div className="mt-12 space-y-10 text-base leading-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">सुरुवातीला हे लक्षात ठेवा</h2>
            <div className="mt-4 space-y-4">
              <p>
                मधुमेहासाठी सर्वांना लागू होईल असा एकच आहारतक्ता नसतो. काय खायचे, किती खायचे आणि कोणत्या वेळी खायचे हे मधुमेहाचा प्रकार, औषधे किंवा इन्सुलिन, कामाची वेळ, शारीरिक हालचाल, वजन आणि इतर आजार यांवर अवलंबून असते.
              </p>
              <p>
                आहाराचा उद्देश केवळ रक्तातील साखर कमी करणे नाही. रक्तदाब, कोलेस्टेरॉल, वजन आणि पुरेसे पोषण यांचाही विचार करावा लागतो. म्हणून अचानक उपवास, अतिशय कमी कर्बोदकांचा आहार किंवा औषधांमध्ये बदल स्वतःहून करू नका.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">संतुलित ताटाची सोपी पद्धत</h2>
            <p className="mt-4">
              साधारण ९ इंचांचे ताट गृहीत धरून खालील प्रमाण हा सुरुवातीचा सोपा नमुना म्हणून वापरता येतो. तुमची गरज वेगळी असल्यास डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञ बदल सुचवू शकतात.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30 sm:col-span-2">
                <h3 className="font-bold text-emerald-950 dark:text-emerald-100">१/२ ताट: कमी स्टार्च असलेल्या भाज्या</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-900 dark:text-emerald-200">
                  मेथी, पालक, शेपू, भेंडी, गवार, दोडका, दुधी भोपळा, कोबी, फ्लॉवर, वांगी, काकडी, टोमॅटो किंवा कोशिंबीर. बटाटा, रताळे, सुरण आणि मका ताटाच्या या अर्ध्या भागात धरू नका; त्यात कर्बोदके तुलनेने जास्त असतात.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-800 dark:bg-sky-950/30">
                <h3 className="font-bold text-sky-950 dark:text-sky-100">१/४ ताट: प्रथिनांचा स्रोत</h3>
                <p className="mt-2 text-sm leading-7 text-sky-900 dark:text-sky-200">
                  डाळ, उसळ, हरभरा, मूग, मटकी, चवळी, सोयाबीन, पनीर किंवा टोफू; मांसाहारी पर्यायांमध्ये अंडे, मासे किंवा कमी चरबीचे मांस. डाळी-कडधान्यांत कर्बोदकेही असतात, त्यामुळे प्रमाण वैयक्तिक असते.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
                <h3 className="font-bold text-amber-950 dark:text-amber-100">१/४ ताट: कर्बोदकांचा स्रोत</h3>
                <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-200">
                  पोळी, भाकरी, भात, नाचणी, ज्वारी, बाजरी किंवा इतर धान्य. एकाच जेवणात भात, पोळी आणि बटाटा मोठ्या प्रमाणात एकत्र घेण्याऐवजी एक प्रमुख पर्याय आणि योग्य प्रमाण निवडा.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7">
              सोबत पाणी किंवा साखर न घातलेले पेय निवडा. ताटाचा आकार मोठा असल्यास वरील विभागणी असूनही एकूण प्रमाण जास्त होऊ शकते.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">महाराष्ट्रातील घरगुती जेवणात करता येणारे बदल</h2>
            <div className="mt-5 grid gap-4">
              {[
                ["भाजी कमी, पोळ्या किंवा भात जास्त", "भाजी आणि कोशिंबिरीचा भाग वाढवा; धान्याचा भाग ताटाच्या साधारण चौथ्या भागात ठेवा."],
                ["फक्त पोहे, उपमा किंवा साबुदाणा", "प्रमाण मर्यादित ठेवा आणि त्यात भरपूर भाज्या जोडा; सोबत उसळ, साधे साखर न घातलेले दही किंवा अंड्यासारखा प्रथिनांचा स्रोत घ्या."],
                ["गोड चहा, शीतपेय किंवा फळांचा रस", "साखर न घातलेला चहा, ताक किंवा पाणी निवडा. फळांचा रस घेण्याऐवजी योग्य प्रमाणात संपूर्ण फळ खा."],
                ["बिस्किटे, चिवडा किंवा तळलेला नाश्ता", "भूक आणि औषधांच्या वेळेनुसार भाजलेले हरभरे, थोडे शेंगदाणे, मोड आलेली कडधान्ये, साधे साखर न घातलेले दही किंवा संपूर्ण फळ विचारात घ्या."],
                ["पॅकेटवर ‘डायबेटिक’ किंवा ‘शुगर-फ्री’ लिहिले आहे म्हणून ते निवडणे", "लेबलवरील एकूण कर्बोदके, संपृक्त मेद (Saturated fat), मीठ आणि एका सर्व्हिंगचे प्रमाण तपासा. केवळ पुढील बाजूवरील दाव्यावर विश्वास ठेवू नका."],
              ].map(([before, after]) => (
                <div key={before} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="font-semibold text-slate-950 dark:text-white">सध्याची सवय: {before}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">सोपे पर्याय: {after}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">एका दिवसाचा लवचिक नमुना</h2>
            <p className="mt-4">
              हा वैयक्तिक आहारतक्ता नाही; ही फक्त उदाहरणे आहेत. घरातील उपलब्ध पदार्थ वापरून संतुलित ताट कसे तयार करता येईल ते यात दाखवले आहे.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["न्याहारी", "भाज्या घातलेले पोहे किंवा उपमा + उसळ/दही/अंडे; किंवा भाज्यांसोबत ज्वारीचे थालीपीठ आणि साधे साखर न घातलेले दही."],
                ["दुपारचे जेवण", "अर्धे ताट भाजी व कोशिंबीर + डाळ/उसळ किंवा इतर प्रथिनांचा स्रोत + योग्य प्रमाणात पोळी, भाकरी किंवा भात + साखर न घातलेले ताक."],
                ["दोन जेवणांच्या मध्ये भूक लागल्यास", "संपूर्ण फळ, भाजलेले हरभरे, थोडे शेंगदाणे किंवा साधे साखर न घातलेले दही. दोन जेवणांच्या मध्ये काही खाण्याची गरज आहे की नाही हे औषधे आणि भुकेनुसार ठरते."],
                ["रात्रीचे जेवण", "दुपारच्या ताटासारखे संतुलन ठेवा. रात्री भात खाल्ल्यानेच साखर वाढते असा एकच नियम नाही; प्रकार, प्रमाण आणि तुमचा प्रतिसाद महत्त्वाचा आहे."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
                  <h3 className="font-bold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">तुमच्यासाठी योग्य प्रमाण कसे शोधाल?</h2>
            <ol className="mt-5 space-y-3 pl-5">
              <li className="list-decimal pl-1 marker:font-bold marker:text-emerald-700">डॉक्टरांनी सांगितलेल्या वेळी रक्तातील साखर तपासा आणि नोंद ठेवा.</li>
              <li className="list-decimal pl-1 marker:font-bold marker:text-emerald-700">त्या जेवणात काय आणि अंदाजे किती खाल्ले, औषधाची वेळ आणि हालचाल नोंदवा.</li>
              <li className="list-decimal pl-1 marker:font-bold marker:text-emerald-700">एकाच पदार्थानंतर वारंवार साखर जास्त दिसत असल्यास त्याचे प्रमाण आणि जेवणातील इतर पदार्थ तपासा.</li>
              <li className="list-decimal pl-1 marker:font-bold marker:text-emerald-700">नोंदी डॉक्टर किंवा आहारतज्ज्ञांना दाखवून सुरक्षित बदल ठरवा; औषध किंवा इन्सुलिन स्वतः कमी करू नका.</li>
            </ol>
          </section>

          <MedicalTip type="warning" title="इन्सुलिन किंवा काही मधुमेहाची औषधे घेत असाल तर">
            जेवण उशिरा घेणे, जेवण वगळणे किंवा नेहमीपेक्षा कमी खाणे यामुळे काही लोकांमध्ये रक्तातील साखर खूप कमी होऊ शकते (Hypoglycemia). घाम येणे, थरथर, चक्कर, तीव्र भूक, गोंधळ किंवा अशक्तपणा अशी लक्षणे दिसल्यास डॉक्टरांनी दिलेल्या तातडीच्या कृती-योजनेनुसार वागा. बेशुद्धी किंवा गिळता न येणे ही आपत्कालीन स्थिती आहे; तोंडाने काहीही देऊ नका आणि त्वरित वैद्यकीय मदत घ्या.
          </MedicalTip>

          <MedicalTip type="important" title="विशेष परिस्थितीत वैयक्तिक आहार आवश्यक">
            गर्भावस्था, टाइप १ मधुमेह, मूत्रपिंड किंवा यकृताचा आजार, वारंवार साखर कमी होणे, कमी वजन, वृद्धत्व किंवा अनेक औषधे सुरू असतील तर हा सर्वसाधारण नमुना पुरेसा नाही. डॉक्टर आणि नोंदणीकृत आहारतज्ज्ञांच्या मदतीने वैयक्तिक योजना तयार करा.
          </MedicalTip>

          <section aria-labelledby="diet-faq-heading">
            <h2 id="diet-faq-heading" className="text-2xl font-bold text-slate-950 dark:text-white">वारंवार विचारले जाणारे प्रश्न</h2>
            <div className="mt-5">
              <FAQ items={faqs} />
            </div>
          </section>

          <section aria-labelledby="diet-references-heading">
            <h2 id="diet-references-heading" className="text-2xl font-bold text-slate-950 dark:text-white">विश्वसनीय संदर्भ</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              हा लेख तयार करताना खालील अधिकृत आरोग्य व पोषण मार्गदर्शकांचा आधार घेतला आहे.
            </p>
            <ol className="mt-4 space-y-3">
              {references.map((reference, index) => (
                <li key={reference.url} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 dark:border-slate-700 dark:bg-slate-900">
                  <span className="mr-2 font-bold text-slate-500">{index + 1}.</span>
                  <a href={reference.url} target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950 dark:text-emerald-300">
                    {reference.title}
                  </a>
                  <span className="block pl-6 text-slate-600 dark:text-slate-300">{reference.publisher}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <RelatedLinks
          title="आहारासोबत पुढे काय पाहाल?"
          description="जेवणाचा परिणाम समजून घेण्यासाठी मोजमाप आणि हालचालींचे मार्गदर्शन वाचा."
          links={[
            {
              href: "/diabetes/blood-sugar-monitoring",
              title: "रक्तातील साखरेची नोंद",
              description: "तपासणीची वेळ आणि नोंदींचा उपयोग समजून घ्या.",
            },
            {
              href: "/diabetes/exercise",
              title: "मधुमेह आणि व्यायाम",
              description: "सुरक्षित हालचाल आणि जेवणाशी तिचा संबंध समजून घ्या.",
            },
            {
              href: "/millets",
              title: "भरडधान्यांचे मार्गदर्शन",
              description: "ज्वारी, बाजरी, नाचणी आणि इतर भरडधान्यांचे आहारातील स्थान जाणून घ्या.",
            },
          ]}
        />

        <div className="mt-12">
          <CTA />
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </article>
    </main>
  );
}
