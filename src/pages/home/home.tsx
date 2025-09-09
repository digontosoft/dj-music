import CorporateSection from "@/components/corporatesection/corporatesection";
import Faq from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import MoreMusicMode from "@/components/moremusicmode/moremusicmode";
import SoundTrackSection from "@/components/soundtracksection/soundtracksection";
import TrustSection from "@/components/trustsection/trustsection";

const Home = () => {
  return (
    <>
      <Hero
        title2="Creating Unforgettable Vibes One Beat at a Time"
        subtitle1="Luxury DJ & Audio-Visual Services for Weddings, Events, and Celebrations in South Florida & Beyond."
        subtitleclassName="max-w-2/5"
        buttonTitle="Book A Call With Nate"
      />
      <TrustSection />
      <MoreMusicMode />
      <SoundTrackSection />
      <CorporateSection />
      <Faq />
    </>
  );
};

export default Home;
