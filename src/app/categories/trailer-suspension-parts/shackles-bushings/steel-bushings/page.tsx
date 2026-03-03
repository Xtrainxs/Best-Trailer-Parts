import React from "react";

export default function SteelBushingsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Steel Bushings</h1>
      <p className="mb-8 text-blue-800">Steel bushings offer high strength and longevity for demanding trailer suspension systems. They are commonly used in commercial and heavy-duty trailers.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Steel Bushings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bushing Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Diameter (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SB-2-1</td>
              <td className="py-2 px-4 border-b">Steel Bushing</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SB-2.5-1</td>
              <td className="py-2 px-4 border-b">Steel Bushing</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SB-3-1</td>
              <td className="py-2 px-4 border-b">Steel Bushing</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
