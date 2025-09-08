import soundtrack from "@/assets/images/soundtrack.webp";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
const SoundTrackSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center gap-10 py-20">
      <div className="space-y-10">
        <div>
          <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            The Soundtrack to
          </h1>
          <h1 className="text-[35px] leading-[45.5px] font-heading font-medium">
            <span className="bg-gradient-to-r from-[#4f46e5] to-[#7450f5] bg-clip-text text-transparent">
              Your
            </span>{" "}
            <span className="bg-gradient-to-r from-[#7b38f8] to-[#ec4899] bg-clip-text text-transparent">
              Love
            </span>{" "}
            <span className="bg-gradient-to-r from-[#c4297e] to-[#c53737] bg-clip-text text-transparent">
              Story
            </span>
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
          Your big day deserves more than a playlist. We collaborate with
          you—and your planner—to set the perfect tone from ceremony to
          send-off. Think: custom-curated vibes, emotional moments, stunning
          lighting, and a dance floor that stays packed all night.
        </p>
        <div className="space-y-5">
          <h2 className="text-[25px] leading-[32.5px] text-[#B4BED9] font-heading font-medium">
            Our wedding services include:
          </h2>
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Personalized music selection
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Bilingual MC services
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Full timeline coordination
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
          <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
            Lighting design & effects
          </p>
          <Separator className="bg-[#161d2c] h-[0.5px]" />
        </div>
        <Button
          className="bg-transparent border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-12 py-8"
          style={{
            // Rounded inset shadow matching border-radius
            boxShadow:
              "inset 6px 6px 12px rgba(37, 99, 235, 0.5), inset -6px -6px 12px rgba(37, 99, 235, 0.2)",
          }}
        >
          Book A Call With Nate
        </Button>
      </div>
      <div>
        <img
          src={soundtrack}
          alt="soundtrack"
          className="h-auto w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default SoundTrackSection;
