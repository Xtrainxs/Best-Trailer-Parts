import Link from "next/link";

export default function ShacklesBushingsPage() {
  const subcategories = [
    { name: "Standard shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/standard-shackles" },
    { name: "HD shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/hd-shackles" },
    { name: "Wet‑bolt shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/wet-bolt-shackles" },
    { name: "Nylon bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/nylon-bushings" },
    { name: "Bronze bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/bronze-bushings" },
    { name: "Steel bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/steel-bushings" },
    { name: "Rubber bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/rubber-bushings" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Shackles & Bushings</h1>
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
