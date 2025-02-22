import React from "react";
import ParticleCircle from "./particleCircle";
import "@fontsource/anuphan";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

const OurTeam: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full font-[Anuphan] text-gray-800">
      <h1 className="text-6xl font-extrabold text-center mb-24">
        <span>Our Team</span>
      </h1>

      <div className="flex justify-between items-center w-4/5 relative my-48">
        <div className="max-w-xs text-2xl relative z-10 text-center">
          <h1 className="mb-2 text-3xl font-bold">Henry Wilcox</h1>
          <p>CEO & Founder</p>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a href="mailto:henry@noetiqresearch.com">
              <TfiEmail className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/henry-wilcox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
        <div
          className="absolute right-[-250px] top-1/2 transform -translate-y-1/2"
          style={{ width: 500, height: 500 }}
        >
          <ParticleCircle />
        </div>
      </div>

      <div className="flex items-center w-4/5 relative my-48">
        <div
          className="absolute left-[-250px] top-1/2 transform -translate-y-1/2"
          style={{ width: 500, height: 500 }}
        >
          <ParticleCircle />
        </div>
        <div className="max-w-xs ml-auto text-2xl text-right relative z-10">
          <h1 className="mb-2 text-3xl font-bold">Patrick Black</h1>
          <p>CTO & Co-Founder</p>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a href="mailto:patrick@noetiqresearch.com">
              <TfiEmail className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrickblackjr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-4/5 relative my-48">
        <div className="max-w-xs text-2xl relative z-10 text-center">
          <h1 className="mb-2 text-3xl font-bold">Noah Applebaum</h1>
          <p>COO & Co-Founder</p>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a href="mailto:support@noetiqresearch.com">
              <TfiEmail className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/noah-applebaum-821593a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#4B3832] transition hover:text-[#8C6A5E] w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
        <div
          className="absolute right-[-250px] top-1/2 transform -translate-y-1/2"
          style={{ width: 500, height: 500 }}
        >
          <ParticleCircle />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
