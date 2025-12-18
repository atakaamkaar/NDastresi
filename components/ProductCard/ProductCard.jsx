import React from "react";

const ProductCard = ({ image, title, oldPrice, discount, newPrice, link }) => {
  return (
    <a href={link} className="group block h-full">
      <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 h-full">
        {/* Image */}
        <div className="w-28 shrink-0 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 text-right gap-2">
          <h3 className="text-sm font-medium text-gray-800 leading-6 line-clamp-2">
            {title}
          </h3>

          {/* Prices */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-400 line-through text-sm">
                {oldPrice?.toLocaleString()}
              </span>
              <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-xl text-xs font-medium">
                {discount?.toLocaleString()} تومان تخفیف
              </span>
            </div>

            <div className="flex items-center justify-end gap-1">
              <span className="text-green-600 font-bold text-lg">
                {newPrice?.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
