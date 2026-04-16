import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductInLine from "../../../components/ui/products/ProductInLine";

interface FavoriteItem {
  id: string; 
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Favorits() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  
  const [favoritItems, setFavoritsItems] = useState<FavoriteItem[]>([]);

  async function fetchCart() {
    if (!token) {
      return
    }
    try {
      const response = await axios.get(`${baseUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavoritsItems(response.data.items); 
    } catch (error) {
      console.error('Erro ao buscar o favoritos:', error);
    }
  }

  async function updateCart() {
    try {
      const response = await axios.post(`${baseUrl}/favorites/items`, {
        Items: favoritItems
      })
      console.log('Sucesso ao atualizar o favoritos:', response.data)
    }
    catch (error) {
      console.error('Erro ao atualizar o favoritos:', error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setFavoritsItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
    updateCart();
  };

  return (
    <Flex gap="24px" width="100%" maxW="1200px" justifyContent="center" margin="0 auto">
      <Stack gap="16px">
        {favoritItems.length === 0 ? (
          <Text
            textAlign="center"
            color="#000000"
          >Seu favoritos está vazio.</Text>
        ) : (
          favoritItems.map((item) => (
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
        <ProductInLine 
          key="total"
          name="Total"
          price={0}
          image=""
          quantity={0}
          onQuantityChange={() => {}}
        />
      </Stack>
    </Flex>
  );
}
