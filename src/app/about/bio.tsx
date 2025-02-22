import React from "react";
import "@fontsource/anuphan";

const Bio: React.FC = () => {
  return (
    <div className="max-w-3xl text-center mb-20 font-[Anuphan]">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        <span className="bg-gradient-to-r text-gray-800">
          Welcome to Noetiq
        </span>
      </h1>

      <p className="text-sm leading-relaxed text-gray-800 mb-6">
        <strong>Noetiq</strong> comes from <em>noetic</em>, derived from the Greek <em>noēsis</em>, which signifies 
        inner wisdom or the mind’s deep, intuitive understanding. With a <strong>Q</strong>, we emphasize our commitment 
        to insight-driven discovery and innovation.
      </p>

      <p className="text-lg leading-relaxed">
      Founded in 2023 in Nashville, TN, and now based in Brooklyn, NY, Noetiq Research is where data meets innovation. We specialize in building machine learning models that turn complex problems into opportunities—helping businesses automate inefficiencies, uncover insights, and drive smarter decisions.
      </p>
      <p className="text-lg leading-relaxed">
      Our team thrives on curiosity and precision, exploring patterns in data to create solutions that make technology more intuitive and impactful. We believe that the right algorithms don’t just solve problems; they open doors to new possibilities. At Noetiq, we’re committed to pushing the boundaries of what’s possible—one breakthrough at a time.
      </p>
    </div>
  );
};

export default Bio;
