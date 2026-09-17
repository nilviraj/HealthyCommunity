import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";
import ArticleImage from "@/components/ArticleImage";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
	title: "घरी रक्तातील साखरेची तपासणी",
	description: "ग्लुकोमीटरने रक्तातील साखर कशी तपासावी, रीडिंगची नोंद कशी ठेवावी आणि लक्ष्य मर्यादा वैयक्तिक का असतात ते समजून घ्या.",
  alternates: { canonical: "/diabetes/blood-sugar-monitoring" },
	openGraph: {
		title: "घरी रक्तातील साखरेची तपासणी",
		description: "ग्लुकोमीटरचा योग्य वापर, रीडिंगची नोंद आणि वैयक्तिक लक्ष्य मर्यादा.",
		url: "/diabetes/blood-sugar-monitoring",
		type: "website",
		images: [{ url: "/images/diabetes/diagnosis-monitoring.webp", width: 1536, height: 1024, alt: "ग्लुकोमीटरने रक्तातील साखरेची तपासणी" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "घरी रक्तातील साखरेची तपासणी",
		description: "ग्लुकोमीटरचा योग्य वापर, रीडिंगची नोंद आणि वैयक्तिक लक्ष्य मर्यादा.",
		images: ["/images/diabetes/diagnosis-monitoring.webp"],
	},
};

const monitoringTimes = [
	{ label: "उपाशीपोटी", detail: "डॉक्टरांनी सांगितल्यास सकाळी काहीही खाण्यापूर्वी तपासा." },
	{ label: "जेवणानंतर", detail: "डॉक्टरांनी सांगितलेल्या वेळेनुसार, बहुतेकदा जेवण सुरू केल्यापासून १ ते २ तासांनी तपासा." },
	{ label: "झोपण्यापूर्वी", detail: "इन्सुलिन किंवा काही औषधांनुसार झोपण्यापूर्वीचे रीडिंग आवश्यक असू शकते." },
	{ label: "लक्षणे दिसल्यास", detail: "घाम, थरथर, चक्कर, गोंधळ किंवा नेहमीपेक्षा जास्त तहान जाणवल्यास तपासणी उपयोगी ठरू शकते." },
];

const targetRanges = [
	{ type: "जेवणापूर्वी", value: "८०–१३० mg/dL" },
	{ type: "जेवण सुरू केल्यानंतर १–२ तास", value: "१८० mg/dL पेक्षा कमी" },
];

export default function BloodSugarMonitoringPage() {
	return (
		<main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
			<Breadcrumb
				items={[
					{ label: "मुख्यपृष्ठ", href: "/" },
					{ label: "मधुमेह माहिती", href: "/diabetes" },
					{ label: "रक्तातील साखरेची तपासणी" },
				]}
			/>

			<div className="mt-8">
				<HeroBanner
					eyebrow="घरच्या घरी तपासणी"
					title="ग्लुकोमीटरने रक्तातील साखर कशी तपासावी?"
					description="तपासणीची वेळ आणि वारंवारता प्रत्येकासाठी वेगळी असते. तुमची योजना डॉक्टरांकडून ठरवून घ्या."
				/>
			</div>

			<ArticleImage
				src="/images/diabetes/diagnosis-monitoring.webp"
				alt="ग्लुकोमीटरने रक्तातील साखर तपासताना डॉक्टरांशी नोंदींबद्दल चर्चा"
				caption="तपासणीची वेळ, वारंवारता आणि लक्ष्य मर्यादा तुमच्या उपचारयोजनेनुसार डॉक्टरांकडून ठरवून घ्या."
				priority
			/>

			<section className="mt-12 space-y-8">
				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">तपासणी कधी करावी?</h2>
					<div className="mt-5 grid gap-4 sm:grid-cols-2">
						{monitoringTimes.map((item) => (
							<div key={item.label} className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
								<h3 className="font-semibold text-slate-900 dark:text-white">{item.label}</h3>
								<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">बहुतेक गर्भवती नसलेल्या प्रौढांसाठी सामान्य लक्ष्य</h2>
					<p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">ही फक्त सामान्य उदाहरणे आहेत. वय, गर्भावस्था, औषधे, इतर आजार आणि कमी साखरेचा धोका यानुसार तुमचे लक्ष्य वेगळे असू शकते.</p>
					<div className="mt-4 overflow-x-auto">
						<table className="w-full text-sm">
							<tbody>
								{targetRanges.map((row) => (
									<tr key={row.type} className="border-b border-slate-200 last:border-0 dark:border-slate-700">
										<td className="px-3 py-3 font-semibold text-slate-900 dark:text-white">{row.type}</td>
										<td className="px-3 py-3 text-slate-700 dark:text-slate-300">{row.value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">योग्य पद्धत</h2>
					<ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
						<li>१. हात साबणाने धुऊन पूर्ण कोरडे करा.</li>
						<li>२. नवीन लॅन्सेट आणि कालबाह्य न झालेली टेस्ट स्ट्रिप वापरा.</li>
						<li>३. मीटरच्या सूचनेनुसार बोटाच्या बाजूला टोचून रक्ताचा थेंब स्ट्रिपवर लावा.</li>
						<li>४. वापरलेले लॅन्सेट सुरक्षित धारदार कचरा डब्यात टाका; ते इतरांसोबत वापरू नका.</li>
					</ol>
				</div>

				<MedicalTip type="important" title="रीडिंगची नोंद ठेवा">
					तारीख, वेळ, जेवण, औषध किंवा इन्सुलिन, हालचाल आणि जाणवलेली लक्षणे यांसह रीडिंग लिहून ठेवा. एकच रीडिंग पाहून औषध बदलू नका; वारंवार असामान्य रीडिंग आल्यास डॉक्टरांशी संपर्क साधा.
				</MedicalTip>

				<RelatedLinks
					title="संबंधित देखरेख विषय"
					description="मोजणीच्या सवयींनंतर आहार, दिनचर्या आणि FAQ कडे जा."
					links={[
						{
							href: "/diabetes/daily-routine",
							title: "दैनंदिन दिनचर्या",
							description: "साखर, औषधे आणि जेवण यांचे वेळापत्रक सांभाळा.",
						},
						{
							href: "/diabetes/diet",
							title: "मधुमेह आहार",
							description: "मोजणीच्या परिणामानुसार आहाराची दिशा ठरवा.",
						},
						{
							href: "/diabetes/faq",
							title: "मधुमेह FAQ",
							description: "घरच्या घरी मापनाबद्दल सामान्य प्रश्न वाचा.",
						},
					]}
				/>
			</section>

			<div className="mt-12">
				<CTA />
			</div>

			<div className="mt-12">
				<Disclaimer />
			</div>
		</main>
	);
}
