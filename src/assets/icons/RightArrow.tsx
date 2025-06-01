import React from "react";

interface RightArrowProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M9.146 5.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.793 12 9.146 6.354a.5.5 0 0 1 0-.708" />
    </svg>
  );
};

export default RightArrow;
