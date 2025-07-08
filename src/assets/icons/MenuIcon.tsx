import React from "react";

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M4.5 5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0 7a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m.5 6.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1z"
      fill="#333333"
    />
  </svg>
);

export default MenuIcon;
