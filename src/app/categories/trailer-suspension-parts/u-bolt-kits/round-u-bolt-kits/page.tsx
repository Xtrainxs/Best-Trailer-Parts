import Link from "next/link";

export default function RoundUBoltKitsPage() {
  const subcategories = [
    { name: "1 ¾\" tube (2k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/1-3-4-tube-2k" },
    { name: "2 3/8\" tube (3.5k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/2-3-8-tube-3-5k" },
    { name: "3\" tube (5.2k–7k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-tube-5-2k-7k" },
    { name: "3.5\" tube (8k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-5-tube-8k" },
    { name: "4\" tube (9k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/4-tube-9k" },
    { name: "5\" tube (10k–12k)", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/5-tube-10k-12k" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Round U‑bolt kits</h1>
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
