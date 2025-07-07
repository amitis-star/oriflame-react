import React from "react";
import FoundationFinder from "../../../../../assets/images/Foundation Finder.webp";
import IngredientLibrary from "../../../../../assets/images/IngredientLibrary.webp";
import Icon from "../../../../../assets/images/Icons.webp";
import PickScentForYourMood from "../../../../../assets/images/Pick a scent for your mood.webp";

import InspirationCard from "./InspirationCard/index";

const inspirationCards = [
  { image: FoundationFinder, text: "FOUNDATION FINDER" },
  { image: IngredientLibrary, text: "INGREDIENT LIBRARY" },
  { image: Icon, text: "ICON" },
  { image: PickScentForYourMood, text: "PICK A SCENT FOR YOUR MOOD" },
];

const InspirationPanel: React.FC = () => (
  <div
    className="
    hidden lg:flex
    p-6 bg-white
    lg:flex-wrap xl:flex-nowrap
    gap-x-10       
    lg:gap-y-2      
    xl:gap-y-0      
    xl:w-auto     
    lg:w-[614px]  
    whitespace-normal
  "
  >
    {inspirationCards.map(({ image, text }, idx) => (
      <InspirationCard key={idx} image={image} text={text} />
    ))}
  </div>
);

export default InspirationPanel;
