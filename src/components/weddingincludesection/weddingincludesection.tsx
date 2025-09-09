import wedding from "@/assets/images/wedding.webp";
import DjnateButton from "../djnatebutton/djnatebutton";
import { Separator } from "../ui/separator";
const WeddingincludeSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 gap-10 py-20">
      <div className="space-y-14 w-full">
        <div>
          <h1 className="text-[40px] leading-[52px] font-heading font-medium text-[#E9E9E7]">
            What’s Included
          </h1>
        </div>
        <div className="space-y-5">
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Personalized music selection
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Bilingual MC services
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Custom lighting and effects
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Timeline planning and coordination
          </p>
        </div>
        <DjnateButton />
      </div>
      <div>
        <img
          src={wedding}
          alt="soundtrack"
          className="h-auto w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WeddingincludeSection;
