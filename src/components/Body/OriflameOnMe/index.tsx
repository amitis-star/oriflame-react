import React from "react";
import SwiperOriflameOnMe from "./SwiperOriflameOnMe";

const OriflameOnMe = () => {
  return (
    <>
      <div className="w-full h-17 mb-10">
        <div className="w-full h-full">
          <div className="h-12 flex-col items-center justify-between mx-auto relative">
            <h3 className="text-40 font-500 text-gray-800 flex justify-center items-center">
              #OriflameOnMe
            </h3>
            <button className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute bottom-0 font-500 leading-3 right-0 top-2 hover:bg-gray-200">
              View all
            </button>
          </div>
          <p className="mb-10 font-300 text-12 text-gray-700 text-center mt-5">
            Share your amazinig looks with{" "}
            <span className="font-700">@oriflame</span> and{" "}
            <span className="font-900">#Oriflame On Me</span>
          </p>
        </div>
      </div>
      <SwiperOriflameOnMe/>
    </>
  );
};

export default OriflameOnMe;
