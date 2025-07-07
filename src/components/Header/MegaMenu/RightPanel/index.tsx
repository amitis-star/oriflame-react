import React, { forwardRef } from "react";
import { PanelType } from "../types";
import CataloguePanel from "./Catalouge/index";
import InspirationPanel from "./Inspiration";
import FavoritePanel from "./Favorite/index";
import NutritionPanel from "./Nutrition/index";

interface Props {
  activePanel: PanelType;
  spacerRef: React.RefObject<HTMLDivElement | null>; // allow null
}

const RightPanel = forwardRef<HTMLDivElement, Props>(
  ({ activePanel, spacerRef }, ref) => {
    return (
      <div
        ref={ref}
        className="flex-none relative overflow-y-auto h-full w-fit"
      >
        {activePanel === "none" && <CataloguePanel />}
        {activePanel === "inspiration" && <InspirationPanel />}
        {activePanel === "favorite" && <FavoritePanel />}
        {activePanel === "nutrition" && <NutritionPanel />}

        {/* Spacer balances the scroll heights of the two panes */}
        <div ref={spacerRef} className="w-full" />
      </div>
    );
  }
);

RightPanel.displayName = "RightPanel";
export default RightPanel;
