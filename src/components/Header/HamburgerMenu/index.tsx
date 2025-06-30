import React, { useState, KeyboardEvent } from "react";

interface HamburgerToggleProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

const HamburgerToggle: React.FC<HamburgerToggleProps> = ({
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const toggle = () => {
    if (isControlled) {
      onToggle && onToggle(!controlledIsOpen);
    } else {
      setInternalIsOpen(!internalIsOpen);
      onToggle && onToggle(!internalIsOpen);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className=" flex flex-col items-center justify-center cursor-pointer z-100"
      onClick={toggle}
      role="button"
      aria-pressed={isOpen}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`w-6 h-0.1 bg-gray-700 mb-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <div
        className={`w-6 h-0.2 bg-gray-700 mb-2 transition-all ${
          isOpen
            ? "opacity-0 translate-x-12 duration-700 ease-in-out"
            : "opacity-100 translate-x-0 duration-300 ease-in-out"
        }`}
        style={{ transformOrigin: "center" }}
      />
      <div
        className={`w-6 h-0.1 bg-gray-700 transition-transform duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
};

export default HamburgerToggle;
