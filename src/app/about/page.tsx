import React from "react";
import OurTeam from "./ourTeam";
import Bio from './bio';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5EFE6] text-gray-800 px-6 py-20">
      <Bio />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
