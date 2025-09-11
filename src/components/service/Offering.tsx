import dj from "../../assets/images/dj.jpg";
import singer from "../../assets/images/singer.jpg";
import couple from "../../assets/images/couple.jpg";
import microphone from "../../assets/images/microphone.jpg";

const Offering = () => {
  const data = [
    { img: dj, text: "Live DJ ",text2:"Services" ,description:"High-energy sets, flawless transitions, customized playlists."},
    { img: singer, text: "Bilingual ",text2:"MC Services" ,description:"English + Spanish announcements that feel warm, not cheesy." },
    { img: couple, text: "Lighting ",text2:"Design" ,description:"Ambient uplighting, dance floor beams, dramatic effects.." },
    { img: microphone, text: "Audiovisual ",text2:"Production" ,description:"Wireless mics, screens, video playback, seamless sound." },
  ];

  return (
    <div className="p-6 my-10">
      <div className="flex flex-col gap-2 justify-center items-center mb-20">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-500 text-center  text-4xl  py-4">
        Everything You Need
      </h2>
      <p className="text-white text-4xl ">Nothing You Don’t</p>
      <p className="text-gray-600 text-xl ">From full-scale AV to unforgettable dance floors, we offer turn-key entertainment services tailored to your event.</p>
      <p className="text-gray-400 text-2xl">Core Offerings:</p>

      </div>
      <div className="offering grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-500 offering-item"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-64 object-cover transition-all duration-500"
            />

            {/* Text */}
            <div className="absolute bottom-0 left-0 w-full  bg-black/40 p-3 text-center">
              <h3 className="text-white text-2xl font-semibold">{item.text}</h3>
              <h3 className="text-white text-2xl font-semibold">{item.text2}</h3>
              <p className="text-gray-400 text-sm ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* inline CSS */}
      <style>{`
        .offering:hover .offering-item img {
          filter: blur(4px);
          transform: scale(1);
          transition: 0.3s ease;
        }
        .offering .offering-item:hover img {
          filter: blur(0);
          transform: scale(1.1);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default Offering;