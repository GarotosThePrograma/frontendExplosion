/* eslint-disable react-hooks/exhaustive-deps */
import { SimpleGrid } from '@chakra-ui/react';
import ProductInColumn from '../../components/ui/products/ProductInColumn';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]); 

  async function fetchData() {
    try {
      const response = await axios.get(`${baseUrl}/products/productslist`);
      setProduct(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  async function fetchFavorites() {
    const token = localStorage.getItem('token');
    if (!token) return; 

    try {
      const response = await axios.get(`${baseUrl}/favorites`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const favoriteIds = response.data.map((fav: any) => fav.productId || fav.id);
      setFavorites(favoriteIds);
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchFavorites(); 
  }, []);

  const handleToggleFavorite = async (productId: number) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Você precisa estar logado para favoritar um produto.");
      return;
    }

    const isCurrentlyFavorite = favorites.includes(productId);

    if (isCurrentlyFavorite) {
      setFavorites(prev => prev.filter(id => id !== productId)); 
    } else {
      setFavorites(prev => [...prev, productId]); 
    }

    try {
      if (isCurrentlyFavorite) {
        await axios.delete(`${baseUrl}/favorites/${productId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Removido dos favoritos com sucesso!");
      } else {
        await axios.post(`${baseUrl}/favorites/${productId}`, 
          { productId: productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Adicionado aos favoritos com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao alterar favorito:", error);
      if (isCurrentlyFavorite) {
        setFavorites(prev => [...prev, productId]);
      } else {
        setFavorites(prev => prev.filter(id => id !== productId));
      }
      alert("Erro de conexão ao alterar o favorito.");
    }
  };

  const handleAddToCart = async (productId: string | number) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Você precisa estar logado para adicionar ao carrinho.");
      return;
    }

    try {
      await axios.post(`${baseUrl}/cart/items`, 
        { productId: productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Adicionado ao carrinho com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Erro ao adicionar o produto ao carrinho.");
    }
  };

  return (
    <SimpleGrid columns={4} gap="24px" width="90%" padding="24px">
      {product.map((item, index) => {
        const itemId = item.id;
        return (
          <ProductInColumn
            key={itemId || index} 
            name={item.name || 'Nome do produto'}
            price={item.price}
            image={item.image}
            isFavorite={favorites.includes(itemId)} 
            onAddFavorite={() => handleToggleFavorite(itemId)}
            onAddToCart={() => handleAddToCart(itemId)}
          />
        )
      })}
    </SimpleGrid>
  );
}