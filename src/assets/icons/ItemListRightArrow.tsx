import React from "react";

interface ItemListRightArrowProps {
  size?: number | string;
  className?: string;
}

const ItemListRightArrow: React.FC<ItemListRightArrowProps> = ({
  size = 20,
  className = "",
}) => {
  return (
    <svg
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall frontpage-ifdqgz ${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill="#333333" />
    </svg>
  );
};

export default ItemListRightArrow;
