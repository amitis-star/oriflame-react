import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import Opt from "../../../assets/images/opt-swiper.webp";
import TheOneWhatsNew from "../../../assets/images/theone-whats-new.webp";
import RoyalVelvet from "../../../assets/images/royal velvet.webp";
import TenderCare from "../../../assets/images/tender care.webp";
import MilkandHoney from "../../../assets/images/milk and honey gold.webp";
import Possess from "../../../assets/images/possess.webp";
import LipBalm from "../../../assets/images/lip balm.webp";
import FacialOil from "../../../assets/images/facial oil.webp";
import AmberElixer from "../../../assets/images/amber elixer.webp";
import WellosphyRed from "../../../assets/images/wellosphy red.webp";
import WellosphyGreen from "../../../assets/images/willosphy green.webp";

export interface Product {
  id: number;
  image: string;
  alt: string;
  isNew: boolean;
  stars: number;
  category: string;
  title: string;
  price: number;
  originalPrice: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    image: Opt,
    alt: "optimals sunscreen",
    isNew: true,
    stars: 4,
    category: "OPTIMALS",
    title: "Daily Glow Multi‑Protector SPF 50",
    price: 12.99,
    originalPrice: 20.0,
  },
  {
    id: 2,
    image: Opt,
    alt: "optimals sunscreen",
    isNew: true,
    stars: 0,
    category: "OPTIMALS",
    title: "Daily Glow Multi‑Protector SPF 50",
    price: 12.99,
    originalPrice: 20.0,
  },
  {
    id: 3,
    image: TheOneWhatsNew,
    alt: "Wonder Lash mascara",
    isNew: true,
    stars: 4,
    category: "THE ONES",
    title: "5‑in‑1 Wonder Lash Prom Queen Mascara – Black",
    price: 12.99,
    originalPrice: 20.0,
  },
  {
    id: 4,
    image: MilkandHoney,
    alt: "Milk & Honey Gold",
    isNew: false,
    stars: 0,
    category: "MILK AND HONEY",
    title: "Milk & Honey Gold Hand Cream",
    price: 12.99,
    originalPrice: 17.0,
  },
  {
    id: 5,
    image: TenderCare,
    alt: "Tender Care balm",
    isNew: true,
    stars: 5,
    category: "TENDER CARE",
    title: "Sweet Mandarin Multi‑Purpose Balm",
    price: 12.99,
    originalPrice: 17.0,
  },
  {
    id: 6,
    image: RoyalVelvet,
    alt: "Royal Velvet",
    isNew: false,
    stars: 5,
    category: "ROYAL VELVET",
    title: "Royal Velvet Firming Day Cream",
    price: 12.99,
    originalPrice: 17.0,
  },
  {
    id: 7,
    image: Possess,
    alt: "Possess Absolute",
    isNew: false,
    stars: 5,
    category: "POSSESS",
    title: "Possess Absolute Eau de Parfum",
    price: 27.99,
    originalPrice: 47.0,
  },
  {
    id: 8,
    image: LipBalm,
    alt: "Natural Lip Balm",
    isNew: false,
    stars: 4,
    category: "TENDER CARE",
    title: "Natural Multi‑Purpose Balm",
    price: 3.49,
    originalPrice: 8.5,
  },
  {
    id: 9,
    image: FacialOil,
    alt: "NovAge+ Facial Oil",
    isNew: false,
    stars: 5,
    category: "NOVAGE+",
    title: "Intense Nourishment Facial Oil Capsules",
    price: 24.99,
    originalPrice: 50.0,
  },
  {
    id: 10,
    image: AmberElixer,
    alt: "Amber Elixir",
    isNew: false,
    stars: 3,
    category: "AMBER ELIXIR",
    title: "Amber Elixir Eau de Parfum",
    price: 6.99,
    originalPrice: 13.0,
  },
  {
    id: 11,
    image: WellosphyGreen,
    alt: "Wellosphy Fibre Drink",
    isNew: false,
    stars: 3,
    category: "WELLOSPHY",
    title: "Prebiotic Fibre Drink",
    price: 24.99,
    originalPrice: 50.0,
  },
  {
    id: 12,
    image: WellosphyRed,
    alt: "Wellosphy Antioxidant",
    isNew: false,
    stars: 4,
    category: "WELLOSPHY",
    title: "Astaxanthin & Bilberry Extract",
    price: 24.99,
    originalPrice: 50.0,
  },
];
interface ProductsContextShape {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

const ProductsContext = createContext<ProductsContextShape | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return ctx;
};
