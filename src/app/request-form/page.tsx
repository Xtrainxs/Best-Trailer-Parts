import React from "react";

type PageProps = {
  searchParams?: { part?: string };
};

export default function RequestFormPage({ searchParams }: PageProps) {
  const partFromUrl = searchParams?.part?.trim();
  const prefilledDetails = partFromUrl
    ? `I'm interested in: ${partFromUrl}\n\n(Please share specs, quantity, and any preferences below.)`
    : '';
  return (
    <div className="w-full max-w-xl mx-auto my-10 bg-white rounded-2xl border border-slate-200 shadow-2xl p-10">
      <div className="flex flex-col items-center border-b border-slate-200 pb-6 mb-8">
        <div className="w-72 h-24 sm:w-[30rem] sm:h-32 bg-white rounded-md shadow-lg p-1 overflow-hidden flex items-center justify-center mb-2">
          <img src="/logo.png" alt="Best Trailer Parts logo" className="w-full h-full object-fill" />
        </div>
        <div className="text-3xl font-extrabold text-[#05203C] mb-2 tracking-tight">Request Parts / Quote</div>
        <div className="text-base text-[#05203C] font-bold mb-2 text-center">Tell us what you need and we’ll match you with the right trailer parts at the best price.</div>
        <div className="text-sm text-[#05203C] mt-2 text-center space-y-1">
          <span className="block font-semibold">Address:</span>
          <span className="block font-bold">Taralake Manor, NE, Calgary, Alberta, CANADA</span>
          <span className="block font-semibold mt-2">Phone:</span>
          <span className="block font-bold">+1 403-903-7957</span>
          <span className="block font-semibold mt-2">Email:</span>
          <span className="block font-bold">besttrailerparts@shaw.ca</span>
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
          <label htmlFor="name" className="block font-semibold text-sm mb-1 text-gray-700">Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div>
          <label htmlFor="company" className="block font-semibold text-sm mb-1 text-gray-700">Company</label>
          <input id="company" name="company" type="text" placeholder="Optional" className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-sm mb-1 text-gray-700">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold text-sm mb-1 text-gray-700">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (___) ___‑____" className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="category" className="block font-semibold text-sm mb-1 text-gray-700">Part Category</label>
          <select id="category" name="category" required className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none">
            <option value="">Select a category</option>
            <option>Jacks</option>
            <option>Couplers</option>
            <option>Brakes</option>
            <option>Suspension</option>
            <option>Lights & Electrical</option>
            <option>Winches</option>
            <option>Hitches & Towing</option>
            <option>Hardware & Accessories</option>
          </select>
          <div className="text-xs text-gray-500 mt-1">Choose the main category that best matches your request.</div>
        </div>
        <div>
          <label htmlFor="capacity" className="block font-semibold text-sm mb-1 text-gray-700">Trailer Capacity</label>
          <input id="capacity" name="capacity" type="text" placeholder="e.g. 3,500 lbs, 7,000 lbs" className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div>
          <label htmlFor="quantity" className="block font-semibold text-sm mb-1 text-gray-700">Estimated Quantity</label>
          <input id="quantity" name="quantity" type="number" min="1" placeholder="e.g. 10" className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className="block font-semibold text-sm mb-1 text-gray-700">Part Details / Description</label>
          <textarea id="details" name="details" defaultValue={prefilledDetails} placeholder="Describe the parts you need, axle rating, suspension type, or any part numbers you have." className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none min-h-[90px] resize-y" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block font-semibold text-sm mb-1 text-gray-700">Additional Notes</label>
          <textarea id="notes" name="notes" placeholder="Delivery timelines, preferred brands, or other requirements." className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white focus:border-blue-400 focus:bg-white focus:outline-none min-h-[90px] resize-y" />
        </div>
        <div className="sm:col-span-2 flex justify-end mt-2">
          <button type="submit" className="px-6 py-2 rounded-full bg-blue-900 text-white font-semibold shadow hover:bg-blue-700 transition flex items-center gap-2">
            Submit Request <span>➜</span>
          </button>
        </div>
      </form>
      <div className="mt-6 text-xs text-gray-500 text-right">25 years of importing experience. Trusted suppliers. Competitive pricing.</div>
    </div>
  );
}
