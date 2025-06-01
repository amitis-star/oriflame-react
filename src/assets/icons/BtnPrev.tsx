import React from "react";

interface BtnPrevProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const BtnPrev: React.FC<BtnPrevProps> = ({
  width = 24,
  height = 24,
  fill = "#333333",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeInherit frontpage-1cw4hi4 ${className}`}
      data-testid="ArrowLeftThinIcon"
    >
      <path
        d="M15.354 5.646a.5.5 0 0 1 0 .708L9.707 12l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        fill={fill}
      />
    </svg>
  );
};

export default BtnPrev;
