type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export default function SectionTitle({ eyebrow, title, description, as = "h2" }: SectionTitleProps) {
  const HeadingTag = as;

  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">{eyebrow}</p>
      <HeadingTag className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</HeadingTag>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
