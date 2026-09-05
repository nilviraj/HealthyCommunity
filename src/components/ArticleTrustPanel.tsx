import Link from "next/link";
import { BookOpenCheck, CalendarDays, CircleCheckBig, ShieldCheck, UserRound } from "lucide-react";
import type { ArticleAuthor, ReviewStatus } from "@/data/articles";

type ArticleTrustPanelProps = {
  author: ArticleAuthor;
  publishedAt: string;
  updatedAt: string;
  reviewStatus: ReviewStatus;
  sourcesCount: number;
};

const dateFormatter = new Intl.DateTimeFormat("mr-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

const numberFormatter = new Intl.NumberFormat("mr-IN");

function formatArticleDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00+05:30`));
}

export default function ArticleTrustPanel({
  author,
  publishedAt,
  updatedAt,
  reviewStatus,
  sourcesCount,
}: ArticleTrustPanelProps) {
  return (
    <aside aria-label="लेखक आणि संपादकीय माहिती" className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
        <div className="flex items-start gap-3">
          <UserRound aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">लेखक</p>
            <Link href={author.href} className="mt-1 inline-flex font-semibold text-slate-900 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800">
              {author.name}
            </Link>
            <p className="mt-2 text-sm leading-6 text-slate-600">{author.bio}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-emerald-100 pt-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4 text-emerald-700" />
            प्रकाशित: <time dateTime={publishedAt}>{formatArticleDate(publishedAt)}</time>
          </span>
          <span className="inline-flex items-center gap-2">
            <CircleCheckBig aria-hidden="true" className="h-4 w-4 text-emerald-700" />
            अद्ययावत: <time dateTime={updatedAt}>{formatArticleDate(updatedAt)}</time>
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
          <div>
            <p className="font-semibold text-slate-900">{reviewStatus.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{reviewStatus.description}</p>
            {sourcesCount > 0 ? (
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-900">
                <BookOpenCheck aria-hidden="true" className="h-4 w-4" />
                {numberFormatter.format(sourcesCount)} अधिकृत संदर्भ तपासले
              </p>
            ) : null}
            {!reviewStatus.medicallyReviewed ? (
              <p className="mt-3 text-xs font-semibold text-sky-800">
                स्वतंत्र डॉक्टरांकडून वैद्यकीय पुनरावलोकन झालेले नाही.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </aside>
  );
}
