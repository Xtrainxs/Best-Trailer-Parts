import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Standard Shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/standard-shackles" },
  { name: "HD Shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/hd-shackles" },
  { name: "Wet-Bolt Shackles", href: "/categories/trailer-suspension-parts/shackles-bushings/wet-bolt-shackles" },
  { name: "Nylon Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/nylon-bushings" },
  { name: "Bronze Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/bronze-bushings" },
  { name: "Steel Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/steel-bushings" },
  { name: "Rubber Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings/rubber-bushings" },
];

export default function ShacklesBushingsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Shackles &amp; Bushings
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Standard, heavy-duty, and wet-bolt shackles, plus nylon, bronze, steel, and
        rubber bushings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
