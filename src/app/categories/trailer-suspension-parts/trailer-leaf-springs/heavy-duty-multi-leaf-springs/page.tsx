import React from "react";

export default function HeavyDutyMultiLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Heavy Duty Multi-Leaf Springs</h1>
      <p className="mb-6 text-blue-800">Built for tough loads, these springs offer extra strength and stability for heavy-duty trailers. Ideal for frequent hauling and demanding conditions.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Heavy Duty Multi-Leaf Springs</h2>
      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Heavy Duty Leaf Springs/Picture${i}.png`} alt={`Heavy Duty Leaf Spring ${i}`} className="w-full h-32 object-contain bg-gray-900 rounded-md" style={{ background: '#1a1a1a' }} />
            <span className="mt-2 text-sm text-gray-100 text-center">Heavy Duty Leaf Spring {i}</span>
          </div>
        ))}
      </div>
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
              <td className="py-2 px-4 border-b whitespace-nowrap font-semibold">TPM-HDML-4000-26</td>
              <td className="py-2 px-4 border-b">Standard</td>
              <td className="py-2 px-4 border-b">26</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b whitespace-nowrap font-semibold">TPM-HDML-5000-28</td>
              <td className="py-2 px-4 border-b">Heavy Duty</td>
              <td className="py-2 px-4 border-b">28</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b whitespace-nowrap font-semibold">TPM-HDML-6000-30</td>
              <td className="py-2 px-4 border-b">Extra HD</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">6,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b whitespace-nowrap font-semibold">TPM-HDML-8000-32</td>
              <td className="py-2 px-4 border-b">Super Duty</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">8,000</td>
              <td className="py-2 px-4 border-b">8</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}
