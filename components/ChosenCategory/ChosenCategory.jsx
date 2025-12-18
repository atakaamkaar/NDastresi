"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const categories = [
  {
    image: "/imgs/cable.png",
    alt: "کابل شارژ",
    link: "/products/Charging-Cable",
  },
  {
    image: "/imgs/adaptor.png",
    alt: "آداپتور و شارژر",
    link: "/products/Charger",
  },
  {
    image: "/imgs/powerbank.png",
    alt: "پاوربانک و جامپ استارتر",
    link: "/products/PowerBank",
  },
  {
    image: "/imgs/handsfree.png",
    alt: "هندزفری و هدست، میکروفون",
    link: "/products/headset",
  },
  {
    image: "/imgs/holder.png",
    alt: "هولدر و نگهدارنده",
    link: "/products/holders",
  },
  {
    image: "/imgs/mobadel.png",
    alt: "کابل - مبدل - رابط",
    link: "/products/132",
  },
  {
    image: "/imgs/battery.png",
    alt: "باتری و شارژر",
    link: "/products/battery",
  },
  {
    image: "/imgs/gaming.png",
    alt: "کنسول بازی و لوازم جانبی",
    link: "/products/177",
  },
];

const ChosenCategory = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 mb-8 xl:rounded-xl">
      <h3 className="text-2xl text-center font-bold text-black-87 mb-4">
        دسته‌بندی‌های منتخب
      </h3>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 25 },
        }}
        modules={[Navigation, Autoplay]}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <a href={cat.link} className="flex justify-center">
              <div className="flex flex-col rounded-xl bg-white p-2 shadow hover:shadow-lg transition-shadow">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-50 h-auto mx-auto shrink-0"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ChosenCategory;
