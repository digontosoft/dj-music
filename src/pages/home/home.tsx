import Client from "@/components/client/Client";
import CorporateSection from "@/components/corporatesection/corporatesection";
import Faq from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import MoreMusicMode from "@/components/moremusicmode/moremusicmode";
import Offering from "@/components/service/Offering";
import SoundTrackSection from "@/components/soundtracksection/soundtracksection";
import TrustSection from "@/components/trustsection/trustsection";

const Home = () => {
  return (
    <>
      <Hero
        title2="Elevate Your Next Event with Us"
        subtitle1="Global Audio Solutions specializes in providing top-tier sound and lighting to elevate your event. We combine cutting-edge technology with a passion for creating unforgettable experiences.."
        subtitleclassName="sm:max-w-3/4 max-w-5/6"
        buttonTitle="Get started"
      />
      <TrustSection />
      <MoreMusicMode />
      <SoundTrackSection />
      <CorporateSection />
      <Offering/>
      <Client/>
      <Faq />
    </>
  );
};

export default Home;
