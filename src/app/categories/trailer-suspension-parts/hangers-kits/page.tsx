import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Single-Axle Hanger Kits (2,000–7,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/single-axle-hanger-kits" },
  { name: "Tandem-Axle Hanger Kits (3,500–12,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/tandem-axle-hanger-kits" },
  { name: "Triple-Axle Hanger Kits (7,000–12,000 lbs)", href: "/categories/trailer-suspension-parts/hangers-kits/triple-axle-hanger-kits" },
  { name: "Specialty Hanger Kits", href: "/categories/trailer-suspension-parts/hangers-kits/specialty-hanger-kits" },
];

export default function HangersKitsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Hanger Kits
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Hanger kits matched to your axle configuration and weight rating.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
