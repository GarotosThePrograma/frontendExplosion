export type productProps = {
  name: string
  price: number
  image: string
  isInteractive?: boolean
  quantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
}