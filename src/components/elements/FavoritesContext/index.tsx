import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
type ProductID = number;

interface FavoritesCtx {
  favorites: Set<ProductID>;
  toggleFavorite: (id: ProductID) => void;
  isFavorite: (id: ProductID) => boolean;
}

const Ctx = createContext<FavoritesCtx | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<ProductID>>(() => {
    const json = localStorage.getItem("favorites");
    return json ? new Set(JSON.parse(json) as ProductID[]) : new Set();
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleFavorite = (id: ProductID) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const isFavorite = (id: ProductID) => favorites.has(id);

  return (
    <Ctx.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </Ctx.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error("useFavorites must be called inside <FavoritesProvider>");
  return ctx;
};
