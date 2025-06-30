import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import HamburgerMenu from "./HamburgerMenu";
import OriflameLogo from "../../assets/icons/OriflameLogo";
import Search from "../../assets/icons/Search";
import Store from "../../assets/icons/Store";
import ShoppingBag from "../elements/ShoppingBag";
import BlackStore from "../../assets/icons/BlackStore";
import MegaMenu from "./MegaMenu";

interface HeaderProps {
  isShoppingBagOpen: boolean;
  setShoppingBagOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleJoinUs: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isShoppingBagOpen,
  setShoppingBagOpen,
  onToggleJoinUs,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const handleInput = () => {
    if (!inputRef.current) return;

    const hasText = inputRef.current.value !== "";
    setIsTyping(hasText);

    const xIcon = document.getElementById("clear-btn");
    if (xIcon) {
      hasText
        ? xIcon.classList.remove("hidden")
        : xIcon.classList.add("hidden");
    }
  };

  return (
    <div className="container-fluid m-00 p-00 sticky top-00 z-[1200] bg-white">
      {isTyping && (
        <div
          className={`fixed w-full h-full backdrop-blur-[2px] bg-black/40 z-40 box-border pointer-events-none transition-opacity duration-[5000ms] delay-[2000ms] ${
            isTyping ? "opacity-70" : "opacity-0"
          }`}
        />
      )}
      {/* <div className="h-9 bg-blue-100 flex items-center justify-center">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full flex items-center justify-center text-center"
        >
          <SwiperSlide>
            <p className="text-14 text-gray-700 leading-9 font-700">
              You've been invited! Join now to enjoy the perks.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-14 text-gray-700 leading-9 font-700">
              Shop Icons: Our most loved products
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-14 text-gray-700 leading-9 font-700">
              Get a personalised routine – Scan your skin!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-14 text-gray-700 leading-9 font-700">
              Discover our Best Offers!
            </p>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="container-fluid px-7.5">
        <div className="relative h-16 flex items-center">
          {/* Left Part */}
          <div className="w-1/6 lg:w-[18%] h-11 flex items-center gap-6">
            <HamburgerMenu isOpen={isOpen} onToggle={setIsOpen} />
            <OriflameLogo />
          </div>

          {/* Right Part */}
          <div className="w-5/6 lg:w-[82%] h-11 flex justify-between text-[16px] lg:text-[14px]">
            {/* Search Input */}
            <div className="relative z-50 h-full w-4/5 mx-2 xl:mx-4">
              <div className="bg-gray-200 h-full rounded-full flex items-center px-4">
                <Search className="mr-2" />
                <input
                  type="text"
                  ref={inputRef}
                  onInput={handleInput}
                  placeholder="Search 60+ brands, 1000+ beauty and nutrition products"
                  className="bg-transparent py-0.5 w-full font-400 focus:outline-none focus:ring-0 border-none text-[14px] lg:text-[14px]"
                />
                <button
                  id="clear-btn"
                  onClick={handleClear}
                  className="hidden text-gray-600 hover:text-black text-20 mb-1"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="h-full w-1/5 flex justify-end gap-3 xl:gap-6 items-center">
              <div
                className="h-6 cursor-pointer hover:text-gray-500 text-14 xl:text-18 font-400"
                onClick={onToggleJoinUs}
              >
                join us
              </div>

              <Link to="/SignIn">
                <div className="h-6 cursor-pointer hover:text-gray-500 text-14 xl:text-18 font-400">
                  sign in
                </div>
              </Link>

              <div
                className="relative w-11 h-11 p-1.5 cursor-pointer"
                onMouseEnter={() => setShoppingBagOpen(true)}
                onMouseLeave={() => setShoppingBagOpen(false)}
              >
                {isShoppingBagOpen ? <BlackStore /> : <Store />}
                {isShoppingBagOpen && (
                  <div className="absolute left-full ml-4 z-[1100]">
                    <ShoppingBag />
                  </div>
                )}
              </div>

              {isOpen && <MegaMenu />}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-0.1 bg-gray-200" /> */}
    </div>
  );
};

export default Header;
