import fs from 'fs';
import path from 'path';
import ImageStrip from '@/components/image-strip';

function getRepresentativeImages(): string[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const result: string[] = [];

  function findFirstImage(dir: string): string | null {
    let entries: fs.Dirent[];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return null; }
    for (const e of entries) {
      if (e.isFile() && /\.(jpe?g|png|webp|gif)$/i.test(e.name)) {
        return path.join(dir, e.name);
      }
    }
    for (const e of entries) {
      if (e.isDirectory()) {
        const found = findFirstImage(path.join(dir, e.name));
        if (found) return found;
      }
    }
    return null;
  }

  let topDirs: fs.Dirent[];
  try { topDirs = fs.readdirSync(imagesDir, { withFileTypes: true }).filter(e => e.isDirectory()); }
  catch { return []; }

  for (const d of topDirs) {
    const img = findFirstImage(path.join(imagesDir, d.name));
    if (img) {
      result.push(img.replace(path.join(process.cwd(), 'public'), '').replace(/\\/g, '/'));
    }
  }
  return result;
}

export default function Home() {
  const stripImages = getRepresentativeImages();
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="text-center pt-16 pb-12 sm:pt-20 sm:pb-16">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-6">
          Trailer Components &middot; Direct from Manufacturer
        </p>
        <h1
          className="font-bold text-[#05203C] leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Best Trailer Parts
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 leading-relaxed">
          Premium suspension, lights, brakes, and accessories sourced from trusted
          global manufacturers &mdash; without the middleman markup.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/categories"
            className="px-8 py-3 bg-[#05203C] text-white rounded-md font-semibold shadow-sm hover:bg-[#0a3460] transition"
          >
            Browse Categories
          </a>
          <a
            href="/request-form"
            className="px-8 py-3 border-2 border-[#05203C] text-[#05203C] rounded-md font-semibold hover:bg-[#05203C] hover:text-white transition"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white/80 backdrop-blur rounded-xl border border-sky-100 shadow-sm mb-16">
        <ul className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-sky-100 text-sm sm:text-base text-slate-700 font-medium">
          <li className="px-6 py-3 sm:py-4">Importing since 2001</li>
          <li className="px-6 py-3 sm:py-4">Direct from global manufacturers</li>
          <li className="px-6 py-3 sm:py-4">Serving customers across North America</li>
        </ul>
      </section>

      {/* Value prop */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          We&apos;ve spent 25 years building relationships with the factories most
          resellers buy from &mdash; and we pass those prices to you directly. Browse
          our curated catalog of premium trailer components, or tell us what you need
          and we&apos;ll match you with the right part.
        </p>
      </section>

      <ImageStrip images={stripImages} />
    </div>
  );
}
