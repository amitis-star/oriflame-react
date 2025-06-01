import React, { useState } from "react";
import Header from "./Header";
import SwiperImage from "./Header/Swiper";
import Body from "./Body";
import Footer from "./Footer";
import ChatWithUs from "./elements/ChatWithUs";
import JoinUs from "./elements/JoinUs";

const Home = () => {
  const [isShoppingBagOpen, setShoppingBagOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);

  const toggleJoinUS = () => {
    setIsJoinUsOpen((prev) => !prev);
  };

  const closeJoinUs = () => {
    setIsJoinUsOpen(false);
  };

  return (
    <>
      {/* <Header
        isShoppingBagOpen={isShoppingBagOpen}
        setShoppingBagOpen={setShoppingBagOpen}
        onToggleJoinUs={toggleJoinUS}
      /> */}
      {/* <JoinUs show={isJoinUsOpen} onClose={closeJoinUs} /> */}

      <div
        className={`transition-filter duration-300 ${
          isShoppingBagOpen || isJoinUsOpen
            ? "filter blur-xl pointer-events-none"
            : ""
        }`}
      >
        {/* <SwiperImage /> */}
        <Body />
        {/* <Footer /> */}
        {/* <ChatWithUs /> */}
      </div>
    </>
  );
};

export default Home;
