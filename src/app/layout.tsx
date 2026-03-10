import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Trailer Part Masters',
  description: 'We do not sell, we help you buy',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="theme-page-bg text-neutral-dark min-h-screen font-sans">
        <header className="theme-header-bg shadow-2xl border-b-4 border-accent">
          <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full justify-between">
              <a href="/" className="block flex-shrink-0">
                <img
                  src="/logo-tpm.png"
                  alt="Trailer Part Masters vibrant logo"
                  className="h-36 md:h-32 w-auto rounded-2xl shadow-2xl border-4 border-black bg-cyan-100"
                  style={{ objectFit: 'contain' }}
                />
              </a>
              <div className="theme-contact flex flex-col text-white text-sm md:text-base font-semibold text-center md:text-right leading-relaxed md:ml-4">
                <span>
                  Phone: <a href="tel:+14038755074" className="underline">+1 (403) 875-5074</a>
                </span>
                <span>
                  Email: <a href="mailto:trailerpartmasters@shaw.ca" className="underline whitespace-nowrap">trailerpartmasters@shaw.ca</a>
                </span>
                <span>
                  <a href="mailto:terryparts@shaw.ca" className="underline whitespace-nowrap">terryparts@shaw.ca</a>
                </span>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-5">
              <a href="/categories/trailer-suspension-parts" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Suspension</a>
              <a href="/categories/trailer-lights" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Lights</a>
              <a href="/categories/trailer-electrical-parts" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Electrical</a>
              <a href="/categories/trailer-jacks" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Jacks</a>
              <a href="/categories/trailer-couplers" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Couplers</a>
              <a href="/categories/idler-hubs" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Idler Hubs</a>
              <a href="/categories/brake-drums" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Brake Drums</a>
              <a href="/categories/brake-assemblies" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Brake Assemblies</a>
              <a href="/categories/trailer-hardware" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Trailer Hardware</a>
              <a href="/about" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">About Us</a>
              <a href="/request-form" className="tpm-nav-btn text-lg font-bold px-4 py-2 rounded-xl shadow transition">Request Form</a>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-6rem)] font-sans">{children}</main>
        <footer className="theme-footer-bg text-white py-8 mt-12 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="font-bold text-lg tracking-wide">&copy; {new Date().getFullYear()} Trailer Part Masters. All rights reserved.</span>
            <nav className="theme-footer-links flex flex-wrap gap-4 md:gap-8">
              <a href="/about" className="text-white font-semibold">About Us</a>
              <a href="/request-form" className="text-white font-semibold">Request Form</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
