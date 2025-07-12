import React from "react";
import FavoritesList from "../../../../elements/FavoritesContext/FavoritesList";
// import FavoritesList from "../../../../elements/FavoritesContext/FavoritesList";

const FavoritePanel: React.FC = () => (
  <div className="hidden lg:flex min-h-full p-6 h-[990px] bg-white w-[600px] flex-col">
    <FavoritesList />
  </div>
);

export default FavoritePanel;
