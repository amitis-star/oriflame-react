import React from "react";
import BestOfferCover from "../../../assets/images/best offer cover.webp";
import Card from "../../elements/Card";
import Possess from "../../../assets/images/possess.webp";
import LipBalm from "../../../assets/images/lip balm.webp";
import FacialOil from "../../../assets/images/facial oil.webp";
import AmberElixer from "../../../assets/images/amber elixer.webp";
const BestOffers = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-15">
        <div className="w-full h-full">
          <div className=" felx justify-center items-center relative mb-4">
            <div className="w-[600px] h-full flex-col items-center justify-between mx-auto">
              <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
                Best offers
              </h3>
            </div>
            <button className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute bottom-0 font-500 leading-3 hover:bg-gray-200">
              View all
            </button>
          </div>
          <div className="flex justify-between items-center h-[455px] gap-5">
            <div className="w-4/5 h-full grid grid-cols-4 gap-x-3">
              <Card
                image={Possess}
                alt="possess"
                isNew={false}
                stars={5}
                category="possess"
                title=" Absolute Eau de Parfum"
                price={27.99}
                originalPrice={47.0}
              />
              <Card
                image={LipBalm}
                alt="possess"
                isNew={false}
                stars={4}
                category=" TENDER CARE"
                title="Natural Multi-purpose Balm"
                price={3.49}
                originalPrice={8.5}
              />
              <Card
                image={FacialOil}
                alt="FacialOil"
                isNew={false}
                stars={5}
                category="NOVAGE +"
                title="Intense Nourishment Facial Oil Capsules"
                price={24.99}
                originalPrice={50.0}
              />
              <Card
                image={AmberElixer}
                alt="AmberElixer"
                isNew={false}
                stars={3}
                category="AMBER ELIXER"
                title="Eau de Parfum"
                price={6.99}
                originalPrice={13.0}
              />
            </div>
            <div className="relative w-1/5 h-full">
              <img src={BestOfferCover} alt="" className="h-full rounded-md" />
              <div className="w-full h-35 absolute py-7.5 px-10 bottom-0 flex flex-col justify-between gap-y-2">
                <p className="w-33 h-20 text-center text-30 mb-1 font-500 text-gray-100">
                  BEST RIGHT NOW
                </p>
                <button className="w-33 h-12 bg-black rounded-full text-gray-100 font-500 text-16 hover:bg-gray-500">
                  SEIZE THE DEALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOffers;
