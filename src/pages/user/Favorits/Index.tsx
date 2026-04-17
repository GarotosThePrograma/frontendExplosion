import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductInLine from "../../../components/ui/products/ProductInLine";

// Atualizado para prever como o backend costuma devolver essas chaves
interface FavoriteItem {
  id?: string; 
  productId?: string;
  productName: string;
  price: number;
  image: string;
}

export default function Favorits() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  
  const [favoritItems, setFavoritsItems] = useState<FavoriteItem[]>([]);

  async function fetchFavorites() {
    if (!token) return;
    
    try {
      const response = await axios.get(`${baseUrl}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // A correção principal: pegamos direto o data, com um fallback de segurança
      setFavoritsItems(response.data || []); 
    } catch (error) {
      console.error('Erro ao buscar os favoritos:', error);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Lógica para remover dos favoritos (Deletar)
  const handleRemoveFavorite = async (identifier: string) => {
    // 1. Optimistic Update: tira o item da tela na mesma hora
    setFavoritsItems((prevItems) => 
      prevItems.filter(item => (item.id || item.productId) !== identifier)
    );

    // 2. Manda a exclusão para o banco
    try {
      await axios.delete(`${baseUrl}/favorites/${identifier}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Erro ao remover o favorito:', error);
      // Se der erro na API, avisamos o usuário com alert simples
      alert("Erro ao remover o favorito. Tente novamente.");
      // E buscamos a lista de novo para garantir que a tela mostre a verdade do banco
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
    // Tiramos o gap e centralizamos o conteúdo do Flex
    <Flex width="100%" maxW="1200px" justifyContent="center" margin="0 auto" padding="24px 16px">
      
      {/* Removemos o flex="1" e travamos a largura máxima do Stack em 800px */}
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
                
                // AS DUAS NOVAS PROPS AQUI:
                showQuantityControls={false} // Desliga o + e -
                onAddToCart={() => handleAddToCart(uniqueId)} // Conecta o botão comprar
              />
            );
          })
        )}
      </Stack>
    </Flex>
  );
}