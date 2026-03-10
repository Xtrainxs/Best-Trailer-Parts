"use client";

import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Trailer Suspension Parts',
      href: '/categories/trailer-suspension-parts',
      subcategories: [
        { name: 'Trailer Leaf Springs', href: '/categories/trailer-suspension-parts/trailer-leaf-springs' },
        { name: 'Hangers Kits', href: '/categories/trailer-suspension-parts/hangers-kits' },
        { name: 'Trailer Equalizers', href: '/categories/trailer-suspension-parts/trailer-equalizers' },
        { name: 'Shackles & Bushings', href: '/categories/trailer-suspension-parts/shackles-bushings' },
        { name: 'U-Bolt Kits', href: '/categories/trailer-suspension-parts/u-bolt-kits' },
        { name: 'Spring Seats', href: '/categories/trailer-suspension-parts/spring-seats' },
        { name: 'Suspension Fasteners', href: '/categories/trailer-suspension-parts/suspension-fasteners' },
      ]
    },
    {
      name: 'Trailer Lights',
      href: '/categories/trailer-lights',
      subcategories: [
        { name: 'LED Tail Lights', href: '/categories/trailer-lights/led-tail-lights' },
        { name: 'Incandescent Tail Lights', href: '/categories/trailer-lights/incandescent-tail-lights' },
        { name: 'Marker/Clearance Lights', href: '/categories/trailer-lights/marker-clearance-lights' },
        { name: 'License Plate Lights', href: '/categories/trailer-lights/license-plate-lights' },
        { name: 'Utility/Work Lights', href: '/categories/trailer-lights/utility-work-lights' },
        { name: 'Wiring & Connector Kits', href: '/categories/trailer-lights/wiring-connector-kits' },
      ]
    },
    {
      name: 'Trailer Electrical Parts',
      href: '/categories/trailer-electrical-parts',
      subcategories: [
        { name: 'Adapters', href: '/categories/trailer-electrical-parts/adapters' },
        { name: 'Connectors', href: '/categories/trailer-electrical-parts/connectors' },
        { name: 'Wiring Harnesses', href: '/categories/trailer-electrical-parts/wiring-harnesses' },
        { name: 'Junction Boxes', href: '/categories/trailer-electrical-parts/junction-boxes' },
        { name: 'Breakaway Kits', href: '/categories/trailer-electrical-parts/breakaway-kits' },
      ]
    },
    { name: 'Trailer Jacks', href: '/categories/trailer-jacks' },
    { name: 'Trailer Couplers', href: '/categories/trailer-couplers' },
    { name: 'Idler Hubs', href: '/categories/idler-hubs' },
    { name: 'Brake Drums', href: '/categories/brake-drums' },
    { name: 'Brake Assemblies', href: '/categories/brake-assemblies' },
    { name: 'Trailer Hardware', href: '/categories/trailer-hardware' },
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {categories.map((cat) => (
          <div key={cat.name} className="tpm-surface-card rounded-3xl shadow-xl p-6 sm:p-8 text-center border flex flex-col items-center justify-center">
            <Link href={cat.href} className="block w-full h-full">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight flex items-center justify-center h-full">{cat.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
