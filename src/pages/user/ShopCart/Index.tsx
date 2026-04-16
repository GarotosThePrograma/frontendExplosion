import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resume from "./Resume";
import ProductInLine from "../../../components/ui/products/ProductInLine";

interface CartItem {
  id: string; 
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function ShopCart() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  

  async function fetchCart() {
    if (!token) {
      //return navigate("/login");
    }
    try {
      const response = await axios.get(`${baseUrl}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data.items); 
      setTotalPrice(response.data.total);
    } catch (error) {
      console.error('Erro ao buscar o carrinho:', error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <Flex gap="24px" width="100%" maxW="1200px" margin="0 auto">
      <Stack gap="16px" flex="1">
        {cartItems.length === 0 ? (
          <Text>Seu carrinho está vazio.</Text>
        ) : (
          cartItems.map((item) => (
            <ProductInLine 
              key={item.id}
              name={item.name} 
              price={item.price} 
              image={item.image} 
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            />
          ))
        )}
      </Stack>
      <Box width="350px">
        <Resume totalPrice={totalPrice} />
      </Box>
    </Flex>
  );
}
