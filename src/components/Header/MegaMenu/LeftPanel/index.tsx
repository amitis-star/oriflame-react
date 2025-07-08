import React, { forwardRef, useState } from "react";
import { PanelType } from "../types";
import ECatalogue from "../../../../assets/icons/ECatalogue";
import InspirationIcon from "../../../../assets/icons/InspirationIcon";
import Heart from "../../../../assets/icons/Heart";
import MenuItem from "./MenuItem";
import CategoryItem from "./CategoryItem";
import CatalogueLg from "./Catalogue-lg";
import DownArrow from "../../../../assets/icons/DownArrow";
import FavoritesList from "../../../elements/FavoritesContext/FavoritesList";

const menuItemsTop = [
  { key: "ecat", icon: <ECatalogue />, label: "e Catalogue" },
  { key: "inspiration", icon: <InspirationIcon />, label: "Inspiration" },
  { key: "favorite", icon: <Heart />, label: "Favorite" },
] as const;

type MenuItemTopKey = (typeof menuItemsTop)[number]["key"];

type Category = {
  label: string;
  border: string;
  bg: string;
};

const categoryItems: Category[] = [
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

const inspirationSubItems = [
  "Foundation Finder",
  "Ingredient Library",
  "Icon",
  "Pick a Scent for Your Mood",
];

const categorySubItems: Record<string, string[]> = {
  Nutrition: [
    "Daily wellbeing",
    "Gut Health",
    "Weight management",
    "Beauty",
    "Health agening",
    "Immunity",
    "Kids",
    "Brands",
  ],
  Skincare: [],
  "Make up": [],
  Fragrance: [],
  "Bath & Body": [],
  Hair: [],
  Accessories: [],
  Men: [],
  "Kids & Baby": [],
};

interface Props {
  activePanel: PanelType;
  setActivePanel: (p: PanelType) => void;
}

const LeftPanel = forwardRef<HTMLDivElement, Props>(
  ({ activePanel, setActivePanel }, ref) => {
    const [open, setOpen] = useState<Record<MenuItemTopKey, boolean>>({
      inspiration: false,
      favorite: false,
      ecat: false,
    });

    const initialCatState = Object.fromEntries(
      categoryItems.map(({ label }) => [label, false])
    ) as Record<string, boolean>;

    const [openCat, setOpenCat] =
      useState<Record<string, boolean>>(initialCatState);

    const toggle = (key: MenuItemTopKey) =>
      setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

    const toggleCat = (label: string) =>
      setOpenCat((prev) => ({ ...prev, [label]: !prev[label] }));

    return (
      <div
        ref={ref}
        className="w-[278px] flex-none bg-white py-2.5 overflow-y-auto left-panel-scrollbar-hidden min-h-screen border border-gray-200"
      >
        <div className="mb-2.5">
          {menuItemsTop.map(({ key, icon, label }) => {
            if (key === "ecat") {
              return (
                <React.Fragment key={key}>
                  <div className="block lg:hidden">
                    <CatalogueLg />
                  </div>
                  <div className="hidden lg:block">
                    <MenuItem
                      icon={icon}
                      label={label}
                      onClick={() => setActivePanel("none")}
                      isActive={false}
                    />
                  </div>
                </React.Fragment>
              );
            }

            const isActiveDesktop =
              (key === "inspiration" && activePanel === "inspiration") ||
              (key === "favorite" && activePanel === "favorite");

            return (
              <React.Fragment key={key}>
                <div className="block lg:hidden">
                  <button
                    type="button"
                    onClick={() => toggle(key as MenuItemTopKey)}
                    className="flex items-center justify-between w-full h-12.5 px-4 py-2 cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-16 font-700 text-gray-800">
                      {icon}
                      {label}
                    </span>
                    <DownArrow
                      className={`transition-transform transform ${
                        open[key] ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>

                  {open[key] && (
                    <div className="px-4 pb-2 flex flex-col gap-y-3 mt-3">
                      {key === "inspiration" &&
                        inspirationSubItems.map((item) => (
                          <div
                            key={item}
                            className="text-16 font-400 text-gray-600 cursor-pointer hover:text-green-600"
                          >
                            {item}
                          </div>
                        ))}
                      {key === "favorite" && (
                        <div className="text-14 font-400 text-gray-500 max-h-60 overflow-y-auto">
                          <FavoritesList compact />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="hidden lg:block">
                  <MenuItem
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
                    isActive={isActiveDesktop}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="mb-2.5">
          {categoryItems.map(({ label, border, bg }) => (
            <React.Fragment key={label}>
              <div className="block lg:hidden">
                <>
                  <button
                    type="button"
                    onClick={() => toggleCat(label)}
                    className={`flex items-center justify-between w-full h-12.5 px-4 py-2 text-18 font-600 text-gray-800 cursor-pointer ${bg} ${border} border-l-4`}
                  >
                    {label}
                    <DownArrow
                      className={`transition-transform transform ${
                        openCat[label] ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>

                  {openCat[label] && (
                    <div className="pl-8 pr-4 pb-2 flex flex-col gap-y-3 mt-3">
                      {categorySubItems[label]?.length ? (
                        categorySubItems[label].map((item) => (
                          <div
                            key={item}
                            className="text-16 font-400 text-gray-600 cursor-pointer hover:text-green-600"
                          >
                            {item}
                          </div>
                        ))
                      ) : (
                        <div className="text-14 font-400 text-gray-500 hover:text-green-600">
                          More coming soon
                        </div>
                      )}
                    </div>
                  )}
                </>
              </div>

              <div className="hidden lg:block">
                <CategoryItem
                  label={label}
                  border={border}
                  bg={bg}
                  onClick={() =>
                    setActivePanel(label === "Nutrition" ? "nutrition" : "none")
                  }
                  isActive={
                    label === "Nutrition" && activePanel === "nutrition"
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="mb-6">
          {footerItems.map((item) => (
            <div
              key={item}
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
