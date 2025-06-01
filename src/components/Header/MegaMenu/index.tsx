import React from "react";
import "../../../assets/styles/index.css";
import ECatalouge from "../../../assets/icons/ECatalogue";
import RightArrow from "../../../assets/icons/RightArrow";
import InspirationIcon from "../../../assets/icons/InspirationIcon";
import BestOffersIcon from "../../../assets/icons/BestOffersIcon";

const MegaMenu = () => {
  return (
    <>
      <div className="bg-yellow-100 w-[730px] flex items-center absolute left-00 top-full z-[20000] overflow-y-auto">
        <div className="w-44  bg-white py-2.5">
          <div>
            <div className="w-[278px] h-13 hover:bg-blue-100 flex justify-between items-cetner px-[15px] py-2.5">
              <div className="flex justify-start items-center gap-2">
                <ECatalouge />
                <p className="text-20 font-600 text-gray-800">e Catalouge</p>
              </div>
              <div className="flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
            <div className="w-[278px] h-13 hover:bg-blue-100 flex justify-between items-cetner px-[15px] py-2.5">
              <div className="flex justify-start items-center gap-2">
                <InspirationIcon />
                <p className="text-20 font-600 text-gray-800">Inspiration</p>
              </div>
              <div className="flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
            <div className="w-[278px] h-13 hover:bg-blue-100 flex justify-between items-cetner px-[15px] py-2.5">
              <div className="flex justify-start items-center gap-2">
                <BestOffersIcon />
                <p className="text-20 font-600 text-gray-800">Best Offers</p>
              </div>
              <div className="flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-violet-600 mb-1">
              <p className="text-18 font-600 text-gray-800">Nutrition</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-teal-300 mb-1">
              <p className="text-18 font-600 text-gray-800">Skincare</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-rose-400 mb-1">
              <p className="text-18 font-600 text-gray-800">Make up</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-stone-400 mb-1">
              <p className="text-18 font-600 text-gray-800">Fragrance</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-blue-500 mb-1">
              <p className="text-18 font-600 text-gray-800">Bath & Body</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-amber-200 mb-1">
              <p className="text-18 font-600 text-gray-800">Hair</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-red-400 mb-1">
              <p className="text-18 font-600 text-gray-800">Accessories</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-cyan-700 mb-1">
              <p className="text-18 font-600 text-gray-800">Men</p>
              <RightArrow />
            </div>
            <div className="w-[278px] h-12.5 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 border-l-6 border-sky-300 mb-1">
              <p className="text-18 font-600 text-gray-800">Kids & Baby</p>
              <RightArrow />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              New
            </div>
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              Icons
            </div>
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              Bestsellers
            </div>
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              Sample Shop
            </div>
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              Outlet
            </div>
            <div className="w-[278p] h-12.5 hove:bg-blue-100 px-[15px] py-2.5 text-16 font-400 text-gray-600">
              Beauty Reqards Pragamme
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
