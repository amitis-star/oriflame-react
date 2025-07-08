import React from "react";
import { useCart } from "../CartContext";
import { products } from "../Products";
import CartList from "../CartContext/CartList";
import "../../../assets/styles/index.css";
import LeftArrow from "../../../assets/icons/LeftArrow";
export interface ShoppingBagProps {
  onClose: () => void;
}


const ShoppingBag: React.FC<ShoppingBagProps> = ({ onClose }) => {

  const { cart } = useCart();
  const cartItems = products.filter((p) => cart.has(p.id));
  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div
        className="fixed inset-00 z-[100] bg-black/60 backdrop-blur-sm lg:top-[100px]"
        onClick={onClose}
      />
      <div
        className="
          fixed top-00 right-00 z-[110]      
          lg:top-[100px] lg:right-[-20px]     
          lg:bottom-00 lg:h-auto                
          h-full w-60                           
          bg-white
          p-6 pb-8 flex flex-col
        "
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex items-center mb-4">
          <button
            onClick={onClose}
            className="lg:hidden mr-4 flex-shrink-0 p-1"
            aria-label="Close bag"
          >
            <LeftArrow className="w-10 h-10" />
          </button>
          <p className="text-20 font-500 text-gray-800 ml-auto lg:ml-0">
            basket&nbsp;({cartItems.length})
          </p>
        </div>
        <div className="flex-1 overflow-y-auto mb-4">
          {isEmpty ? (
            <div className="flex flex-col justify-center items-center h-full">
              <p className="font-500 text-20 text-gray-600">Empty bag</p>
              <p className="font-400 text-16 text-gray-500">
                –Looking pretty empty in your bag–
              </p>
            </div>
          ) : (
            <CartList />
          )}
        </div>
        {!isEmpty && (
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between text-16 font-500 text-gray-800 mb-3">
              <span>Total:</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-full h-12 bg-black text-white text-18 font-500 hover:bg-gray-900 transition">
              Pay Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingBag;
