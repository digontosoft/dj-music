import AboutdjSection from "@/components/aboutdjsection/aboutdjsection";
import AboutFaq from "@/components/aboutfaq/aboutfaq";
import Hero from "@/components/hero/hero";
import OurProcess from "@/components/ourprocess/ourprocess";

const About = () => {
  return (
    <>
      <Hero
        title2={
          <>
            Meet <br />
            DJ Nate Polite — The <br />
            Heart of Modern <br />
            Sound
          </>
        }
        subtitle1="One DJ. One Vision. One Unforgettable Experience."
        title2className="max-w-3/6"
        buttonTitle="Book A Call With DJ Nate"
      />
      <AboutdjSection />
      <OurProcess />
      <AboutFaq />
    </>
  );
};

export default About;
