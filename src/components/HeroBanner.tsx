interface HeroBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}

export default function HeroBanner({ eyebrow, title, description, image }: HeroBannerProps) {
  return (
    <div className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 ${image ? "bg-cover bg-center" : "bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950"}`} style={image ? { backgroundImage: `url(${image})` } : {}}>
      <div className={image ? "absolute inset-0 rounded-3xl bg-black/40" : ""} />
      <div className={image ? "relative" : ""}>
        <div className={`inline-block rounded-full px-4 py-2 ${image ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"} text-sm font-semibold`}>
          {eyebrow}
        </div>
        <h1 className={`mt-6 text-3xl font-bold leading-tight ${image ? "text-white" : "text-slate-900 dark:text-white"} sm:text-4xl`}>
          {title}
        </h1>
        <p className={`mt-4 text-lg leading-relaxed ${image ? "text-white/95" : "text-slate-600 dark:text-slate-300"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
