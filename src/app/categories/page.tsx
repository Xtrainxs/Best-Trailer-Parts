import CategoryCard from "@/components/category-card";

const categories = [
  { name: "Trailer Suspension Parts", href: "/categories/trailer-suspension-parts" },
  { name: "Trailer Lights", href: "/categories/trailer-lights" },
  { name: "Trailer Electrical Parts", href: "/categories/trailer-electrical-parts" },
  { name: "Trailer Jacks", href: "/categories/trailer-jacks" },
  { name: "Trailer Couplers", href: "/categories/trailer-couplers" },
  { name: "Idler Hubs", href: "/categories/idler-hubs" },
  { name: "Brake Drums", href: "/categories/brake-drums" },
  { name: "Brake Assemblies", href: "/categories/brake-assemblies" },
  { name: "Trailer Hardware", href: "/categories/trailer-hardware" },
  { name: "Boat Trailer Parts", href: "/categories/boat-trailer-parts" },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          Catalog
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Browse by category
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
          Suspension, brakes, lights, jacks, couplers, hardware &mdash; every
          trailer component, sourced direct from manufacturer.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} href={cat.href} />
        ))}
      </div>
    </main>
  );
}
