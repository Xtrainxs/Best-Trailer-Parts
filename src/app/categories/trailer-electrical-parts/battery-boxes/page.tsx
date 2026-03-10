export default function BatteryBoxes() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Battery Boxes</h1>
      <p className="text-lg text-gray-700 mb-6">Battery boxes for secure mounting and protection of trailer batteries.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Battery Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BBX-GROUP24</td>
              <td className="py-2 px-4 border-b">Group 24</td>
              <td className="py-2 px-4 border-b">24</td>
              <td className="py-2 px-4 border-b">Polypropylene</td>
              <td className="py-2 px-4 border-b">Ventilated, mounting hardware</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BBX-GROUP27</td>
              <td className="py-2 px-4 border-b">Group 27</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">Polypropylene</td>
              <td className="py-2 px-4 border-b">Ventilated, mounting hardware</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
