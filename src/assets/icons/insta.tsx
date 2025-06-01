import React from "react";

interface InstaProps {
  width?: number;
  height?: number;
}

const Insta: React.FC<InstaProps> = ({ width = 36, height = 36 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.5 6.5C28.3284 6.5 29 7.17157 29 8V28C29 28.8284 28.3284 29.5 27.5 29.5H8.5C7.67157 29.5 7 28.8284 7 28V8C7 7.17157 7.67157 6.5 8.5 6.5H27.5ZM27.5 4.5H8.5C6.567 4.5 5 6.067 5 8V28C5 29.933 6.567 31.5 8.5 31.5H27.5C29.433 31.5 31 29.933 31 28V8C31 6.067 29.433 4.5 27.5 4.5Z"
      fill="currentColor"
    />
    <path
      d="M17.9974 11C14.1335 11 11 14.1339 11 18C11 21.8656 14.1335 25 17.9974 25C21.8655 25 25 21.8656 25 18C25 14.1339 21.8655 11 17.9974 11ZM17.9974 23C15.2384 23 13 20.7616 13 18C13 15.2384 15.2384 13 17.9974 13C20.7582 13 23 15.2384 23 18C23 20.7616 20.7582 23 17.9974 23Z"
      fill="currentColor"
    />
    <path
      d="M26 9.5C26 10.3284 25.3284 11 24.5 11C23.6716 11 23 10.3284 23 9.5C23 8.67157 23.6716 8 24.5 8C25.3284 8 26 8.67157 26 9.5Z"
      fill="currentColor"
    />
  </svg>
);

export default Insta;
