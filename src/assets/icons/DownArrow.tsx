import React from "react";

interface DownArrowProps {
  size?: number | string;
  className?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium frontpage-ofr7jn ${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.646 9.146a.5.5 0 0 1 .708 0L12 14.793l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
        fill="#000000"
        fillOpacity="0.54"
      />
    </svg>
  );
};

export default DownArrow;
