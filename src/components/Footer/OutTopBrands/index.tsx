import React from "react";

import GiordaniGoldBrand from "../../../assets/images/giordani gold.webp";
import NoageBrand from "../../../assets/images/novage.webp";
import TheOneBrand from "../../../assets/images/the one.webp";
import WillosophyBrand from "../../../assets/images/wllosophy.webp";

const brands = [
  { src: GiordaniGoldBrand, alt: "Giordani Gold" },
  { src: NoageBrand, alt: "Novage" },
  { src: TheOneBrand, alt: "The One" },
  { src: WillosophyBrand, alt: "Willosophy" },
];

const OurTopBrands = () => {
  return (
    <div className="w-full h-[433px] py-12.5 flex flex-col justify-between gap-y-5 items-center">
      <h3 className="text-40 text-gray-700 font-700">Our top brands</h3>
      <div className="w-[950px] h-35 flex justify-evenly items-center">
        {brands.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="w-35 h-35 rounded-full"
          />
        ))}
      </div>
      <button className="w-29 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200">
        LEARN HOW
      </button>
    </div>
  );
};

export default OurTopBrands;
