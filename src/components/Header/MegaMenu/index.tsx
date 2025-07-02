import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "../../../assets/styles/index.css";
import ECatalouge from "../../../assets/icons/ECatalogue";
import RightArrow from "../../../assets/icons/RightArrow";
import InspirationIcon from "../../../assets/icons/InspirationIcon";
import Heart from "../../../assets/icons/Heart";
import FoundationFinder from "../../../assets/images/Foundation Finder.webp";
import IngredientLibrary from "../../../assets/images/IngredientLibrary.webp";
import Icon from "../../../assets/images/Icons.webp";
import PickScentForYourMood from "../../../assets/images/Pick a scent for your mood.webp";

/* ─────────── MENU DATA ─────────── */
const menuItemsTop = [
  { key: "ecat", icon: <ECatalouge />, label: "e Catalogue" },
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

const inspirationCards = [
  { image: FoundationFinder, text: "FOUNDATION FINDER" },
  { image: IngredientLibrary, text: "INGREDIENT LIBRARY" },
  { image: Icon, text: "ICON" },
  { image: PickScentForYourMood, text: "PICK A SCENT FOR YOUR MOOD" },
];

const NutritionItems = [
  "Daily wellbeing",
  "Gut Health",
  "Weight management",
  "Beauty",
  "Health agening",
  "Immunity",
  "Kids",
  "Brands",
];

/* ─────────── COMPONENT ─────────── */
interface MegaMenuProps {
  show: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ show, onClose }) => {
  const [activePanel, setActivePanel] = useState<
    "none" | "inspiration" | "favorite" | "nutrition"
  >("none");

  const menuRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  /* ── Close on outside click / Esc ── */
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

  /* ── Sync scroll (right ⇒ left) ── */
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

  /* ── Ensure right panel is tall enough ── */
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

    balanceHeights(); // run once
    window.addEventListener("resize", balanceHeights);
    return () => window.removeEventListener("resize", balanceHeights);
  }, [activePanel]);

  if (!show) return null;

  /* ─────────── RENDER ─────────── */
  return (
    <div>
      <div
        ref={menuRef}
        className="flex absolute left-0 top-[100px] h-[660px] max-h-[990px] w-fit bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
      >
        {/* ───── LEFT PANEL ───── */}
        <div
          ref={leftPanelRef}
          className="w-[278px] flex-none bg-white py-2.5 overflow-y-auto h-full left-panel-scrollbar-hidden"
        >
          {/* top menu */}
          <div className="mb-2.5">
            {menuItemsTop.map(({ key, icon, label }) => (
              <div
                key={key}
                onClick={() =>
                  setActivePanel(
                    key === "inspiration"
                      ? "inspiration"
                      : key === "favorite"
                      ? "favorite"
                      : "none"
                  )
                }
                className="w-full h-13 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {icon}
                  <p className="text-20 font-600 text-gray-800">{label}</p>
                </div>
                <RightArrow />
              </div>
            ))}
          </div>

          {/* categories */}
          <div className="mb-2.5">
            {categoryItems.map(({ label, border, bg }, idx) => (
              <div
                key={idx}
                onClick={() =>
                  setActivePanel(label === "Nutrition" ? "nutrition" : "none")
                }
                className={`w-full h-12.5 flex justify-between items-center px-[15px] py-2.5 border-l-6 ${border} ${bg} mb-1 cursor-pointer`}
              >
                <p className="text-18 font-600 text-gray-800">{label}</p>
                <RightArrow />
              </div>
            ))}
          </div>

          {/* footer items */}
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

        {/* ───── RIGHT PANEL ───── */}
        <div
          ref={rightPanelRef}
          onScroll={() => {
            if (leftPanelRef.current && rightPanelRef.current) {
              leftPanelRef.current.scrollTop = rightPanelRef.current.scrollTop;
            }
          }}
          className="flex-none relative overflow-y-auto h-full w-fit"
        >
          {/*   PANEL CONTENTS   */}
          {activePanel === "none" && (
            <div className="px-6 py-4 flex flex-col gap-10 min-h-full h-[990px] w-full bg-white">
              {/* ...default panel... */}
              <div className="flex justify-center items-end mt-7.5 mx-7.5">
                <div className="w-31 h-[293px] flex flex-col justify-between">
                  <div className="relative group rounded-2xl overflow-hidden">
                    <img
                      alt="catalogue"
                      src={IngredientLibrary}
                      className="rounded-2xl w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brightness-75"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-gray-200 px-4 py-2 text-sm font-semibold transition-opacity duration-300 rounded-full hover:bg-gray-600">
                      VIEW
                    </button>
                  </div>
                  <p className="text-14 text-gray-600 font-300 text-center">
                    19/06‑09/07
                  </p>
                  <p className="text-17 text-gray-800 font-600 text-center">
                    CATALOGUE 09
                  </p>
                </div>
              </div>
              <div className="w-full h-67 flex flex-col items-center gap-5">
                <p className="text-17 w-50 font-600 text-gray-800 text-center">
                  See more e‑catalogues, magazines and brochures
                </p>
                <button className="w-50 h-11 text-14 border rounded-full border-black px-5 py-2.5 font-600">
                  SEE ALL CATALOGUES
                </button>
              </div>
            </div>
          )}

          {activePanel === "inspiration" && (
            <div className="min-h-full p-6 h-[990px] flex gap-10 whitespace-nowrap bg-white">
              {inspirationCards.map(({ image, text }, idx) => (
                <div
                  key={idx}
                  className="w-31 h-45 my-7.5 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative group rounded-md overflow-hidden">
                    <img
                      src={image}
                      alt={`inspiration-${idx}`}
                      className="w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brightness-75 rounded-2xl"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-gray-200 px-4 py-2 text-sm font-semibold rounded-full">
                      VIEW
                    </button>
                  </div>
                  <p className="text-center text-17 font-700 text-gray-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activePanel === "favorite" && (
            <div className="min-h-full p-6 h-[990px] bg-rose-50 w-[600px]">
              <h2 className="text-2xl font-bold mb-6 text-rose-700">
                Your Favorites
              </h2>
              <div className="grid grid-cols-3 gap-6">
                {/* favorite items */}
              </div>
            </div>
          )}

          {activePanel === "nutrition" && (
            <div className="min-h-full p-6 h-[885px] w-[900px] bg-white">
              <div className="p-7.5 flex items-center cursor-pointer">
                <p className="text-20 font-700 text-gray-700">All Nutrition</p>
                <RightArrow className="ml-2.5 text-gray-700 w-7.5 h-7.5" />
              </div>
              <div className="pt-2.5 px-7.5 pb-20 flex flex-wrap">
                {NutritionItems.map((item, idx) => {
                  const isLast = idx === NutritionItems.length - 1;
                  return (
                    <div key={idx}>
                      <p
                        className={`text-gray-700 font-600 cursor-pointer hover:text-gray-400 ${
                          isLast ? "pl-1 pb-5" : "pl-1 pr-7.5 pb-7.5"
                        }`}
                      >
                        {item}
                      </p>
                      {isLast && (
                        <p className="text-14 text-gray-500 font-500 -mt-1 pl-1">
                          Wellosophy
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* spacer to balance height */}
          <div ref={spacerRef} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
