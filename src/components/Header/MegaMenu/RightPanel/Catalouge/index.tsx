import React from "react";
import IngredientLibrary from "../../../../../assets/images/IngredientLibrary.webp";

const CataloguePanel: React.FC = () => (
  <div className="hidden lg:flex px-6 py-4 flex-col gap-10 min-h-full h-[990px] w-full bg-white">
    <div className="flex justify-center items-end mt-7.5 mx-7.5">
      <div className="w-31 h-[293px] flex flex-col justify-between">
        <div className="relative group rounded-2xl overflow-hidden">
          <img
            alt="catalogue"
            src={IngredientLibrary}
            className="rounded-2xl w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brightness-75"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-gray-200 px-4 py-2 text-14 font-600 transition-opacity duration-300 rounded-full hover:bg-gray-600">
            VIEW
          </button>
        </div>
        <p className="text-14 text-gray-600 font-300 text-center">
          19/06‑09/07
        </p>
        <p className="text-17 text-gray-800 font-600 text-center">
          CATALOGUE 09
        </p>
      </div>
    </div>

    <div className="w-full h-67 flex flex-col items-center gap-5">
      <p className="text-17 w-50 font-600 text-gray-800 text-center">
        See more e‑catalogues, magazines and brochures
      </p>
      <button className="w-50 h-11 text-14 border rounded-full border-black px-5 py-2.5 font-600">
        SEE ALL CATALOGUES
      </button>
    </div>
  </div>
);

export default CataloguePanel;
