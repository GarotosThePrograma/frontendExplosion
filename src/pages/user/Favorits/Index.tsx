import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductInLine from "../../../components/ui/products/ProductInLine";
import type { favoriteItemProps } from "../../../types/favoriteItem.interface.";

export default function Favorits() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  
  const [favoritItems, setFavoritsItems] = useState<favoriteItemProps[]>([]);

  async function fetchFavorites() {
    if (!token) return;
    
    try {
      const response = await axios.get(`${baseUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavoritsItems(response.data || []); 
    } catch (error) {
      console.error('Erro ao buscar os favoritos:', error);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (identifier: string) => {
    setFavoritsItems((prevItems) => 
      prevItems.filter(item => (item.id || item.productId) !== identifier)
    );

    try {
      await axios.delete(`${baseUrl}/favorites/${identifier}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Erro ao remover o favorito:', error);
      alert("Erro ao remover o favorito. Tente novamente.");
      fetchFavorites(); 
    }
  };

  const handleAddToCart = async (productId: string) => {
    if (!token) return;
    try {
      await axios.post(`${baseUrl}/cart/items`, 
        { productId: productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Produto adicionado ao carrinho com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Erro ao adicionar o produto ao carrinho.");
    }
  };

  return (
    <Flex width="100%" maxW="1200px" justifyContent="center" margin="0 auto" padding={50}>
      
      <Stack gap="16px" width="100%" maxW="800px"> 
        
        {!favoritItems || favoritItems.length === 0 ? (
          <Text textAlign="center" color="#000000">
            Sua lista de favoritos está vazia.
          </Text>
        ) : (
          favoritItems.map((item) => {
            const uniqueId = item.id || item.productId || "";

            return (
              <ProductInLine 
                key={uniqueId}
                name={item.productName} 
                price={item.price} 
                image={item.image} 
                quantity={1} 
                onQuantityChange={() => {}} 
                onRemove={() => handleRemoveFavorite(uniqueId)}
                showQuantityControls={false} 
                onAddToCart={() => handleAddToCart(uniqueId)} 
              />
            );
          })
        )}
      </Stack>
    </Flex>
  );
}