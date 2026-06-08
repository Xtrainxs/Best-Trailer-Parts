import Link from 'next/link';
import { catalog } from '@/lib/catalog';

export const metadata = {
  title: 'Wholesale Trailer Parts by Category — Suspension, Brakes, Lights & More',
  description:
    'Browse wholesale trailer parts by category: suspension, brake drums, brake assemblies, idler hubs, lights, jacks, couplers, electrical, hardware, and boat trailer parts. Direct-from-manufacturer pricing for trailer manufacturers and stockists.',
};

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          Wholesale Catalog
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Browse the Full Catalog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
          Every category and product line on one page &mdash; jump straight to what
          you need. Suspension, brakes, lights, jacks, couplers, hardware, and more,
          sourced direct from manufacturer.
        </p>
      </header>

      {/* Full tree: each category card lists its subcategory links inline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map((cat) => (
          <section
            key={cat.href}
            className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <Link
              href={cat.href}
              className="group flex items-center gap-3 px-5 py-4 bg-[#05203C] text-white hover:bg-[#0a3460] transition-colors"
            >
              <span className="text-xl" aria-hidden="true">{cat.icon}</span>
              <span className="font-bold text-lg leading-tight">{cat.name}</span>
              <span className="ml-auto text-sky-300 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
            </Link>

            <div className="flex-1 p-5">
              {cat.subcategories.length > 0 ? (
                <ul className="space-y-1.5">
                  {cat.subcategories.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="flex items-center text-sm text-slate-700 hover:text-sky-700 hover:underline transition leading-snug"
                      >
                        <span className="text-sky-400 mr-2" aria-hidden="true">›</span>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500 leading-relaxed">{cat.blurb}</p>
              )}
            </div>

            <Link
              href={cat.href}
              className="px-5 py-3 border-t border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-sky-700 transition"
            >
              View all {cat.name} →
            </Link>
          </section>
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
