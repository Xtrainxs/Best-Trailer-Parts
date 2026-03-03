export default function Bolt38Page() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-xl font-bold mb-6 text-blue-900">3/8" (Light Duty) Bolt Diameter</h1>
      <p className="mb-8 text-blue-800">3/8" light duty bolts are used for smaller trailers and light suspension applications, offering secure fastening for less demanding loads.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-blue-900">Available 3/8" Light Duty Bolts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bolt Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Thread Type</th>
              <th className="py-2 px-4 border-b text-left">Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BD38-2</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Coarse</td>
              <td className="py-2 px-4 border-b">Light Spring Mount</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BD38-2.5</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">Fine</td>
              <td className="py-2 px-4 border-b">Light Equalizer Mount</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BD38-3</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Coarse</td>
              <td className="py-2 px-4 border-b">Light Shackle Mount</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
