import { readdir } from "fs/promises";
import path from "path";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

async function getBoatTrailerPartImages() {
  const baseDir = path.join(process.cwd(), "public", "images", "Boat Trailer Parts");

  async function walk(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const results: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const nested = await walk(fullPath);
        results.push(...nested);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (!imageExtensions.has(ext)) {
        continue;
      }

      const rel = path.relative(baseDir, fullPath);
      const encoded = rel
        .split(path.sep)
        .map((segment) => encodeURIComponent(segment))
        .join("/");

      results.push(encoded);
    }

    return results;
  }

  try {
    const images = await walk(baseDir);
    return images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

export default async function BoatTrailerPartsPage() {
  const images = await getBoatTrailerPartImages();

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Boat Trailer Parts</h1>
      <p className="text-lg text-gray-700 mb-8">Browse boat trailer parts and accessories in this category.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {images.map((img, idx) => {
          const imageSrc = `/images/Boat%20Trailer%20Parts/${img}`;
          const label = decodeURIComponent(img.split("/").pop() || img).replace(/\.(png|jpg|jpeg|webp|avif|gif)$/i, "");

          return (
            <div key={img} className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-full">
              <div className="relative w-full h-56 sm:h-64 bg-gray-200 rounded-md p-2 mb-2 overflow-hidden">
                <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="block h-full w-full" title="Open full-size image">
                  <img src={imageSrc} alt={`Boat trailer part ${idx + 1}`} className="h-full w-full object-contain object-center" />
                </a>
              </div>
              <span className="text-white text-sm text-center break-words">{label}</span>
            </div>
          );
        })}
      </div>

      {images.length === 0 && <p className="text-gray-700 font-semibold">No images found in /public/images/Boat Trailer Parts.</p>}
    </main>
  );
}
