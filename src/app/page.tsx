import ImageStrip from '@/components/image-strip';

const stripImages = [
  '/images/Trailer Hardware/D-Rings.jpg',
  '/images/Trailer Hardware/U-Bolt Plate.jpg',
  '/images/Trailer Hardware/Equalizer Nut-Bolt-Bush.jpg',
  '/images/Trailer Hardware/Bolts from India.jpg',
  '/images/Trailer Hardware/Trailer Part Nuts.jpg',
  '/images/Trailer Hardware/Bullet Hinges.jpg',
  '/images/Trailer Hardware/D-Ring.jpg',
  '/images/Trailer Hardware/Trailer U-Bolt Kit.jpg',
  '/images/Leaf Springs/Heavy Duty Leaf Springs/Picture4.png',
  '/images/Brake Drums/10 Inch Brake Drum Kit/Kit.png',
  '/images/Trailer Hardware/Heavy Duty Hardware 1.png',
  '/images/Trailer Hardware/Heavy Duty Hardware 5.png',
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="text-center pt-16 pb-12 sm:pt-20 sm:pb-16">
        <p
          className="text-2xl sm:text-3xl font-bold text-[#05203C] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Best Trailer Parts
        </p>
        <h1
          className="font-bold text-[#05203C] leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Wholesale Trailer Parts,
          <br className="hidden sm:block" /> Direct from the Manufacturer
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 leading-relaxed">
          Wholesale suspension, brakes, lights, jacks, and hardware sourced direct
          from the factories &mdash; no distributor markup. Serving trailer
          manufacturers and stockists across Canada and the USA since 2001.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/request-form"
            className="px-8 py-3 bg-[#05203C] text-white rounded-md font-semibold shadow-sm hover:bg-[#0a3460] transition"
          >
            Request a Wholesale Quote
          </a>
          <a
            href="/categories"
            className="px-8 py-3 border-2 border-[#05203C] text-[#05203C] rounded-md font-semibold hover:bg-[#05203C] hover:text-white transition"
          >
            Browse Catalog
          </a>
          <a
            href="tel:+14039037957"
            className="px-8 py-3 border-2 border-sky-600 text-sky-700 rounded-md font-semibold hover:bg-sky-600 hover:text-white transition"
          >
            Call +1 403-903-7957
          </a>
        </div>
        <p className="mt-5 text-sm text-slate-500">
          Minimum order CAD $5,000 &middot; Quote within 1&ndash;2 business days
        </p>
      </section>

      {/* Trust strip */}
      <section className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm mb-16">
        <ul className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-sky-100 text-sm sm:text-base text-slate-700 font-medium">
          <li className="px-6 py-3 sm:py-4">Importing since 2001</li>
          <li className="px-6 py-3 sm:py-4">Factory-direct pricing — no middleman</li>
          <li className="px-6 py-3 sm:py-4">Manufacturers &amp; stockists across Canada &amp; USA</li>
        </ul>
      </section>

      {/* Value prop */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          We work directly with the same factories that supply most North American
          trailer-parts distributors &mdash; and we pass importer pricing straight
          to you. Whether you need a container of suspension kits or a mixed pallet
          of brake drums, we match you with the right manufacturer, confirm lead
          times, and manage the shipment end to end.
        </p>
      </section>

      {/* How it works — B2B buyers need to understand the process */}
      <section className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#05203C] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1</p>
          <p className="font-semibold text-[#05203C] mb-1">Send your parts list</p>
          <p className="text-sm text-slate-600 leading-relaxed">Submit specs, quantities, and any part numbers via the quote form or by phone.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#05203C] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2</p>
          <p className="font-semibold text-[#05203C] mb-1">Receive a landed-cost quote</p>
          <p className="text-sm text-slate-600 leading-relaxed">We match your specs to our supplier network and respond within 1&ndash;2 business days with pricing and lead times.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold text-[#05203C] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3</p>
          <p className="font-semibold text-[#05203C] mb-1">We manage the shipment</p>
          <p className="text-sm text-slate-600 leading-relaxed">Ocean or air freight direct from the factory. We handle supplier coordination; you handle customs at your end.</p>
        </div>
      </section>

      <ImageStrip images={stripImages} />
    </div>
  );
}
