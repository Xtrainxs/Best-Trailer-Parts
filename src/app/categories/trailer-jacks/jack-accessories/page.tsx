import Link from 'next/link';

export default function JackAccessories() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          ← Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Jack Accessories</h1>
      <p className="text-lg text-gray-700 mb-6">
        Complete your jack setup with our selection of accessories including handles, pads, covers, and replacement parts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          'Caster Wheels - Single & Dual.png',
          'Jack Foot.png',
          'Jack Pad 1.png',
          'Jack Pad.png',
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Jack%20Accesories/${encodeURIComponent(img)}`}
              alt={`Jack Accessory ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-white text-sm text-center break-words">{img}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Jack Accessories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Accessory Type</th>
              <th className="py-2 px-4 border-b text-left">Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-JA-HANDLE</td>
              <td className="py-2 px-4 border-b">Replacement Handle</td>
              <td className="py-2 px-4 border-b">Standard</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-JA-PAD</td>
              <td className="py-2 px-4 border-b">Jack Pad</td>
              <td className="py-2 px-4 border-b">8" x 8"</td>
              <td className="py-2 px-4 border-b">Rubber</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-JA-COVER</td>
              <td className="py-2 px-4 border-b">Protective Cover</td>
              <td className="py-2 px-4 border-b">Universal</td>
              <td className="py-2 px-4 border-b">Vinyl</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
