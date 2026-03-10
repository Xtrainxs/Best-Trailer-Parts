export default function LedTailLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">LED Tail Lights</h1>
      <p className="text-lg text-gray-700 mb-6">High-visibility, long-lasting LED tail lights for trailers. DOT/SAE compliant, waterproof, and vibration-resistant.</p>
      <div className="overflow-x-auto mb-8">
        <div className="flex flex-nowrap gap-4 min-w-max">
          {['1.png', '2.png', '3.png', '4.png', '5.png'].map((img, idx) => (
            <div
              key={img}
              className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-56"
            >
              <img
                src={`/images/Lights/Tail%20Lights/${img}`}
                alt={`LED Tail Light ${idx + 1}`}
                className="h-36 w-auto object-contain mb-2"
              />
              <span className="text-white text-sm text-center">{`Image ${idx + 1}`}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-blue-800 font-bold mb-4">
        We can supply all kinds and types of trailer tail lights upon request.
      </p>
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
              <td className="py-2 px-4 border-b">TPM-LTL-OVAL-LED</td>
              <td className="py-2 px-4 border-b">Oval</td>
              <td className="py-2 px-4 border-b">6.5" x 2.25"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-RND-LED</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-4R-16LED</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-SQ-110MM</td>
              <td className="py-2 px-4 border-b">Square</td>
              <td className="py-2 px-4 border-b">110 mm x 110 mm</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-24V-STROBE</td>
              <td className="py-2 px-4 border-b">Rectangular</td>
              <td className="py-2 px-4 border-b">5.9" x 3.1"</td>
              <td className="py-2 px-4 border-b">24V</td>
              <td className="py-2 px-4 border-b">Bolt-on</td>
              <td className="py-2 px-4 border-b">ECE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-E4-COMBO</td>
              <td className="py-2 px-4 border-b">Combination</td>
              <td className="py-2 px-4 border-b">7.0" x 5.5"</td>
              <td className="py-2 px-4 border-b">10-30V</td>
              <td className="py-2 px-4 border-b">Bracket</td>
              <td className="py-2 px-4 border-b">E4 / ADR</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-6IN-MULTI</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">6" dia.</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-IP67-TLR</td>
              <td className="py-2 px-4 border-b">Oval</td>
              <td className="py-2 px-4 border-b">6.7" x 2.5"</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-REAR-LAMP-CN</td>
              <td className="py-2 px-4 border-b">Rectangular</td>
              <td className="py-2 px-4 border-b">6.1" x 2.2"</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
