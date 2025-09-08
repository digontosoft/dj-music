import companylogo from "@/assets/images/tmpfi3lh8eq.webp";
// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";

// const CompanyCarusel = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!carouselRef.current) return;

//     const boxes = carouselRef.current.querySelectorAll(".logo-slide");

//     // Clone elements for infinite loop illusion
//     boxes.forEach((box) => {
//       const clone = box.cloneNode(true);
//       carouselRef.current?.appendChild(clone);
//     });

//     // GSAP animation
//     gsap.to(carouselRef.current, {
//       xPercent: -50, // move left half width
//       ease: "linear",
//       repeat: -1,
//       duration: 20, // adjust speed
//     });
//   }, []);

//   return (
//     <div className="overflow-hidden w-full py-10">
//       <div ref={carouselRef} className="flex w-max gap-10">
//         {/* You can map multiple logos here */}
//         <div className="logo-slide flex items-center justify-center">
//           <img src={companylogo} alt="companylogo" className="h-20 w-auto" />
//         </div>
//         <div className="logo-slide flex items-center justify-center">
//           <img src={companylogo} alt="companylogo" className="h-20 w-auto" />
//         </div>
//         <div className="logo-slide flex items-center justify-center">
//           <img src={companylogo} alt="companylogo" className="h-20 w-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyCarusel;
import Marquee from "react-fast-marquee";

const CompanyCarusel = () => {
  const logos = [
    companylogo,
    companylogo,
    companylogo,
    companylogo,
    companylogo,
    companylogo,
    companylogo,
    companylogo,
  ]; // duplicate logos

  return (
    <div className="overflow-hidden w-full py-10">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="companylogo"
            className="h-20 w-auto mx-5"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyCarusel;
