export default function BreakawayKits() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Breakaway Kits</h1>
      <p className="text-lg text-gray-700 mb-6">Breakaway kits for trailer safety, including switch, battery, and charger for emergency braking.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Battery</th>
              <th className="py-2 px-4 border-b text-left">Includes</th>
              <th className="py-2 px-4 border-b text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BK-5AH</td>
              <td className="py-2 px-4 border-b">Standard</td>
              <td className="py-2 px-4 border-b">5 Ah</td>
              <td className="py-2 px-4 border-b">Switch, battery, charger</td>
              <td className="py-2 px-4 border-b">LED indicator, weatherproof</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BK-10AH</td>
              <td className="py-2 px-4 border-b">Heavy Duty</td>
              <td className="py-2 px-4 border-b">10 Ah</td>
              <td className="py-2 px-4 border-b">Switch, battery, charger</td>
              <td className="py-2 px-4 border-b">LED indicator, weatherproof</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
