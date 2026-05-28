import React from "react";

type PageProps = {
  searchParams?: { part?: string };
};

export default function RequestFormPage({ searchParams }: PageProps) {
  const partFromUrl = searchParams?.part?.trim();
  const prefilledDetails = partFromUrl
    ? `I'm interested in: ${partFromUrl}\n\n(Please share specs, quantity, and any preferences below.)`
    : '';

  const inputClass =
    "w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#05203C] focus:outline-none focus:ring-1 focus:ring-[#05203C] transition";
  const labelClass = "block font-semibold text-sm mb-1 text-slate-700";

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <header className="text-center mb-10">
        <div className="mb-6 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Best Trailer Parts logo"
            className="max-h-24 sm:max-h-28 w-auto object-contain"
          />
        </div>
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
          Request a Quote
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Request Parts / Quote
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
          Tell us what you need and we&apos;ll match you with the right trailer parts
          at the best price.
        </p>
      </header>

      <div className="border-y border-slate-200 py-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">Phone</p>
          <a href="tel:+14039037957" className="text-[#05203C] hover:text-sky-700 font-medium transition">
            +1 403-903-7957
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">Email</p>
          <a href="mailto:besttrailerparts@shaw.ca" className="text-[#05203C] hover:text-sky-700 font-medium break-all transition">
            besttrailerparts@shaw.ca
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">Address</p>
          <p className="text-[#05203C] font-medium leading-snug">
            Taralake Manor NE<br />Calgary, AB, Canada
          </p>
        </div>
      </div>

      <form
        action="https://formspree.io/f/xgoqdybp"
        method="POST"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input type="hidden" name="_subject" value="New quote request from Best Trailer Parts website" />
        <input type="hidden" name="_next" value="https://best-trailer-parts.vercel.app/request-form/thanks" />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" type="text" placeholder="Optional" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (___) ___-____" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="category" className={labelClass}>Part Category</label>
          <select id="category" name="category" required className={inputClass}>
            <option value="">Select a category</option>
            <option>Jacks</option>
            <option>Couplers</option>
            <option>Brakes</option>
            <option>Suspension</option>
            <option>Lights &amp; Electrical</option>
            <option>Winches</option>
            <option>Hitches &amp; Towing</option>
            <option>Hardware &amp; Accessories</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">Choose the main category that best matches your request.</p>
        </div>
        <div>
          <label htmlFor="capacity" className={labelClass}>Trailer Capacity</label>
          <input id="capacity" name="capacity" type="text" placeholder="e.g. 3,500 lbs, 7,000 lbs" className={inputClass} />
        </div>
        <div>
          <label htmlFor="quantity" className={labelClass}>Estimated Quantity</label>
          <input id="quantity" name="quantity" type="number" min="1" placeholder="e.g. 10" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>Part Details / Description</label>
          <textarea
            id="details"
            name="details"
            defaultValue={prefilledDetails}
            placeholder="Describe the parts you need, axle rating, suspension type, or any part numbers you have."
            className={`${inputClass} min-h-[110px] resize-y`}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Delivery timelines, preferred brands, or other requirements."
            className={`${inputClass} min-h-[90px] resize-y`}
          />
        </div>
        <div className="sm:col-span-2 flex justify-end mt-2">
          <button
            type="submit"
            className="px-8 py-3 rounded-md bg-[#05203C] text-white font-semibold shadow-sm hover:bg-[#0a3460] transition"
          >
            Submit Request
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs text-slate-500 text-center">
        25 years of importing experience. Trusted suppliers. Competitive pricing.
      </p>
    </div>
  );
}
