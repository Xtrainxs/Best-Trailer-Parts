import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "LED Tail Lights", href: "/categories/trailer-lights/led-tail-lights" },
  { name: "Incandescent Tail Lights", href: "/categories/trailer-lights/incandescent-tail-lights" },
  { name: "Marker / Clearance Lights", href: "/categories/trailer-lights/marker-clearance-lights" },
  { name: "License Plate Lights", href: "/categories/trailer-lights/license-plate-lights" },
  { name: "Utility / Work Lights", href: "/categories/trailer-lights/utility-work-lights" },
  { name: "Warning / Strobe Lights", href: "/categories/trailer-lights/warning-strobe-lights" },
  { name: "Wiring & Connector Kits", href: "/categories/trailer-lights/wiring-connector-kits" },
];

export default function TrailerLightsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Lights
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        LED and incandescent tail lights, marker and clearance lights, plate and work
        lights, plus the wiring and connector kits to tie it all together. All BTP
        parts meet North American standards.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
