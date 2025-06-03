import "../../assets/styles/index.css";
import React from "react";

import ItemsList from "./ItemsList";
import WhatsNew from "./What'sNew";
import IconsofOurTime from "./IconsofOurTime";
import BestOffers from "./BestOffers";
import OriflameOnMe from "./OriflameOnMe";
import HealthierGut from "./HealthierGut";
const Body = () => {
  return (
    <>
      <div className="container">
        <ItemsList />
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-15 px-00"></div>
      <div className="container">
        <WhatsNew />
        <IconsofOurTime />
        <BestOffers />
        <OriflameOnMe />
        <HealthierGut />
      </div>
    </>
  );
};
export default Body;
