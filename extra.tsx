// import React, {
//   useState,
//   useRef,
//   useEffect,
//   useLayoutEffect,
//   use,
// } from "react";
// import "../../../assets/styles/index.css";
// import ECatalouge from "./src/assets/icons/ECatalogue";
// import RightArrow from "./src//assets/icons/RightArrow";
// import InspirationIcon from "./src//assets/icons/InspirationIcon";
// import Heart from "./src//assets/icons/Heart";
// import FoundationFinder from "../../../assets/images/Foundation Finder.webp";
// import IngredientLibrary from "../../../assets/images/IngredientLibrary.webp";
// import Icon from "../../../assets/images/Icons.webp";
// import PickScentForYourMood from "../../../assets/images/Pick a scent for your mood.webp";

// const menuItemsTop = [
//   { key: "ecat", icon: <ECatalouge />, label: "e catalogue" },
//   { key: "inspiration", icon: <InspirationIcon />, label: "Inspiration" },
//   { key: "favorite", icon: <Heart />, label: "Favorite" },
// ];

// const categoryItems = [
//   {
//     label: "Nutrition",
//     border: "border-violet-600",
//     bg: "hover:bg-violet-100",
//   },
//   { label: "Skincare", border: "border-teal-300", bg: "hover:bg-teal-100" },
//   { label: "Make up", border: "border-rose-400", bg: "hover:bg-rose-100" },
//   { label: "Fragnance", border: "border-stone-400", bg: "hover:bg-stone-100" },
//   { labe: "Bath & Body", border: "border-blue-500", bg: "hover:blue-100" },
//   { label: "Hair", border: "border-amber-200", bg: "hover:bg-amber-100" },
//   { label: "Accessories", border: "border-red-400", bg: "hober-bg-red-100" },
//   { label: "Men", border: "border-cyan-700", bg: "hover:bg-cyan-100" },
//   { label: "Kids & Baby", border: "border-sky-300", bg: "hover:bg-sky-100" },
// ];

// const footerItems = [
//   "New",
//   "Icons",
//   "Best Seller",
//   "Sample Shop",
//   "Outlet",
//   "Beauty Rewards Programme",
// ];

// const inspirationCards = [
//   { image: FoundationFinder, text: "FOUNDATION FINDER" },
//   { image: IngredientLibrary, text: "INGREDIENT LIBRARY" },
//   { image: Icon, text: "ICON" },
//   { image: PickScentForYourMood, text: "PICK A SCENT FOR YOUR MOOD" },
// ];

// const NutritionITems = [
//   "Daily wellbeing",
//   "Gut Health",
//   "Weight management",
//   "Beauty",
//   "HEalth agening",
//   "Immunity",
//   "Kids",
//   "Brands",
// ];

// interface MegaMenuProps {
//   show: boolean;
//   onClose: () => void;
// }

// const MegaMenu: React.FC<MegaMenuProps> = ({ show, onClose }) => {
//   const [activePanel, setActivePanel] = useState<
//     "none" | "inspiration" | "favorite" | "nutrition"
//   >("none");

//   const menuRef = useRef<HTMLDivElement>(null);
//   const leftPanelRef = useRef<HTMLDivElement>(null);
//   const rightPanelRef = useRef<HTMLDivElement>(null);
//   const spaceRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!show) return;
//     const handleOutside = (e: MouseEvent) =>
//       menuRef.current &&
//       !menuRef.current.contains(e.target as Node) &&
//       onClose();
//     const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();

//     document.addEventListener("mousedown", handleOutside);
//     document.addEventListener("keyup", handleEsc);
//     return () => {
//       document.removeEventListener("mousedown", handleOutside);
//       document.removeEventListener("keyup", handleEsc);
//     };
//   }, [show, onClose]);

//   useEffect(() => {
//     const right = rightPanelRef.current;
//     const left = leftPanelRef.current;
//     if (!right || !left) return;

//     const onScroll = () => {
//       left.scrollTop = right.scrollTop;
//     };
//     right.addEventListener("scroll", onScroll);
//   }, []);

//   useLayoutEffect(() => {
//     const left = leftPanelRef.current;
//     const right = rightPanelRef.current;
//     if (!left || !right || !spaceRef.current) return;

//     const balanceHeights = () => {
//       const gap = left.scrollHeight - right.scrollHeight;
//       spaceRef.current?.style.setProperty(
//         "height",
//         gap > 0 ? `${gap}px` : "0px"
//       );
//     };

//     balanceHeights();
//     window.addEventListener("resize", balanceHeights);
//     return () => window.removeEventListener("resize", balanceHeights);
//   }, [activePanel]);

//   if (!show || typeof window === "undefined") return null;

