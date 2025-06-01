import React from "react";
import ReachYourHapyPlace from "./ReachYourHappyPlace";
import OurTopBrands from "./OutTopBrands";
import Subscribe from "./Subscribe";
import FollowUs from "./FollowUs";

const Footer = () => {
  return (
    <>
      <ReachYourHapyPlace />
      <OurTopBrands />
      <div className="container-fluid m-00 p-00 overflow-x-hidden">
        <Subscribe />
        <FollowUs />
      </div>
    </>
  );
};

export default Footer;
