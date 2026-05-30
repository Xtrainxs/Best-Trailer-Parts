import { readdir } from "fs/promises";
import path from "path";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

async function getHardwareImages() {
  const folder = path.join(process.cwd(), "public", "images", "Trailer Hardware");

  try {
    const entries = await readdir(folder, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()));

    return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

export default async function TrailerHardwarePage() {
  const hardwareImages = await getHardwareImages();

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Trailer Hardware</h1>
      <p className="text-lg text-slate-700 mb-4">
        We carry all kinds of trailer hardware and accessories — pictures below are for
        reference only and represent a small sample of what is available.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 mb-8 text-sm text-slate-700 leading-relaxed">
        <span className="font-semibold text-[#05203C]">Our trailer hardware range includes:</span>{' '}
        E-Tracks &amp; E-Track Fittings, L-Tracks, D-Rings &amp; D-Ring Brackets, Trailer Safety
        Chains, Ratchet Straps &amp; Tie-Downs, Cargo Winch Bars, Trailer Bolts, Nuts &amp; Washers,
        Weld-On Hinges, Door Butt Hinges, Bullet Hinges, Center Hinges, Lock Hinges, Hasp Locks,
        Door Assembly Locks, Tipper Latches, Rubber Hood Latches, Toggle Catch Locks,
        Ramp Locks, Wheel Chocks, Trailer Ramps, Shackle Kits, Steel Pin Hinges,
        Equalizer Nuts &amp; Bolts, Aluminum Tracks &amp; Fittings, Junction Box Brackets,
        and much more. <a href="/request-form" className="text-sky-700 hover:underline font-medium">Request a quote</a> for
        any item not shown.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {hardwareImages.map((img, idx) => {
          const isTrailerPartsImage = /^Trailer Parts\s+\d+\.png$/i.test(img);
          const imageSrc = `/images/Trailer%20Hardware/${encodeURIComponent(img)}`;

          return (
            <div
              key={img}
              className={`${isTrailerPartsImage ? "sm:col-span-2 lg:col-span-3" : ""} bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center w-full`}
            >
              <div
                className={`relative w-full ${isTrailerPartsImage ? "max-w-6xl h-[28rem] sm:h-[34rem]" : "h-64 sm:h-72 lg:h-80"} rounded-md p-2 mb-3 overflow-hidden`}
              >
                <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="block h-full w-full" title="Open full-size image">
                  <img
                    src={imageSrc}
                    alt={`Trailer hardware ${idx + 1}`}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </a>
              </div>
              <span className="text-slate-700 text-sm text-center break-words font-medium">
                {img
                  .replace(/\.(png|jpg)$/i, "")
                  .replace(/^Trailer Parts\s+\d+$/i, "Trailer Parts")}
              </span>
            </div>
          );
        })}
      </div>

      {hardwareImages.length === 0 && (
        <p className="text-gray-700 font-semibold">No images found in /public/images/Trailer Hardware.</p>
      )}
    </main>
  );
}
