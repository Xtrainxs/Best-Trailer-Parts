import { readdir } from "fs/promises";
import path from "path";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

async function getProductImageUrls() {
  const publicImagesDir = path.join(process.cwd(), "public", "images");

  async function walk(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const results: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const nested = await walk(fullPath);
        results.push(...nested);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.has(ext)) {
          const rel = path.relative(path.join(process.cwd(), "public"), fullPath);
          const encoded = rel
            .split(path.sep)
            .map((segment) => encodeURIComponent(segment))
            .join("/");
          results.push(`/${encoded}`);
        }
      }
    }

    return results;
  }

  try {
    const images = await walk(publicImagesDir);
    return images.sort((a, b) => a.localeCompare(b));
  } catch {
    return [];
  }
}

export default async function Home() {
  const productImages = await getProductImageUrls();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-10 px-4">
      {/* Vibrant logo and hero section */}
      <div className="relative flex flex-col items-center justify-center mb-10 h-56 sm:h-64 w-full">
        {/* Animated utility trailer, enlarged to logo size */}
        <div className="absolute left-0 top-[80%] w-full h-48 pointer-events-none">
          <div className="animate-trailer-move w-48 h-24" style={{ position: 'absolute', left: 0, top: 0 }}>
            <svg viewBox="0 0 192 96" width="192" height="96" fill="none">
              <rect x="30" y="30" width="105" height="36" rx="10" fill="#222" stroke="#00B8D9" strokeWidth="4" />
              <rect x="140" y="42" width="30" height="12" rx="3" fill="#00B8D9" />
              <circle cx="52" cy="75" r="12" fill="#00B8D9" stroke="#222" strokeWidth="4" />
              <circle cx="128" cy="75" r="12" fill="#00B8D9" stroke="#222" strokeWidth="4" />
            </svg>
          </div>
        </div>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-cyan-500 to-sky-700 mb-3" style={{ fontFamily: 'Oswald, Arial, sans-serif' }}>
          TRAILER PART MASTERS
        </h1>
        <p className="text-center text-base sm:text-xl md:text-2xl font-bold text-teal-700 uppercase tracking-wide sm:tracking-widest mb-1 glow-text" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          WE DO NOT SELL, WE HELP YOU BUY
        </p>
        <style>{`
          .glow-text {
            text-shadow: 0 0 8px #00B8D9, 0 0 16px #00B8D9, 0 0 24px #00B8D9;
          }
        `}</style>
      </div>
      <style>{`
        @keyframes trailer-move {
          0% { left: 0; }
          100% { left: calc(100% - 128px); }
        }
        .animate-trailer-move {
          animation: trailer-move 4s linear infinite;
        }
      `}</style>

      <section className="w-full max-w-7xl mb-10">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 text-center" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Product Image Trail
        </h2>
        <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-200 bg-white/60 shadow-xl py-4">
          {productImages.length > 0 ? (
            <div className="flex w-max animate-image-trail">
              {[...productImages, ...productImages].map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="mx-2 h-24 w-24 sm:h-28 sm:w-28 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0"
                >
                  <img
                    src={src}
                    alt={`Product ${idx + 1}`}
                    className="h-full w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-700 font-semibold py-6">No product images found in /public/images.</p>
          )}
        </div>
      </section>

      {/* Professional info card */}
      <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-teal-100 via-cyan-50 to-sky-100 rounded-3xl shadow-2xl p-6 sm:p-8 border-4 border-teal-300">
        <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 font-semibold" style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.01em' }}>
          <span className="block mb-2">Welcome to <span className="text-teal-700 font-extrabold">Trailer Part Masters</span> – your trusted partner in the trailer industry.</span>
          <span className="block mb-2">With over 25 years of experience, we deliver a comprehensive selection of premium trailer components sourced from globally recognized suppliers. Our catalog is meticulously curated to ensure every part meets the highest standards of durability, reliability, and performance.</span>
          <span className="block mb-2">We are committed to providing expert guidance, transparent information, and personalized service for every customer. Whether you’re a professional builder, repair shop, or enthusiast, our team is dedicated to helping you find the perfect solution for your trailer needs.</span>
          <span className="block">Discover our extensive categories and see why industry leaders across North America choose us for quality, value, and peace of mind.</span>
        </p>
        <div className="mt-8 flex justify-center">
          <a href="/categories" className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-500 text-white rounded-2xl shadow-xl hover:bg-gradient-to-l font-extrabold text-xl transition">View All Categories</a>
        </div>
      </div>

      <style>{`
        @keyframes image-trail {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-image-trail {
          animation: image-trail 120s linear infinite;
        }
      `}</style>
    </div>
  );
}
