import Link from 'next/link';

export default function StabilizerJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          ← Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Stabilizer Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Stabilizer Jacks are designed to prevent trailer sway and movement. Lightweight and easy to install for added safety.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Stabilizer Jacks</h2>
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
              <td className="py-2 px-4 border-b">BTP-STJ-1000</td>
              <td className="py-2 px-4 border-b">Manual Stabilizer</td>
              <td className="py-2 px-4 border-b">1,000</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-STJ-2000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Stabilizer</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-STJ-3000</td>
              <td className="py-2 px-4 border-b">HD Stabilizer</td>
              <td className="py-2 px-4 border-b">3,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
