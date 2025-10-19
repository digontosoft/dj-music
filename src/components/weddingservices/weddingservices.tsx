// import DjnateButton from "../djnatebutton/djnatebutton";

// const WeddingServices = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-20">
//       <h1 className="text-[40px] leading-[52px] font-heading font-medium text-center bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
//         Wedding Services
//       </h1>
//       <div className="flex flex-wrap items-center justify-center gap-8">
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#010204] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Live DJ Services
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             From cocktail hour to dance floor hits, I mix music that’s perfectly
//             tailored to you and your guests.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#101217] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Bilingual MC Services (English & Spanish)
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Seamless transitions, fun energy, and full inclusivity for bilingual
//             weddings.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Lighting Design
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Elegant uplighting, dance floor effects, and color themes that
//             complement your venue and mood.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Ceremony & Reception AV Setup
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             We provide everything needed for clear audio during vows, speeches,
//             and announcements, with separate setups for ceremony and reception.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#010204] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Full Timeline Coordination
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             We’ll guide the flow of the night to ensure nothing is missed and
//             everything feels effortless.
//           </p>
//         </div>
//         <div className="w-[448px] min-h-[222px] h-auto flex justify-center items-center">
//           <DjnateButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeddingServices;

import DjnateButton from "../djnatebutton/djnatebutton";

const WeddingServices = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-20 px-4 md:px-8">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-snug sm:leading-[45px] md:leading-[52px] font-heading font-medium text-center bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
        Rental Services
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Card 1 */}
        <div
          className="w-full max-w-[448px] min-h-[222px] rounded-2xl bg-[#010204] p-8 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-[25px] leading-snug font-heading font-medium text-[#E9E9E7]">
            Lighting 
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            Our lighting setups are designed to transform any space into a stunning visual experience.
From elegant uplighting and dynamic washes to vibrant dance floor effects,
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-[448px] min-h-[222px] rounded-2xl bg-[#101217] p-8 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-[25px] leading-snug font-heading font-medium text-[#E9E9E7]">
            Sound System Rental 
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            We provide premium sound systems from trusted brands like EAW, JBL, Yorkville, and QSC, built to deliver exceptional clarity and power for any event.

          </p>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-[448px] min-h-[222px] rounded-2xl bg-[#191B24] p-8 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-[25px] leading-snug font-heading font-medium text-[#E9E9E7]">
            Dj Equipment Rental 
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            We offer professional DJ equipment rentals featuring industry-standard gear such as the Pioneer CDJ-3000, CDJ-2000NXS2, DJM-A9, and Rane performance mixers.

          </p>
        </div>

        {/* Card 4 */}
        <div
          className="w-full max-w-[448px] min-h-[222px] rounded-2xl bg-[#191B24] p-8 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-[25px] leading-snug font-heading font-medium text-[#E9E9E7]">
            Ceremony & Reception AV Setup
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            We deliver seamless ceremonial and reception AV setups that ensure every moment sounds and looks flawless.
From crystal-clear microphones and discreet speakers to refined visual displays.
          </p>
        </div>

        {/* Card 5 */}
        <div
          className="w-full max-w-[448px] min-h-[222px] rounded-2xl bg-[#010204] p-8 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-[25px] leading-snug font-heading font-medium text-[#E9E9E7]">
            Stage Rental 
          </h1>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
          We provide sleek and professional staging that elevate any event, from rooftop parties to luxury weddings.


          </p>
        </div>

        {/* Button */}
        <div className="w-full max-w-[448px] min-h-[222px] flex justify-center items-center">
          <DjnateButton />
        </div>
      </div>
    </div>
  );
};

export default WeddingServices;
