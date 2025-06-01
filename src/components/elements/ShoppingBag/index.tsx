import React from "react";
import "../../../assets/styles/index.css";

const ShoppingBag = () => {
  return (
    <div className="relative">
      <div
        className="w-60 h-[630px] bg-white fixed top-25 right-[-20px] z-[999] p-6 shadow-[-4px_4px_12px_rgba(0,0,0,0.2)]
"
      >
        <p className="text-20 font-500 text-gray-800">basket (0)</p>
        <div className="flex justify-center items-center flex-col w-full h-[510px]">
          <p className="font-500 text-20 text-gray-600">Empty bag</p>
          <p className="font-400 text-16 text-gray-500">
            -Looking pretty empty in your bag-
          </p>
        </div>
        <button className="w-full rounded-full h-15 bg-black text-white text-20 font-500">
          Go to basket
        </button>
      </div>
    </div>
  );
};

export default ShoppingBag;
