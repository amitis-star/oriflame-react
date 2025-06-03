import React from "react";
import SwiperOriflameOnMe from "./SwiperOriflameOnMe";

const OriflameOnMe = () => {
  return (
    <>
      <div className="w-full h-17 mb-10">
        <div className="w-full h-full">
          <div className="h-12 flex items-center justify-between mx-auto relative">
            <h3 className="text-40 font-500 text-gray-800 flex justify-center items-center flex-grow">
              #OriflameOnMe
            </h3>
            <button className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-2 absolute right-0 top-2 hover:bg-gray-200 hidden lg:block font-500 leading-3">
              View all
            </button>
          </div>
          <p className="mb-10 font-300 text-12 text-gray-700 text-center mt-5">
            Share your amazing looks with{" "}
            <span className="font-700">@oriflame</span> and{" "}
            <span className="font-900">#Oriflame On Me</span>
          </p>
        </div>
      </div>

      <SwiperOriflameOnMe />
      <div className="flex justify-center mt-4 mb-10 lg:hidden">
        <button className="w-28 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-2 hover:bg-gray-200 font-500 leading-3">
          View all
        </button>
      </div>
    </>
  );
};

export default OriflameOnMe;
