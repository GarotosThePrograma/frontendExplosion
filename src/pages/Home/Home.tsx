/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Box } from '@chakra-ui/react';
import Header from '../../components/ui/Header';
import Product from '../../components/ui/Product/Product';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [product, setProduct] = useState([
    { title: '', price: 0, images: [] },
  ]);

  async function fetchData() {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products',
    ); //Banco aberto
    setProduct(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Header />
      <Center 
        height="100vh" 
        bgColor="#f5f5f5f5"
        gap="24px"
      >
        {product.slice(0, 4).map((product, index) => (
          <Product
            key={index}
            name={product.title}
            price={product.price}
            img={product.images[0]}
          />
        ))}
      </Center>
    </Box>
  );
}
