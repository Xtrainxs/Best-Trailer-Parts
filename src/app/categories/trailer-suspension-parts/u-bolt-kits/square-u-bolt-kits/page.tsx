import Link from "next/link";

export default function SquareUBoltKitsPage() {
  const subcategories = [
    { name: '1 ¾" square', href: '/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/1-3-4-square' },
    { name: '2" square', href: '/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-square' },
    { name: '2 ½"–3" square', href: '/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-1-2-3-square' },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Square U‑bolt kits</h1>
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
