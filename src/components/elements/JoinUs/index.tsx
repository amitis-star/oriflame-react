import React, { useEffect, useRef } from "react";
import "../../../assets/styles/index.css";
import joinusone from "../../../assets/images/joinus-one.webp";
import joinustwo from "../../../assets/images/joinus-two.webp";

interface JoinUsProps {
  show: boolean;
  onClose: () => void;
}

const JoinUs: React.FC<JoinUsProps> = ({ show, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      ref={modalRef}
      className="h-[375px] absolute top-[100px] left-00 right-00 bg-white z-[1000] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
    >
      <div className="h-full">
        <div className="flex justify-center items-center gap-2 ">
          <div className="relative w-[680px] h-[325px] cursor-pointer group overflow-hidden">
            <img
              src={joinusone}
              alt="joinuspictureone"
              className="w-full h-full object-cover transition duration-300 ease-in-out"
            />
            <div className="absolute inset-00 bg-gray-900 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            <button
              className="absolute bottom-7 left-1/2 transform -translate-x-1/2 
              px-4 py-2 bg-gray-900 text-white rounded-full h-11 text-14 font-600 
              group-hover:bg-gray-500 transition-colors duration-300 ease-in-out z-10 shadow-lg"
            >
              VIP CUSTOMER
            </button>
          </div>
          <div className="relative w-[680px] h-[325px] cursor-pointer group overflow-hidden">
            <img
              src={joinustwo}
              alt="joinuspicturetwo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-00 bg-gray-900 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            <button
              className="absolute bottom-7 left-1/2 transform -translate-x-1/2 
                px-4 py-2 bg-gray-900 text-white rounded-full h-11 text-14 font-600 
                group-hover:bg-gray-500 transition-colors duration-300 ease-in-out z-10 shadow-lg"
            >
              BRAND PARTNER
            </button>
          </div>
        </div>
        <p className="underline text-16 text-center my-2.5 font-600 text-gray-900 cursor-pointer hover:text-gray-500">
          I don't know yet
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
