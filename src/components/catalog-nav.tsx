'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { catalog } from '@/lib/catalog';

/**
 * Responsive catalog navigation.
 * Desktop: "Shop Parts" button opens a full mega-menu panel showing every
 *   category and its subcategories — any subcategory is 1 click from any page.
 * Mobile: a slide-down drawer with expandable category accordions.
 */
export default function CatalogNav() {
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // close desktop panel on outside click / Escape
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpenDesktop(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenDesktop(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
      {/* ===================== DESKTOP ===================== */}
      <div ref={wrapRef} className="relative hidden lg:block">
        <button
          type="button"
          onClick={() => setOpenDesktop((v) => !v)}
          aria-expanded={openDesktop}
          className="flex items-center gap-1.5 text-base sm:text-lg text-sky-300 font-semibold hover:text-white px-2 py-1 rounded transition"
        >
          Shop Parts
          <svg
            className={`w-4 h-4 transition-transform ${openDesktop ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {openDesktop && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-[min(90vw,72rem)]">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-6">
                {catalog.map((cat) => (
                  <div key={cat.href} className="min-w-0">
                    <Link
                      href={cat.href}
                      onClick={() => setOpenDesktop(false)}
                      className="flex items-center gap-2 font-bold text-[#05203C] hover:text-sky-700 transition"
                    >
                      <span aria-hidden="true">{cat.icon}</span>
                      <span className="leading-tight">{cat.name}</span>
                    </Link>
                    {cat.subcategories.length > 0 ? (
                      <ul className="mt-2 space-y-1.5 border-l border-slate-100 pl-3">
                        {cat.subcategories.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setOpenDesktop(false)}
                              className="text-sm text-slate-600 hover:text-sky-700 hover:underline transition block leading-snug"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 pl-3 text-xs text-slate-400">{cat.blurb}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/categories"
                  onClick={() => setOpenDesktop(false)}
                  className="text-sm font-semibold text-sky-700 hover:underline"
                >
                  View full catalog →
                </Link>
                <Link
                  href="/request-form"
                  onClick={() => setOpenDesktop(false)}
                  className="text-sm font-semibold text-[#05203C] hover:text-sky-700"
                >
                  Can&apos;t find a part? Request a quote →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpenMobile((v) => !v)}
          aria-expanded={openMobile}
          className="flex items-center gap-1.5 text-base text-sky-300 font-semibold px-2 py-1"
        >
          Shop Parts
          <svg className={`w-4 h-4 transition-transform ${openMobile ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {openMobile && (
          <div className="mt-3 bg-white rounded-lg border border-slate-200 divide-y divide-slate-100 max-h-[70vh] overflow-y-auto">
            {catalog.map((cat) => {
              const isOpen = expanded === cat.href;
              const hasSubs = cat.subcategories.length > 0;
              return (
                <div key={cat.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={cat.href}
                      onClick={() => setOpenMobile(false)}
                      className="flex-1 flex items-center gap-2 px-4 py-3 font-semibold text-[#05203C]"
                    >
                      <span aria-hidden="true">{cat.icon}</span> {cat.name}
                    </Link>
                    {hasSubs && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : cat.href)}
                        aria-label={`Toggle ${cat.name} subcategories`}
                        className="px-4 py-3 text-slate-400"
                      >
                        <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasSubs && isOpen && (
                    <ul className="bg-slate-50 pb-2">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpenMobile(false)}
                            className="block pl-12 pr-4 py-2 text-sm text-slate-600 hover:text-sky-700"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Link
              href="/categories"
              onClick={() => setOpenMobile(false)}
              className="block px-4 py-3 text-sm font-semibold text-sky-700"
            >
              View full catalog →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
