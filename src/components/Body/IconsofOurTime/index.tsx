import React from "react";
import IconOfOurTime from "../../../assets/images/icon of our time.webp";
import TheOneWhatsNew from "../../../assets/images/theone-whats-new.webp";
import RoyalVelvet from "../../../assets/images/royal velvet.webp";
import TenderCare from "../../../assets/images/tender care.webp";
import MilkandHoney from "../../../assets/images/milk and honey gold.webp";
import Card from "../../elements/Card";

const IconsofOurTime = () => {
  return (
    <div className="w-full flex justify-center mb-15 p-0">
      <div className="w-full h-full">
        <div className="flex justify-center items-center relative mb-4 m-0 p-0">
          <div
            className="
              h-full flex flex-col items-center justify-between mx-auto
              w-full max-w-full
              sm:max-w-[350px]
              lg:max-w-[500px]
              xl:max-w-[600px]
              2xl:max-w-[600px]
            "
          >
            <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
              Icons of our time
            </h3>
            <p className="text-center text-gray-700 font-100">
              Say hello to our legendary products—iconic essentials you trust
              and reach for again and again. Discover the time-tested favourites
              our customers love most.
            </p>
          </div>
          <button className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 bottom-0 font-500 leading-3 hover:bg-gray-200 sm:block hidden">
            View all
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-5">
          <img
            src={IconOfOurTime}
            alt=""
            className="w-full h-[425px] sm:w-[240px] sm:h-auto md:w-[240px] lg:w-[236px] xl:w-1/5 2xl:w-1/5 rounded-md mb-4 sm:mb-0 object-cover max-w-[425px] sm:max-w-none"
          />
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 w-full">
            <Card
              id={3}
              image={TheOneWhatsNew}
              alt="opt"
              isNew={true}
              stars={4}
              category="THE ONES"
              title="5 in 1 Wonder Lash Prom Queen Mascara - Black"
              price={12.99}
              originalPrice={20.0}
            />
            <Card
              id={4}
              image={MilkandHoney}
              alt="opt"
              isNew={false}
              stars={0}
              category="MilkandHoney"
              title="MilkandHoney"
              price={12.99}
              originalPrice={17.0}
            />
            <div className="hidden lg:block">
              <Card
                id={5}
                image={TenderCare}
                alt="opt"
                isNew={true}
                stars={5}
                category="TENDER CARE"
                title="Sweet Mandarin Multi-purpose Balm"
                price={12.99}
                originalPrice={17.0}
              />
            </div>
            <div className="hidden xl:block">
              <Card
                id={6}
                image={RoyalVelvet}
                alt="opt"
                isNew={false}
                stars={5}
                category="THE ONES"
                title="5 in 1 Wonder Lash Prom Queen Mascara - Black"
                price={12.99}
                originalPrice={17.0}
              />
            </div>
          </div>
          <div className="sm:hidden flex flex-col gap-3 w-full">
            <div className="flex gap-3 justify-center">
              <Card
                id={3}
                image={TheOneWhatsNew}
                alt="opt"
                isNew={true}
                stars={4}
                category="THE ONES"
                title="5 in 1 Wonder Lash Prom Queen Mascara - Black"
                price={12.99}
                originalPrice={20.0}
              />
              <Card
                id={4}
                image={MilkandHoney}
                alt="opt"
                isNew={false}
                stars={0}
                category="MilkandHoney"
                title="MilkandHoney"
                price={12.99}
                originalPrice={17.0}
              />
            </div>
            <div className="flex gap-3 justify-center">
              <Card
                id={5}
                image={TenderCare}
                alt="opt"
                isNew={true}
                stars={5}
                category="TENDER CARE"
                title="Sweet Mandarin Multi-purpose Balm"
                price={12.99}
                originalPrice={17.0}
              />
              <Card
                id={6}
                image={RoyalVelvet}
                alt="opt"
                isNew={false}
                stars={5}
                category="THE ONES"
                title="5 in 1 Wonder Lash Prom Queen Mascara - Black"
                price={12.99}
                originalPrice={17.0}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden flex justify-center mt-6">
          <button className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconsofOurTime;
