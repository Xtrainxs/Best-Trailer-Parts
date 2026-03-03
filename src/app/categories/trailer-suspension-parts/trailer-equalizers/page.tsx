import Link from "next/link";

export default function TrailerEqualizersPage() {
  const subcategories = [
    { name: "EQ‑E1", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-e1" },
    { name: "EQ‑E2", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-e2" },
    { name: "EQ‑E3", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-e3" },
    { name: "EQ‑SL12", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-sl12" },
    { name: "EQ‑SL14/16/18", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-sl14-16-18" },
    { name: "EQ‑RUB6/8", href: "/categories/trailer-suspension-parts/trailer-equalizers/eq-rub6-8" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Trailer Equalizers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {subcategories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="block bg-white rounded-xl shadow-lg p-6 text-center hover:bg-blue-50 border border-blue-200 transition">
            <span className="text-lg font-semibold text-blue-800">{cat.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
