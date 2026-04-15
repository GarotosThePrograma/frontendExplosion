import { Box, Button, Center, Stack } from '@chakra-ui/react';
import TextFild from '../../components/TextFild';
import Header from '../../components/ui/Header';
import NumberFild from '../../components/NumberFild';
import { useState } from 'react';
import axios from 'axios';

export default function ProductRegister() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    image: '',
    type: '',
    description: ''
  });

  async function saveProduct() {
    try {
      if(!product.name || !product.price || !product.stock || !product.image || !product.type || !product.description) {
        alert("Por favor, preencha os campos obrigatórios corretamente!");
        return;
      }
      const response = await axios.post('', { // Banco aberto: https://api.escuelajs.co/api/v1/products/
        /* Teste banco aberto
        title: product.name,
        price: product.price,
        images: [product.image],
        description: product.description,
        categoryId: 1*/
        name: product.name,
        price: Number(product.price),
        stock: Number(product.stock),
        image: product.image,
        type: product.type,
        description: product.description
      })
      console.log(response.data)
    }
    catch(erro) {
      console.error("Erro ao registrar o produto", erro)
    }
  }

  return (
    <Box>
      <Header />
      <Center height="100vh" bgColor="#f5f5f5f5">
        <Stack>
          <TextFild 
            name="Name"
            value={product.name}
            onChange={(value) => setProduct({ ...product, name: value })}
          />
          <NumberFild 
            name="Price"
            value={product.price}
            onChange={(value) => setProduct({ ...product, price: value })}
          />
          <NumberFild 
            name="Stock"
            value={product.stock}
            onChange={(value) => setProduct({ ...product, stock: value })}
          />
          <TextFild 
            name="Image"
            value={product.image}
            onChange={(value) => setProduct({ ...product, image: value })}
          />
          <TextFild 
            name="Type"
            value={product.type}
            onChange={(value) => setProduct({ ...product, type: value })}
          />
          <TextFild 
            name="Description"
            value={product.description}
            onChange={(value) => setProduct({ ...product, description: value })}
          />
          <Button
            bgColor="#FF6500"
            color="#FFFFFF"
            onClick={saveProduct}
          >
            Cadastrar Produto
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
