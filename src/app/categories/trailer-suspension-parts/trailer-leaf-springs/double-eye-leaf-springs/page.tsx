import React from "react";

export default function DoubleEyeLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-2 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Double-Eye Leaf Springs</h1>
      <p className="mb-8 text-blue-800">Double-Eye Leaf Springs are engineered to deliver reliable support and smooth ride quality for a wide range of trailers. Their dual-eye design ensures secure mounting and consistent load distribution, making them a popular choice for utility, boat, and cargo trailers. Built for durability and performance, these springs help maintain stability and safety on the road.</p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Double Eye Leaf Springs</h2>
      <p className="mb-6 text-blue-800">Reliable and versatile, these springs provide smooth ride quality and secure mounting for utility and cargo trailers.</p>

      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Double Eye Leaf Springs/Picture${i}.png`} alt={`Double Eye Leaf Spring ${i}`} className="w-full h-32 object-contain bg-gray-900 rounded-md" style={{ background: '#1a1a1a' }} />
            <span className="mt-2 text-sm text-gray-100 text-center">Double Eye Leaf Spring {i}</span>
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
              <td className="font-semibold whitespace-nowrap">TPM-TRA-2250-25</td>
              <td>TRA-2250</td>
              <td>2,250</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-TRA-3000-26</td>
              <td>TRA-3000</td>
              <td>3,000</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-TRA-3500-27</td>
              <td>TRA-3500</td>
              <td>3,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-4000-26</td>
              <td>UNA-4000</td>
              <td>4,000</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-5000-29</td>
              <td>UNA-5000</td>
              <td>5,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-DE-6000-28</td>
              <td>HD</td>
              <td>6,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-022</td>
              <td>UNA-022</td>
              <td>2,480</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-030</td>
              <td>UNA-030</td>
              <td>1,290</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-035</td>
              <td>UNA-035</td>
              <td>650</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-036</td>
              <td>UNA-036</td>
              <td>1,250</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-041</td>
              <td>UNA-041</td>
              <td>1,500</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-049</td>
              <td>UNA-049</td>
              <td>1,000</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-050</td>
              <td>UNA-050</td>
              <td>1,500</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-051</td>
              <td>UNA-051</td>
              <td>2,000</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-052</td>
              <td>UNA-052</td>
              <td>2,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-053</td>
              <td>UNA-053</td>
              <td>3,000</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-054</td>
              <td>UNA-054</td>
              <td>3,500</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">TPM-UNA-055</td>
              <td>UNA-055</td>
              <td>4,000</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}
