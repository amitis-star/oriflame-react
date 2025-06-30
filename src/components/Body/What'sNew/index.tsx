import React from "react";
import "../../../assets/styles/index.css";
import whatsnew from "../../../assets/images/what's-new.webp";
import Opt from "../../../assets/images/opt-whats-new.webp";
import Card from "../../elements/Card/index";

const WhatsNew = () => {
  return (
    <div className="mx-00 lg:mx-00 md:mx-00 sm:mx-00 xs:mx-22">
      <div className="w-full flex justify-center mb-15">
        <div className="w-full">
          <div className="h-13 mb-7 relative flex items-center justify-center">
            <h3 className="text-40 font-500 text-gray-800 whitespace-nowrap text-center w-full max-w-screen-xl mx-auto ml-0 min-[391px]:ml-28">
              What's new
            </h3>
            <button className="ml-auto h-11 rounded-full py-3 px-8 whitespace-nowrap text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200 hidden min-[391px]:inline-block">
              View all
            </button>
          </div>
          <div className="flex justify-center">
            <div
              className="flex flex-col sm:flex-row sm:gap-[20px] md:gap-[20px] sm:px-0 md:px-0 h-auto sm:h-[390px]"
              style={{ minHeight: "390px" }}
            >
              <div className="relative group overflow-hidden w-full sm:w-[196px] md:w-[240px] h-[200px] sm:h-full order-1 lg:w-[545px] lg:h-[360px]">
                <img
                  src={whatsnew}
                  alt="what's new"
                  className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <button className="py-4 px-8 text-center whitespace-nowrap rounded-full bg-black text-white font-500 absolute bottom-8 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:scale-105 hover:bg-gray-500">
                  BROWSE ECATALOGUE
                </button>
              </div>
              <div className="flex flex-nowrap gap-5 w-full sm:flex-1 h-auto sm:h-full order-2">
                <Card
                  image={Opt}
                  alt="opt"
                  isNew={true}
                  stars={4}
                  category="OPTIMALS"
                  title="Opt Optimals Daily Glow Multi-Protector SPF50"
                  price={12.99}
                  originalPrice={20.0}
                />
                <Card
                  image={Opt}
                  alt="opt"
                  isNew={true}
                  stars={0}
                  category="OPTIMALS"
                  title="Opt Optimals Hydra Radiance Rich Cream"
                  price={12.99}
                  originalPrice={17.0}
                />
              </div>
            </div>
          </div>
          <div className="block min-[391px]:hidden mt-6 w-full max-w-screen-xl mx-auto px-4 text-center">
            <button className="rounded-full py-3 px-8 whitespace-nowrap text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
