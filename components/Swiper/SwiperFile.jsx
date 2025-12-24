"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperFile = () => {
  return (
    <div className="wrapper w-full max-w-303.5 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full aspect-3/1 h-auto mt-7.5"
      >
        <SwiperSlide>
          <a href="#">
            <img
              src="/imgs/swiper1.png"
              alt="Slide 1"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img
              src="/imgs/swiper2.png"
              alt="Slide 2"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img
              src="/imgs/swiper3.png"
              alt="Slide 3"
              className="w-full h-auto object-cover rounded-[30px]"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperFile;
