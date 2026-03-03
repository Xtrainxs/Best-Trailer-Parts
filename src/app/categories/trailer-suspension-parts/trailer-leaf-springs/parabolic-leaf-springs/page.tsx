import React from "react";

export default function ParabolicLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Parabolic Leaf Springs</h1>
      <p className="mb-8 text-blue-800">Parabolic Leaf Springs feature a tapered design that reduces weight while maximizing flexibility and comfort. Their advanced engineering minimizes road shock and vibration, providing a smoother towing experience. Ideal for modern trailers, these springs combine strength with improved ride quality.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Parabolic Leaf Springs</h2>
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
              <td className="py-2 px-4 border-b">BTP-PL-3500-27</td>
              <td className="py-2 px-4 border-b">Standard Parabolic</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-PL-5000-29</td>
              <td className="py-2 px-4 border-b">Heavy Duty Parabolic</td>
              <td className="py-2 px-4 border-b">29</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-PL-6000-31</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Parabolic</td>
              <td className="py-2 px-4 border-b">31</td>
              <td className="py-2 px-4 border-b">6,000</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-PL-8000-33</td>
              <td className="py-2 px-4 border-b">HD Parabolic</td>
              <td className="py-2 px-4 border-b">33</td>
              <td className="py-2 px-4 border-b">8,000</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
