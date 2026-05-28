import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Best Trailer Parts',
  description: 'Browse trailer parts and accessories',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-sky-200 to-sky-50 text-gray-900 min-h-screen">
        <header className="bg-[#05203C] shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
              <a href="/" className="block w-72 h-24 sm:w-[30rem] sm:h-32 bg-white rounded-md shadow-lg p-1 overflow-hidden self-center">
                <img
                  src="/logo.png"
                  alt="Best Trailer Parts logo"
                  className="w-full h-full object-fill"
                />
              </a>
              <div className="flex flex-col gap-3 sm:items-end">
                <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
                  <a href="/categories/trailer-suspension-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Suspension Parts</a>
                  <a href="/categories/trailer-lights" className="text-base sm:text-lg text-white hover:text-yellow-300 px-2 py-1 rounded transition">Trailer Lights</a>
                  <a href="/categories/trailer-electrical-parts" className="text-base sm:text-lg text-white hover:text-yellow-300 px-2 py-1 rounded transition">Trailer Electrical Parts</a>
                  <a href="/categories/trailer-jacks" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Jacks</a>
                  <a href="/categories/trailer-couplers" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Couplers</a>
                  <a href="/categories/idler-hubs" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Idler Hubs</a>
                  <a href="/categories/brake-drums" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Drums</a>
                  <a href="/categories/brake-assemblies" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Assemblies</a>
                  <a href="/categories/trailer-hardware" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Hardware</a>
                  <a href="/categories/boat-trailer-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Boat Trailer Parts</a>
                  <a href="/about" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">About Us</a>
                  <a href="/request-form" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Request Form</a>
                </nav>
                <div className="text-white text-sm sm:text-base leading-relaxed text-center sm:text-right sm:self-end">
                  <div>
                    Phone: <a href="tel:+14039037957" className="underline hover:text-sky-300">+1 403-903-7957</a>
                  </div>
                  <div className="whitespace-nowrap">
                    Email: <a href="mailto:besttrailerparts@shaw.ca" className="underline hover:text-sky-300 whitespace-nowrap">besttrailerparts@shaw.ca</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
      </body>
    </html>
  );
}
