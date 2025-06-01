import React from "react";

const PinkHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    focusable="false"
    data-testid="HeartFilledIcon"
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit frontpage-1cw4hi4"
    {...props}
  >
    <path
      fill="#CF578A"
      d="M11.757 20.937 12 20.5za.5.5 0 0 0 .486 0L12 20.5l.243.437.002-.001.006-.003.021-.012.029-.016.05-.03q.104-.06.294-.173a29 29 0 0 0 4.187-3.078c2.262-2.011 4.668-4.89 4.668-8.124 0-1.6-.468-2.875-1.242-3.796a4.67 4.67 0 0 0-2.937-1.612c-1.947-.28-4.088.582-5.321 2.528-1.233-1.946-3.374-2.809-5.321-2.528a4.67 4.67 0 0 0-2.937 1.612C2.968 6.624 2.5 7.9 2.5 9.5c0 3.233 2.406 6.113 4.668 8.124a29 29 0 0 0 4.56 3.297l.02.012.007.003z"
    />
  </svg>
);

export default PinkHeart;
