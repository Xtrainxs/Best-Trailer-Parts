import Link from 'next/link';

const subcategories = [
  { name: '10 Inch Manual Adjust Electric Drum Trailer Brake - Left Side', slug: 'manual-drum-left' },
  { name: '10 Inch Manual Adjust Electric Drum Trailer Brake - Right Side', slug: 'manual-drum-right' },
  { name: '10 Inch Self-Adjusting Electric Drum Trailer Brake - Left Side', slug: 'selfadjusting-drum-left' },
  { name: '10 Inch Self-Adjusting Electric Drum Trailer Brake - Right Side', slug: 'selfadjusting-drum-right' },
  { name: '10 Inch Electric Manual Adjust Trailer Brake Assembly - Left Side', slug: 'manual-assembly-left' },
  { name: '10 Inch Electric Manual Adjust Trailer Brake Assembly - Right Side', slug: 'manual-assembly-right' },
];

export default function Electric10() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">10" Electric Trailer Brakes</h1>
      <p className="text-lg text-gray-600 mb-8">Select a 10" electric brake product</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available 10" Electric Brake Assemblies</h2>
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
              <td className="py-2 px-4 border-b">BTP-BA-10E-MAN-L</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">3,500 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-10E-MAN-R</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">3,500 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-10E-SA-L</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Self-Adjusting</td>
              <td className="py-2 px-4 border-b">3,500 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BA-10E-SA-R</td>
              <td className="py-2 px-4 border-b">Electric Drum</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Self-Adjusting</td>
              <td className="py-2 px-4 border-b">3,500 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
