import React from "react";

const FavoritePanel: React.FC = () => (
  <div className="hidden lg:flex min-h-full p-6 h-[990px] bg-rose-50 w-[600px]">
    <h2 className="text-2xl font-bold mb-6 text-rose-700">Your Favorites</h2>
    <div className="grid grid-cols-3 gap-6">
      <p className="col-span-3 text-gray-500">No favorites yet.</p>
    </div>
  </div>
);

export default FavoritePanel;
