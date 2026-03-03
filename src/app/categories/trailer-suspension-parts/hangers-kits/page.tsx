import Link from "next/link";

export default function HangersKitsPage() {
  const subcategories = [
    { name: "Single‑Axle Hanger Kits (2,000–7,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/single-axle-hanger-kits" },
    { name: "Tandem‑Axle Hanger Kits (3,500–12,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/tandem-axle-hanger-kits" },
    { name: "Triple‑Axle Hanger Kits (7,000–12,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/triple-axle-hanger-kits" },
    { name: "Specialty Hanger Kits", href: "/categories/trailer-suspension-parts/hangers-kits/specialty-hanger-kits" },
    { name: "Heavy‑Duty Cast Equalizer Kits", href: "/categories/trailer-suspension-parts/hangers-kits/heavy-duty-cast-equalizer-kits" },
    { name: "Rubber‑Cushioned Equalizer Kits", href: "/categories/trailer-suspension-parts/hangers-kits/rubber-cushioned-equalizer-kits" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Trailer Hanger Kits</h1>
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
