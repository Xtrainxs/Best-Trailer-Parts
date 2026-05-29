import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: '1 ¾" square', href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/1-3-4-square" },
  { name: '2" square', href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-square" },
  { name: '2 ½"–3" square', href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-1-2-3-square" },
];

export default function SquareUBoltKitsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Square U-Bolt Kits
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Square-tube U-bolt kits for trailers with square axle profiles.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
