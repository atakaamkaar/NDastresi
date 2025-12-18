"use client";

import React from "react";

const Footer = () => {
  return (
    <footer dir="rtl" className="disable-select relative w-full">
      {/* Contact Bar */}
      <div className="bg-gray-300">
        <div className="portlet">
          <div className="portlet-content">
            <div className="flex flex-col lg:flex-row justify-between text-black-87 p-6 text-sm max-w-7xl mx-auto">
              <div className="flex items-center mb-4 lg:mb-0">
                <span className="flex gap-2 items-center text-gray">
                  <img
                    src="/imgs/call-phone-service-svgrepo-com.svg"
                    alt="phone"
                    className="w-4 h-4"
                  />
                  <span>021-33902646</span>
                </span>
              </div>

              <div className="flex items-center mb-4 lg:mb-0 leading-7">
                <span className="flex gap-2 items-center text-gray">
                  <img
                    src="/imgs/clock-square.svg"
                    alt="clock"
                    className="w-4 h-4"
                  />
                  <span>شنبه تا چهارشنبه 10 تا 18 — پنجشنبه‌ها 10 تا 16</span>
                </span>
              </div>

              <div className="flex items-center gap-2 leading-7 text-gray">
                <img
                  src="/imgs/location-svgrepo-com.svg"
                  alt="location"
                  className="w-5 h-5"
                />
                <span>
                  تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3
                </span>
              </div>

              <div className="hidden xl:flex bg-white text-xs text-gray rounded-xl p-2 cursor-pointer shadow-md">
                برو بالا
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black-04">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 py-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="/imgs/logo.png"
              alt="Dastresi Logo"
              style={{ maxWidth: "190px" }}
            />

            <div className="flex gap-3 items-center">
              <span className="text-sm">با ما در ارتباط باشید:</span>
              <a
                href="https://www.instagram.com/dastresii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/imgs/instagram-1-svgrepo-com.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-xl text-black-87 mb-4">
              فروشگاه اینترنتی دسترسی
            </h3>
            <p className="text-black-60 leading-7">
              فروشگاه دسترسی فعالیت خود را از سال 1389 آغاز کرد و امروز در زمینه
              لوازم جانبی موبایل، کامپیوتر، گجت‌های هوشمند و تجهیزات دیجیتال
              فعالیت می‌کند.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">دسترسی سریع</h3>
            <div className="flex flex-col gap-3 text-sm text-gray">
              <a href="/customer-club">باشگاه مشتریان</a>
              <a href="/faq">سوالات متداول</a>
              <a href="/blog">بلاگ</a>
              <a href="/terms">شرایط و قوانین</a>
              <a href="/contact">ارتباط ما</a>
              <a href="/about">درباره ما</a>
            </div>
          </div>

          {/* Enamad */}
          <div className="flex justify-center items-center">
            <img
              src="/imgs/e-namad.jpg"
              alt="E-Namad"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="font-medium text-sm text-center bg-blue-700 text-white py-3">
        تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
