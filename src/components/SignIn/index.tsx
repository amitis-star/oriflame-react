import React from "react";
import LeftArrow from "../../assets/icons/LeftArrow";
import InfoCircleIcon from "../../assets/icons/InfoCircleIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center min-h-screen">
        <div className="relative w-full max-w-[390px] h-[450px] rounded-lg bg-white px-15 py-7.5 mt-12.5">
          <Link to="/">
            <LeftArrow className="absolute top-7 left-4 w-[40px] h-[40px] text-gray-800" />
          </Link>

          <p className="px-[25px] mb-[25px] text-center text-25 font-600 text-black">
            Sign in
          </p>

          <div className="w-full h-12.5 pb-2 flex flex-col justify-end border-b-2 border-b-gray-600 hover:border-black">
            <div className="w-full h-8 flex justify-start items-center gap-2">
              <input
                className="outline-none w-[306px] bg-transparent"
                placeholder="Member number or e-mail"
              />
              <InfoCircleIcon className="text-gray-500 w-6 h-6" />
            </div>
          </div>

          <div className="mt-[5px] mb-[25px] text-12 text-gray-600 font-400 underline hover:text-emerald-600">
            Sign in with mobile phone
          </div>

          <div className="w-full h-12.5 pb-2 flex flex-col justify-end border-b-2 border-b-gray-600 hover:border-black">
            <div className="w-full h-8 flex justify-start items-center gap-2">
              <input
                className="outline-none w-[306px] bg-transparent"
                placeholder="Password"
                type="password"
              />
              <EyeIcon />
            </div>
          </div>

          <div className="mt-[5px] mb-[25px] text-12 text-gray-600 font-400 underline hover:text-emerald-600">
            Forgot your password?
          </div>

          <div className="flex justify-start items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black focus:ring-black"
            />
            <p className="text-16 font-200">Keep me signed in</p>
            <InfoCircleIcon className="text-gray-400" />
          </div>

          <button className="w-full rounded-full h-11.5 bg-black text-white font-400 text-16 mb-2.5 py-2.5 px-5 mt-7.5">
            SIGN IN
          </button>

          <p className="underline text-center text-14 font-500 text-gray-800">
            BECOME A VIPCUSTOMER
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
