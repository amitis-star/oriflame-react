import React from "react";
import { useFavorites } from "../../FavoritesContext";
import { useCart } from "../../CartContext";
import { products } from "../../Products";
import CrossIcon from "../../../../assets/icons/CrossIcon";

interface Props {
  compact?: boolean;
}

const FavoritesList: React.FC<Props> = ({ compact = false }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { inCart, toggleCart } = useCart();

  const favoriteItems = products.filter((item) => favorites.has(item.id));

  if (favoriteItems.length === 0) {
    return (
      <p
        className={`text-gray-500 w-full text-center ${
          compact ? "text-sm pl-2" : "text-base"
        }`}
      >
        You haven't liked anything yet.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {favoriteItems.map((item) => {
        const alreadyInCart = inCart(item.id);

        return (
          <li
            key={item.id}
            className={`bg-gray-100 rounded-xl shadow-xl ${
              compact ? "p-2" : "p-4"
            } flex flex-col gap-1`}
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.alt}
                className={`object-cover rounded ${
                  compact ? "w-14 h-14" : "w-16 h-16"
                }`}
              />
              <p
                className={`font-semibold ${compact ? "text-sm" : "text-base"}`}
              >
                {item.title}
              </p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <p
                className={`text-orange-600 font-semibold ${
                  compact ? "text-sm" : "text-base"
                }`}
              >
                £{item.price.toFixed(2)}
              </p>

              <div className="flex gap-3 items-center">
                <button
                  onClick={() => {
                    if (!alreadyInCart) toggleCart(item.id);
                  }}
                  disabled={alreadyInCart}
                  title={alreadyInCart ? "Already in cart" : "Add to cart"}
                  className={`flex items-center justify-center rounded-full border ${
                    alreadyInCart
                      ? "border-gray-300 cursor-not-allowed"
                      : "border-green-600 hover:bg-green-100"
                  } w-8 h-8`}
                >
                  <CrossIcon
                    className={`w-4 h-4 transform rotate-45 ${
                      alreadyInCart ? "text-gray-300" : "text-green-600"
                    }`}
                  />
                </button>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`text-red-500 hover:underline ${
                    compact ? "text-xs" : "text-sm"
                  }`}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
