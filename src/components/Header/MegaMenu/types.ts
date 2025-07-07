// components/MegaMenu/types.ts

export type PanelType = "none" | "inspiration" | "favorite" | "nutrition";

export interface MegaMenuProps {
  show: boolean;
  onClose: () => void;
}
