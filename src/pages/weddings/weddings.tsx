// import Client from "@/components/client/Client";
import Hero from "@/components/hero/hero";
// import WeddingFaq from "@/components/weddingfaq/weddingfaq";
import WeddingincludeSection from "@/components/weddingincludesection/weddingincludesection";
import WeddingServices from "@/components/weddingservices/weddingservices";

const Weddings = () => {
  return (
    <>
      <Hero
        title1="Rentals by Global Audio Solutions"
        title2="Professional, Sound and Lightning Experiences"
        subtitle1="Our team combines technical precision with creative artistry — ensuring every beat, spotlight, and visual cue enhances the atmosphere and energy of the occasion"
        subtitle2="Every setup is meticulously crafted, every light perfectly tuned, and every sound engineered for clarity, power, and emotion."
        title2className="max-w-3/6"
        buttonTitle="Contact"
        sectionClassName="sm:h-[70vh] h-screen"
        subtitleclassName="sm:max-w-3/6 max-w-5/6"
      />
      <WeddingServices />
      <WeddingincludeSection />
      {/* <Client/> */}
      {/* <WeddingFaq /> */}
    </>
  );
};

export default Weddings;
