import CategoryCard from "@/components/category-card";

const categories = [
  {
    name: "Trailer Suspension Parts",
    href: "/categories/trailer-suspension-parts",
    description: "Leaf springs, hangers, equalizers, shackles, bushings, and U-bolt kits.",
  },
  {
    name: "Trailer Lights",
    href: "/categories/trailer-lights",
    description: "LED and incandescent tail, marker, license plate, and work lights.",
  },
  {
    name: "Trailer Electrical Parts",
    href: "/categories/trailer-electrical-parts",
    description: "Adapters, connectors, wiring harnesses, junction and battery boxes.",
  },
  {
    name: "Trailer Jacks",
    href: "/categories/trailer-jacks",
    description: "A-frame, side-wind, top-wind, swivel, electric, and stabilizer jacks.",
  },
  {
    name: "Trailer Couplers",
    href: "/categories/trailer-couplers",
    description: "Straight tongue, A-frame, channel, gooseneck, and adjustable couplers.",
  },
  {
    name: "Idler Hubs",
    href: "/categories/idler-hubs",
    description: "Hub and bearing kits sized to your axle rating and bolt pattern.",
  },
  {
    name: "Brake Drums",
    href: "/categories/brake-drums",
    description: "Drum kits for 2,000 to 7,000 lb. axles in common bolt patterns.",
  },
  {
    name: "Brake Assemblies",
    href: "/categories/brake-assemblies",
    description: "10\" and 12\" hydraulic and electric brake assemblies.",
  },
  {
    name: "Trailer Hardware",
    href: "/categories/trailer-hardware",
    description: "E-tracks, D-rings, hinges, latches, chains, bolts, ramps, wheel chocks, and much more.",
  },
  {
    name: "Boat Trailer Parts",
    href: "/categories/boat-trailer-parts",
    description: "Winches, rollers, jacks, bunks, guides, safety chains, and marine hardware.",
  },
];

export const metadata = {
  title: 'Wholesale Trailer Parts by Category — Suspension, Brakes, Lights & More',
  description:
    'Browse wholesale trailer parts by category: suspension, brake drums, brake assemblies, idler hubs, lights, jacks, couplers, electrical, hardware, and boat trailer parts. Direct-from-manufacturer pricing for trailer manufacturers and stockists. Min. order CAD $5,000.',
};

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          Wholesale Catalog
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Browse by Category
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
          Suspension, brakes, lights, jacks, couplers, hardware &mdash; wholesale
          trailer components sourced direct from manufacturer. Minimum order CAD $5,000.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            href={cat.href}
            description={cat.description}
          />
        ))}
      </div>

      <section className="mt-16 bg-[#05203C] text-white rounded-xl p-8 sm:p-10 text-center shadow-md">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Don&apos;t see your part? We can source it.
        </h2>
        <p className="text-sky-100 mb-7 max-w-xl mx-auto leading-relaxed">
          Our catalog covers the most common lines, but we work with a broad
          manufacturer network. Send us your specs and quantities &mdash; we&apos;ll
          confirm availability and pricing within 1&ndash;2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/request-form"
            className="px-8 py-3 bg-white text-[#05203C] rounded-md font-semibold shadow-sm hover:bg-sky-100 transition"
          >
            Request a Wholesale Quote
          </a>
          <a
            href="tel:+14039037957"
            className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-[#05203C] transition"
          >
            Call +1 403-903-7957
          </a>
        </div>
      </section>
    </main>
  );
}
