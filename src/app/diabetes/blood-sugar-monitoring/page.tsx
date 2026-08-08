import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import MedicalTip from "@/components/MedicalTip";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
	title: "रक्त शर्करा निरीक्षण",
	description: "रक्त शर्करा कधी, कशी आणि किती वेळा तपासावी याचे सोपे मार्गदर्शन.",
  alternates: { canonical: "/diabetes/blood-sugar-monitoring" },
	openGraph: {
		title: "रक्त शर्करा निरीक्षण",
		description: "रक्त शर्करा कधी, कशी आणि किती वेळा तपासावी याचे सोपे मार्गदर्शन.",
		url: "/diabetes/blood-sugar-monitoring",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "रक्त शर्करा निरीक्षण",
		description: "रक्त शर्करा कधी, कशी आणि किती वेळा तपासावी याचे सोपे मार्गदर्शन.",
	},
};

const monitoringTimes = [
	{ label: "उपवास (FBS)", detail: "सकाळी नाश्त्यापूर्वी रक्त शर्करा तपासा." },
	{ label: "भोजनानंतर (PPBS)", detail: "भोजनानंतर सुमारे 2 तासांनी तपासणी करा." },
	{ label: "झोपण्यापूर्वी", detail: "रात्रीचे नियंत्रण समजण्यासाठी एक रीडिंग उपयोगी ठरते." },
	{ label: "लक्षणे दिसल्यास", detail: "घाम येणे, चक्कर, थकवा यावेळी अतिरिक्त रीडिंग घ्या." },
];

const targetRanges = [
	{ type: "उपवास", value: "80 - 130 mg/dL" },
	{ type: "भोजनानंतर 2 तास", value: "180 mg/dL पेक्षा कमी" },
];

export default function BloodSugarMonitoringPage() {
	return (
		<main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
			<Breadcrumb
				items={[
					{ label: "मुख्यपृष्ठ", href: "/" },
					{ label: "मधुमेह माहिती", href: "/diabetes" },
					{ label: "रक्त शर्करा निरीक्षण" },
				]}
			/>

			<div className="mt-8">
				<HeroBanner
					eyebrow="दैनिक निरीक्षण"
					title="रक्त शर्करा निरीक्षण कसे करावे"
					description="नियमित तपासणीमुळे औषधे, आहार आणि व्यायामाचा परिणाम समजणे सोपे जाते."
				/>
			</div>

			<section className="mt-12 space-y-8">
				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">तपासणीची योग्य वेळ</h2>
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
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">सामान्य लक्ष्य स्तर</h2>
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

				<MedicalTip type="important" title="रीडिंगची नोंद ठेवा">
					तारीख, वेळ, भोजनाची माहिती आणि औषधांसह रीडिंग लिहून ठेवल्यास डॉक्टरांना उपचार समायोजित करणे सोपे होते.
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


