import React from "react";

export default function SuspensionFastenersPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Suspension Fasteners</h1>
      <p className="mb-8 text-blue-800">Suspension fasteners include bolts, nuts, and washers designed for secure assembly of trailer suspension systems. These components are critical for safety and durability.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Suspension Fasteners</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Size (in)</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SF-BOLT-12</td>
              <td className="py-2 px-4 border-b">Bolt</td>
              <td className="py-2 px-4 border-b">1/2" x 3"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SF-NUT-12</td>
              <td className="py-2 px-4 border-b">Nut</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SF-WASHER-12</td>
              <td className="py-2 px-4 border-b">Washer</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
