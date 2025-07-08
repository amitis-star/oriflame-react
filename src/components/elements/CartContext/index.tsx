import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ProductID = number;

interface CartCtx {
  cart: Set<ProductID>;
  toggleCart: (id: ProductID) => void;
  inCart: (id: ProductID) => boolean;
}

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Set<ProductID>>(() => {
    const json = localStorage.getItem("cart");
    return json ? new Set(JSON.parse(json) as ProductID[]) : new Set();
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([...cart]));
  }, [cart]);

  const toggleCart = (id: ProductID) =>
    setCart((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const inCart = (id: ProductID) => cart.has(id);

  return (
    <Ctx.Provider value={{ cart, toggleCart, inCart }}>{children}</Ctx.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be called inside <CartProvider>");
  return ctx;
};
