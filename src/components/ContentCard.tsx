import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export default function ContentCard({ title, description, icon: Icon, children }: ContentCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex gap-4">
        {Icon && <Icon className="h-8 w-8 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />}
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
}
