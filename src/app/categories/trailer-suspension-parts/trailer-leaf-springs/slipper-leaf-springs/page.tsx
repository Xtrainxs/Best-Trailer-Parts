import React from "react";

export default function SlipperLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Slipper Leaf Springs</h1>
      <p className="mb-6 text-blue-800">Designed for heavy loads, these springs offer durability and effective shock absorption for commercial and agricultural trailers.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available Slipper Leaf Springs</h2>
      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Slipper Leaf Springs/Picture${i}.png`} alt={`Slipper Leaf Spring ${i}`} className="w-full h-32 object-contain bg-gray-900 rounded-md" style={{ background: '#1a1a1a' }} />
            <span className="mt-2 text-sm text-gray-100 text-center">Slipper Leaf Spring {i}</span>
          </div>
        ))}
      </div>
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left">Part Number</th>
              <th className="text-left">Spring Type</th>
              <th className="text-left">Capacity (lbs)</th>
              <th className="text-left">Leaves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-013</td>
              <td>Flat End</td>
              <td>470</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-014</td>
              <td>Flat End</td>
              <td>705</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-015</td>
              <td>Flat End</td>
              <td>940</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-016</td>
              <td>Flat End</td>
              <td>1,184</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-017</td>
              <td>Flat End</td>
              <td>1,415</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-018</td>
              <td>Flat End</td>
              <td>300</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-034</td>
              <td>Flat End</td>
              <td>800</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-207</td>
              <td>Flat End</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-009</td>
              <td>Hook End</td>
              <td>800</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-010</td>
              <td>Hook End</td>
              <td>1,000</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-231</td>
              <td>Hook End</td>
              <td>2,500</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-233</td>
              <td>Hook End</td>
              <td>4,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-300</td>
              <td>Hook End</td>
              <td>4,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-176N</td>
              <td>Radius End</td>
              <td>230</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-177N</td>
              <td>Radius End</td>
              <td>500</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-178</td>
              <td>Radius End</td>
              <td>750</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-179</td>
              <td>Radius End</td>
              <td>950</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-180</td>
              <td>Radius End</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-232</td>
              <td>Radius End</td>
              <td>3,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-299</td>
              <td>Radius End</td>
              <td>3,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-318</td>
              <td>Radius End</td>
              <td>8,000</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-TRA-2740</td>
              <td>Radius End</td>
              <td>12,000</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}
