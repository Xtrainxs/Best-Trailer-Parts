export default function LedTailLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">LED Tail Lights</h1>
      <p className="text-lg text-gray-700 mb-6">High-visibility, long-lasting LED tail lights for trailers. DOT/SAE compliant, waterproof, and vibration-resistant.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Shape</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Certifications</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-LTL-OVAL-LED</td>
              <td className="py-2 px-4 border-b">Oval</td>
              <td className="py-2 px-4 border-b">6.5" x 2.25"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-LTL-RND-LED</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
