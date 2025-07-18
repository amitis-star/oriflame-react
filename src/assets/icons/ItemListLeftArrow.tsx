import React from "react";

interface ItemListLeftArrowProps {
  size?: number | string; 
  className?: string; 
}

const ItemListLeftArrow: React.FC<ItemListLeftArrowProps> = ({
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
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" fill="#333333" />
    </svg>
  );
};

export default ItemListLeftArrow;
