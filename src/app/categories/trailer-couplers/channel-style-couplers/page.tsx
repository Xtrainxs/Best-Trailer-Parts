import Link from 'next/link';

export default function ChannelStyleCouplers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-couplers" className="text-blue-600 hover:underline">
          ← Back to Trailer Couplers
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Channel Style Couplers</h1>
      <p className="text-lg text-gray-700 mb-6">
        Channel style couplers slide into a C-channel and are commonly used on utility trailers and equipment haulers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {["1.png", "2.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Couplers/Channel%20Style%20Couplers/${img}`}
              alt={`Channel Style Coupler ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-white text-sm text-center">{`Image ${idx + 1}`}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Channel Style Couplers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Coupler Type</th>
              <th className="py-2 px-4 border-b text-left">Ball Size</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2 px-4 border-b">TPM-CSC-3500</td>
              <td className="py-2 px-4 border-b">Standard Channel Style</td>
              <td className="py-2 px-4 border-b">2"</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-CSC-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Channel Style</td>
              <td className="py-2 px-4 border-b">2-5/16"</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">HD Channel Style</td>
              <td className="py-2 px-4 border-b">2-5/16"</td>
              <td className="py-2 px-4 border-b">14,000</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}