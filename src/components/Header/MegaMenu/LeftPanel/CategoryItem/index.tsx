import React from "react";
import RightArrow from "../../../../../assets/icons/RightArrow";

interface Props {
  label: string;
  border: string;
  bg: string;
  onClick: () => void;
  isActive?: boolean;
}

const CategoryItem: React.FC<Props> = ({
  label,
  border,
  bg,
  onClick,
  isActive,
}) => (
  <div
    onClick={onClick}
    className={`w-full h-12.5 flex justify-between items-center px-[15px] py-2.5 border-l-6 ${border} ${
      isActive ? "bg-gray-100" : bg
    } mb-1 cursor-pointer`}
  >
    <p className="text-18 font-600 text-gray-800">{label}</p>
    <RightArrow />
  </div>
);

export default CategoryItem;
