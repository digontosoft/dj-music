import nature from "@/assets/video/nature.mp4";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

type HeroProps = {
  title1?: string;
  title2?: ReactNode;
  subtitle1?: string;
  subtitle2?: string;
  buttonTitle?: string;
  title2className?: string;
  subtitleclassName?: string;
};

const Hero = ({
  title1,
  title2,
  subtitle1,
  subtitle2,
  buttonTitle,
  title2className,
  subtitleclassName,
}: HeroProps) => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Video */}
      <video
        src={nature}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay (opacity) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 left-48 container mx-auto flex flex-col items-start justify-center space-y-10 h-full">
        <h1 className="text-[30px] leading-[39px] font-heading font-normal bg-gradient-to-r from-[#4f46e5] via-[#b148f7]  to-[#c53737] bg-clip-text text-transparent">
          {title1}
        </h1>
        <h1
          className={twMerge(
            "w-full max-w-2/5 text-3xl md:text-[42px] text-[#E9E9E7] font-heading font-normal tracking-wider leading-[54.6px]",
            title2className
          )}
        >
          {title2}
        </h1>
        <p
          className={twMerge(
            "w-full max-w-3/6 text-base md:text-lg font-sans font-medium leading-[23.4px] text-gray-400",
            subtitleclassName
          )}
        >
          {subtitle1}
        </p>
        <p
          className={twMerge(
            "w-full max-w-3/6 text-base md:text-lg font-sans font-medium leading-[23.4px] text-gray-400",
            subtitleclassName
          )}
        >
          {subtitle2}
        </p>
        <Button className="px-12 py-6 bg-transparent text-lg text-[#3F7EF1] rounded-full font-sans font-medium leading-normal border border-[#E9E9E7]">
          {buttonTitle}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
