import SectionTitle from "@/components/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "गोपनीयता धोरण",
  description:
    "आरोग्य समुदायमध्ये कोणती माहिती गोळा केली जाते, ती कशी वापरली जाते, किती काळ जतन होते आणि वापरकर्त्यांचे हक्क काय आहेत याची सविस्तर माहिती.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "गोपनीयता धोरण",
    description:
      "आरोग्य समुदायमध्ये कोणती माहिती गोळा केली जाते, ती कशी वापरली जाते, किती काळ जतन होते आणि वापरकर्त्यांचे हक्क काय आहेत याची सविस्तर माहिती.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "गोपनीयता धोरण",
    description:
      "आरोग्य समुदायमध्ये कोणती माहिती गोळा केली जाते, ती कशी वापरली जाते, किती काळ जतन होते आणि वापरकर्त्यांचे हक्क काय आहेत याची सविस्तर माहिती.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "मुख्यपृष्ठ", href: "/" }, { label: "गोपनीयता धोरण" }]} />

      <SectionTitle
        as="h1"
        eyebrow="गोपनीयता धोरण"
        title="आपली माहिती सुरक्षित ठेवणे"
        description="आम्ही केवळ उपयोगी आणि आवश्यक माहिती गोळा करतो आणि ती सुरक्षितपणे व्यवस्थापित करतो."
      />
      <div className="mt-8 space-y-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm text-sm leading-8 text-slate-600">
        <section>
          <h2 className="text-base font-semibold text-slate-900">1. आम्ही कोणती माहिती गोळा करतो</h2>
          <p className="mt-2">
            आपण संपर्क फॉर्म वापरताना नाव, मोबाईल क्रमांक, ईमेल पत्ता आणि संदेश यांसारखी माहिती देऊ शकता.
            याशिवाय साइटवरील वापर नमुने (उदा. कोणते पृष्ठ पाहिले) हे विश्लेषणासाठी संकलित होऊ शकतात.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">2. माहितीचा वापर कसा होतो</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>आपल्या प्रश्नांना उत्तर देण्यासाठी</li>
            <li>साइटवरील सामग्री आणि वापर अनुभव सुधारण्यासाठी</li>
            <li>तांत्रिक समस्या आणि सुरक्षा निरीक्षणासाठी</li>
            <li>कायदेशीर बंधनांचे पालन करण्यासाठी</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">3. कायदेशीर आधार</h2>
          <p className="mt-2">
            माहिती प्रक्रिया करण्याचा आधार प्रामुख्याने वापरकर्त्याची संमती, वैध हित (site security आणि quality)
            आणि लागू कायदेशीर बंधने यावर आधारित असतो.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">4. कुकीज आणि ट्रॅकिंग</h2>
          <p className="mt-2">
            आम्ही आवश्यक तांत्रिक कुकीज तसेच विश्लेषणासाठी वापरल्या जाणाऱ्या कुकीजचा वापर करू शकतो.
            तपशीलांसाठी आमचे कुकी धोरण पाहा.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">5. माहिती किती काळ जतन करतो</h2>
          <p className="mt-2">
            माहिती आवश्यकता संपेपर्यंत, किंवा कायदेशीरदृष्ट्या आवश्यक कालावधीपर्यंतच जतन केली जाते.
            आवश्यकता संपल्यावर माहिती सुरक्षितरीत्या हटवली जाते.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">6. तृतीय पक्ष सेवा</h2>
          <p className="mt-2">
            होस्टिंग, विश्लेषण, किंवा सुरक्षा सेवा पुरवणाऱ्या तृतीय पक्षांचा वापर होऊ शकतो. अशा सेवा
            पुरवठादारांकडून माहिती केवळ ठराविक उद्देशासाठी प्रक्रिया केली जाते.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">7. वापरकर्त्यांचे हक्क</h2>
          <p className="mt-2">
            आपल्या माहितीबाबत प्रवेश, दुरुस्ती, मर्यादा, आणि हटवण्याची विनंती आपण करू शकता. यासाठी
            संपर्क पृष्ठावरून विनंती पाठवा.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">8. मुलांची गोपनीयता</h2>
          <p className="mt-2">
            ही सेवा सर्वसाधारण आरोग्य शिक्षणासाठी आहे. 13 वर्षांखालील मुलांची माहिती पालक संमतीशिवाय
            जाणूनबुजून गोळा केली जात नाही.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">9. धोरणातील बदल</h2>
          <p className="mt-2">
            हे धोरण वेळोवेळी अद्यतनित केले जाऊ शकते. महत्त्वाचे बदल या पृष्ठावर प्रकाशित केले जातील.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">10. संपर्क</h2>
          <p className="mt-2">
            गोपनीयतेसंदर्भात प्रश्न असल्यास संपर्क पृष्ठाचा वापर करा.
          </p>
        </section>
      </div>
    </main>
  );
}


