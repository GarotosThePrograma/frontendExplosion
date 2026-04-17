export interface productInColumnProps {
  id?: string | number;
  name: string;
  price: number;
  image: string;
  isInteractive?: boolean;
  isFavorite?: boolean;
  onAddFavorite?: () => void;
  onAddToCart?: () => void;
}