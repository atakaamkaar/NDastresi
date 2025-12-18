"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const brands = [
  {
    id: 1,
    name: "انکر",
    image: "/imgs/logo1anker.jpg",
    link: "/brands/anker",
  },
  {
    id: 2,
    name: "آینوبن",
    image: "/imgs/logo2inoben.jpg",
    link: "/brands/inoben",
  },
  {
    id: 3,
    name: "راوپاور",
    image: "/imgs/logo3ravpower.jpg",
    link: "/brands/ravpower",
  },
  {
    id: 4,
    name: "مک دودو",
    image: "/imgs/logo4mcdodo.jpg",
    link: "/brands/mcdodo",
  },
  {
    id: 5,
    name: "کملیون",
    image: "/imgs/logo5calemion.jpg",
    link: "/products?brands[0]=21",
  },
  {
    id: 6,
    name: "پاورولوژی",
    image: "/imgs/logo6powerology.jpg",
    link: "/brands/powerology",
  },
  {
    id: 7,
    name: "ایس فست",
    image: "/imgs/logo7acefast.jpg",
    link: "/brands/AceFast",
  },
];

const PopularBrands = () => {
  return (
    <section className="max-w-7xl mx-auto mb-4 px-4">
      {/* Header */}
      <div className="flex flex-row items-center relative mb-3">
        <div className="flex flex-1 justify-end">
          <span className="text-2xl font-bold text-gray-800">
            محبوب ترین برندها
          </span>
        </div>
      </div>

      {/* Swiper */}
      <div className="flex items-center justify-center rounded-xl mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            426: { slidesPerView: 6 },
            769: { slidesPerView: 6 },
            1280: { slidesPerView: 6 },
          }}
          modules={[Navigation, Autoplay]}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <a
                href={brand.link}
                className="flex flex-col items-center p-2 justify-center rounded-xl shadow-md bg-white my-4 hover:shadow-lg transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-24 object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularBrands;
