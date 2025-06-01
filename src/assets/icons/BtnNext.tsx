import React from "react";

interface ArrowRightThinIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const ArrowRightThinIcon: React.FC<ArrowRightThinIconProps> = ({
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
      data-testid="ArrowRightThinIcon"
    >
      <path
        d="M9.146 5.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.793 12 9.146 6.354a.5.5 0 0 1 0-.708"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightThinIcon;
