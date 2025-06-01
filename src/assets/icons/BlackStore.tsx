import React from "react";

interface QuickBuyIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const BlackStore: React.FC<QuickBuyIconProps> = ({
  width = 30,
  height = 30,
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
      data-testid="QuickBuyFilledIcon"
    >
      <path
        d="M19.2 9c.9 0 1.6.8 1.5 1.7l-1.2 9c-.1.7-.7 1.3-1.5 1.3H5.7c-.7 0-1.4-.6-1.5-1.3l-1.2-9C2.9 9.8 3.6 9 4.5 9h1.9c.1-2.5.9-4.1 2-4.9 1.1-1 2.5-1.1 3.5-1.1s2.4.1 3.5 1 1.8 2.5 1.9 5zM7.4 11.4V10h-1v1.4c0 .3.2.5.5.5s.5-.2.5-.5m0-2.4h9c-.1-2.4-.8-3.6-1.6-4.2-.9-.7-2-.8-2.9-.8-1 0-2 .1-2.9.8-.8.7-1.5 1.9-1.6 4.2m10 2.4V10h-1v1.4c0 .3.2.5.5.5s.5-.2.5-.5"
        fill={fill}
      />
    </svg>
  );
};

export default BlackStore;
