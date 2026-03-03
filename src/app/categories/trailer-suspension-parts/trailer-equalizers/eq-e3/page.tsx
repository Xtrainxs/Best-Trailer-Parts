import React from "react";

export default function EQE3Page() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">EQ-E3 Equalizer</h1>
      <p className="mb-8 text-blue-800">EQ-E3 equalizers offer advanced suspension control and durability for heavy-duty trailers. Their robust design ensures long-lasting performance under demanding conditions.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available EQ-E3 Equalizers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Equalizer Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Axle Capacity (lbs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EQE3-6-3500</td>
              <td className="py-2 px-4 border-b">Standard EQ-E3</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EQE3-8-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty EQ-E3</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-EQE3-10-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf EQ-E3</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
