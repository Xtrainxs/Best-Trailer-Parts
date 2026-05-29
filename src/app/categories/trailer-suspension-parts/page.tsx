import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Trailer Leaf Springs", href: "/categories/trailer-suspension-parts/trailer-leaf-springs" },
  { name: "Hangers Kits", href: "/categories/trailer-suspension-parts/hangers-kits" },
  { name: "Trailer Equalizers", href: "/categories/trailer-suspension-parts/trailer-equalizers" },
  { name: "Shackles & Bushings", href: "/categories/trailer-suspension-parts/shackles-bushings" },
  { name: "U-Bolt Kits", href: "/categories/trailer-suspension-parts/u-bolt-kits" },
  { name: "Spring Seats", href: "/categories/trailer-suspension-parts/spring-seats" },
  { name: "Suspension Fasteners", href: "/categories/trailer-suspension-parts/suspension-fasteners" },
];

export default function TrailerSuspensionPartsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Suspension Parts
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Leaf springs, hangers, equalizers, shackles, bushings, U-bolt kits, and the
        fasteners that hold it all together.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
