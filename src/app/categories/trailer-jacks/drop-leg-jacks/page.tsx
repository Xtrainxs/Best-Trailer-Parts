import Link from 'next/link';

export default function DropLegJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          ← Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Drop-Leg Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Drop-Leg jacks feature legs that extend downward for extra stability. Great for off-level surfaces and rough terrain.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Drop-Leg Jacks</h2>
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
              <td className="py-2 px-4 border-b">BTP-DLJ-5000</td>
              <td className="py-2 px-4 border-b">Manual Drop-Leg</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-DLJ-7000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Drop-Leg</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-DLJ-10000</td>
              <td className="py-2 px-4 border-b">HD Drop-Leg</td>
              <td className="py-2 px-4 border-b">10,000</td>
              <td className="py-2 px-4 border-b">16</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
