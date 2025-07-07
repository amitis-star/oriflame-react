import React from "react";
import IngredientLibrary from "../../../../../assets/images/IngredientLibrary.webp";
import RightArrow from "../../../../../assets/icons/RightArrow";

const CataloguePanel: React.FC = () => (
  <div className="hidden lg:flex py-4 flex-col gap-10 min-h-full h-[990px] w-full bg-white">
    {/* Main Catalogue Item */}
    <div className="h-[103px] flex items-center justify-between gap-2 bg-white hover:bg-blue-100 rounded-2xl px-4 py-2.5 cursor-pointer">
      {/* Image */}
      <img
        src={IngredientLibrary}
        alt="catalogue"
        className="w-[85px] h-[85px] rounded-2xl object-cover"
      />

      {/* Text content */}
      <div className="flex flex-col justify-center items-start flex-1 ml-4">
        <p className="text-14 text-gray-600 font-300">19/06‑09/07</p>
        <p className="text-17 text-gray-800 font-600">CATALOGUE 09</p>
      </div>

      {/* Arrow */}
      <div className="ml-auto">
        <RightArrow />
      </div>
    </div>
  </div>
);

export default CataloguePanel;
