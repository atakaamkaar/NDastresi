"use client";

import React from "react";

const SearchBar = () => {
  return (
    <div
      className="search relative flex-1 rounded-full overflow-hidden min-w-75 max-w-125"
      id="main-search"
    >
      <div className="bg-gray-200 flex items-center w-full justify-center pr-2 rounded-full shadow-2xl focus-within:outline-none focus-within:ring-0">
        <label htmlFor="search-decoy" className="flex items-center">
          <img
            src="/imgs/search-svgrepo-com.svg"
            className="w-10 h-10"
            alt="search"
          />
        </label>

        <input
          id="search-decoy"
          type="search"
          placeholder="جستجو محصولات"
          className="w-full bg-transparent py-2 text-gray-100 rounded-full outline-none ring-0 focus:ring-0"
        />
      </div>
    </div>
  );
};

export default SearchBar;
