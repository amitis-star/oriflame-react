import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";

import { FavoritesProvider } from "./components/elements/FavoritesContext";
import { CartProvider } from "./components/elements/CartContext";
import { ProductsProvider } from "./components/elements/Products/index"; // ← new

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ProductsProvider>
        <FavoritesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FavoritesProvider>
      </ProductsProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
