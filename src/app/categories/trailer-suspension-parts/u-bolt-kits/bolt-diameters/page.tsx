import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: '3/8" (light duty)', href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/3-8-light-duty" },
  { name: '1/2" (standard)', href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/1-2-standard" },
  { name: '9/16" (heavy duty)', href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/9-16-heavy-duty" },
  { name: '5/8" (extra heavy duty)', href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/5-8-extra-heavy-duty" },
];

export default function BoltDiametersPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Bolt Diameters
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        U-bolt kits indexed by bolt diameter and duty rating.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
