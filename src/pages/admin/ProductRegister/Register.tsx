import { Button, Stack } from '@chakra-ui/react';
import TextFild from '../../../components/TextFild';
import NumberFild from '../../../components/NumberFild';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
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
      const response = await axios.post('http://192.168.1.23:5076/api/Products/createproduct', {
        // Banco aberto: https://api.escuelajs.co/api/v1/products/
        /* Teste banco aberto
        title: product.name,
        price: product.price,
        images: [product.image],
        description: product.description,
        categoryId: 1*/
        Name: product.name,
        Price: Number(product.price),
        Stock: Number(product.stock),
        Image: product.image,
        Type: Number(product.type),
        Description: product.description
      });
      //localStorage.setItem("product", response.data)
      console.log(response.data);
    } catch (erro) {
      console.error('Erro ao registrar o produto', erro);
    }
  }

  return (
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
      <Button bgColor="#FF6500" color="#FFFFFF" onClick={saveProduct}>
        Cadastrar Produto
      </Button>
    </Stack>
  );
}
