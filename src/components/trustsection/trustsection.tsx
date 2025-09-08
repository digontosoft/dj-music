import CompanyCarusel from "../companycarusel/companycarusel";

const TrustSection = () => {
  return (
    <section className="min-h-[40vh] h-auto pt-20">
      <div className="flex flex-col items-center justify-center space-y-12 border-b border-[#1A1C26] pb-14">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[42px] leading-[54.6px] text-[#E9E9E7] font-heading font-medium">
            Trusted By
          </h1>
          <h1>
            <span className="text-[42px] leading-[54.6px] font-heading font-medium bg-gradient-to-r from-[#4f46e5] to-[#7450f5] bg-clip-text text-transparent">
              Top Planners,
            </span>{" "}
            <span className="text-[42px] leading-[54.6px] font-heading font-medium bg-gradient-to-r from-[#7b38f8] to-[#ec4899] bg-clip-text text-transparent">
              Brides,
            </span>{" "}
            <span className="text-[42px] leading-[54.6px] font-heading font-medium bg-gradient-to-r from-[#c4297e] to-[#c53737] bg-clip-text text-transparent">
              and Businesses
            </span>
          </h1>
          <h1 className="text-[42px] leading-[54.6px] text-[#E9E9E7] font-heading font-medium">
            Across Florida
          </h1>
        </div>
        <p className="text-lg leading-[23.4px] text-[#6E7985] font-sans font-medium">
          We’re proud to be a preferred partner for event producers, luxury
          venues, and corporate teams who demand excellence.
        </p>
      </div>
      <CompanyCarusel />
    </section>
  );
};

export default TrustSection;
