import { AlertCircle } from "lucide-react";

interface ProteinsProps {
  title: string;
  icon: string;
  color: "green" | "red";
  proteins: string[];
}

interface AvoidFoodsProps {
  foods: string[];
}

export function ProteinCard({ title, icon, color, proteins }: ProteinsProps) {
  const colorClasses = {
    green: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 text-green-900 dark:text-green-200 text-green-800 dark:text-green-300",
    red: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 text-red-900 dark:text-red-200 text-red-800 dark:text-red-300",
  };

  return (
    <div className={`rounded-3xl border-2 ${colorClasses[color]} p-6 shadow-sm`}>
      <h4 className={`text-lg font-semibold mb-3 ${color === "green" ? "text-green-900 dark:text-green-200" : "text-red-900 dark:text-red-200"}`}>
        {icon} {title}
      </h4>
      <ul className={`space-y-1 text-sm ${color === "green" ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}>
        {proteins.map((protein, idx) => (
          <li key={idx}>• {protein}</li>
        ))}
      </ul>
    </div>
  );
}

export function AvoidFoodsGrid({ foods }: AvoidFoodsProps) {
  return (
    <div className="space-y-3">
      {foods.map((food, idx) => (
        <div
          key={idx}
          className="rounded-3xl border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30 p-4 shadow-sm flex items-center gap-3"
        >
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <p className="text-red-800 dark:text-red-300 font-semibold">{food}</p>
        </div>
      ))}
    </div>
  );
}
