import React, { useState, useRef, useEffect, useLayoutEffect, use } from "react";
import "../../../assets/styles/index.css";
import ECatalouge from "./src/assets/icons/ECatalogue";
import RightArrow from "./src//assets/icons/RightArrow";
import InspirationIcon from "./src//assets/icons/InspirationIcon";
import Heart from "./src//assets/icons/Heart";
import FoundationFinder from "../../../assets/images/Foundation Finder.webp";
import IngredientLibrary from "../../../assets/images/IngredientLibrary.webp";
import Icon from "../../../assets/images/Icons.webp";
import PickScentForYourMood from "../../../assets/images/Pick a scent for your mood.webp";

const menuItemsTop = [
  { key: "ecat", icon: <ECatalouge />, label: "e catalogue" },
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
  { label: "Fragnance", border: "border-stone-400", bg: "hover:bg-stone-100" },
  { labe: "Bath & Body", border: "border-blue-500", bg: "hover:blue-100" },
  { label: "Hair", border: "border-amber-200", bg: "hover:bg-amber-100" },
  { label: "Accessories", border: "border-red-400", bg: "hober-bg-red-100" },
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

const NutritionITems = [
  "Daily wellbeing",
  "Gut Health",
  "Weight management",
  "Beauty",
  "HEalth agening",
  "Immunity",
  "Kids",
  "Brands",
];

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
  const spaceRef = useRef<HTMLDivElement>(null);

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

  useEffect(())



  return <div></div>;
};
export default MegaMenu;
