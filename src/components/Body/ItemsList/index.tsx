import React, { useRef, useState, useEffect } from "react";
import "../../../assets/styles/index.css";
import ItemListLeftArrow from "../../../assets/icons/ItemListLeftArrow";
import ItemListRightArrow from "../../../assets/icons/ItemListRightArrow";

const categories = [
  "ECATALOGUE",
  "NUTRITION",
  "SKIN CARE",
  "MAKE UP",
  "FRAGRANCE",
  "BATH & BODY",
  "HAIR",
  "ACCESSORIES",
  "MEN",
  "KIDS & BABY",
];

const SCROLL_AMOUNT = 150;

const ItemsList = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkForScrollPosition();
    const handleResize = () => checkForScrollPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -SCROLL_AMOUNT,
        behavior: "smooth",
      });
      setTimeout(checkForScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: SCROLL_AMOUNT,
        behavior: "smooth",
      });
      setTimeout(checkForScrollPosition, 300);
    }
  };

  const onScroll = () => checkForScrollPosition();

  return (
    <div className="w-full relative flex items-center justify-center">
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          type="button"
          aria-label="Scroll left"
          className="flex lg:hidden items-center justify-center p-2 mr-2 text-gray-600 hover:text-gray-900"
        >
          <ItemListLeftArrow />
        </button>
      )}
      <div
        ref={scrollContainerRef}
        onScroll={onScroll}
        className="flex gap-4 px-4 py-2 whitespace-nowrap overflow-x-auto scrollbar-hide lg:overflow-x-visible lg:justify-center lg:flex-nowrap w-full max-w-screen-lg"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="text-14 text-gray-800 font-500 whitespace-nowrap hover:text-gray-500"
          >
            {category}
          </button>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          type="button"
          aria-label="Scroll right"
          className="flex lg:hidden items-center justify-center p-2 ml-2 text-gray-600 hover:text-gray-900"
        >
          <ItemListRightArrow />
        </button>
      )}
    </div>
  );
};

export default ItemsList;
