"use client";

import AvailableNow from "@/components/AvailableNow/AvailableNow";

import BestSellers from "@/components/BestSellers/BestSellers";

import ChosenCategory from "@/components/ChosenCategory/ChosenCategory";

import DailyDiscount from "@/components/DailyDiscount/DailyDiscount";

import Header from "@/components/Header/Header";

import SwiperFile from "@/components/Swiper/SwiperFile";

import MehboobBrands from "@/components/MehboobBrands/MehboobBrands";

import LatestArticles from "@/components/LatestArticles/LatestArticles";

import Footer from "@/components/Footer/Footer";

import WhyDastresi from "@/components/WhyDastresi/WhyDastresi";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <SwiperFile />
      <DailyDiscount />
      <ChosenCategory />
      <AvailableNow />
      <WhyDastresi />
      <BestSellers />
      <MehboobBrands />
      <LatestArticles />
      <Footer />
    </div>
  );
}
