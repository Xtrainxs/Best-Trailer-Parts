import React from "react";

export default function DoubleEyeLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Double-Eye Leaf Springs</h1>
      <p className="mb-8 text-blue-800">Double-Eye Leaf Springs are engineered to deliver reliable support and smooth ride quality for a wide range of trailers. Their dual-eye design ensures secure mounting and consistent load distribution, making them a popular choice for utility, boat, and cargo trailers. Built for durability and performance, these springs help maintain stability and safety on the road.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Double-Eye Leaf Springs</h2>
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
              <td className="py-2 px-4 border-b">BTP-DE-2500-25</td>
              <td className="py-2 px-4 border-b">Standard Double-Eye</td>
              <td className="py-2 px-4 border-b">25</td>
              <td className="py-2 px-4 border-b">2,500</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-DE-3500-27</td>
              <td className="py-2 px-4 border-b">Heavy Duty Double-Eye</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-DE-4000-26</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Double-Eye</td>
              <td className="py-2 px-4 border-b">26</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-DE-6000-28</td>
              <td className="py-2 px-4 border-b">HD Double-Eye</td>
              <td className="py-2 px-4 border-b">28</td>
              <td className="py-2 px-4 border-b">6,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
