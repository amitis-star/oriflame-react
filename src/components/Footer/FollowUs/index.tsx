import React from "react";
import "../../../assets/styles/index.css";
import Facebook from "../../../assets/icons/FaceBook";
import YouTube from "../../../assets/icons/YouTube";
import Insta from "../../../assets/icons/insta";
import Visa from "../../../assets/images/Visa.png";
import CirclePay from "../../../assets/images/CirclePay.png";
import PayPal from "../../../assets/images/PayPal.png";
import GPay from "../../../assets/images/GPay.png";
import OriflameApp1 from "../../../assets/icons/OriflameApp1";
import OriflameApp2 from "../../../assets/icons/OriflameApp2";
import OriflameApp3 from "../../../assets/icons/OriflameApp3";

const socialIcons = [
  { Component: Facebook, alt: "Facebook" },
  { Component: YouTube, alt: "YouTube" },
  { Component: Insta, alt: "Instagram" },
];

const paymentLogos = [
  { src: Visa, alt: "Visa", widthClass: "w-15" },
  { src: CirclePay, alt: "CirclePay", widthClass: "w-[38px]" },
  { src: PayPal, alt: "PayPal", widthClass: "w-[85px]" },
  { src: GPay, alt: "GPay", widthClass: "w-12" },
];

const FollowUs = () => {
  return (
    <div className="mb-7.5 flex flex-col justify-evenly items-center gap-8 ">
      <div className="flex flex-col gap-3">
        <h5 className="text-20 lg:text-25 text-center text-gray-800 font-600">
          Follow Us
        </h5>
        <div className="flex justify-between items-center gap-3">
          {socialIcons.map(({ Component, alt }) => (
            <Component key={alt} width={32} height={32} aria-label={alt} />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden h-full flex-col items-center justify-start gap-2">
        <h5 className="text-20 lg:text-25 text-gray-900 font-600">Our apps</h5>
        <div className="flex justify-between items-center gap-3">
          <OriflameApp1 width={32} height={32} />
          <OriflameApp2 width={32} height={32} />
          <OriflameApp3 width="32px" height="32px" />
        </div>
        <a
          href="..."
          className="underline font-600 text-gray-700 hover:text-emerald-600"
        >
          Read more & download
        </a>
      </div>
      <div className="w-56 sm:w-[600px]">
        <p className="text-center text-14 font-400 text-gray-600 px-2">
          Oriflame is a leading beauty company selling direct. We are present in
          more than 60 countries, of which we are the market leader in more than
          a half. Oriflame has its origin in Sweden with corporate offices in
          Switzerland. We offer a wide range of high-quality beauty products as
          well as a unique opportunity to join our sales force and start your
          own business.
        </p>
      </div>
      <div className="w-56 sm:w-[530px]">
        <p className="text-center text-gray-600 text-14 font-400 mb-4">
          Copyright © 2025 Oriflame Cosmetics Global SA. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-5">
          <p className="underline cursor-pointer text-gray-600 text-14 font-400">
            Terms and Conditions for VIP Customers
          </p>
          <p className="underline cursor-pointer text-gray-600 text-14 font-400">
            Terms and Conditions for Brand Partners
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        {paymentLogos.map(({ src, alt, widthClass }) => (
          <img
            key={alt}
            alt={alt}
            src={src}
            className={`h-[26px] ${widthClass}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
