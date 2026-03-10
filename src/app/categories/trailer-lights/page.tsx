import Link from "next/link";

export default function TrailerLightsCategory() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Trailer Lights</h1>
      <p className="text-lg text-gray-700 mb-8">Browse our selection of trailer lights, including LED and incandescent tail lights, marker lights, license plate lights, utility lights, and wiring kits. All products feature unique BTP part numbers and meet North American standards.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <Link href="/categories/trailer-lights/led-tail-lights" className="block bg-white rounded-xl shadow p-4 text-center hover:bg-yellow-50 border border-yellow-200 transition">
          <span className="text-base font-semibold text-yellow-800">LED Tail Lights</span>
        </Link>
        <Link href="/categories/trailer-lights/marker-clearance-lights" className="block bg-white rounded-xl shadow p-4 text-center hover:bg-yellow-50 border border-yellow-200 transition">
          <span className="text-base font-semibold text-yellow-800">Marker/Clearance Lights</span>
        </Link>
        <Link href="/categories/trailer-lights/license-plate-lights" className="block bg-white rounded-xl shadow p-4 text-center hover:bg-yellow-50 border border-yellow-200 transition">
          <span className="text-base font-semibold text-yellow-800">License Plate Lights</span>
        </Link>
        <Link href="/categories/trailer-lights/warning-strobe-lights" className="block bg-white rounded-xl shadow p-4 text-center hover:bg-yellow-50 border border-yellow-200 transition">
          <span className="text-base font-semibold text-yellow-800">Warning/Strobe Lights</span>
        </Link>
      </div>
    </main>
  );
}
