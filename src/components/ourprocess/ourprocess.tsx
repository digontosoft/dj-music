// import DjnateButton from "../djnatebutton/djnatebutton";

// const OurProcess = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-20">
//       <h1 className="text-[40px] leading-[52px] font-heading font-medium bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
//         Our Process
//       </h1>
//       <div className="flex flex-wrap items-center justify-center gap-8">
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#010204] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[45px] leading-[58.5px] font-heading font-medium text-[#E9E9E7]">
//             1
//           </h1>
//           <h2 className="text-[25px] leading-[32.5px] font-sans font-medium text-[#6E7985]">
//             Book a call to talk through your event.
//           </h2>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#101217] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[45px] leading-[58.5px] font-heading font-medium text-[#E9E9E7]">
//             2
//           </h1>
//           <p className="text-[25px] leading-[32.5px] font-sans font-medium text-[#6E7985]">
//             Choose the package that fits your needs.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[45px] leading-[58.5px] font-heading font-medium text-[#E9E9E7]">
//             3
//           </h1>
//           <p className="text-[25px] leading-[32.5px] font-sans font-medium text-[#6E7985]">
//             Reserve your date with a deposit.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[45px] leading-[58.5px] font-heading font-medium text-[#E9E9E7]">
//             4
//           </h1>
//           <p className="text-[25px] leading-[32.5px] font-sans font-medium text-[#6E7985]">
//             Collaborate on music, lighting, and AV needs.
//           </p>
//         </div>
//         <div
//           className="w-[448px] min-h-[222px] h-auto rounded-2xl bg-[#010204] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <h1 className="text-[45px] leading-[58.5px] font-heading font-medium text-[#E9E9E7]">
//             5
//           </h1>
//           <p className="text-[25px] leading-[32.5px] font-sans font-medium text-[#6E7985]">
//             Show up and enjoy a stress-free, high-energy event.
//           </p>
//         </div>
//         <div className="w-[448px] min-h-[222px] h-auto m-0 p-0">
//           <DjnateButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

import DjnateButton from "../djnatebutton/djnatebutton";

const OurProcess = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto space-y-10 py-16 px-4 md:px-8 lg:px-0">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-snug md:leading-[52px] font-heading font-medium text-center md:text-left bg-gradient-to-r from-[#4f46e5] to-[#b148f7] bg-clip-text text-transparent">
        Our Process
      </h1>

      {/* Steps */}
      <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8">
        {/* Step 1 */}
        <div
          className="w-full sm:w-[320px] md:w-[360px] lg:w-[448px] min-h-[200px] rounded-2xl bg-[#010204] shadow-inner p-6 sm:p-8 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-4xl md:text-[45px] leading-snug font-heading font-medium text-[#E9E9E7]">
            1
          </h1>
          <h2 className="text-lg sm:text-xl md:text-[25px] leading-relaxed font-sans font-medium text-[#6E7985]">
            Book a call to talk through your event.
          </h2>
        </div>

        {/* Step 2 */}
        <div
          className="w-full sm:w-[320px] md:w-[360px] lg:w-[448px] min-h-[200px] rounded-2xl bg-[#101217] shadow-inner p-6 sm:p-8 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-4xl md:text-[45px] leading-snug font-heading font-medium text-[#E9E9E7]">
            2
          </h1>
          <p className="text-lg sm:text-xl md:text-[25px] leading-relaxed font-sans font-medium text-[#6E7985]">
            Choose the package that fits your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className="w-full sm:w-[320px] md:w-[360px] lg:w-[448px] min-h-[200px] rounded-2xl bg-[#191B24] shadow-inner p-6 sm:p-8 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-4xl md:text-[45px] leading-snug font-heading font-medium text-[#E9E9E7]">
            3
          </h1>
          <p className="text-lg sm:text-xl md:text-[25px] leading-relaxed font-sans font-medium text-[#6E7985]">
            Reserve your date with a deposit.
          </p>
        </div>

        {/* Step 4 */}
        <div
          className="w-full sm:w-[320px] md:w-[360px] lg:w-[448px] min-h-[200px] rounded-2xl bg-[#191B24] shadow-inner p-6 sm:p-8 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-4xl md:text-[45px] leading-snug font-heading font-medium text-[#E9E9E7]">
            4
          </h1>
          <p className="text-lg sm:text-xl md:text-[25px] leading-relaxed font-sans font-medium text-[#6E7985]">
            Collaborate on music, lighting, and AV needs.
          </p>
        </div>

        {/* Step 5 */}
        <div
          className="w-full sm:w-[320px] md:w-[360px] lg:w-[448px] min-h-[200px] rounded-2xl bg-[#010204] shadow-inner p-6 sm:p-8 md:p-10 space-y-6 md:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <h1 className="text-4xl md:text-[45px] leading-snug font-heading font-medium text-[#E9E9E7]">
            5
          </h1>
          <p className="text-lg sm:text-xl md:text-[25px] leading-relaxed font-sans font-medium text-[#6E7985]">
            Show up and enjoy a stress-free, high-energy event.
          </p>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
          <DjnateButton />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
