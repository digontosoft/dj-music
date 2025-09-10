import logo from "@/assets/images/tmpmmnklel5.webp";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative min-h-[70vh] bg-[#0A0D18] text-white p-5 overflow-hidden flex flex-col items-center justify-between">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content for the footer, ensure it's above the blobs */}
      <div className="relative z-10 w-full flex-grow flex flex-col items-center justify-center space-y-8">
        <h2 className="text-4xl leading-[45.5px] font-heading text-center">
          Want to work with us?
        </h2>
        <p className="text-center text-gray-400 font-sans font-light text-lg leading-[23.4px]">
          Ready to {""}
          <span className="text-blue-400">
            create an unforgettable experience
          </span>
          ? Share your event details, and we'll handle the rest, music, energy,
          and <br /> flawless production.
        </p>
        <Button
          className="bg-[#05070A] border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-12 py-8"
          style={{ boxShadow: "inset 0 2px 6px rgba(37, 99, 235, 0.5)" }}
        >
          Book A Call With Nate
        </Button>
      </div>

      {/* Bottom section with logo, links, and copyright */}
      <div className="relative z-10 w-full max-w-7xl mt-10 sm:mt-0 border-t border-gray-800 pt-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-start text-left text-gray-400">
        {/* Logo and text */}
        <div className="md:col-span-1 flex flex-col items-start">
          {/* Replace with your actual logo component or image */}
          <div className="mb-2">
            <img src={logo} alt="mdrnsoundlogo" className="h-12 w-auto" />
          </div>
        </div>

        {/* Links sections */}
        <div className="md:col-span-1">
          <h4 className="text-sm leading-[18.2px] text-[#397BFF] font-heading font-semibold mb-6">
            About
          </h4>
          <ul className="space-y-2 text-sm leading-normal">
            <li>
              <a href="#" className="transition-colors font-sans">
                Weddings
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors font-sans">
                Corporate
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors font-sans">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-sm leading-[18.2px] text-[#397BFF] font-heading font-semibold mb-6">
            Legal
          </h4>
          <ul className="space-y-2 text-sm leading-normal">
            <li>
              <a href="#" className=" transition-colors font-sans">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className=" transition-colors font-sans">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-sm leading-[18.2px] text-[#397BFF] font-heading font-semibold mb-6">
            Customer Care
          </h4>
          <ul className="space-y-2 text-sm leading-normal">
            <li>
              <a href="#" className=" transition-colors font-sans">
                Contact Nate
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us and Social Icons */}
        <div className="md:col-span-1">
          <h4 className="text-sm leading-[18.2px] text-[#397BFF] font-heading font-semibold mb-6">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <a href="#" className=" transition-colors">
              <Facebook className="h-4 w-4" />
            </a>{" "}
            {/* You'll need Font Awesome for these icons */}
            <a href="#" className=" transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className=" transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className=" transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full max-w-7xl text-[13px] leading-[16.9px] text-center text-gray-500 mt-8 pb-4 border-t border-gray-900 pt-4 font-sans">
        Copyright 2024. MDRN SOUND. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
