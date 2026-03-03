export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Prominent brand heading (45% width) */}
      <div className="mx-auto mb-8" style={{ width: '45%' }}>
        <div className="text-center">
          <h1
            className="font-serif font-extrabold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-sky-500 to-amber-400">
              Best Trailer Parts
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-red-600 tracking-widest uppercase" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            From Axle to Accessory – MASTERED!
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50/60 to-white rounded-2xl shadow-xl p-8 sm:p-12">
          <p className="text-indigo-900 text-lg sm:text-2xl leading-relaxed mb-6 font-bold" style={{ fontFamily: "'Satisfy', cursive", fontWeight: 700 }}>
            Best Trailer Parts brings together 25 years of importing expertise, trusted global suppliers, and a carefully curated catalog of premium trailer components. Our selections prioritize durability, value, and proven performance—so you can find the right parts with confidence.
          </p>

          <p className="text-indigo-700 text-base sm:text-xl leading-relaxed font-bold" style={{ fontFamily: "'Satisfy', cursive", fontWeight: 700 }}>
            Explore our categories and discover why professionals across North America rely on us for top quality at competitive prices.
          </p>


          <div className="mt-8">
            <a href="/categories" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 font-semibold transition">View All Categories</a>
          </div>
        </div>
      </div>
    </div>
  );
}
