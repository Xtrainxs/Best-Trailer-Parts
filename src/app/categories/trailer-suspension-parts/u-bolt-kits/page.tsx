import Link from "next/link";

export default function UBoltKitsPage() {
  const subcategories = [
    { name: "Round U‑bolt kits", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits" },
    { name: "Square U‑bolt kits", href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits" },
    { name: "Bolt diameters", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-[#05203C]">U-Bolt Kits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {subcategories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="block bg-white rounded-xl shadow-lg p-6 text-center hover:bg-white border border-slate-200 transition">
            <span className="text-lg font-semibold text-[#05203C]">{cat.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
