// import faq from "@/assets/images/faq.webp";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../ui/accordion";

// const AboutFaq = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto py-20 px-4 md:px-0">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
//         {/* Left Column for Text */}
//         <div className="w-full md:w-1/2 flex flex-col space-y-10">
//           <div className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             <h1>
//               <span className="bg-gradient-to-r from-[#4f46e5] to-[#7450f5] bg-clip-text text-transparent">
//                 You’ve
//               </span>{" "}
//               <span className="bg-gradient-to-r from-[#7b38f8] to-[#ec4899] bg-clip-text text-transparent">
//                 Got
//               </span>{" "}
//               <span className="bg-gradient-to-r from-[#c4297e] to-[#c53737] bg-clip-text text-transparent">
//                 Questions
//               </span>
//             </h1>
//             <h1>We’ve Got Beats—and</h1>
//             <h1>Answers.</h1>
//           </div>
//         </div>

//         {/* Right Column for Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={faq}
//             alt="faq"
//             className="w-full h-auto object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Accordion Section (Full Width) */}
//       <div className="mt-16 w-full">
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem
//             value="item-1"
//             className="border-b border-t border-[#161d2c]"
//           >
//             <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
//               Do you have multiple DJs or assistants?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
//               No. I personally DJ and MC every event. My team handles technical
//               setup, lighting, and AV.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-2" className="border-b border-[#161d2c]">
//             <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
//               What kind of equipment do you use?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
//               We use premium sound and lighting gear, including backup systems,
//               wireless microphones, and video screen setups when needed.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-3" className="border-b border-[#161d2c]">
//             <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
//               How far in advance should we book?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
//               We recommend booking at least 3–6 months in advance to ensure
//               availability.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default AboutFaq;

import faq from "@/assets/images/faq.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AboutFaq = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left Column for Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
          <div className="text-3xl sm:text-4xl md:text-[35px] leading-tight md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            <h1>
              <span className="bg-gradient-to-r from-[#4f46e5] to-[#7450f5] bg-clip-text text-transparent">
                You’ve
              </span>{" "}
              <span className="bg-gradient-to-r from-[#7b38f8] to-[#ec4899] bg-clip-text text-transparent">
                Got
              </span>{" "}
              <span className="bg-gradient-to-r from-[#c4297e] to-[#c53737] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <h1 className="mt-2">We’ve Got Beats—and</h1>
            <h1>Answers.</h1>
          </div>
        </div>

        {/* Right Column for Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={faq}
            alt="faq"
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-12 md:mt-16 w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="border-b border-t border-[#161d2c]"
          >
            <AccordionTrigger className="flex justify-between items-center text-base sm:text-lg md:text-xl font-medium text-gray-300 py-3 sm:py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              Do you have multiple DJs or assistants?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
              No. I personally DJ and MC every event. My team handles technical
              setup, lighting, and AV.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-[#161d2c]">
            <AccordionTrigger className="flex justify-between items-center text-base sm:text-lg md:text-xl font-medium text-gray-300 py-3 sm:py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              What kind of equipment do you use?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
              We use premium sound and lighting gear, including backup systems,
              wireless microphones, and video screen setups when needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-[#161d2c]">
            <AccordionTrigger className="flex justify-between items-center text-base sm:text-lg md:text-xl font-medium text-gray-300 py-3 sm:py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              How far in advance should we book?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
              We recommend booking at least 3–6 months in advance to ensure
              availability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AboutFaq;
