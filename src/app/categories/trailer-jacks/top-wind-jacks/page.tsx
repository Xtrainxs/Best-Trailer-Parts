import Link from 'next/link';

export default function TopWindJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          ← Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Top-Wind Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Top-Wind jacks have the crank mechanism positioned at the top for easier access. Perfect for frequent adjustments and maintenance.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Top-Wind Jacks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Jack Type</th>
              <th className="py-2 px-4 border-b text-left">Lift Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Travel (in)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TWJ-2000</td>
              <td className="py-2 px-4 border-b">Manual Top-Wind</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TWJ-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Top-Wind</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TWJ-7000</td>
              <td className="py-2 px-4 border-b">HD Top-Wind</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
