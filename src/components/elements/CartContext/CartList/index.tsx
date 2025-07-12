import React from "react";
import { useCart } from "../../CartContext";
import { useProducts } from "../../Products";

const CartList: React.FC = () => {
  const { cart, toggleCart } = useCart();
  const { products } = useProducts();

  const cartItems = products.filter((product) => cart.has(product.id));

  if (cartItems.length === 0) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
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
              <p className="font-600 text-14 md:text-16">{item.title}</p>
              <p className="text-orange-600 font-500">
                £{item.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => toggleCart(item.id)}
              className="text-14 text-red-500 hover:underline"
              aria-label={`Remove ${item.title} from cart`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
