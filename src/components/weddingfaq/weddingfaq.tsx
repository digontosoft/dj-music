import faq from "@/assets/images/faq.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const WeddingFaq = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4 md:px-0">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Left Column for Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-10">
          <div className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
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
            <h1>We’ve Got Beats—and</h1>
            <h1>Answers.</h1>
          </div>
        </div>

        {/* Right Column for Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={faq}
            alt="faq"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Accordion Section (Full Width) */}
      <div className="mt-16 w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="border-b border-t border-[#161d2c]"
          >
            <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              Will Nate DJ our wedding personally?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
              Yes. I DJ and MC every wedding myself.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-[#161d2c]">
            <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              Do you help plan the music for each part of the day?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
              Yes. I’ll guide you through the process and help you choose music
              for the ceremony, reception, first dance, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-[#161d2c]">
            <AccordionTrigger className="flex justify-between items-center text-lg md:text-xl font-medium text-gray-300 py-4 hover:text-white transition-colors cursor-pointer hover:no-underline">
              Can you work with my wedding planner?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base md:text-lg pb-4">
              Absolutely. I regularly coordinate with planners and venues to
              ensure smooth execution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default WeddingFaq;
