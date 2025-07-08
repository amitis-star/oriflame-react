import React from "react";
import RightArrow from "../../../../../assets/icons/RightArrow";
import IngredientLibrary from "../../../../../assets/images/IngredientLibrary.webp";
import MenuIcon from "../../../../../assets/icons/MenuIcon";

const CatalogueLg = () => (
  <>
    <div className="w-full h-13.5 flex items-center justify-start px-[15px] gap-2">
      <MenuIcon />
      <div className="w-full flex justify-between items-center">
        <p className="text-12 text-gray-600 font-600">MENU</p>
        <button className="h-7.5 text-12 text-gray-700 font-600 py-1 px-3 border rounded-full border-1 border-black">
          JOIN US
        </button>
      </div>
    </div>
    <div className="w-full h-[160px] relative cursor-pointer px-[15px] mt-4">
      <div className="flex h-[103px] items-center justify-between rounded-2xl shadow-xl">
        <img
          src={IngredientLibrary}
          alt="Catalogue"
          className="w-20 h-full rounded-l-2xl object-cover"
        />
        <div className="w-[137px] h-23 px-4 py-2.5 flex flex-col justify-center gap-5">
          <p className="text-14 text-gray-600 font-300 leading-none">
            19/06‑09/07
          </p>
          <p className="text-17 text-gray-800 font-600 leading-tight">
            CATALOGUE 09
          </p>
        </div>
        <div className=" mr-2.5">
          <RightArrow />
        </div>
      </div>
      <div className="mt-4">
        <p className="w-fit h-5 text-12 border-b-2 border-black m-auto text-gray-700 font-600">
          SEE ALL
        </p>
      </div>
    </div>
  </>
);

export default CatalogueLg;
