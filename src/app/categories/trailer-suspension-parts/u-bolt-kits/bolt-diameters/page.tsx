import Link from "next/link";

export default function BoltDiametersPage() {
  const subcategories = [
    { name: "3/8\" (light duty)", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/3-8-light-duty" },
    { name: "1/2\" (standard)", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/1-2-standard" },
    { name: "9/16\" (heavy duty)", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/9-16-heavy-duty" },
    { name: "5/8\" (extra heavy duty)", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/5-8-extra-heavy-duty" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Bolt diameters</h1>
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
