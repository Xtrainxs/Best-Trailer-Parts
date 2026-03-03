export default function MarkerClearanceLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Marker & Clearance Lights</h1>
      <p className="text-lg text-gray-700 mb-6">LED and incandescent marker/clearance lights for trailer sides and corners. Available in amber and red, waterproof options.</p>
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
              <td className="py-2 px-4 border-b">BTP-MCL-LED-AM</td>
              <td className="py-2 px-4 border-b">LED</td>
              <td className="py-2 px-4 border-b">Amber</td>
              <td className="py-2 px-4 border-b">2.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-MCL-INC-RED</td>
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
