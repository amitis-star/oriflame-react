import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ProductID = number;

interface CartContextType {
  cart: Set<ProductID>;
  toggleCart: (id: ProductID) => void;
  inCart: (id: ProductID) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Set<ProductID>>(() => {
    try {
      const stored = localStorage.getItem("cart");
      const parsed = stored ? (JSON.parse(stored) as ProductID[]) : [];
      return new Set(parsed);
    } catch {
      return new Set();
    }
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([...cart]));
  }, [cart]);

  const toggleCart = (id: ProductID) => {
    setCart((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const inCart = (id: ProductID): boolean => cart.has(id);

  const clearCart = () => setCart(new Set());

  return (
    <CartContext.Provider value={{ cart, toggleCart, inCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
