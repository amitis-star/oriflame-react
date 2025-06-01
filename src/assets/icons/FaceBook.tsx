import React from "react";

interface FacebookIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}

const Facebook: React.FC<FacebookIconProps> = ({
  width = 36,
  height = 36,
  fill = "#1877F2",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g clipPath="url(#clip0_3_1928)">
        <path
          d="M35.8209 18.3856C35.8209 16.0713 35.3651 13.7797 34.4794 11.6416C33.5938 9.50351 32.2957 7.56077 30.6593 5.92434C29.0228 4.2879 27.0801 2.9898 24.942 2.10417C22.8039 1.21853 20.5123 0.7627 18.198 0.7627C13.7608 0.759363 9.48561 2.43001 6.22632 5.44097C2.96704 8.45193 0.963536 12.5816 0.615958 17.0052C0.26838 21.4287 1.60231 25.8206 4.35133 29.3037C7.10035 32.7868 11.0621 35.1046 15.4454 35.7943V23.4795H10.9706V18.3856H15.4454V14.502C15.4454 10.085 18.0759 7.64521 22.103 7.64521C24.0309 7.64521 26.0487 7.99009 26.0487 7.99009V12.3257H23.8274C21.6382 12.3257 20.9548 13.6837 20.9548 15.0782V18.3835H25.8431L25.0612 23.4774H20.9548V35.7922C25.0999 35.1354 28.8748 33.0214 31.6006 29.8303C34.3264 26.6392 35.8244 22.5803 35.8252 18.3835L35.8209 18.3856Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1928">
          <rect
            x="0.552979"
            y="0.643555"
            width="35.27"
            height="35.27"
            rx="17.635"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
