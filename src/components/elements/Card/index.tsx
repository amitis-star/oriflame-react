import React from "react";
import { useFavorites } from "../FavoritesContext/index";
import { useCart } from "../CartContext/index";

import Store from "../../../assets/icons/Store";
import Heart from "../../../assets/icons/Heart";
import Star from "../../../assets/icons/Star";
import BlackStore from "../../../assets/icons/BlackStore";
import PinkHeart from "../../../assets/icons/PinkHeart";

interface CardProps {
  id: number;
  image: string;
  alt: string;
  isNew?: boolean;
  stars?: number;
  category: string;
  title: string;
  price: number;
  originalPrice?: number;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  alt,
  isNew = false,
  stars = 0,
  category,
  title,
  price,
  originalPrice,
}) => {
  const totalStars = 5;

  const { isFavorite, toggleFavorite } = useFavorites();
  const { inCart, toggleCart } = useCart();

  const HeartIcon = isFavorite(id) ? PinkHeart : Heart;
  const StoreIcon = inCart(id) ? BlackStore : Store;

  return (
    <div className="w-[177px] md:w-[208px] h-full bg-gray-100">
      <div className="group overflow-hidden w-full aspect-square relative cursor-pointer">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {isNew && (
          <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
            New
          </span>
        )}
        <button
          aria-label="Add to cart"
          onClick={() => toggleCart(id)}
          className="absolute w-11 h-11 bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl bg-white"
        >
          <StoreIcon />
        </button>

        <button
          aria-label="Toggle favourite"
          onClick={() => toggleFavorite(id)}
          className="absolute w-11 h-11 bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl bg-white"
        >
          <HeartIcon />
        </button>
      </div>
      <div className="w-full h-5 py-0 px-2.5"></div>
      <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
        <div className="flex justify-end items-center">
          {Array.from({ length: totalStars }).map((_, idx) => (
            <Star key={idx} fill={idx < stars ? "black" : undefined} />
          ))}
        </div>
        <span className="text-12 text-gray-700">({stars})</span>
      </div>
      <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
        {category}
      </p>
      <div className="h-10 text-14 text-gray-900 font-400">{title}</div>
      <div className="h-5 flex items-center gap-4 mt-3">
        <p className="text-orange-600 font-500">£{price.toFixed(2)}</p>
        {originalPrice !== undefined && (
          <span className="line-through text-gray-400 font-100">
            £{originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
