export default function Connectors() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Trailer Connectors</h1>
      <p className="text-lg text-gray-700 mb-6">Connectors for trailer wiring, including flat, round, and RV styles for secure electrical connections.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Pins</th>
              <th className="py-2 px-4 border-b text-left">Style</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-CON-4FLAT</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-CON-7RV</td>
              <td className="py-2 px-4 border-b">RV</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">Aluminum</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-CON-5FLAT</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-CON-6ROUND</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">Aluminum</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-CON-7BLADE</td>
              <td className="py-2 px-4 border-b">Blade</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Blade</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
