import { Box, Center, Flex } from '@chakra-ui/react';
import Header from '../../../components/ui/Header';
import Register from './Register';
import { useState } from 'react';
import axios from 'axios';
import Product from '../../../components/ui/Product/Product';

export default function ProductRegister() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    image: '',
    type: '',
    description: '',
  });

  async function saveProduct() {
    try {
      if (
        !product.name ||
        !product.price ||
        !product.stock ||
        !product.image ||
        !product.type ||
        !product.description
      ) {
        alert('Por favor, preencha os campos obrigatórios corretamente!');
        return;
      }
      const response = await axios.post(`${baseUrl}/Products/createproduct`, {
        Name: product.name,
        Price: Number(product.price),
        Stock: Number(product.stock),
        Image: product.image,
        Type: Number(product.type),
        Description: product.description
      });
      localStorage.setItem("product", response.data)
      console.log(response.data);
    } catch (erro) {
      console.error('Erro ao registrar o produto', erro);
    }
  }


  return (
    <Box>
      <Header />
      <Center height="100vh" bgColor="#f5f5f5f5">
        <Flex
          bgColor="#FFFFFF"
          padding="24px"
          borderRadius="16px"
          alignItems="center"
          gap="32px"
        >
          <Product
            name={product.name||"Nome do produto"}
            price={Number(product.price)||0}
            img={product.image||"https://placehold.co/232x232/png"}
          />
          <Register 
            product={product}
            setProduct={setProduct}
            saveProduct={saveProduct}
          />
        </Flex>
      </Center>
    </Box>
  );
}
