import Image from "next/image";

type ArticleImageProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

export default function ArticleImage({ src, alt, caption, priority = false }: ArticleImageProps) {
  return (
    <figure className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1200px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="border-t border-slate-200 px-5 py-3 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:text-slate-300">
        {caption}
      </figcaption>
    </figure>
  );
}
