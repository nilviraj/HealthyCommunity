import { CheckCircle2 } from "lucide-react";

interface HealthyHabitsChecklistProps {
  habits: string[];
}

export default function HealthyHabitsChecklist({ habits }: HealthyHabitsChecklistProps) {
  return (
    <div className="space-y-3">
      {habits.map((habit, idx) => (
        <div
          key={idx}
          className="rounded-3xl border-2 border-emerald-200 bg-white dark:bg-slate-900 dark:border-emerald-800 p-4 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-slate-700 dark:text-slate-300">{habit}</p>
        </div>
      ))}
    </div>
  );
}
