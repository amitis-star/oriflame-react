import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import MegaMenu from "./MegaMenu/index";
import Profile from "../../assets/icons/Profile";

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
  const navigate = useNavigate();
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
  const handleStoreClick = () => {
    if (window.innerWidth < 470) {
      navigate("/ShoppinBagMobile");
    } else {
      setShoppingBagOpen((prev) => !prev);
    }
  };

  return (
    <div className="container-fluid m-00 p-00 sticky top-00 lg:z-[130] z-[100] bg-white">
      {isTyping && (
        <div
          className={`fixed w-full h-full backdrop-blur-[2px] bg-black/40 z-40 box-border pointer-events-none transition-opacity duration-[5000ms] delay-[2000ms] ${
            isTyping ? "opacity-70" : "opacity-0"
          }`}
        />
      )}
      <div className="h-9 bg-blue-100 flex items-center justify-center">
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
      </div>

      <div className="container-fluid px-4">
        <div className="flex flex-wrap items-center h-auto lg:h-16">
          <div className="flex items-center gap-6 h-11 w-auto lg:w-[18%]">
            <HamburgerMenu
              isOpen={isOpen}
              onToggle={setIsOpen}
              className="w-6 h-6 lg:w-auto"
            />
            <OriflameLogo className="w-[90px] lg:w-auto" />
          </div>

          <div className="order-2 lg:order-3 ml-auto flex-shrink-0 flex items-center gap-3 xl:gap-6 h-11">
            <div
              className="hidden lg:block h-6 cursor-pointer hover:text-gray-500 text-14 xl:text-18 font-400"
              onClick={onToggleJoinUs}
            >
              join&nbsp;us
            </div>

            <Link to="/SignIn" className="flex items-center">
              <div className="block lg:hidden p-1.5">
                <Profile width={30} height={30} />
              </div>

              <div className="hidden lg:block h-6 cursor-pointer hover:text-gray-500 text-14 xl:text-18 font-400">
                sign&nbsp;in
              </div>
            </Link>

            <div className="relative">
              <div
                className="w-11 h-11 p-1.5 cursor-pointer select-none"
                onClick={handleStoreClick}
              >
                {isShoppingBagOpen ? <BlackStore /> : <Store />}
              </div>

              {isShoppingBagOpen && (
                <div className="hidden xx:block absolute left-full ml-4 z-[1100]">
                  <ShoppingBag onClose={() => setShoppingBagOpen(false)} />
                </div>
              )}
            </div>

            <MegaMenu show={isOpen} onClose={() => setIsOpen(false)} />
          </div>

          <div
            className="
              order-3 lg:order-2
              w-full lg:flex-1
              lg:min-w-0
              mt-2 lg:mt-0 h-11 mb-4 lg:mb-00
            "
          >
            <div className="relative z-50 h-full w-full lg:px-2">
              <div className="bg-gray-200 h-full rounded-full flex items-center px-4">
                <Search className="mr-2" />
                <input
                  type="text"
                  ref={inputRef}
                  onInput={handleInput}
                  placeholder="Search 60+ brands, 1000+ beauty and nutrition products"
                  className="bg-transparent py-0.5 w-full font-400 focus:outline-none focus:ring-0 border-none text-[14px]"
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
          </div>
        </div>
      </div>

      <div className="w-full h-0.1 bg-gray-200" />
    </div>
  );
};

export default Header;