//   const overlay: ReactNode = (
//     <div className="fixed inset-00 z-[1100]">
//       <div className="absolute inset-00 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
//         <div
//           ref={menuRef}
//           className="absolute left-00 top-[100px] h-[660px] max-h-[990px] w-fit bg-whiteshadow-[0_4px_12px_rgb(0,0,0,0.2)] flex "
//         >
//           <div
//             ref={leftPanelRef}
//             className="w-[278px] flex-none bg-white py-2.5 overflow-y-auto h-full left-panel-scrollbar-hidden"
//           >
//             <div className="mb-2.5">
//               {menuItemsTop.map(({ key, icon, label }) => (
//                 <div
//                   key={key}
//                   onClick={() =>
//                     setActivePanel(
//                       key === " inspiration"
//                         ? "inspiration"
//                         : key === " favorite"
//                         ? "favorite"
//                         : "none"
//                     )
//                   }
//                   className="w-full h-13 hover:bg-blue-100 flex justify-between items-center px-[15px] py-2.5 cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     {icon}
//                     <p className="text-20 font-600 text-gray-800">{label}</p>
//                   </div>
//                   <RightArrow />
//                 </div>
//               ))}
//               <div className="mb-2.5">
//                 {categoryItems.map(({ label, border, bg }, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() =>
//                       setActivePanel(
//                         label === "Nutrition" ? "nutrition" : "none"
//                       )
//                     }
//                     className={`w-full h-12.5 flex justify-between items-center px-[15px] py-2.5 border-1-6 ${border} ${bg} mb-1 cursor-pointer`}
//                   >
//                     <p className="text-18 font-600 text-gray-800">{label}</p>
//                     <RightArrow />
//                   </div>
//                 ))}
//               </div>
//               <div className="mb-2.5">
//                 {categoryItems.map(({ label, border, bg }, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() =>
//                       setActivePanel(
//                         label === "Nutrition" ? "nutrition" : "none"
//                       )
//                     }
//                     className={`w-full h-12.5 flex justify-between items-center px-[15px] py-2.5 border-l-6 ${border} ${bg} mb-1 cursor-pointer`}
//                   >
//                     <p className="text-18 font-600 text-gray-800">{label}</p>
//                     <RightArrow />
//                   </div>
//                 ))}
//               </div>
//               <div className="mb-6">
//                 {footerItems.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="w-full h-12.5 px-[15px] py-2.5 text-16 font-400 text-gray-600 cursor-pointer hover:bg-gray-200"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div
//               ref={rightPanelRef}
//               className="flex-none relative overflow-y-auto h-full w-fit lg:w-auto"
//             >
//               {activePanel === "none" && (
//                 <div className="px-6 py-4 flex flex-col gap-10 min-h-full h-[990px] w-full bg-white">
//                   <div className="flex justify-center items-end mt-7.5 mx-7.5">
//                     <div className="w-31 h-[293px] flex flex-col justify-between">
//                       <div className="relative group rounded-2xl overflow-hiden">
//                         <img
//                           alt="catalouge"
//                           src={IngredientLibrary}
//                           className="rounded-2xl w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brighness-75"
//                         />
//                         <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-gray-200 px-4 py-2 text-14 font-600 transition-opacity duration-300 rounded-full hover:bg-gray-600">
//                           VIEW
//                         </button>
//                       </div>
//                       <p className="text-14 text-gray-600 font-300 text-center">
//                         19/06-09/07
//                       </p>
//                       <p className="tetx-17 text-gray-800 font-600 text-center">
//                         CATALOGUE 09
//                       </p>
//                     </div>
//                   </div>
//                   <div className="w-full h-67 flex flex-col items-center gap-5 ">
//                     <p className="text-17 w-50 font-600 text-gray-800 text-center">
//                       See more e‑catalogues, magazines and brochures
//                     </p>
//                     <button className="w-50 h-11 text-14 border-full border-black px-5 py-2.5 font-600">
//                       SEE ALL CATEGORIES
//                     </button>
//                   </div>
//                 </div>
//               )}
//               {activePanel === "inspiration" && (
//                 <div className="min-h-full p-6 h-[990px] flex gap-10 whitespace-nowrap bg-white">
//                   {inspirationCards.map(({ image, text }, idx) => (
//                     <div
//                       key={idx}
//                       className="w-31 h-45 my-7.5 flex flex-col justify-between cursor-pointer"
//                     >
//                       <div className="relative group rounded-md overflow-hidden">
//                         <img
//                           src={image}
//                           alt={`inspiration-${idx}`}
//                           className="w-full h-[225px] object-cover transition-all duration-300 group-hover:bg-black group-hover:brightness-75 rounded-2xl"
//                         />
//                         <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg=black text-gray-200 px-4 py-2 text-14 font 600 rounded-full hover:bg-gray-600">
//                           VIEW
//                         </button>
//                       </div>
//                       <p className="text-center text-17 font-700 text-gray-700">{text}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {activePanel === "favorite" && (
//                 <div className="main-h-full p-6 h-[990px] bg-rose-50 w-[600px]">
//                     <h2 className="">Your Favorites</h2>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MegaMenu;
