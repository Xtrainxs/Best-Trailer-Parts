import Link from 'next/link';

const subcategories = [
  { name: '7 Inch Trailer Brake Drum Kit for 2000 lb. Axles | 5 on 4.5" Bolt Pattern', slug: '7in-2000-5x45' },
  { name: '10" Trailer Brake Drum Kit for 3,500 lb. Axles | 5 on 4.5" Bolt Pattern', slug: '10in-3500-5x45' },
  { name: '10" Trailer Brake Drum Kit for 3,500 lb. Axles | 5 on 4.75" Bolt Pattern', slug: '10in-3500-5x475' },
  { name: '10" Trailer Brake Drum Kit for 3,500 lb. Axles | 5 on 5" Bolt Pattern', slug: '10in-3500-5x5' },
  { name: '10" Trailer Brake Drum Kit for 3,500 lb. Axles | 5 on 5.5" Bolt Pattern', slug: '10in-3500-5x55' },
  { name: '12 Inch Trailer Brake Drum Kit for 5200 and 6000 lb. Axles | 6 on 5.5" Bolt Pattern', slug: '12in-5200-6000-6x55' },
  { name: '12 Inch Trailer Brake Drum Kit for 7000 lb. Axles | 8 on 6.5" Bolt Pattern', slug: '12in-7000-8x65' },
];

export default function BrakeDrums() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Brake Drums</h1>
      <p className="text-lg text-gray-600 mb-8">Select the appropriate brake drum kit for your axle specifications</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/categories/brake-drums/${subcategory.slug}`}
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
