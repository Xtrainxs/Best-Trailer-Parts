import Link from "next/link";

export default function TrailerLeafSpringsPage() {
  const subcategories = [
    { name: "Double-Eye Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/double-eye-leaf-springs" },
    { name: "Slipper Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/slipper-leaf-springs" },
    { name: "Heavy Duty Multi-Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/heavy-duty-multi-leaf-springs" },
    { name: "Parabolic Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/parabolic-leaf-springs" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-blue-900">Trailer Leaf Springs</h1>
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
