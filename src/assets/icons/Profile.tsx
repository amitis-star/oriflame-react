import React from "react";

type UserIconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Profile: React.FC<UserIconProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeInherit frontpage-1l6e05h ${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="UserIcon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m.948 12.248C14.34 19.972 13 20 12 20s-2.34-.028-3.448-.252c-.548-.11-1.131-.287-1.601-.595C6.452 18.825 6 18.282 6 17.5c0-2.065 2.09-4.5 6-4.5s6 2.435 6 4.5c0 .782-.452 1.325-.95 1.653-.47.308-1.054.484-1.602.595M17 17.5c0-1.38-1.5-3.5-5-3.5s-5 2.12-5 3.5 3 1.5 5 1.5 5-.12 5-1.5" />
    </svg>
  );
};

export default Profile;
