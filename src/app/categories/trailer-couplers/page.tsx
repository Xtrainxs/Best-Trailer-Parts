import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Straight Tongue Couplers", href: "/categories/trailer-couplers/straight-tongue-couplers" },
  { name: "A-Frame Couplers", href: "/categories/trailer-couplers/a-frame-couplers" },
  { name: "Channel Style Couplers", href: "/categories/trailer-couplers/channel-style-couplers" },
  { name: "Gooseneck Couplers", href: "/categories/trailer-couplers/gooseneck-couplers" },
  { name: "Adjustable Couplers", href: "/categories/trailer-couplers/adjustable-couplers" },
];

export default function TrailerCouplersPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Couplers
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Couplers by style &mdash; straight tongue, A-frame, channel, gooseneck, and
        adjustable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
