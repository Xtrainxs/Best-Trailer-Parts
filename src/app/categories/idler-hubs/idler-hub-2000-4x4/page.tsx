import Link from "next/link";

export default function IdlerHub2000_4x4() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/idler-hubs" className="text-blue-600 hover:underline">
          Back to Idler Hubs
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Trailer Idler Hub for 2,000 lb. Axles | 4 on 4" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">
        Standard idler hub compatible with 2,000 lb axles featuring a 4x4 bolt pattern.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available 2,000 lb 4x4 Idler Hubs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left">Part Number</th>
              <th className="text-left">Bolt Pattern</th>
              <th className="text-left">Hub Bore</th>
              <th className="text-left">Stud Size</th>
              <th className="text-left">Material</th>
              <th className="text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TPM-IHK-2000-4X4</td>
              <td>4 on 4"</td>
              <td>1.98"</td>
              <td>1/2"</td>
              <td>Cast Iron</td>
              <td>Black Powder Coat</td>
            </tr>
            <tr>
              <td>TPM-IHK-2000-4X4Z</td>
              <td>4 on 4"</td>
              <td>1.98"</td>
              <td>1/2"</td>
              <td>Cast Iron</td>
              <td>Zinc</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}