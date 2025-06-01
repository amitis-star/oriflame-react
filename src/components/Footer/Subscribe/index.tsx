import React from "react";
import Email from "../../../assets/icons/Email";
import OriflameApp1 from "../../../assets/icons/OriflameApp1";
import OriflameApp2 from "../../../assets/icons/OriflameApp2";
import OriflameApp3 from "../../../assets/icons/OriflameApp3";
const Subscribe = () => {
  return (
    <>
      <div className="w-full h-14 bg-purpl-400 py-4 mt-10 flex items-center justify-center gap-2.5 text-gray-800 bg-emerald-200">
        <Email />
        <p className="text-16 font-600">
          Subscribe to our newsletter for inspiration & news!
        </p>
      </div>
      <div className="h-45 mb-7.5 py-7.5 bg-gray-100 flex justify-center items-center">
        <div className="w-[984px] h-40 flex justify-center items-center gap-2">
          <div className="w-1/4 h-full flex flex-col items-center">
            <div className=" flex flex-col items-center gap-5">
              <p className="text-gray-800 font-700 text-14">SUPPORT/HELP</p>
              <div className="flex flex-col items-start justify-evenly gap-4">
                <p className="text-14 font-400 text-gray-600">Support Center</p>
                <p className="text-14 font-400 text-gray-600">Contact Us</p>
                <p className="text-14 font-400 text-gray-600">
                  Track your order
                </p>
                <p className="text-14 font-400 text-gray-600">
                  Claims & returns
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center">
            <div className=" flex flex-col gap-5">
              <p className="text-gray-800 font-700 text-14">CORPORATE INFO</p>
              <div className="flex flex-col items-start justify- stretch gap-4">
                <p className="text-14 font-400 text-gray-600">Work With Us</p>
                <p className="text-14 font-400 text-gray-600">
                  Reach Your Happy Place
                </p>
                <p className="text-14 font-400 text-gray-600">Sustainability</p>
                <p className="text-14 font-400 text-gray-600">
                  Investor Relations
                </p>
                <p className="text-14 font-400 text-gray-600">Oriflame.com</p>
                <p className="text-14 font-400 text-gray-600">
                  EU Declarations of Conformity
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center">
            <div className=" flex flex-col gap-5">
              <p className="text-gray-800 font-700 text-14">DISCOVER</p>
              <div className="flex flex-col items-start justify-evenly gap-4">
                <p className="text-14 font-400 text-gray-600">
                  Join us as a Brand Partner
                </p>
                <p className="text-14 font-400 text-gray-600">
                  Join us as a VIP Customer
                </p>
                <p className="text-14 font-400 text-gray-600">eCatalogue</p>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center justify-start gap-2">
            <h5 className="text-25 text-gray-900 font-600">Our apps</h5>
            <div className="flex justify-between items-center gap-3">
              <OriflameApp1 width={32} height={32}/>
              <OriflameApp2 width={32} height={32}/>
              <OriflameApp3 width="32px" height="32px"/>
            </div>
            <a
              href="..."
              className="underline font-600 text-gray-700 hover:text-emerald-600"
            >
              Read more & download
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
