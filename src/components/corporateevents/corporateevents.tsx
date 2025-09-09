import corporateevents from "@/assets/images/corporate-events.webp";
import DjnateButton from "../djnatebutton/djnatebutton";
import { Separator } from "../ui/separator";
const CorporateEvents = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto flex justify-between gap-10 py-20">
      <div className="w-full space-y-10">
        <div>
          <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            Types of Events We Support
          </h1>
        </div>
        <div className="space-y-5">
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Product Launches
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Brand Activations
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Holiday Parties
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Team Building Events
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Networking Events
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Company Retreats
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Galas
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Seminars and Conferences
          </p>
        </div>
        <div className="mt-16">
          <DjnateButton />
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src={corporateevents}
          alt="soundtrack"
          className="h-auto w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CorporateEvents;
