import Link from 'next/link';

export default function BrakeAssembly12inElectric() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/brake-assemblies" className="text-blue-600 hover:underline">
          ← Back to Brake Assemblies
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">12" Electric Brake Assemblies</h1>
      <p className="text-lg text-gray-700 mb-6">Heavy-duty 12" electric brake assemblies for 5,200–7,000 lb axles.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Assemblies</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Side</th>
              <th className="py-2 px-4 border-b text-left">Adjust</th>
              <th className="py-2 px-4 border-b text-left">Fits Axle</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-12E-MAN-L</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-12E-MAN-R</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-12E-SA-L</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Self-Adjusting</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-12E-SA-R</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Self-Adjusting</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
