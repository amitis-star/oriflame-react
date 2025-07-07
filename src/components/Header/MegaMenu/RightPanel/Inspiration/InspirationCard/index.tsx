import React from "react";

interface Props {
  image: string;
  text: string;
}

const InspirationCard: React.FC<Props> = ({ image, text }) => (
  <div
    className="
      w-31 h-45   
      my-7.5      
      lg:my-1   
      flex flex-col justify-between cursor-pointer
    "
  >
    <div className="relative group rounded-md overflow-hidden">
      <img
        src={image}
        alt={text}
        className="w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brightness-75 rounded-2xl"
      />
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-gray-200 px-4 py-2 text-sm font-semibold rounded-full hover:bg-gray-600">
        VIEW
      </button>
    </div>
    <p className="w-31 h-12 text-wrap text-center text-17 font-500 text-gray-700">
      {text}
    </p>
  </div>
);

export default InspirationCard;
