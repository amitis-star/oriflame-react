import React from "react";
import CartList from "../../CartContext/CartList";
import { products } from "../../Products";
import { Link } from "react-router-dom";
import LeftArrow from "../../../../assets/icons/LeftArrow";
import { useCart } from "../../CartContext";

export interface ShoppingBagProps {
  onClose?: () => void; 
}

const ShoppingBagMobile: React.FC<ShoppingBagProps> = () => {
  const { cart } = useCart();
  const cartItems = products.filter((p) => cart.has(p.id));
  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col justify-start min-h-screen max-w-md mx-auto bg-white rounded-lg p-4 relative">
       
        <Link to="/" className="absolute top-6 left-4">
          <LeftArrow className="w-10 h-10 text-gray-800" />
        </Link>
        <p className="text-20 font-semibold text-gray-800 text-center mb-6 mt-12">
          basket&nbsp;({cartItems.length})
        </p>
        <div className="flex-1 overflow-y-auto">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full py-20">
              <p className="font-semibold text-lg text-gray-600">Empty bag</p>
              <p className="font-normal text-sm text-gray-500 mt-2">
                –Looking pretty empty in your bag–
              </p>
            </div>
          ) : (
            <CartList />
          )}
        </div>

        {!isEmpty && (
          <div className="border-t border-gray-300 pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800 mb-3">
              <span>Total:</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-full h-12 bg-black text-white text-lg font-semibold hover:bg-gray-900 transition">
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingBagMobile;
