import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";

import { FavoritesProvider } from "./components/elements/FavoritesContext/index";
import { CartProvider } from "./components/elements/CartContext/index";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <FavoritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
