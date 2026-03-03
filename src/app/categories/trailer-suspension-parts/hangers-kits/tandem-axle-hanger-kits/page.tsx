import React from "react";

export default function TandemAxleHangerKitsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Tandem-Axle Hanger Kits</h1>
      <p className="mb-8 text-blue-800">Tandem-axle hanger kits are designed for trailers with two axles, providing the necessary hardware for secure and balanced suspension. These kits help distribute weight evenly and improve ride stability for larger trailers.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Tandem-Axle Hanger Kits</h2>
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
              <td className="py-2 px-4 border-b">BTP-TAHK-3500</td>
              <td className="py-2 px-4 border-b">Standard Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TAHK-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TAHK-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
