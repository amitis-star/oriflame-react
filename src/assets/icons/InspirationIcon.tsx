import React from "react";

interface InspirationProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const InspirationIcon: React.FC<InspirationProps> = ({
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
      <path d="M13.133 4a1.5 1.5 0 0 0-1.489 1.686L13 16.531V18.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-1.969l1.356-10.845A1.5 1.5 0 0 0 17.867 4zM14 18.5V17h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5m4.363-12.938L17.06 16h-3.12L12.637 5.562A.5.5 0 0 1 13.133 5h4.734a.5.5 0 0 1 .496.562M6 18.5a1.5 1.5 0 0 0 3 0V8.651l1.315-1.972c.478-.718.268-1.732-.52-2.156a4 4 0 0 0-.978-.39C8.448 4.041 8.032 4 7.5 4c-.527 0-.938.045-1.302.137a4 4 0 0 0-.96.385c-.793.423-1.026 1.448-.537 2.18L6 8.652zM5.709 5.405c.258-.137.475-.234.734-.299C6.704 5.04 7.029 5 7.5 5c.482 0 .812.038 1.078.103.263.065.483.16.744.3.24.13.33.467.161.72L8.233 8H6.767L5.533 6.148a.52.52 0 0 1 .176-.743M7 9h1v9.5a.5.5 0 0 1-1 0z" />
    </svg>
  );
};

export default InspirationIcon;
