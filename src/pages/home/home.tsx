import CorporateSection from "@/components/corporatesection/corporatesection";
import Faq from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import MoreMusicMode from "@/components/moremusicmode/moremusicmode";
import SoundTrackSection from "@/components/soundtracksection/soundtracksection";
import TrustSection from "@/components/trustsection/trustsection";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <MoreMusicMode />
      <SoundTrackSection />
      <CorporateSection />
      <Faq />
    </>
  );
};

export default Home;
