import './globals.css';
import { ReactNode } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

export const metadata = {
  metadataBase: new URL('https://besttrailerparts.net'),
  title: {
    default: 'Wholesale Trailer Parts Direct from Manufacturer | Best Trailer Parts',
    template: '%s | Best Trailer Parts',
  },
  description:
    'Wholesale trailer parts direct from the manufacturer — no distributor markup. Suspension, brakes, lights, hubs, couplers, jacks & hardware for Canada & USA.',
  keywords: [
    'wholesale trailer parts',
    'bulk trailer parts Canada',
    'trailer parts manufacturer direct',
    'trailer suspension wholesale',
    'trailer brake parts bulk',
    'trailer lights wholesale',
    'trailer jacks bulk order',
    'trailer couplers wholesale',
    'idler hubs wholesale',
    'brake drums bulk',
    'trailer hardware wholesale',
    'trailer parts importer Canada',
    'direct from manufacturer trailer parts',
    'OEM trailer components',
  ],
  openGraph: {
    title: 'Wholesale Trailer Parts Direct from Manufacturer | Best Trailer Parts',
    description:
      'Wholesale trailer components sourced direct from manufacturers. No distributor markup. Serving trailer manufacturers and stockists across Canada and USA since 2001.',
    url: 'https://besttrailerparts.net',
    siteName: 'Best Trailer Parts',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Best Trailer Parts' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Trailer Parts Direct from Manufacturer | Best Trailer Parts',
    description: 'Wholesale trailer components direct from manufacturers. No distributor markup. Canada & USA.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  verification: { google: 'Vngq4aZLhX71gDZqulVHg1K43LlSNAj9OzbOruOY5I8' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Best Trailer Parts',
  url: 'https://besttrailerparts.net',
  logo: 'https://besttrailerparts.net/logo.png',
  foundingDate: '2001',
  description:
    'Wholesale trailer parts sourced direct from manufacturers in Asia. Serving trailer manufacturers, wholesalers, and stockists across Canada and the USA since 2001.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Taralake Manor NE',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-403-903-7957',
    email: 'info@besttrailerparts.net',
    contactType: 'sales',
    areaServed: ['CA', 'US'],
    availableLanguage: 'English',
  },
  areaServed: ['Canada', 'United States'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFAFA] text-slate-900 min-h-screen">
        <header className="bg-[#05203C] shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
              <a href="/" className="block self-center">
                <img
                  src="/logo.png"
                  alt="Best Trailer Parts logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain rounded-md shadow-lg"
                />
              </a>
              <div className="flex flex-col gap-3 sm:items-end">
                <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
                  <a href="/categories" className="text-base sm:text-lg text-sky-300 font-semibold hover:text-white px-2 py-1 rounded transition">All Categories</a>
                  <a href="/categories/trailer-suspension-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Suspension Parts</a>
                  <a href="/categories/trailer-lights" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Lights</a>
                  <a href="/categories/trailer-electrical-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Electrical Parts</a>
                  <a href="/categories/trailer-jacks" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Jacks</a>
                  <a href="/categories/trailer-couplers" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Couplers</a>
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
                    Email: <a href="mailto:info@besttrailerparts.net" className="underline hover:text-sky-300 whitespace-nowrap">info@besttrailerparts.net</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Breadcrumbs />
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <footer className="bg-[#05203C] text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Best Trailer Parts</h3>
                <p className="text-sm text-sky-100 leading-relaxed">
                  Premium trailer components sourced directly from trusted global manufacturers.
                  25+ years of importing expertise serving North America.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Shop Categories
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/categories/trailer-suspension-parts" className="hover:text-sky-300 transition">Suspension Parts</a></li>
                  <li><a href="/categories/trailer-lights" className="hover:text-sky-300 transition">Trailer Lights</a></li>
                  <li><a href="/categories/trailer-electrical-parts" className="hover:text-sky-300 transition">Electrical Parts</a></li>
                  <li><a href="/categories/trailer-jacks" className="hover:text-sky-300 transition">Trailer Jacks</a></li>
                  <li><a href="/categories/boat-trailer-parts" className="hover:text-sky-300 transition">Boat Trailer Parts</a></li>
                  <li><a href="/categories" className="hover:text-sky-300 transition font-semibold">View all categories →</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-sky-300 transition">About Us</a></li>
                  <li><a href="/request-form" className="hover:text-sky-300 transition">Request a Quote</a></li>
                  <li><a href="/shipping-policy" className="hover:text-sky-300 transition">Shipping Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Contact
                </h4>
                <address className="not-italic text-sm space-y-2 leading-relaxed">
                  <div>
                    <span className="block text-sky-300">Phone</span>
                    <a href="tel:+14039037957" className="hover:text-sky-300 transition">+1 403-903-7957</a>
                  </div>
                  <div>
                    <span className="block text-sky-300">Email</span>
                    <a href="mailto:info@besttrailerparts.net" className="hover:text-sky-300 transition break-all">info@besttrailerparts.net</a>
                  </div>
                  <div>
                    <span className="block text-sky-300">Address</span>
                    <span>Taralake Manor NE<br />Calgary, Alberta, Canada</span>
                  </div>
                </address>
              </div>
            </div>
            <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-sky-200">
              <p>&copy; {new Date().getFullYear()} Best Trailer Parts. All rights reserved.</p>
              <p>Sourced direct from global manufacturers since 2001.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
