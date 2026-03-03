import Link from 'next/link';

export default function GooseneckCouplers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-couplers" className="text-blue-600 hover:underline">
          ← Back to Trailer Couplers
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Gooseneck Couplers</h1>
      <p className="text-lg text-gray-700 mb-6">
        Gooseneck couplers are built for gooseneck trailers and provide a secure connection for heavy-duty towing.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Gooseneck Couplers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Coupler Type</th>
              <th className="py-2 px-4 border-b text-left">Tube Size</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-GNC-25000</td>
              <td className="py-2 px-4 border-b">Standard Gooseneck</td>
              <td className="py-2 px-4 border-b">2-5/16" Ball, 4" Tube</td>
              <td className="py-2 px-4 border-b">25,000</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-GNC-30000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Gooseneck</td>
              <td className="py-2 px-4 border-b">2-5/16" Ball, 4" Tube</td>
              <td className="py-2 px-4 border-b">30,000</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-GNC-30000G</td>
              <td className="py-2 px-4 border-b">HD Gooseneck</td>
              <td className="py-2 px-4 border-b">2-5/16" Ball, 4" Tube</td>
              <td className="py-2 px-4 border-b">30,000</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}