import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Trailer Parts Store',
  description: 'Browse trailer parts and accessories',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-sky-200 to-sky-50 text-gray-900 min-h-screen">
        <header className="bg-[#05203C] shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex justify-center sm:justify-start items-center mb-2 sm:mb-0">
                <a href="/" className="block">
                  <img
                    src="/logo.png"
                    alt="Best Trailer Parts logo"
                    className="w-44 h-44 sm:w-64 sm:h-64 object-contain rounded-md shadow-lg"
                  />
                </a>
              </div>
              <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
                <a href="/categories/trailer-suspension-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Suspension Parts</a>
                <a href="/categories/trailer-lights" className="text-base sm:text-lg text-white hover:text-yellow-300 px-2 py-1 rounded transition">Trailer Lights</a>
                <a href="/categories/trailer-electrical-parts" className="text-base sm:text-lg text-white hover:text-yellow-300 px-2 py-1 rounded transition">Trailer Electrical Parts</a>
                <a href="/categories/trailer-jacks" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Jacks</a>
                <a href="/categories/trailer-couplers" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Couplers</a>
                <a href="/categories/idler-hubs" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Idler Hubs</a>
                <a href="/categories/brake-drums" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Drums</a>
                <a href="/categories/brake-assemblies" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Assemblies</a>
                <a href="/about" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">About Us</a>
                <a href="/request-form" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Request Form</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
      </body>
    </html>
  );
}
