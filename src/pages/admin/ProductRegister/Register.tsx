import { Button, Stack } from '@chakra-ui/react';
import TextFild from '../../../components/ui/filds/TextFild';
import NumberFild from '../../../components/ui/filds/NumberFild';
import type { registerProps } from './register.interface.';

export default function Register({product, setProduct, saveProduct}:{product:registerProps, setProduct:(product:registerProps)=>void,saveProduct:()=>void}) {

  return (
    <Stack
      gap="16px"
    >
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
      </Stack>
      <Button bgColor="#FF6500" color="#FFFFFF" onClick={saveProduct}>
        Cadastrar Produto
      </Button>
    </Stack>
  );
}
