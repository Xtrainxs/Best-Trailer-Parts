import Link from 'next/link';

export default function BrakeDrum7in2000_5x45() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/brake-drums" className="text-blue-600 hover:underline">
          ← Back to Brake Drums
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">7" Brake Drum Kit for 2,000 lb. Axles | 5 on 4.5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">High-quality brake drum kit for 2,000 lb axles with a 5x4.5 bolt pattern.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Drum Diameter</th>
              <th className="py-2 px-4 border-b text-left">Bolt Pattern</th>
              <th className="py-2 px-4 border-b text-left">Includes Bearings</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BDK-7IN-2000-5X45</td>
              <td className="py-2 px-4 border-b">7"</td>
              <td className="py-2 px-4 border-b">5 on 4.5"</td>
              <td className="py-2 px-4 border-b">L44649/L44610</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
