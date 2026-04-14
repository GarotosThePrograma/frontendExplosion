import { Box, Button, Center, Stack } from '@chakra-ui/react';
import TextFild from '../../components/TextFild';
import Header from '../../components/ui/Header';
import NumberFild from '../../components/NumberFild';

export default function ProductRegister() {

  function saveProduct() {

  }

  return (
    <Box>
      <Header />
      <Center height="100vh" bgColor="#f5f5f5f5">
        <Stack>
          <TextFild name="Name"/>
          <NumberFild name="Price" />
          <NumberFild name="Stock" />
          <TextFild name="Image" />
          <TextFild name="Type" />
          <TextFild name="Description" />
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
