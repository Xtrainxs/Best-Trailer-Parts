import Link from 'next/link';

const subcategories = [
  { name: '10" Hydraulic Trailer Brakes', slug: '10in-hydraulic' },
  { name: '10" Electric Trailer Brakes', slug: '10in-electric' },
  { name: '12" Hydraulic Trailer Brakes', slug: '12in-hydraulic' },
  { name: '12" Electric Trailer Brakes', slug: '12in-electric' },
];

export default function BrakeAssemblies() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Brake Assemblies</h1>
      <p className="text-lg text-gray-600 mb-8">Choose the brake assembly type that fits your trailer</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/categories/brake-assemblies/${subcategory.slug}`}
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
