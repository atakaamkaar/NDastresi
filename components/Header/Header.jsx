"use client";

import React from "react";
import SearchBar from "./SearchBar";

// megamenu items
const megaMenuItems = [
  { id: 1, title: "خانه", links: [] },
  {
    id: 2,
    title: "لوازم جانبی موبایل و کامپیوتر",
    links: [
      "ماوس و کیبورد و پدموس",
      "اسپیکر",
      "تجهیزات ذخیره سازی",
      "هولدر و نگهدارنده",
      "کابل شارژ",
      "آداپتور و شارژر",
      "هندزفری و هدست، میکروفون",
      "پاوربانک و جامپ استارتر",
      "دسته بازی و خنک کننده موبایل",
      "انواع تبدیل برق",
      "کابل و دانگل انتقال تصویر",
      "انواع هاب",
      "فن خنک کننده کامپیوتر",
    ],
  },
  {
    id: 3,
    title: "کابل - مبدل - رابط",
    links: [
      "کابل HDMI",
      "کابل پرینتر",
      "کابل هارد اکسترنال",
      "انواع رابط و تبدیل",
      "کابل AUX",
      "کابل 2 به 1 صدا",
      "کابل اپتیکال",
      "کابل و فیش OTG",
    ],
  },
  {
    id: 4,
    title: "لوازم تولید محتوا",
    links: ["میکروفون", "رینگ لایت و پایه"],
  },
  {
    id: 5,
    title: "لوازم شبکه",
    links: ["مودم - روتر", "هاب شبکه", "مودم همراه", "لوازم جانبی"],
  },
  {
    id: 6,
    title: "کنسول بازی و لوازم جانبی",
    links: [
      "کیف",
      "کنسول",
      "موس و کیبورد",
      "دسته بازی",
      "هندزفری و هدست",
      "شارژر دسته بازی",
    ],
  },
  {
    id: 7,
    title: "لوازم خانگی و شخصی",
    links: [
      "انواع گجت های جذاب",
      "باتری و شارژر",
      "اندروید باکس و گیرنده دیجیتال",
      "آنتن رومیزی",
      "مچ بند و ساعت هوشمند",
      "محصولات کمبو",
      "رابط برق و USB",
      "اف ام پلیر",
    ],
  },
  {
    id: 8,
    title: "برند‌ها",
    links: [
      "Haylou",
      "Die Hard",
      "SkullCandy",
      "Apple",
      "Camelion",
      "Koluman Plus",
      "yesido",
      "Naztech",
    ],
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  return (
    <div dir="rtl" className="w-full flex flex-col bg-white">
      {/* ================= TOP HEADER ================= */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/imgs/logo.png" alt="Dastresi" className="h-10" />
          </a>

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <SearchBar />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-600">
            <a href="/customer-club" className="hover:text-blue-500">
              باشگاه مشتریان
            </a>
            <a href="/blog" className="hover:text-blue-500">
              بلاگ
            </a>
            <a href="/contact" className="hover:text-blue-500">
              ارتباط ما
            </a>
            <a href="/about" className="hover:text-blue-500">
              درباره ما
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-green-900"
            >
              ورود و ثبت‌نام
            </a>
          </div>
        </div>
      </header>

      {/* ================= MEGA MENU ================= */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex gap-6 px-4 text-gray-600">
          {megaMenuItems.map((item) => (
            <div
              key={item.id}
              className="relative py-3 cursor-pointer"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="font-bold hover:text-orange-400">
                {item.title}
              </span>

              {activeDropdown === item.id && item.links.length > 0 && (
                <div className="absolute right-0 top-full bg-white shadow-lg w-64 p-4 z-50">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block py-2 hover:text-blue-500"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
