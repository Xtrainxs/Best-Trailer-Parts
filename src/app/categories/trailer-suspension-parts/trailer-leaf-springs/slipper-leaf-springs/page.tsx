import React from "react";

export default function SlipperLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Slipper Leaf Springs</h1>
      <p className="mb-8 text-blue-800">Slipper Leaf Springs are designed for heavy-duty applications, offering robust support and flexibility for trailers that carry substantial loads. Their unique slipper end allows for smooth movement and effective shock absorption, making them ideal for commercial and agricultural trailers that demand long-lasting reliability.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Slipper Leaf Springs</h2>
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
              <td className="py-2 px-4 border-b">BTP-SL-3000-26</td>
              <td className="py-2 px-4 border-b">Standard Slipper</td>
              <td className="py-2 px-4 border-b">26</td>
              <td className="py-2 px-4 border-b">3,000</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SL-4000-28</td>
              <td className="py-2 px-4 border-b">Heavy Duty Slipper</td>
              <td className="py-2 px-4 border-b">28</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SL-5000-30</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Slipper</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SL-7000-32</td>
              <td className="py-2 px-4 border-b">HD Slipper</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
