export type productInLineProps = {
  name: string;
  price: number;
  image: string;
  isInteractive?: boolean;
  quantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
  isSelected?: boolean;
  onToggleSelect?: () => void;
  onRemove?: () => void;
  showQuantityControls?: boolean;
  onAddToCart?: () => void;
};
