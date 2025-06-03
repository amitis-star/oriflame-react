import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import One from "../../../../assets/images/one.jpg";
import Two from "../../../../assets/images/two.jpg";
import Three from "../../../../assets/images/three.jpg";
import Four from "../../../../assets/images/four.jpg";
import Five from "../../../../assets/images/five.jpg";
import Six from "../../../../assets/images/six.jpg";
import Eleven from "../../../../assets/images/one.jpg";
import Twelve from "../../../../assets/images/one.jpg";
import Prev from "../../../../assets/icons/BtnPrev";
import Next from "../../../../assets/icons/BtnNext";

import "swiper/css";
import "swiper/css/navigation";

type LayoutType = "center" | "column-center" | "start" | "end";

const slidesData: {
  id: number;
  images: { src: string; objectPosition: string }[];
  layout: LayoutType;
}[] = [
  { id: 1, images: [{ src: One, objectPosition: "top" }], layout: "center" },
  {
    id: 2,
    images: [
      { src: Two, objectPosition: "top" },
      { src: Three, objectPosition: "center" },
    ],
    layout: "column-center",
  },
  { id: 3, images: [{ src: Four, objectPosition: "top" }], layout: "start" },
  { id: 4, images: [{ src: Five, objectPosition: "center" }], layout: "end" },
  { id: 5, images: [{ src: Six, objectPosition: "top" }], layout: "center" },
  {
    id: 6,
    images: [
      { src: Eleven, objectPosition: "top" },
      { src: Twelve, objectPosition: "center" },
    ],
    layout: "column-center",
  },
];

const layoutClasses: Record<LayoutType, string> = {
  center: "flex items-center justify-center",
  "column-center": "flex flex-col items-center justify-center gap-7.5",
  start: "flex items-start justify-center pt-10",
  end: "flex items-end justify-center pb-10",
};

const SwiperOriflameOnMe = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, windowWidth]);

  const flattenedSlides = slidesData.flatMap(({ id, images, layout }) =>
    images.map((img, idx) => ({
      id: `${id}-${idx}`,
      src: img.src,
      objectPosition: img.objectPosition,
      layout,
    }))
  );

  return (
    <div className="mt-10 mb-10  w-full relative">
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        className="mySwiper"
        slidesPerView={windowWidth < 1024 ? "auto" : 3}
        spaceBetween={windowWidth < 1024 ? 10 : 20}
        centeredSlides={windowWidth < 1024} 
        style={{ padding: 0 }} 
      >
        {windowWidth < 1024
          ? flattenedSlides.map(({ id, src, objectPosition, layout }) => (
              <SwiperSlide
                key={id}
                style={{
                  width: 280,
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className={`cursor-pointer`}
                  style={{ width: 280, height: "100%" }}
                >
                  <div className="w-full h-41 overflow-hidden relative group">
                    <img
                      src={src}
                      alt="oriflame"
                      className={`w-full h-full object-cover object-${objectPosition}`}
                    />
                    <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                      <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                        @Oriflame
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : slidesData.map(({ id, images, layout }) => (
              <SwiperSlide key={id}>
                <div
                  className={`w-41 cursor-pointer ${layoutClasses[layout]}`}
                >
                  {images.map(({ src, objectPosition }, idx) => (
                    <div
                      key={idx}
                      className="w-41 h-41 overflow-hidden relative group"
                    >
                      <img
                        src={src}
                        alt="oriflame"
                        className={`w-full h-full object-cover object-${objectPosition}`}
                      />
                      <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                        <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                          @Oriflame
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
        <button
          ref={prevRef}
          className="w-11 h-11 rounded-full absolute bottom-0 left-0 z-10 bg-white p-2.5 cursor-pointer"
        >
          <Prev />
        </button>
        <button
          ref={nextRef}
          className="w-11 h-11 rounded-full absolute bottom-0 right-5 z-10 bg-white p-2.5 cursor-pointer"
        >
          <Next />
        </button>
      </Swiper>
    </div>
  );
};

export default SwiperOriflameOnMe;
