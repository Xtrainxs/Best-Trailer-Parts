export default function Adapters() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Trailer Adapters</h1>
      <p className="text-lg text-gray-700 mb-6">Adapters for connecting different trailer wiring systems, including 4-way, 5-way, 6-way, and 7-way configurations.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Input</th>
              <th className="py-2 px-4 border-b text-left">Output</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-ADP-4TO7</td>
              <td className="py-2 px-4 border-b">4-Way to 7-Way</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-ADP-7TO6</td>
              <td className="py-2 px-4 border-b">7-Way to 6-Way</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">6-pin Round</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-ADP-5TO4</td>
              <td className="py-2 px-4 border-b">5-Way to 4-Way</td>
              <td className="py-2 px-4 border-b">5-pin Flat</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-ADP-6TO4</td>
              <td className="py-2 px-4 border-b">6-Way to 4-Way</td>
              <td className="py-2 px-4 border-b">6-pin Round</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-ADP-7TO5</td>
              <td className="py-2 px-4 border-b">7-Way to 5-Way</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">5-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
