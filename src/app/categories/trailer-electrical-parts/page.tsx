import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Adapters", href: "/categories/trailer-electrical-parts/adapters" },
  { name: "Connectors", href: "/categories/trailer-electrical-parts/connectors" },
  { name: "Wiring Harnesses", href: "/categories/trailer-electrical-parts/wiring-harnesses" },
  { name: "Junction Boxes", href: "/categories/trailer-electrical-parts/junction-boxes" },
  { name: "Breakaway Kits", href: "/categories/trailer-electrical-parts/breakaway-kits" },
  { name: "Battery Boxes", href: "/categories/trailer-electrical-parts/battery-boxes" },
];

export default function TrailerElectricalPartsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Electrical Parts
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Essential electrical components for trailers &mdash; adapters, connectors,
        wiring harnesses, junction boxes, breakaway kits, and battery boxes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
