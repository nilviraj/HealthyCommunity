import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({ title, description }: CTAProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-12 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{title || "तुमचे आरोग्य आमची प्राथमिकता"}</h2>
        <p className="mt-4 text-lg text-white/90">{description || "या मार्गदर्शनांचा वापर करून तुमचे आरोग्य सुधारा आणि एक निरोगी जीवन जगा."}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/calculators/bmi" className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-slate-100">
            आरोग्य मोजणी
          </Link>
          <Link href="/articles" className="rounded-full border border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white/10">
            लेख वाचा
          </Link>
        </div>
      </div>
    </div>
  );
}
