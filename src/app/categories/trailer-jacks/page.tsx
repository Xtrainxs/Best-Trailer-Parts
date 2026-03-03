import Link from 'next/link';

const subcategories = [
  { name: 'A-Frame Jacks', slug: 'a-frame-jacks' },
  { name: 'Side-Wind Jacks', slug: 'side-wind-jacks' },
  { name: 'Top-Wind Jacks', slug: 'top-wind-jacks' },
  { name: 'Drop-Leg Jacks', slug: 'drop-leg-jacks' },
  { name: 'Swivel Jacks', slug: 'swivel-jacks' },
  { name: 'Electric Jacks', slug: 'electric-jacks' },
  { name: 'Stabilizer Jacks', slug: 'stabilizer-jacks' },
  { name: 'Jack Accessories', slug: 'jack-accessories' },
];

export default function TrailerJacks() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Trailer Jacks</h1>
      <p className="text-lg text-gray-600 mb-8">Browse our wide selection of trailer jacks and accessories</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/categories/trailer-jacks/${subcategory.slug}`}
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
