import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const InfoCircleIcon: React.FC<IconProps> = ({
  className = "",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 8.5c-.88 0-1.5.63-1.5 1.3a.5.5 0 0 1-1 0c0-1.318 1.17-2.3 2.5-2.3s2.5.982 2.5 2.3c0 1.15-.89 2.044-2 2.253V13.5a.5.5 0 0 1-1 0v-1.9a.5.5 0 0 1 .5-.5c.88 0 1.5-.63 1.5-1.3s-.62-1.3-1.5-1.3m.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0" />
    </svg>
  );
};

export default InfoCircleIcon;
