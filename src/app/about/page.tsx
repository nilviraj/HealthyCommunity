import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "आमच्याबद्दल",
  description:
    "Healthy Community चा उद्देश, संस्थापकांचा प्रवास, आणि मराठीत आरोग्य शिक्षण अधिक सुलभ करण्याची आमची भूमिका.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "आमच्याबद्दल",
    description:
      "Healthy Community चा उद्देश, संस्थापकांचा प्रवास, आणि मराठीत आरोग्य शिक्षण अधिक सुलभ करण्याची आमची भूमिका.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "आमच्याबद्दल",
    description:
      "Healthy Community चा उद्देश, संस्थापकांचा प्रवास, आणि मराठीत आरोग्य शिक्षण अधिक सुलभ करण्याची आमची भूमिका.",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "आमच्याबद्दल" }]} />

      <SectionTitle
        as="h1"
        eyebrow="आमच्याबद्दल"
        title="Healthy Community – निरोगी जीवनासाठी एकत्र येऊया"
        description="माझ्या स्वतःच्या मधुमेहाच्या प्रवासातून सुरू झालेला हा उपक्रम आहे. योग्य माहिती, आरोग्यदायी जीवनशैली आणि समुदायाच्या मदतीने प्रत्येकाला अधिक निरोगी आयुष्य जगण्यासाठी प्रेरणा देणे हेच आमचे ध्येय आहे."
      />

      <div className="mt-10 space-y-8">

        {/* माझा प्रवास */}
        <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            🌿 माझा प्रवास
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            नमस्कार! मी गेल्या काही महिन्यांपासून मधुमेहासोबत जगत आहे.
            मधुमेहाचे निदान झाल्यानंतर माझ्या मनात अनेक प्रश्न निर्माण झाले.
            <strong>
              {" "}
              मधुमेह का होतो? शरीरावर त्याचा नेमका कसा परिणाम होतो? योग्य
              आहार, व्यायाम, झोप आणि जीवनशैलीमुळे त्यावर कितपत नियंत्रण मिळवता
              येते?
            </strong>
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            या प्रश्नांची उत्तरे शोधण्यासाठी मी पुस्तके, संशोधन, विश्वासार्ह
            संकेतस्थळे, तज्ज्ञांचे मार्गदर्शन आणि विविध अनुभवांचा अभ्यास
            करण्यास सुरुवात केली. त्या प्रवासात मला जाणवले की इंटरनेटवर
            माहिती भरपूर असली तरी ती अनेकदा विखुरलेली, अवघड किंवा
            सर्वसामान्यांना समजण्यास कठीण असते.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            म्हणूनच मी <strong>Healthy Community</strong> ही वेबसाइट तयार
            केली—जिथे प्रत्येकाला मराठीत सोपी, विश्वासार्ह आणि प्रत्यक्ष
            जीवनात उपयोगी पडणारी आरोग्यविषयक माहिती एका ठिकाणी मिळेल.
          </p>
        </section>

        {/* आमचे ध्येय */}
        <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            🎯 आमचे ध्येय
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Healthy Community हे केवळ एक संकेतस्थळ नाही, तर आरोग्यदायी
            जीवनशैली स्वीकारू इच्छिणाऱ्या प्रत्येकासाठी एक समुदाय आहे.
          </p>

          <ul className="mt-6 space-y-4 text-slate-600 leading-8">
            <li>✅ मधुमेह आणि इतर जीवनशैलीशी संबंधित आजारांविषयी मराठीत सोपी माहिती उपलब्ध करून देणे.</li>

            <li>✅ मिलेट्स, मायक्रोग्रीन्स, फळे, भाज्या आणि संतुलित आहाराविषयी वैज्ञानिक माहिती देणे.</li>

            <li>✅ व्यायाम, झोप, ताण-तणाव व्यवस्थापन आणि दैनंदिन सवयींचे महत्त्व समजावून सांगणे.</li>

            <li>✅ लोकांचे अनुभव, प्रेरणा आणि ज्ञान शेअर करण्यासाठी सकारात्मक समुदाय तयार करणे.</li>

            <li>✅ प्रत्येकाला डॉक्टरांच्या सल्ल्यासोबत आरोग्यदायी जीवनशैली स्वीकारण्यासाठी प्रोत्साहित करणे.</li>
          </ul>
        </section>

        {/* आमचा विश्वास */}
        <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            💚 आमचा विश्वास
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            आम्हाला विश्वास आहे की आरोग्य सुधारण्यासाठी मोठे बदल करण्याची
            गरज नसते. योग्य माहिती, सातत्यपूर्ण चांगल्या सवयी आणि समुदायाचे
            सहकार्य यामुळे जीवनात सकारात्मक बदल घडू शकतात.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            प्रत्येक व्यक्तीचा आरोग्य प्रवास वेगळा असतो. त्यामुळे येथे दिलेली
            माहिती ही केवळ शिक्षण आणि जागरूकता वाढवण्यासाठी आहे. कोणत्याही
            औषधांमध्ये किंवा उपचारांमध्ये बदल करण्यापूर्वी आपल्या डॉक्टरांचा
            किंवा पात्र आरोग्यतज्ज्ञांचा सल्ला अवश्य घ्या.
          </p>
        </section>

        {/* आम्ही काय देतो */}
        <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            📚 आम्ही काय देतो?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-emerald-50 p-5">
              <h3 className="font-semibold text-slate-900">
                मधुमेह मार्गदर्शन
              </h3>
              <p className="mt-2 text-slate-600">
                मधुमेह समजून घेण्यासाठी सोपी आणि विश्वासार्ह माहिती.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-5">
              <h3 className="font-semibold text-slate-900">
                मिलेट्स व पोषण
              </h3>
              <p className="mt-2 text-slate-600">
                मिलेट्स, मायक्रोग्रीन्स, फळे आणि संतुलित आहाराविषयी माहिती.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-5">
              <h3 className="font-semibold text-slate-900">
                आरोग्य साधने
              </h3>
              <p className="mt-2 text-slate-600">
                BMI, पाणी, कॅलरी आणि इतर उपयुक्त हेल्थ कॅल्क्युलेटर्स.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-5">
              <h3 className="font-semibold text-slate-900">
                समुदाय
              </h3>
              <p className="mt-2 text-slate-600">
                अनुभव, प्रश्नोत्तरे, प्रेरणा आणि एकमेकांना मदत करणारा
                सकारात्मक समुदाय.
              </p>
            </div>
          </div>
        </section>

        {/* अंतिम संदेश */}
        <section className="rounded-3xl bg-emerald-600 p-6 text-center text-white shadow-lg sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            🤝 चला, एकत्र निरोगी जीवनाकडे वाटचाल करूया!
          </h2>

          <p className="mx-auto mt-5 max-w-4xl leading-8 text-emerald-50">
            तुम्ही मधुमेहाने प्रभावित असाल, प्री-डायबेटिक असाल किंवा फक्त
            निरोगी जीवनशैली स्वीकारू इच्छित असाल, Healthy Community मध्ये
            तुमचे मनःपूर्वक स्वागत आहे. चला, एकमेकांकडून शिकूया, अनुभव शेअर
            करूया आणि एक मजबूत, सकारात्मक व आरोग्यदायी समुदाय निर्माण करूया.
          </p>
        </section>

      </div>
    </main>
  );
}


