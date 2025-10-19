// import musicmen from "@/assets/images/tmpy4l85kmh.webp";
// import { Button } from "../ui/button";
// const MoreMusicMode = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-10 py-20">
//       <div className="space-y-10">
//         <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//           More Than Just <br /> Music—We Set the Mood
//         </h1>
//         <p className="max-w-xl text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
//           MDRN Sound was founded by DJ Nate Polite to elevate the DJ and AV
//           experience. With a background in music and audio production, Nate
//           brings professionalism, personality, and precision to every
//           celebration. Whether you’re tying the knot or throwing a company gala,
//           MDRN Sound brings unmatched energy, seamless coordination, and
//           stunning results.
//         </p>
//         <Button
//           className="bg-transparent border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-12 py-8"
//           style={{
//             // Rounded inset shadow matching border-radius
//             boxShadow:
//               "inset 6px 6px 12px rgba(37, 99, 235, 0.5), inset -6px -6px 12px rgba(37, 99, 235, 0.2)",
//           }}
//         >
//           Book A Call With Nate
//         </Button>
//       </div>
//       <div>
//         <img
//           src={musicmen}
//           alt="more music mode"
//           className="h-auto w-auto object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default MoreMusicMode;

import musicmen from "@/assets/images/tmpy4l85kmh.webp";
import { Button } from "../ui/button";

const MoreMusicMode = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-4 md:px-0">
      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-10 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-[35px] leading-snug sm:leading-tight md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
          More Than Just <br /> Music—We Set the Mood
        </h1>
        <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
          MDRN Sound was founded by DJ Nate Polite to elevate the DJ and AV
          experience. With a background in music and audio production, Nate
          brings professionalism, personality, and precision to every
          celebration. Whether you’re tying the knot or throwing a company gala,
          MDRN Sound brings unmatched energy, seamless coordination, and
          stunning results.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            className="bg-transparent border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-10 py-4 sm:px-12 sm:py-6"
            style={{
              boxShadow:
                "inset 6px 6px 12px rgba(37, 99, 235, 0.5), inset -6px -6px 12px rgba(37, 99, 235, 0.2)",
            }}
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full mt-8 md:mt-0 md:max-w-none">
        <img
          src={musicmen}
          alt="more music mode"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MoreMusicMode;
