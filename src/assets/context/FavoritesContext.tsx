import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";

export interface FavoriteItem {
  id: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  price: number;
  originalPrice?: number;
}

type State = {
  favorites: Record<string, FavoriteItem>;
};

type Action =
  | { type: "TOGGLE"; payload: FavoriteItem }
  | { type: "INIT"; payload: Record<string, FavoriteItem> };

const FavoritesContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE": {
      const { id } = action.payload;
      const updated = { ...state.favorites };
      if (updated[id]) delete updated[id];
      else updated[id] = action.payload;
      return { favorites: updated };
    }
    case "INIT":
      return { favorites: action.payload };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { favorites: {} });

  // Load favorites from localStorage
  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      dispatch({ type: "INIT", payload: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside provider");

  const { state, dispatch } = context;
  return {
    favorites: Object.values(state.favorites),
    isFavorite: (id: string) => Boolean(state.favorites[id]),
    toggleFavorite: (item: FavoriteItem) =>
      dispatch({ type: "TOGGLE", payload: item }),
  };
};
