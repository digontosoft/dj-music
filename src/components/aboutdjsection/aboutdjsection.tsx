// import aboutdjimage from "@/assets/images/tmpy4l85kmh.webp";
// import DjnateButton from "../djnatebutton/djnatebutton";
// const AboutdjSection = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto flex justify-between py-20">
//       <div className="w-full space-y-10">
//         <div>
//           <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             Hey, I’m Nate Polite — the DJ
//           </h1>
//           <h1 className="text-[35px] leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
//             and MC behind Modern Sound
//           </h1>
//         </div>
//         <div
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             I started this business because I genuinely love creating great
//             experiences through music. There’s nothing better than seeing a
//             packed dance floor or hearing someone say, “That was the best event
//             I’ve ever been to.”
//           </p>
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             <span className="text-[#E9E9E7]">
//               Over the past 10 years, I’ve had the chance to DJ all kinds of
//               events — weddings, galas, brand activations, you name it.
//             </span>{" "}
//             What I’ve learned is that a great event comes down to two things:
//             energy and execution. That’s where I come in. I bring the right
//             music, read the room, keep the flow going, and make sure everything
//             sounds clean and looks on point.
//           </p>
//         </div>
//         <div
//           className="w-full min-h-[222px] h-auto rounded-2xl bg-[#191B24] shadow-inner p-10 space-y-12"
//           style={{
//             boxShadow:
//               "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
//           }}
//         >
//           <p className="text-lg leading-[23.4px] font-sans font-medium text-[#6E7985]">
//             While I handle all the music and MC duties myself, I’ve got an
//             awesome team who works behind the scenes. They take care of the
//             lighting, AV, and all the technical stuff that makes an event run
//             smoothly. So when I show up, we’re not just playing music — we’re
//             creating a full experience.
//           </p>
//         </div>
//         <p className="text-lg leading-[23.4px] font-sans font-medium text-[#E9E9E7]">
//           Whether you’re planning a wedding, corporate event, or something
//           totally unique, I’d love to be part of it. Let’s make it fun, make it
//           smooth, and make it unforgettable.
//         </p>
//       </div>
//       <div className="w-full h-full flex flex-col items-center justify-center">
//         <img src={aboutdjimage} alt="" className="h-auto w-auto object-cover" />
//         <div className="mt-40">
//           <DjnateButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutdjSection;

import aboutdjimage from "@/assets/images/tmpy4l85kmh.webp";
import DjnateButton from "../djnatebutton/djnatebutton";

const AboutdjSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col md:flex-row justify-between gap-10 py-16 px-4 md:px-8 lg:px-0">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Heading */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-[35px] md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            Hey, I’m Nate Polite — the DJ
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-[35px] md:leading-[45.5px] font-heading font-medium text-[#E9E9E7]">
            and MC behind Modern Sound
          </h1>
        </div>

        {/* First Card */}
        <div
          className="w-full min-h-[200px] rounded-2xl bg-[#191B24] p-6 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
           At Global Audio Solutions, we specialize in delivering top-tier audio-visual services for any event. Founded by DJ Jay Sample, a seasoned DJ with over 10 years of experience, we’re passionate about transforming events into unforgettable experiences with high-quality sound, lighting, and live music.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            <span className="text-[#E9E9E7]">
              Over the past 10 years, I’ve had the chance to DJ all kinds of
              events — weddings, galas, brand activations, you name it.
            </span>{" "}
            What I’ve learned is that a great event comes down to two things:
            energy and execution. That’s where I come in. I bring the right
            music, read the room, keep the flow going, and make sure everything
            sounds clean and looks on point.
          </p>
        </div>

        {/* Second Card */}
        <div
          className="w-full min-h-[200px] rounded-2xl bg-[#191B24] p-6 sm:p-10 space-y-6 sm:space-y-12"
          style={{
            boxShadow:
              "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#6E7985]">
            While I handle all the music and MC duties myself, I’ve got an
            awesome team who works behind the scenes. They take care of the
            lighting, AV, and all the technical stuff that makes an event run
            smoothly. So when I show up, we’re not just playing music — we’re
            creating a full experience.
          </p>
        </div>

        {/* Outro Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed font-sans font-medium text-[#E9E9E7] text-center md:text-left">
          Whether you’re planning a wedding, corporate event, or something
          totally unique, I’d love to be part of it. Let’s make it fun, make it
          smooth, and make it unforgettable.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img
          src={aboutdjimage}
          alt="DJ Nate Polite"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover rounded-xl"
        />
        <div className="mt-8 md:mt-16 lg:mt-24">
          <DjnateButton />
        </div>
      </div>
    </div>
  );
};

export default AboutdjSection;
