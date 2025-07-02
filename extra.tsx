// import React, { useEffect, useRef } from "react";
// import "./src/assets/styles/index.css";

// interface JoinUsProps {
//   show: boolean;
//   onClose: () => void;
// }

// const JoinUs: React.FC<JoinUsProps> = ({ show, onClose }) => {
//   const modalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!show) return;
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node)
//       ) {
//         onClose();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [show, onClose]);

//   if (!show) return null;

//   const JoinUsItems=[
//     {
        
//     }
//   ]

//   return (
//     <div
//       ref={modalRef}
//       className="h-[375px] absolute top-[100px] left-00 right-00 bg-white z-[1000] shadow-[0_4px_8px_0_rgb(0,0,0,0.2)]"
//     >
//       <div className="h-full">
//         <div className="flex justify-center items-center gap-2">
//           <div className="relative w-[680px] h-[325px] cursor-pointer group overflow-hidden">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;
