import React from "react";
import BestOfferCover from "../../../assets/images/best offer cover.webp";
import Card from "../../elements/Card";
import Possess from "../../../assets/images/possess.webp";
import LipBalm from "../../../assets/images/lip balm.webp";
import FacialOil from "../../../assets/images/facial oil.webp";
import AmberElixer from "../../../assets/images/amber elixer.webp";

const BestOffers = () => {
  return (
    <div className="w-full flex justify-center mb-15">
      <div className="w-full h-full">
        <div className="relative mb-4">
          <h3 className="text-40 font-700 text-gray-800 text-center mb-3">
            Best offers
          </h3>
          <button className="hidden lg:block w-27 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 bottom-0 font-500 leading-3 hover:bg-gray-200">
            View all
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start h-auto sm:h-[455px] flex-425-col">
          <div className="relative flex-shrink-0 w-full sm:w-[280px] h-[455px] rounded-md overflow-hidden mt-0 mb-4 sm:mt-0 sm:mb-0 order-1 sm:order-2 order-image-425">
            <img
              src={BestOfferCover}
              alt="Best Offer"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-5 flex flex-col items-center gap-2">
              <p className="text-white font-medium text-center text-lg sm:text-xl md:text-2xl leading-tight">
                BEST RIGHT NOW
              </p>
              <button className="bg-black bg-opacity-80 hover:bg-opacity-60 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full px-6 py-2 transition duration-300">
                SEIZE THE DEALS
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap sm:flex-nowrap gap-6 flex-grow order-2 sm:order-1 justify-center cards-wrap-425 order-cards-425">
            <div className="w-1/2 md:w-[189px] lg:w-[208px] card-50w-425">
              <Card
                image={Possess}
                alt="possess"
                isNew={false}
                stars={5}
                category="possess"
                title="Absolute Eau de Parfum"
                price={27.99}
                originalPrice={47.0}
              />
            </div>

            <div className="w-1/2 md:w-[189px] lg:w-[208px] card-50w-425">
              <Card
                image={LipBalm}
                alt="lip balm"
                isNew={false}
                stars={4}
                category="TENDER CARE"
                title="Natural Multi-purpose Balm"
                price={3.49}
                originalPrice={8.5}
              />
            </div>

            <div className="hidden lg:block card-50w-425 show-on-425 w-1/2 lg:w-[208px]">
              <Card
                image={FacialOil}
                alt="Facial Oil"
                isNew={false}
                stars={5}
                category="NOVAGE +"
                title="Intense Nourishment Facial Oil Capsules"
                price={24.99}
                originalPrice={50.0}
              />
            </div>

            <div className="hidden xl:block card-50w-425 show-on-425 w-1/2 lg:w-[208px]">
              <Card
                image={AmberElixer}
                alt="Amber Elixer"
                isNew={false}
                stars={3}
                category="AMBER ELIXER"
                title="Eau de Parfum"
                price={6.99}
                originalPrice={13.0}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex lg:hidden justify-center w-full">
          <button className="w-27 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
