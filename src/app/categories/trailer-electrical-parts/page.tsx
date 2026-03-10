import Link from "next/link";

export default function TrailerElectricalPartsPage() {
  const subcategories = [
    { name: "Adapters", href: "/categories/trailer-electrical-parts/adapters" },
    { name: "Connectors", href: "/categories/trailer-electrical-parts/connectors" },
    { name: "Wiring Harnesses", href: "/categories/trailer-electrical-parts/wiring-harnesses" },
    { name: "Junction Boxes", href: "/categories/trailer-electrical-parts/junction-boxes" },
    { name: "Breakaway Kits", href: "/categories/trailer-electrical-parts/breakaway-kits" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Trailer Electrical Parts</h1>
      <p className="text-lg text-gray-700 mb-8">Browse essential electrical components for trailers, including adapters, connectors, wiring harnesses, junction boxes, and breakaway kits.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {subcategories.map((sub) => (
          <li key={sub.name} className="border rounded-lg shadow hover:shadow-lg transition bg-white">
            <Link href={sub.href}>
              <div className="p-6 cursor-pointer">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">{sub.name}</h2>
                <span className="text-sm text-gray-600">View products & specs</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
