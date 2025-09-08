// import nature from "@/assets/video/nature.mp4";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Video */}
      {/* <video
        src={nature}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}

      {/* Black Overlay (opacity) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 left-48 container mx-auto flex flex-col items-start justify-center space-y-10 h-full">
        <h1 className="text-3xl md:text-[42px] text-[#E9E9E7] font-heading font-normal tracking-wider leading-[54.6px]">
          Creating <br /> Unforgettable Vibes <br /> One Beat at a Time
        </h1>
        <p className="text-base md:text-lg font-sans font-medium leading-[23.4px] text-gray-400 max-w-2xl">
          Luxury DJ & Audio-Visual Services for Weddings, Events, and <br />
          Celebrations in South Florida & Beyond.
        </p>
        <Button className="px-12 py-6 bg-transparent text-lg text-[#3F7EF1] rounded-full font-sans font-medium leading-normal border border-[#E9E9E7]">
          Book A Call With Nate
        </Button>
      </div>
    </section>
  );
};

export default Hero;
