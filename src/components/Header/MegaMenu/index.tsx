// components/MegaMenu/MegaMenu.tsx

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { MegaMenuProps, PanelType } from "./types";
import LeftPanel from "./LeftPanel/index";
import RightPanel from "./RightPanel/index";

const MegaMenu: React.FC<MegaMenuProps> = ({ show, onClose }) => {
  const [activePanel, setActivePanel] = useState<PanelType>("none");

  const menuRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleOutside = (e: MouseEvent) =>
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      onClose();

    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keyup", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keyup", handleEsc);
    };
  }, [show, onClose]);

  useEffect(() => {
    const right = rightPanelRef.current;
    const left = leftPanelRef.current;
    if (!right || !left) return;

    const onScroll = () => {
      left.scrollTop = right.scrollTop;
    };

    right.addEventListener("scroll", onScroll);
    return () => right.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const left = leftPanelRef.current;
    const right = rightPanelRef.current;
    if (!left || !right || !spacerRef.current) return;

    const balanceHeights = () => {
      const gap = left.scrollHeight - right.scrollHeight;
      spacerRef.current?.style.setProperty(
        "height",
        gap > 0 ? `${gap}px` : "0px"
      );
    };

    balanceHeights();
    window.addEventListener("resize", balanceHeights);
    return () => window.removeEventListener("resize", balanceHeights);
  }, [activePanel]);

  if (!show || typeof window === "undefined") return null;

  const overlay: ReactNode = (
    <div className="fixed inset-00 z-[1100]">
      <div className="absolute inset-00 bg-black/50 backdrop-blur-sm transition-opacity duration-300" />
      <div
        ref={menuRef}
        className="absolute left-00 top-[100px] h-[660px] max-h-[990px] w-fit bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex"
      >
        <LeftPanel
          ref={leftPanelRef}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
        <RightPanel
          ref={rightPanelRef}
          activePanel={activePanel}
          spacerRef={spacerRef}
        />
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};

export default MegaMenu;
