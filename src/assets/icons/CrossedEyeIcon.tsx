import React from "react";

interface CrossedEyeIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const CrossedEyeIcon: React.FC<CrossedEyeIconProps> = ({
  width = 35,
  height = 35,
  fill = "#333333",
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
      <path d="M5.788 9.426c-.956 1.053-1.612 2.43-1.79 4.126a.5.5 0 0 1-.995-.104c.195-1.857.893-3.37 1.904-4.54l-1.66-.977a.5.5 0 1 1 .507-.862L5.63 8.173C7.353 6.637 9.693 5.875 12 5.875c4.178 0 8.463 2.498 8.997 7.573a.5.5 0 0 1-.994.104c-.466-4.425-4.18-6.677-8.003-6.677-1.998 0-3.966.615-5.457 1.835l2.906 1.71a4 4 0 0 1 6.484 3.814l4.82 2.835a.5.5 0 0 1-.506.862l-4.629-2.723a4 4 0 1 1-6.868-4.04zm3.828 2.252a3 3 0 1 0 5.135 3.02zm5.379 2.003q.005-.09.005-.181a3 3 0 0 0-4.614-2.53z" />
    </svg>
  );
};

export default CrossedEyeIcon;
