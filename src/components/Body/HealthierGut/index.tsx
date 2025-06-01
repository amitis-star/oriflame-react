import React from "react";
import Healthy from "../../../assets/images/healthier gut, happier day.webp";
import WellosphyRed from "../../../assets/images/wellosphy red.webp";
import WellosphyGreen from "../../../assets/images/willosphy green.webp";
import Card from "../../elements/Card";
const HealthierGut = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-15">
        <div className="w-full h-full">
          <div className=" felx justify-center items-center relative mb-10">
            <div className="w-[600px] h-full flex-col items-center justify-between mx-auto">
              <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
                Healthier gut, happier day
              </h3>
              <p className="text-center text-gray-700 font-100 text-14">
                A healthy and diverse gut microbiome impacts health in many
                ways, including the immune system, metabolism, appetite and
                emotions. Support yours by combining probiotics (the good
                bacteria needed in your gut) and prebiotics (food that the good
                bacteria needs to thrive).
              </p>
            </div>
            <button className="w-29 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 bottom-0 font-500 leading-3 hover:bg-gray-200">
              LEARN HOW
            </button>
          </div>
          <div className="flex justify-between items-center h-[455px] gap-5">
            <div className="relative w-2/4 h-full">
              <img src={Healthy} alt="" className="h-full rounded-md" />
              <div className="w-full h-30 absolute py-7.5 px-10 bottom-0 flex flex-col  items-center">
                <p className="w-53 text-center text-30 mb-1 font-500 text-gray-100">
                  Forget tummy trouble
                </p>
                <button className="w-33 h-12 bg-black rounded-full text-gray-100 font-500 text-16 hover:bg-gray-500">
                  LEARN HOW
                </button>
              </div>
            </div>
            <div className="w-3/4 h-full grid grid-cols-3 gap-x-5">
              <Card
                image={WellosphyRed}
                alt="WellosphyRed"
                isNew={false}
                stars={4}
                category="WELLOSPHY"
                title="Astaxanthin & Bilberry Extract"
                price={24.99}
                originalPrice={50.0}
              />

              <Card
                image={WellosphyGreen}
                alt="WellosphyGreen"
                isNew={false}
                stars={3}
                category="WELLOSPHY"
                title="Prebiotic Fibre Drink"
                price={24.99}
                originalPrice={50.0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthierGut;
