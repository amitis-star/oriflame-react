import React from "react";
import { useCart } from "../../CartContext/index";
import { products } from "../../Products/index";

const CartList: React.FC = () => {
  const { cart, toggleCart } = useCart();

  const cartItems = products.filter((item) => cart.has(item.id));

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 bg-white p-3 shadow-md rounded-lg"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-orange-600">£{item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => toggleCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
