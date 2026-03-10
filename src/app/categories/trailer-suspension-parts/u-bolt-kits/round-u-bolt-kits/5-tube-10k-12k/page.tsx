import Link from "next/link";

export default function RoundUBoltKit5Tube10k12k() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-6">
        <Link href="/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits" className="text-blue-600 hover:underline">
          ← Back to Round U-bolt Kits
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-blue-900">5" Tube (10k–12k) Round U-bolt Kit</h1>
      <p className="text-lg text-gray-700 mb-6">Kit for 10,000–12,000 lb axles with 5" round tube. Includes U-bolts, nuts, and tie plates.</p>
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          "10k-12k Round U-Bolt Kits - 1.png",
          "10k-12k Round U-Bolt Kits - 2.png",
          "10k-12k Round U-Bolt Kits.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-56"
          >
            <img
              src={`/images/U-Bolt%20Kits/Round%20U-Bolt%20Kits/10k%E2%80%9312k%20Round%20U-bolt%20Kit/${encodeURIComponent(img)}`}
              alt={`10k-12k Round U-bolt Kit ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-white text-sm text-center break-words">{img}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Kit Specifications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">U-bolt Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
              <th className="py-2 px-4 border-b text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2 px-4 border-b">TPM-UBK-5T-10K-12K</td>
              <td className="py-2 px-4 border-b">5" x 9 ¼" x 5/8"</td>
              <td className="py-2 px-4 border-b">Steel</td>
              <td className="py-2 px-4 border-b">Zinc</td>
              <td className="py-2 px-4 border-b">4 U-bolts, 8 nuts, 2 tie plates</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
