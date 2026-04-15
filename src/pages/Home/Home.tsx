/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Box } from '@chakra-ui/react';
import Header from '../../components/ui/Header';
import Product from '../../components/ui/Product/Product';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [product, setProduct] = useState([
    { name: '', price: 0, image: '' },
  ]);

  async function fetchData() {
    const response = await axios.get(
      'http://192.168.1.23:5076/api/Products/productslist',
    ); //Banco aberto: https://api.escuelajs.co/api/v1/products
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
            name={product.name}
            price={product.price}
            img={product.image}
          />
        ))}
      </Center>
    </Box>
  );
}
