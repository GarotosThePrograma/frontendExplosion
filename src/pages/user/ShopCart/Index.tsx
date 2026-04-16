import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Resume from "./Resume";
import ProductInLine from "../../../components/ui/products/ProductInLine";

export default function ShopCart() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Flex gap="24px">
      <ProductInLine 
        name="MacBook Air M4" 
        price={7500} 
        image="https://infostore.vtexassets.com/arquivos/ids/270165-800-auto?v=638950389369270000&width=800&height=auto&aspect=true" 
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <Resume />
    </Flex>
  );
}
