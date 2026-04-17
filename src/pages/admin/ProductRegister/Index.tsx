import { Box } from '@chakra-ui/react';
import Form from './Form';
import { useState } from 'react';
import axios from 'axios';
import ProductInColumn from '../../../components/ui/products/ProductInColumn';

export default function ProductRegister() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  
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
        alert('Por favor, preencha todos os campos obrigatórios corretamente!');
        return;
      }

      const payload = {
        Name: product.name,
        Price: Number(product.price),
        Stock: Number(product.stock),
        Image: product.image,
        Type: Number(product.type),
        Description: product.description,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };

      const response = await axios.post(`${baseUrl}/Products/createproduct`, payload, config);
      
      console.log(response.data);
      alert('Produto cadastrado com sucesso!');
      setProduct({
        name: '', price: '', stock: '', image: '', type: '', description: ''
      });

    } catch (erro) {
      console.error('Erro ao registrar o produto', erro);
      alert('Erro ao registrar o produto. Verifique se você é um Admin e se os dados estão corretos.');
    }
  }

  return (
    <Box display="flex" alignItems="stretch" width="800px">
      <Box display="flex" flex="1" alignItems="center" justifyContent="center">
        <ProductInColumn
          name={product.name || 'Nome do produto'}
          price={Number(product.price) || 0}
          image={product.image || 'https://placehold.co/232x232/png'}
          isInteractive={false}
        />
      </Box>
      <Form
        product={product}
        setProduct={setProduct}
        saveProduct={saveProduct}
      />
    </Box>
  );
}