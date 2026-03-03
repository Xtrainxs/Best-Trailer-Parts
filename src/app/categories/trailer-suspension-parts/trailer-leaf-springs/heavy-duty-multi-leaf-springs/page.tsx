import React from "react";

export default function HeavyDutyMultiLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Heavy Duty Multi-Leaf Springs</h1>
      <p className="mb-8 text-blue-800">Heavy Duty Multi-Leaf Springs provide enhanced strength and load capacity for demanding trailer applications. Their multi-leaf construction distributes weight efficiently, reducing stress and wear while improving ride stability. These springs are perfect for trailers that require extra support for frequent or heavy hauling.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Heavy Duty Multi-Leaf Springs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Spring Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Leaves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDML-4000-26</td>
              <td className="py-2 px-4 border-b">Standard Multi-Leaf</td>
              <td className="py-2 px-4 border-b">26</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDML-5000-28</td>
              <td className="py-2 px-4 border-b">Heavy Duty Multi-Leaf</td>
              <td className="py-2 px-4 border-b">28</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDML-6000-30</td>
              <td className="py-2 px-4 border-b">Extra HD Multi-Leaf</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">6,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDML-8000-32</td>
              <td className="py-2 px-4 border-b">Super Duty Multi-Leaf</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">8,000</td>
              <td className="py-2 px-4 border-b">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
