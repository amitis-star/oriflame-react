import React from "react";

type ChatIconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const ChatIcon: React.FC<ChatIconProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.805 15.881q-.14.27-.266.523c-.192.428-.14.768.071 1.052.237.319.723.63 1.513.83a.5.5 0 0 1 .036.96c-.706.237-1.412.33-2.153.185-.653-.127-1.301-.432-1.978-.928a7.2 7.2 0 0 1-3.24.769c-4.032 0-7.288-3.314-7.288-7.386C4.5 7.813 7.756 4.5 11.788 4.5s7.288 3.313 7.288 7.386c0 1.53-.69 2.868-1.271 3.995" />
    </svg>
  );
};

export default ChatIcon;
