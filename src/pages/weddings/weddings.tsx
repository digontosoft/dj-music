import Client from "@/components/client/Client";
import Hero from "@/components/hero/hero";
import WeddingFaq from "@/components/weddingfaq/weddingfaq";
import WeddingincludeSection from "@/components/weddingincludesection/weddingincludesection";
import WeddingServices from "@/components/weddingservices/weddingservices";

const Weddings = () => {
  return (
    <>
      <Hero
        title1="Weddings by DJ Nate Polite"
        title2="Personalized, Professional, and Completely Unforgettable"
        subtitle1="Your wedding should reflect your style, your story, and your energy. As your DJ and MC, I’m here to help create an atmosphere that gets people celebrating from the ceremony to the last dance."
        subtitle2="Backed by my AV and lighting team, I ensure every detail is handled — so you and your guests can focus on making memories."
        title2className="max-w-3/6"
        buttonTitle="Book A Call With DJ Nate"
        sectionClassName="sm:h-[70vh] h-screen"
        subtitleclassName="sm:max-w-3/6 max-w-5/6"
      />
      <WeddingServices />
      <WeddingincludeSection />
      <Client/>
      <WeddingFaq />
    </>
  );
};

export default Weddings;
