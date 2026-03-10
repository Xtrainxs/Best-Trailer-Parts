import Link from 'next/link';

const subcategories = [
  { name: 'Trailer Idler Hub & Bearing Kit for 2000 lb. Axles | 4 on 4" Bolt Pattern', slug: 'idler-kit-2000-4x4' },
  { name: 'Trailer Idler Hub & Bearing Kit for 2000 lb. Axles | 4 on 5" Bolt Pattern', slug: 'idler-kit-2000-4x5' },
  { name: 'Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 4.5" Bolt Pattern', slug: 'idler-kit-3500-5x45' },
  { name: 'Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 4.75" Bolt Pattern', slug: 'idler-kit-3500-5x475' },
  { name: 'Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 5" Bolt Pattern', slug: 'idler-kit-3500-5x5' },
  { name: 'Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 5.5" Bolt Pattern', slug: 'idler-kit-3500-5x55' },
  { name: 'Trailer Idler Hub & Bearing Kit for 5,200 and 6,000 lb. Axles | 6 on 5.5" Bolt Pattern', slug: 'idler-kit-5200-6000-6x55' },
  { name: 'Trailer Idler Hub & Bearing Kit for 7000 lb. Axles | 8 on 6.5" Bolt Pattern', slug: 'idler-kit-7000-8x65' },
];

export default function IdlerHubs() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Idler Hubs</h1>
      <p className="text-lg text-gray-600 mb-8">Choose the correct idler hub or kit for your axle</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/categories/idler-hubs/${subcategory.slug}`}
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer">
              <h3 className="text-base font-semibold text-yellow-800">{subcategory.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
