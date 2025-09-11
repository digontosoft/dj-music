import comma1 from"../../assets/images/comma1.jpg";
import comma from"../../assets/images/comma.jpg";
import { CiStar } from "react-icons/ci";
import { Button } from "../ui/button";
const Client=()=>{
    return(
        <section className="relative w-full h-[75vh] overflow-hidden">
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="relative z-10  container mx-auto flex flex-col items-center justify-center space-y-10 h-full">
                <h1 className="text-3xl md:text-[42px] text-[#E9E9E7] font-heading font-normal tracking-wider leading-[54.6px] text-center justify-center">What Our Clients Say</h1>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center  items-center"> <img className="w-40 h-30" src={comma1} alt="" /></div>
                    <div className="bg-gray-950 rounded-lg w-full p-4 flex flex-col gap-2 justify-center items-center shadaw-xl">
                        <h1 className="text-gray-600 text-center text-xl font-bold mb-8">What Our Clients  <br /> say about us</h1>
                        <h2 className="text-gray-600 text-3xl font-extrabold text-center">0.00</h2>
                        <p className="text-gray-400 flex justify-center items-center mt-3"><CiStar className="text-blue-500"/> <CiStar className="text-blue-500"/><CiStar className="text-blue-500"/><CiStar className="text-blue-500"/><CiStar className="text-blue-500"/> <span className="pl-2"> | </span> <span className="text-xs font-semibold pl-2">0 reviews</span></p>
                        <Button className="bg-blue-500 justify-center items-center mt-3">Write a review</Button>
                        <p className="text-[10px] text-gray-600 my-4">Powered by Emerge Brand Consulting Co.</p>
                    </div>
                    <div className="flex justify-center  items-center "><img className="w-40 h-30" src={comma} alt="" /></div>
                </div>
             </div>

        </section>
    )
}
export default Client;