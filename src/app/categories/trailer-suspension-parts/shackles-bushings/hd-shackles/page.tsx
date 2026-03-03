import React from "react";

export default function HDShacklesPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">HD Shackles</h1>
      <p className="mb-8 text-blue-800">Heavy-duty shackles are built for trailers that require extra strength and durability. These shackles are ideal for commercial and heavy-haul applications.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available HD Shackles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Shackle Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Thickness (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDS-4-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDS-5-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-HDS-6-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
