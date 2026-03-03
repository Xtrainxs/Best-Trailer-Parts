import Link from 'next/link';

const subcategories = [
  { name: 'Straight Tongue Couplers', slug: 'straight-tongue-couplers' },
  { name: 'A-Frame Couplers', slug: 'a-frame-couplers' },
  { name: 'Channel Style Couplers', slug: 'channel-style-couplers' },
  { name: 'Gooseneck Couplers', slug: 'gooseneck-couplers' },
  { name: 'Adjustable Couplers', slug: 'adjustable-couplers' },
];

export default function TrailerCouplers() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Trailer Couplers</h1>
      <p className="text-lg text-gray-600 mb-8">Explore our selection of trailer couplers by style</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/categories/trailer-couplers/${subcategory.slug}`}
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800">{subcategory.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
