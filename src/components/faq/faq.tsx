import faq from "@/assets/images/faq.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-10">
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
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={faq}
            alt="faq"
            className="h-auto w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Accordions in Two Columns */}
      <div className="mt-20 flex flex-col md:flex-row justify-between md:space-x-10">
        {/* First Accordion Column */}
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-t border-b border-[#161d2c]"
            >
              <AccordionTrigger className="flex justify-between items-center text-xl leading-[30px] font-sans font-medium text-[#6E7985] py-4 hover:no-underline cursor-pointer">
                Do you travel outside of Palm Beach Gardens?
                <span className="accordion-icon"></span>
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-[27px] font-sans font-medium text-[#6E7985] pb-4">
                Absolutely! We serve clients across Florida and are available
                for destination events nationwide.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#161d2c]">
              <AccordionTrigger className="flex justify-between items-center text-xl leading-[30px] font-sans font-medium text-[#6E7985] py-4 hover:no-underline cursor-pointer">
                Can we customize the music for our event?
                <span className="accordion-icon"></span>
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-[27px] font-sans font-medium text-[#6E7985] pb-4">
                100%. We’ll curate a playlist based on your style, crowd, and
                must-have songs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#161d2c]">
              <AccordionTrigger className="flex justify-between items-center text-xl leading-[30px] font-sans font-medium text-[#6E7985] py-4 hover:no-underline cursor-pointer">
                What kind of equipment do you use?
                <span className="accordion-icon"></span>
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-[27px] font-sans font-medium text-[#6E7985] pb-4">
                Only top-tier gear—wireless mics, pro DJ decks, lighting rigs,
                and clean setups that elevate your venue
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Second Accordion Column */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-4"
              className="border-t border-b border-[#161d2c]"
            >
              <AccordionTrigger className="flex justify-between items-center text-xl leading-[30px] font-sans font-medium text-[#6E7985] py-4 hover:no-underline cursor-pointer">
                Do you work with wedding planners?
                <span className="accordion-icon"></span>
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-[27px] font-sans font-medium text-[#6E7985] pb-4">
                Yes! We love working with planners and event producers to make
                their jobs easier and events smoother.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-[#161d2c]">
              <AccordionTrigger className="flex justify-between items-center text-xl leading-[30px] font-sans font-medium text-[#6E7985] py-4 hover:no-underline cursor-pointer">
                How far in advance should we book?
                <span className="accordion-icon"></span>
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-[27px] font-sans font-medium text-[#6E7985] pb-4">
                As early as possible! Prime dates can book out months in
                advance, especially in peak seasons.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
