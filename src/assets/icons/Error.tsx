import React from "react";

interface ErrorIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({
  width = 24,
  height = 24,
  fill = "#C60D22",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 13.5a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5m-.5 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0" />
      <path d="M11.997 3.997a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0" />
    </svg>
  );
};

export default ErrorIcon;
