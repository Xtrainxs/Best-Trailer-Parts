const hardwareImages = [
  "1500 Lbs..png",
  "3000 Lbs..png",
  "5000 Lbs. Fittings..png",
  "5000 Lbs..png",
  "5k Kit.png",
  "800 Lbs..png",
  "Aluminum Track Single Stud Fitting..png",
  "Aluminum Track.png",
  "Bullet Hinges.png",
  "C Track Steel.png",
  "Center Hinge.png",
  "D-Ring with Bracket -  18000 Lbs..png",
  "D-Ring with Bracket - 11000 Lbs..png",
  "D-Ring with Bracket - 26500 Lbs..png",
  "D-Ring with Bracket - 47000 Lbs..png",
  "D-Ring with Bracket Forged - 11000 Lbs..png",
  "Door Assembly Lock.png",
  "Door Butt Hinge.png",
  "Double Stud L Fitting with Pear Ring.png",
  "Double Stud L Fitting with Stainless Steel Round Ring.png",
  "E-Track Fitting - Yellow Chrome - 2 Inch 5000 Lbs..png",
  "E-Track Fitting with D Ring - 2 Inch 4000lbs..png",
  "E-Track Fitting with O Ring - 2 Inch 4000 Lbs..png",
  "E-Track Fitting with Stainless Steel O Ring - 6600 Lbs..png",
  "E-Tracks - All Kinds and Finishes.png",
  "EQ Nuts-Bolts.png",
  "Fittings 1.png",
  "Fittings.png",
  "Hasp.png",
  "Lock Bolt with Plate.png",
  "Lock Hinges Pair.png",
  "Picture25.png",
  "Ramp Lock.png",
  "Rubber Hood Latch.png",
  "Shackle Kit.png",
  "Steel Pin Hinge - Stainless Steel.png",
  "Tipper Latch..png",
  "Toggle Catch Lock - Adjustable Self Locking Buckle.png",
  "Trailer Bolts-Nuts-Washers-Seals.jpg",
  "Trailer Bolts.png",
  "Trailer Hinges.png",
  "Trailer Nuts.png",
  "Trailer Parts 1.png",
  "Trailer Parts 2.png",
  "Trailer Parts 3.png",
  "Trailer Parts 4.png",
  "Trailer Parts 5.png",
  "Trailer Parts 6.png",
  "Trailer Parts 7.png",
  "Trailer Parts 8.png",
  "Trailer Parts 9.png",
  "Trailer Parts 10.png",
  "Trailer Parts 11.png",
  "Trailer Parts 12.png",
  "Trailer Parts 13.png",
  "Trailer Parts 14.png",
  "Trailer Parts 15.png",
  "Trailer Parts 16.png",
  "Trailer Parts 17.png",
  "Trailer Parts 18.png",
  "Trailer Parts 19.png",
  "Trailer Parts 20.png",
  "Trailer Parts 21.png",
  "Trailer Parts 22.png",
  "Trailer Parts 23.png",
  "Trailer Safety Chains 1.png",
  "Trailer Safety Chains 2.png",
  "Trailer Safety Chains 3.png",
  "Trailer Safety Chains 4.png",
  "Trailer Safety Chains 5.png",
  "Trailer Safety Chains.png",
  "Trailer Winch Bar.png",
  "Weld On Trailer Hinges - Heavy Duty.png",
  "ZP - 1800 Lbs..png",
  "ZP Stainless Steel - 2400 Lbs..png",
  "ZP Stainless Steel - 6000 Lbs..png",
];

export default function TrailerHardwarePage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Trailer Hardware</h1>
      <p className="text-lg text-gray-700 mb-8">
        Browse trailer hardware products and accessories in this category.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {hardwareImages.map((img, idx) => {
          const isTrailerPartsImage = /^Trailer Parts\s+\d+\.png$/i.test(img);
          const imageSrc = `/images/Trailer%20Hardware/${encodeURIComponent(img)}`;

          return (
            <div
              key={img}
              className={`${isTrailerPartsImage ? "sm:col-span-2 lg:col-span-4" : ""} bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-full`}
            >
              <div
                className={`relative w-full ${isTrailerPartsImage ? "max-w-6xl h-[28rem] sm:h-[34rem]" : "h-56 sm:h-64"} bg-gray-200 rounded-md p-2 mb-2 overflow-hidden`}
              >
                <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="block h-full w-full" title="Open full-size image">
                  <img
                    src={imageSrc}
                    alt={`Trailer hardware ${idx + 1}`}
                    className="h-full w-full object-contain object-center"
                  />
                </a>
              </div>
              <span className="text-white text-sm text-center break-words">
                {img
                  .replace(/\.(png|jpg)$/i, "")
                  .replace(/^Trailer Parts\s+\d+$/i, "Trailer Parts")}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
