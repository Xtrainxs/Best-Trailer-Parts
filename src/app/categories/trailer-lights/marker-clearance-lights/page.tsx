export default function MarkerClearanceLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Marker & Clearance Lights</h1>
      <p className="text-lg text-gray-700 mb-6">LED and incandescent marker/clearance lights for trailer sides and corners. Available in amber and red, waterproof options.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          "1.png",
          "2.png",
          "3.png",
          "4.png",
          "5.png",
          "6.png",
          "7.png",
          "8.png",
          "9.png",
          "10.png",
          "11.png",
          "12.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Lights/Marker-Clearance%20Lights/${img}`}
              alt={`Marker Clearance Light ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-white text-sm text-center">{`Image ${idx + 1}`}</span>
          </div>
        ))}
      </div>
      <p className="text-lg text-blue-800 font-bold mb-4">
        We can supply all kinds and types of trailer marker-clearance lights irrespective of the table contents.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Color</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-MCL-LED-AM</td>
              <td className="py-2 px-4 border-b">LED</td>
              <td className="py-2 px-4 border-b">Amber</td>
              <td className="py-2 px-4 border-b">2.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-MCL-INC-RED</td>
              <td className="py-2 px-4 border-b">Incandescent</td>
              <td className="py-2 px-4 border-b">Red</td>
              <td className="py-2 px-4 border-b">2.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP65</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
