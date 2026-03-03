import React from "react";

export default function NylonBushingsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Nylon Bushings</h1>
      <p className="mb-8 text-blue-800">Nylon bushings offer smooth movement and corrosion resistance for trailer suspension systems. They are lightweight and ideal for light-duty trailers.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Nylon Bushings</h2>
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
              <td className="py-2 px-4 border-b">BTP-NB-2-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-NB-2.5-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-NB-3-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
