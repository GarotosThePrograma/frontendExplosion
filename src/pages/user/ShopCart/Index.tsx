import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Resume from "./Resume";
import ProductInLine from "../../../components/ui/products/ProductInLine";

interface CartItem {
  id?: string; 
  productId?: string; 
  productName: string;
  unitPrice: number;
  image: string;
  quantity: number;
  isSelected?: boolean; 
}

export default function ShopCart() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  async function fetchCart() {
    if (!token) return;
    try {
      const response = await axios.get(`${baseUrl}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const itemsWithSelection = response.data.items.map((item: any) => ({
        ...item,
        isSelected: true 
      }));
      setCartItems(itemsWithSelection);
    } catch (error) {
      console.error('Erro ao buscar o carrinho:', error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const handleToggleSelect = (identifier: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.id || item.productId) === identifier 
          ? { ...item, isSelected: !item.isSelected } 
          : item
      )
    );
  };

  const handleQuantityChange = async (identifier: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.id || item.productId) === identifier 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );

    try {
      
      await axios.put(`${baseUrl}/cart/items/${identifier}`, 
        { quantity: newQuantity }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Erro ao atualizar quantidade no banco", error);
    }
  };

  const handleRemoveItem = async (identifier: string) => {

    setCartItems((prevItems) => prevItems.filter(item => (item.id || item.productId) !== identifier));

    try {
      await axios.delete(`${baseUrl}/cart/items/${identifier}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error("Erro ao remover item do banco", error);
    }
  };

  const calculatedTotal = cartItems
    .filter(item => item.isSelected) 
    .reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0); 

  return (
    <Flex gap="24px" width="100%" maxW="1200px" margin="0 auto" alignItems="flex-start" padding={50}>
      <Stack gap="16px" flex="1">
        {cartItems.length === 0 ? (
          <Text textAlign="center" color="#000000">
            Seu carrinho está vazio.
          </Text>
        ) : (
          cartItems.map((item) => {
            const uniqueId = item.id || item.productId || ""; 
            
            return (
              <ProductInLine 
                key={uniqueId}
                name={item.productName} 
                price={item.unitPrice} 
                image={item.image} 
                quantity={item.quantity}
                isSelected={item.isSelected}
                onToggleSelect={() => handleToggleSelect(uniqueId)}
                onQuantityChange={(newQuantity) => handleQuantityChange(uniqueId, newQuantity)}
                onRemove={() => handleRemoveItem(uniqueId)}
              />
            )
          })
        )}
      </Stack>
      <Box position="sticky" top="150px">
        <Resume totalPrice={calculatedTotal} />
      </Box>
    </Flex>
  );
}