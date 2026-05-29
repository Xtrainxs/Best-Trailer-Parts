import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Round U-Bolt Kits", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits" },
  { name: "Square U-Bolt Kits", href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits" },
  { name: "Bolt Diameters", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters" },
];

export default function UBoltKitsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">U-Bolt Kits</h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Browse by tube shape or by bolt diameter to find the right U-bolt kit for
        your axle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
