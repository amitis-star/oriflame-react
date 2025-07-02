import React from "react";
import "../../../assets/styles/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import FlowerSwiper from "../../../assets/images/flower-cream-swiper.webp";
import NovageSwiper from "../../../assets/images/novage-swiper.webp";
import OptSwiper from "../../../assets/images/opt-swiper.webp";

const slideData = [
  {
    image: FlowerSwiper,
    subtitle: "Children on the Edge",
    title: "50p donation for every Tender Care sold",
    buttonText: "Discover now",
  },
  {
    image: NovageSwiper,
    subtitle: "OFFER ENDS 16.04",
    title: "Up to 50% OFF selected skincare",
    buttonText: "Shop now",
  },
  {
    image: OptSwiper,
    subtitle: "NEW! EXPERIENCE OPTIMALS HYDRA",
    title: "1-2-3 to amazing skin!",
    buttonText: "Shop now",
  },
];

const SwiperImage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-00 flex items-center justify-end px-4 md:px-16 lg:px-24">
              <div className="p-4 md:p-6 lg:p-8 max-w-md text-right">
                <p className="text-xs md:text-sm text-gray-600 tracking-wide uppercase mb-2 font-medium lg:text-20">
                  {slide.subtitle}
                </p>
                <h3 className="text-lg md:text-3xl font-semibold text-gray-800 leading-tight mb-4 lg:text-30">
                  {slide.title}
                </h3>
                <button
                  type="button"
                  className="inline-block px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImage;
