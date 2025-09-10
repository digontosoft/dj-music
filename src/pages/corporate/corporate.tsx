import CorporateEvents from "@/components/corporateevents/corporateevents";
import CorporateFaq from "@/components/corporatefaq/corporatefaq";
import CorporateServices from "@/components/corporateservices/corporateservices";
import Hero from "@/components/hero/hero";

const Corporate = () => {
  return (
    <>
      <Hero
        title1="Corporate Events by Mdrn Sound"
        title2="Professional DJ & AV Support for High-Impact Business Events"
        subtitle1="When it comes to corporate events, presentation and energy are everything. I provide live DJ and bilingual MC services tailored for professional audiences, while my team delivers the full AV and lighting setup to match your brand and goals."
        subtitle2="From conferences to team-building parties, we help your event run smoothly — and sound incredible."
        title2className="sm:max-w-3/6"
        buttonTitle="Book A Call With DJ Nate"
        sectionClassName="sm:h-[70vh] h-screen"
        subtitleclassName="sm:max-w-3/6 max-w-6/7"
      />
      <CorporateServices />
      <CorporateEvents />
      <CorporateFaq />
    </>
  );
};

export default Corporate;
