// src/assets/icons/CrossIcon.tsx
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Tailwind or custom classes */
  className?: string;
  /** Width (defaults to 24) */
  width?: number | string;
  /** Height (defaults to 24) */
  height?: number | string;
}

/**
 * A simple “X” icon (originally named ClearIcon).
 * Rotate 45 deg to turn it into a plus:
 * <CrossIcon className="transform rotate-45 text-green-600" />
 */
const CrossIcon: React.FC<IconProps> = ({
  className = "",
  width = 24,
  height = 24,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={className}
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="M6.354 5.646a.5.5 0 1 0-.708.708L11.293 12l-5.647 5.647a.5.5 0 1 0 .708.707L12 12.707l5.646 5.647a.5.5 0 0 0 .707-.708L12.708 12l5.647-5.646a.5.5 0 1 0-.708-.708L12 11.293z" />
  </svg>
);

export default CrossIcon;
