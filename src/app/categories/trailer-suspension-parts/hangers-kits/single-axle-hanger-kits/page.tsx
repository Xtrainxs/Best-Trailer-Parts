import React from "react";

export default function SingleAxleHangerKitsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Single-Axle Hanger Kits</h1>
      <p className="mb-8 text-blue-800">Single-axle hanger kits provide all the essential components for mounting leaf springs to a trailer frame. These kits are designed for straightforward installation and reliable performance, making them ideal for utility and light-duty trailers.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Single-Axle Hanger Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Kit Type</th>
              <th className="py-2 px-4 border-b text-left">Spring Size (in)</th>
              <th className="py-2 px-4 border-b text-left">Axle Capacity (lbs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SAHK-2000</td>
              <td className="py-2 px-4 border-b">Standard Single-Axle Kit</td>
              <td className="py-2 px-4 border-b">25</td>
              <td className="py-2 px-4 border-b">2,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SAHK-3500</td>
              <td className="py-2 px-4 border-b">Heavy Duty Single-Axle Kit</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SAHK-5000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Single-Axle Kit</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
