import React from "react";
import RightArrow from "../../../../../assets/icons/RightArrow";

const NutritionItems = [
  "Daily wellbeing",
  "Gut Health",
  "Weight management",
  "Beauty",
  "Health agening",
  "Immunity",
  "Kids",
  "Brands",
];

const NutritionPanel: React.FC = () => (
  <div
    className="
    hidden lg:block
      p-6 bg-white
      lg:w-[614px]       
      xl:w-[900px]      
    "
  >
    <div className="p-7.5 flex items-center cursor-pointer">
      <p className="text-20 font-700 text-gray-700">All Nutrition</p>
      <RightArrow className="ml-2.5 text-gray-700 w-7.5 h-7.5" />
    </div>

    <div
      className="
        pt-2.5 px-7.5 pb-20
        flex flex-wrap
        gap-x-7.5         
        gap-y-4           
      "
    >
      {NutritionItems.map((item, idx) => {
        const isLast = idx === NutritionItems.length - 1;
        return (
          <div key={idx}>
            <p
              className={`
                text-gray-700 font-600 cursor-pointer hover:text-gray-400
                ${isLast ? "pb-5" : "pb-7.5"}
              `}
            >
              {item}
            </p>

            {isLast && (
              <p className="text-14 text-gray-500 font-500 -mt-1">Wellosophy</p>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default NutritionPanel;
