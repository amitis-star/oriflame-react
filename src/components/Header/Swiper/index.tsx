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

const SwiperImage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-68 flex items-center text-center"
      >
        <SwiperSlide className="relative">
          <img src={FlowerSwiper} alt="flower" />
          <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
            <div className="h-39">
              <p className="text-12 font-500 text-gray-700">
                Children on the Edge
              </p>
              <h3 className="text-50 w-63 h-37 mb-4 text-gray-700 font-500">
                50p donation for every Tender Care sold
              </h3>
              <button
                type="button"
                className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
              >
                Discover now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={NovageSwiper} alt="flower" />
          <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
            <div className="h-39">
              <p className="text-12 font-500 text-gray-700">
                OFFER ENDS 16.04{" "}
              </p>
              <h3 className="text-50 w-63 h-29 mb-4 text-gray-700 font-500">
                Up to 50% OFF selected skincare
              </h3>
              <button
                type="button"
                className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
              >
                Shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={OptSwiper} alt="flower" />
          <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
            <div className="h-39">
              <p className="text-12 font-500 text-gray-700">
                NEW! EXPERIENCE OPTIMALS HYDRA
              </p>
              <h3 className="text-50 w-63 h-29 mb-4 text-gray-700 font-500 ">
                1-2-3 to amazing skin!
              </h3>
              <button
                type="button"
                className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
              >
                Shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperImage;
