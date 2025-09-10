// import DjnateButton from "../djnatebutton/djnatebutton";
// import { Separator } from "../ui/separator";

// const CorporateServices = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-20">
//       <h1 className="text-[40px] leading-[52px] font-heading font-medium text-center bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
//         Wedding Services
//       </h1>
//       <div className="flex items-center justify-center gap-8">
//         <div
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#010204] shadow-inner p-10 space-y-12"
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
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#101217] shadow-inner p-10 space-y-12"
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
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
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
//       </div>
//       <div className="flex items-center justify-center gap-8">
//         <div
//           className="w-full min-h-[409px] h-auto rounded-2xl bg-[#101217] shadow-inner p-10 space-y-8"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[25px] leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
//             Audiovisual Production
//           </h1>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             We offer complete AV support, including:
//           </p>
//         </div>
//         <div
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#101217] shadow-inner p-10 space-y-8"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <div className="space-y-5">
//             <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//               Wireless microphones for speakers or panelists
//             </p>
//             <Separator className="bg-[#161d2c]" />
//           </div>
//           <div className="space-y-5">
//             <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//               Audio for multi-room setups
//             </p>
//             <Separator className="bg-[#161d2c]" />
//           </div>
//           <div className="space-y-5">
//             <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//               Video projection and screen setup
//             </p>
//             <Separator className="bg-[#161d2c]" />
//           </div>
//           <div className="space-y-5">
//             <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//               Stage sound and background music
//             </p>
//             <Separator className="bg-[#161d2c]" />
//           </div>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Backup systems to ensure reliability
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-center items-center">
//         <DjnateButton />
//       </div>
//     </div>
//   );
// };

// export default CorporateServices;

import DjnateButton from "../djnatebutton/djnatebutton";
import { Separator } from "../ui/separator";

const CorporateServices = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[52px] font-heading font-medium text-center bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
        Wedding Services
      </h1>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          className="w-full min-h-[222px] rounded-2xl bg-[#010204] p-6 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl md:text-[25px] leading-snug md:leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
            Live DJ Services
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            From cocktail hour to dance floor hits, I mix music that’s perfectly
            tailored to you and your guests.
          </p>
        </div>

        <div
          className="w-full min-h-[222px] rounded-2xl bg-[#101217] p-6 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl md:text-[25px] leading-snug md:leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
            Bilingual MC Services (English & Spanish)
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            Seamless transitions, fun energy, and full inclusivity for bilingual
            weddings.
          </p>
        </div>

        <div
          className="w-full min-h-[222px] rounded-2xl bg-[#191B24] p-6 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl md:text-[25px] leading-snug md:leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
            Lighting Design
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            Elegant uplighting, dance floor effects, and color themes that
            complement your venue and mood.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div
          className="w-full min-h-[300px] md:min-h-[409px] rounded-2xl bg-[#101217] p-6 md:p-10 space-y-6 md:space-y-8"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-xl md:text-[25px] leading-snug md:leading-[32.5px] font-heading font-medium text-[#E9E9E7]">
            Audiovisual Production
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            We offer complete AV support, including:
          </p>
        </div>

        <div
          className="w-full min-h-[222px] rounded-2xl bg-[#101217] p-6 md:p-10 space-y-6 md:space-y-8"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <div className="space-y-5">
            <p className="text-base md:text-lg font-sans font-medium text-[#6E7985]">
              Wireless microphones for speakers or panelists
            </p>
            <Separator className="bg-[#161d2c]" />
          </div>
          <div className="space-y-5">
            <p className="text-base md:text-lg font-sans font-medium text-[#6E7985]">
              Audio for multi-room setups
            </p>
            <Separator className="bg-[#161d2c]" />
          </div>
          <div className="space-y-5">
            <p className="text-base md:text-lg font-sans font-medium text-[#6E7985]">
              Video projection and screen setup
            </p>
            <Separator className="bg-[#161d2c]" />
          </div>
          <div className="space-y-5">
            <p className="text-base md:text-lg font-sans font-medium text-[#6E7985]">
              Stage sound and background music
            </p>
            <Separator className="bg-[#161d2c]" />
          </div>
          <p className="text-base md:text-lg font-sans font-medium text-[#6E7985]">
            Backup systems to ensure reliability
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center items-center pt-6">
        <DjnateButton />
      </div>
    </div>
  );
};

export default CorporateServices;
