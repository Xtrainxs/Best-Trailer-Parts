import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "A-Frame Jacks", href: "/categories/trailer-jacks/a-frame-jacks" },
  { name: "Side-Wind Jacks", href: "/categories/trailer-jacks/side-wind-jacks" },
  { name: "Top-Wind Jacks", href: "/categories/trailer-jacks/top-wind-jacks" },
  { name: "Drop-Leg Jacks", href: "/categories/trailer-jacks/drop-leg-jacks" },
  { name: "Swivel Jacks", href: "/categories/trailer-jacks/swivel-jacks" },
  { name: "Electric Jacks", href: "/categories/trailer-jacks/electric-jacks" },
  { name: "Stabilizer Jacks", href: "/categories/trailer-jacks/stabilizer-jacks" },
  { name: "Jack Accessories", href: "/categories/trailer-jacks/jack-accessories" },
];

export default function TrailerJacksPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Jacks
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        A-frame, side-wind, top-wind, swivel, electric, and stabilizer jacks for every
        trailer style and weight class.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
