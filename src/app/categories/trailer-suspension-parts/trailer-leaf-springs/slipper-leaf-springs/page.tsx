import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export default function SlipperLeafSpringsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Slipper Leaf Springs</h1>
      <p className="mb-4 text-[#05203C]">Designed for heavy loads, these springs offer durability and effective shock absorption for commercial and agricultural trailers.</p>
      <RangeDisclaimer
        intro="Our slipper leaf springs range includes:"
        items={["Single-Eye Slipper","Hook-End Slipper","Radius-End Slipper","Light-Duty (1,000 lb)","Standard (2,500 lb)","Heavy-Duty (4,000 lb)","Extra Heavy-Duty (8,000–12,000 lb)","Galvanized Finish","Black Powder Coat","Custom lengths on request"]}
      />
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available Slipper Leaf Springs</h2>
      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[1].map(i => (
          <div key={i} className="flex flex-col items-center bg-white border border-slate-200 rounded-xl shadow-sm" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Slipper Leaf Springs/Picture${i}.png`} alt={`Slipper Leaf Spring ${i}`} className="w-full h-32 object-contain bg-slate-100 rounded-md" style={{ background: '#1a1a1a' }} />
            <span className="mt-2 text-sm text-slate-700 text-center">Slipper Leaf Spring {i}</span>
          </div>
        ))}
      </div>
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left">Part Number</th>
              <th className="text-left">Spring Type</th>
              <th className="text-left">Capacity (lbs)</th>
              <th className="text-left">Leaves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-013</td>
              <td>Flat End</td>
              <td>470</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-014</td>
              <td>Flat End</td>
              <td>705</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-015</td>
              <td>Flat End</td>
              <td>940</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-016</td>
              <td>Flat End</td>
              <td>1,184</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-017</td>
              <td>Flat End</td>
              <td>1,415</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-018</td>
              <td>Flat End</td>
              <td>300</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-034</td>
              <td>Flat End</td>
              <td>800</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-207</td>
              <td>Flat End</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-009</td>
              <td>Hook End</td>
              <td>800</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-010</td>
              <td>Hook End</td>
              <td>1,000</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-231</td>
              <td>Hook End</td>
              <td>2,500</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-233</td>
              <td>Hook End</td>
              <td>4,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-300</td>
              <td>Hook End</td>
              <td>4,000</td>
              <td>7</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-176N</td>
              <td>Radius End</td>
              <td>230</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-177N</td>
              <td>Radius End</td>
              <td>500</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-178</td>
              <td>Radius End</td>
              <td>750</td>
              <td>3</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-179</td>
              <td>Radius End</td>
              <td>950</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-180</td>
              <td>Radius End</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-232</td>
              <td>Radius End</td>
              <td>3,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-299</td>
              <td>Radius End</td>
              <td>3,500</td>
              <td>5</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-UNA-318</td>
              <td>Radius End</td>
              <td>8,000</td>
              <td>6</td>
            </tr>
            <tr>
              <td className="font-semibold whitespace-nowrap">BTP-TRA-2740</td>
              <td>Radius End</td>
              <td>12,000</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      <RequestQuoteCTA partLabel={"Slipper Leaf Springs"} />
    </main>
  );
}
