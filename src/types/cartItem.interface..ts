export type cartItemProps = {
  id?: string; 
  productId?: string; 
  productName: string;
  unitPrice: number;
  image: string;
  quantity: number;
  isSelected?: boolean; 
}