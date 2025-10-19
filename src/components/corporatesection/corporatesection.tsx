// import corporate from "@/assets/images/corporate.webp";
// import { Button } from "../ui/button";
// import { Separator } from "../ui/separator";
// const CorporateSection = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto flex justify-center gap-10 py-20">
//       <div>
//         <img
//           src={corporate}
//           alt="soundtrack"
//           className="h-auto w-auto object-cover"
//         />
//       </div>
//       <div className="space-y-10">
//         <div>
//           <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             Corporate Energy
//           </h1>
//           <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             Done Right
//           </h1>
//         </div>
//         <p className="max-w-xl text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
//           We understand the stakes when planning a company event. Whether it's a
//           product launch or an annual gala, we deliver polished, professional,
//           and on-brand entertainment that resonates.
//         </p>
//         <div className="space-y-5">
//           <h2 className="text-[25px] leading-[32.5px] text-[#B4BED9] font-heading font-medium">
//             Types of Events We Support:
//           </h2>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Product Launches
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Holiday Parties
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Team Building Events
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Networking Events
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Company Retreats
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Galas
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Seminars & Conferences
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//         </div>
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
//     </div>
//   );
// };

// export default CorporateSection;

import corporate from "@/assets/images/corporate.webp";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CorporateSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10 py-20 px-4 md:px-0">
      {/* Image */}
      <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
        <img
          src={corporate}
          alt="corporate"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-10 text-left">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-[35px] leading-snug sm:leading-tight md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            Corporate Energy
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-[35px] leading-snug sm:leading-tight md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            Done Right
          </h1>
        </div>

        <p className="max-w-xl text-base sm:text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
          We understand the stakes when planning a company event. Whether it's a
          product launch or an annual gala, we deliver polished, professional,
          and on-brand entertainment that resonates.
        </p>

        <div className="space-y-5 max-w-md">
          <h2 className="text-2xl sm:text-[25px] leading-8 text-[#B4BED9] font-heading font-medium">
            Types of Events We Support:
          </h2>
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Product Launches
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Holiday Parties
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Team Building Events
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Networking Events
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Company Retreats
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Galas
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-base sm:text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Seminars & Conferences
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
        </div>

        <div className="flex justify-start mt-4 md:mt-6">
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
    </div>
  );
};

export default CorporateSection;
