/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react';
import ProductInColumn from '../../components/ui/products/ProductInColumn';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState([{ name: '', price: 0, image: '' }]);

  async function fetchData() {
    const response = await axios.get(`${baseUrl}/Products/productslist`);
    setProduct(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack>
      {product.slice(0, 4).map((product, index) => (
        <ProductInColumn
          key={index}
          name={product.name || 'Nome do produto'}
          price={product.price}
          image={product.image}
        />
      ))}
    </Stack>
  );
}
