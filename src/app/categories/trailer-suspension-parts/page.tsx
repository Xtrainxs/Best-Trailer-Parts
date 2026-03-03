import Link from "next/link";

export default function TrailerSuspensionPartsPage() {
  const subcategories = [
    { name: "Trailer Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs" },
    { name: "Hangers Kits", href: "/categories/trailer-suspension-parts/hangers-kits" },
    { name: "Trailer Equalizers", href: "/categories/trailer-suspension-parts/trailer-equalizers" },
    { name: "Shackles & Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings" },
    { name: "U-Bolt Kits", href: "/categories/trailer-suspension-parts/u-bolt-kits" },
    { name: "Spring Seats", href: "/categories/trailer-suspension-parts/spring-seats" },
    { name: "Suspension Fasteners", href: "/categories/trailer-suspension-parts/suspension-fasteners" },
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Trailer Suspension Parts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {subcategories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="block bg-white rounded-xl shadow-lg p-6 text-center hover:bg-blue-50 border border-blue-200 transition">
            <span className="text-xl font-semibold text-blue-800">{cat.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
