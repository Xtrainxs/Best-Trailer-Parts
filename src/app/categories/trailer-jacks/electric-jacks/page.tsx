import Link from 'next/link';

export default function ElectricJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          ← Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Electric Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Electric Jacks provide motorized lifting and lowering with minimal effort. Perfect for heavy trailers and frequent use scenarios.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Electric Jacks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Jack Type</th>
              <th className="py-2 px-4 border-b text-left">Lift Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Travel (in)</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EJ-3500</td>
              <td className="py-2 px-4 border-b">Standard Electric</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">18</td>
              <td className="py-2 px-4 border-b">12V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EJ-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Electric</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">20</td>
              <td className="py-2 px-4 border-b">12V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EJ-7000</td>
              <td className="py-2 px-4 border-b">HD Electric</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">22</td>
              <td className="py-2 px-4 border-b">24V</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
