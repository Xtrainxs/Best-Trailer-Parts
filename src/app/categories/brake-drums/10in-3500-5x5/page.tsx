import Link from 'next/link';

export default function BrakeDrum10in3500_5x5() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/brake-drums" className="text-blue-600 hover:underline">
          ← Back to Brake Drums
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">10" Brake Drum Kit for 3,500 lb. Axles | 5 on 5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">Durable brake drum kit for 3,500 lb axles with a 5x5 bolt pattern.</p>
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
              <td className="py-2 px-4 border-b">BTP-BDK-10IN-3500-5X5</td>
              <td className="py-2 px-4 border-b">10"</td>
              <td className="py-2 px-4 border-b">5 on 5"</td>
              <td className="py-2 px-4 border-b">L68149/L68111 & L44649/L44610</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
