import React from "react";
import "../../../assets/styles/index.css";
import Facebook from "../../../assets/icons/FaceBook";
import YouTube from "../../../assets/icons/YouTube";
import Insta from "../../../assets/icons/insta";
import Visa from "../../../assets/images/Visa.png";
import CirclePay from "../../../assets/images/CirclePay.png";
import PayPal from "../../../assets/images/PayPal.png";
import GPay from "../../../assets/images/GPay.png";
const FollowUs = () => {
  return (
    <>
      <div className="mb-7.5 flex flex-col justify-evenly items-center gap-8 ">
        <div className="flex flex-col gap-3">
          <h5 className="text-25 text-center text-gray-800 font-600">
            Follow Us
          </h5>
          <div className="flex justify-between items-center gap-3">
            <Facebook width={32} height={32} />
            <YouTube width={32} height={32} />
            <Insta width={32} height={32} />
          </div>
        </div>
        <div className="w-[600px]">
          <p className="text-center text-14 font-400 text-gray-600">
            Oriflame is a leading beauty company selling direct. We are present
            in more than 60 countries, of which we are the market leader in more
            than a half. Oriflame has its origin in Sweden with corporate
            offices in Switzerland. We offer a wide range of high-quality beauty
            products as well as a unique opportunity to join our sales force and
            start your own business.
          </p>
        </div>
        <div className="w-[530px]">
          <p className="text-center text-gray-600 text-14 font-400">
            Copyright © 2025 Oriflame Cosmetics Global SA. All rights reserved.
          </p>
          <div className="flex items-center justify-between">
            <p className="underline cursor-pointer text-gray-600 text-14 font-400">
              Terms and Conditions for VIP Customers
            </p>
            <p className="underline cursor-pointer text-gray-600 text-14 font-400">
              Terms and Conditions for Brand Partners
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <img alt="visa" src={Visa} className="h-[26px] w-15"/>
          <img alt="CirclePay" src={CirclePay} className="h-[26px] w-[38px]"/>
          <img alt="PayPal" src={PayPal} className="h-[26px] w-[85px]"/>
          <img alt="GPay" src={GPay} className="h-[26px] w-12"/>
        </div>
      </div>
    </>
  );
};
export default FollowUs;
