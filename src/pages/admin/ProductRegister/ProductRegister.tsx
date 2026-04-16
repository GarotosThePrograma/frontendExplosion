import { Box, Center } from '@chakra-ui/react';
import Header from '../../../components/ui/Header';
import Form from './Form';
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
        Description: product.description,
      });
      console.log(response.data);
    } catch (erro) {
      console.error('Erro ao registrar o produto', erro);
    }
  }

  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Header />
      <Center flex="1" bgColor="#f5f5f5f5">
        <Box display="flex" alignItems="stretch" width="800px">
          <Box
            display="flex"
            flex="1"
            alignItems="center"
            justifyContent="center"
          >
            <Product
              name={product.name || 'Nome do produto'}
              price={Number(product.price) || 0}
              img={product.image || 'https://placehold.co/232x232/png'}
            />
          </Box>
          <Form
            product={product}
            setProduct={setProduct}
            saveProduct={saveProduct}
          />
        </Box>
      </Center>
    </Box>
  );
}
