import React from "react";

interface BestOffersProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const BestOffersIcon: React.FC<BestOffersProps> = ({
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
      <path d="M15.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0" />
      <path d="M13.328 5a2.5 2.5 0 0 0-1.767.732l-6.5 6.5a2.5 2.5 0 0 0 0 3.536l3.171 3.171a2.5 2.5 0 0 0 3.536 0l6.5-6.5A2.5 2.5 0 0 0 19 10.672V6.5A1.5 1.5 0 0 0 17.5 5zm-1.06 1.44a1.5 1.5 0 0 1 1.06-.44H17.5a.5.5 0 0 1 .5.5v4.172a1.5 1.5 0 0 1-.44 1.06l-6.5 6.5a1.5 1.5 0 0 1-2.12 0l-3.172-3.171a1.5 1.5 0 0 1 0-2.122z" />
    </svg>
  );
};

export default BestOffersIcon;
