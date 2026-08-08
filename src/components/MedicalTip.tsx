import { ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info, Lightbulb } from "lucide-react";

interface MedicalTipProps {
  type: "tip" | "important" | "warning" | "info";
  title: string;
  children: ReactNode;
}

export default function MedicalTip({ type, title, children }: MedicalTipProps) {
  const styles = {
    tip: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-200",
    },
    important: {
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
      icon: "text-amber-600 dark:text-amber-400",
      title: "text-amber-900 dark:text-amber-200",
    },
    warning: {
      bg: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-200 dark:border-red-800",
      icon: "text-red-600 dark:text-red-400",
      title: "text-red-900 dark:text-red-200",
    },
    info: {
      bg: "bg-slate-50 dark:bg-slate-900/30",
      border: "border-slate-200 dark:border-slate-700",
      icon: "text-slate-600 dark:text-slate-400",
      title: "text-slate-900 dark:text-slate-100",
    },
  };

  const style = styles[type];
  const IconComponent = type === "tip" ? Lightbulb : type === "important" ? CheckCircle2 : type === "warning" ? AlertCircle : Info;

  return (
    <div className={`rounded-2xl border ${style.border} ${style.bg} p-6`}>
      <div className="flex gap-4">
        <IconComponent className={`h-6 w-6 flex-shrink-0 ${style.icon}`} />
        <div>
          <h4 className={`font-semibold ${style.title}`}>{title}</h4>
          <div className={`mt-2 text-sm leading-relaxed ${type === "warning" ? "text-red-700 dark:text-red-300" : "text-slate-700 dark:text-slate-300"}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
