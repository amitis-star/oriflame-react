import React from "react";

interface StarProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const Star: React.FC<StarProps> = ({
  width = 20,
  height = 20,
  fill = "#E5E5E5",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m14.494 8.18-1.468-3.8c-.362-.938-1.69-.938-2.052 0l-1.468 3.8a1 1 0 0 1-.774.627l-4.152.667c-.968.156-1.264 1.405-.469 1.979l3.041 2.192a1 1 0 0 1 .392 1.027l-.961 4.345c-.222 1.001.925 1.734 1.74 1.113l3.07-2.34a1 1 0 0 1 1.213 0l3.07 2.34c.816.621 1.963-.112 1.741-1.113l-.96-4.345a1 1 0 0 1 .39-1.027l3.042-2.192c.795-.574.5-1.823-.47-1.979l-4.151-.667a1 1 0 0 1-.774-.627"
        fill={fill}
      />
    </svg>
  );
};

export default Star;
