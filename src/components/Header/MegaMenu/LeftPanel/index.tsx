import React, { forwardRef } from "react";
import { PanelType } from "../types";
import ECatalogue from "../../../../assets/icons/ECatalogue";
import InspirationIcon from "../../../../assets/icons/InspirationIcon";
import Heart from "../../../../assets/icons/Heart";
import MenuItem from "./MenuItem";
import CategoryItem from "./CategoryItem";

/* ------------------------------------------------------------------
 *  Data
 * ---------------------------------------------------------------- */
const menuItemsTop = [
  { key: "ecat", icon: <ECatalogue />, label: "e Catalogue" },
  { key: "inspiration", icon: <InspirationIcon />, label: "Inspiration" },
  { key: "favorite", icon: <Heart />, label: "Favorite" },
];

const categoryItems = [
  {
    label: "Nutrition",
    border: "border-violet-600",
    bg: "hover:bg-violet-100",
  },
  { label: "Skincare", border: "border-teal-300", bg: "hover:bg-teal-100" },
  { label: "Make up", border: "border-rose-400", bg: "hover:bg-rose-100" },
  { label: "Fragrance", border: "border-stone-400", bg: "hover:bg-stone-100" },
  { label: "Bath & Body", border: "border-blue-500", bg: "hover:bg-blue-100" },
  { label: "Hair", border: "border-amber-200", bg: "hover:bg-amber-100" },
  { label: "Accessories", border: "border-red-400", bg: "hover:bg-red-100" },
  { label: "Men", border: "border-cyan-700", bg: "hover:bg-cyan-100" },
  { label: "Kids & Baby", border: "border-sky-300", bg: "hover:bg-sky-100" },
];

const footerItems = [
  "New",
  "Icons",
  "Best Seller",
  "Sample Shop",
  "Outlet",
  "Beauty Rewards Programme",
];

/* ------------------------------------------------------------------
 *  Component
 * ---------------------------------------------------------------- */
interface Props {
  activePanel: PanelType;
  setActivePanel: (p: PanelType) => void;
}

const LeftPanel = forwardRef<HTMLDivElement, Props>(
  ({ activePanel, setActivePanel }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[278px] flex-none bg-white py-2.5 overflow-y-auto h-full left-panel-scrollbar-hidden"
      >
        {/* Top menu ‑‑ icons */}
        <div className="mb-2.5">
          {menuItemsTop.map(({ key, icon, label }) => (
            <MenuItem
              key={key}
              icon={icon}
              label={label}
              onClick={() =>
                setActivePanel(
                  key === "inspiration"
                    ? "inspiration"
                    : key === "favorite"
                    ? "favorite"
                    : "none"
                )
              }
              isActive={
                (key === "inspiration" && activePanel === "inspiration") ||
                (key === "favorite" && activePanel === "favorite")
              }
            />
          ))}
        </div>

        {/* Categories */}
        <div className="mb-2.5">
          {categoryItems.map(({ label, border, bg }, idx) => (
            <CategoryItem
              key={idx}
              label={label}
              border={border}
              bg={bg}
              onClick={() =>
                setActivePanel(label === "Nutrition" ? "nutrition" : "none")
              }
              isActive={label === "Nutrition" && activePanel === "nutrition"}
            />
          ))}
        </div>

        {/* Footer links */}
        <div className="mb-6">
          {footerItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-12.5 px-[15px] py-2.5 text-16 font-400 text-gray-600 cursor-pointer hover:bg-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

LeftPanel.displayName = "LeftPanel";
export default LeftPanel;
