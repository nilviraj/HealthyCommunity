interface GroceryListProps {
  items: Record<string, string[]>;
}

export default function GroceryList({ items }: GroceryListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(items).map(([category, list]) => (
        <div
          key={category}
          className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-4 shadow-sm"
        >
          <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-3">
            {category.replace(/_/g, " ")}
          </h4>
          <ul className="space-y-1">
            {list.map((item, idx) => (
              <li key={idx} className="text-sm text-emerald-800 dark:text-emerald-300">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
