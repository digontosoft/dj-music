// import corporateevents from "@/assets/images/corporate-events.webp";
// import DjnateButton from "../djnatebutton/djnatebutton";
// import { Separator } from "../ui/separator";
// const CorporateEvents = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto flex justify-between gap-10 py-20">
//       <div className="w-full space-y-10">
//         <div>
//           <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             Types of Events We Support
//           </h1>
//         </div>
//         <div className="space-y-5">
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Product Launches
//           </p>
//           <Separator className="bg-[#161d2c] h-[0.5px]" />
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             Brand Activations
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
//             Seminars and Conferences
//           </p>
//         </div>
//         <div className="mt-16">
//           <DjnateButton />
//         </div>
//       </div>
//       <div className="w-full h-full">
//         <img
//           src={corporateevents}
//           alt="soundtrack"
//           className="h-auto w-auto object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default CorporateEvents;

import corporateevents from "@/assets/images/corporate-events.webp";
import DjnateButton from "../djnatebutton/djnatebutton";
import { Separator } from "../ui/separator";

const CorporateEvents = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-4 sm:px-6 lg:px-8">
      {/* Left Section - Text */}
      <div className="w-full space-y-8 md:space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[35px] leading-tight md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            Types of Events We Support
          </h1>
        </div>

        <div className="space-y-5">
          {[
            "Product Launches",
            "Brand Activations",
            "Holiday Parties",
            "Team Building Events",
            "Networking Events",
            "Company Retreats",
            "Galas",
            "Seminars and Conferences",
          ].map((event, index) => (
            <div key={index} className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
                {event}
              </p>
              {index !== 7 && <Separator className="bg-[#161d2c] h-[0.5px]" />}
            </div>
          ))}
        </div>

        <div className="pt-8 md:pt-12">
          <DjnateButton />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={corporateevents}
          alt="corporate events"
          className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default CorporateEvents;
