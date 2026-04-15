import { Box, Center, Flex } from '@chakra-ui/react';
import Header from '../../../components/ui/Header';
import Register from './Register';

export default function ProductRegister() {

  return (
    <Box>
      <Header />
      <Center height="100vh" bgColor="#f5f5f5f5">
        <Flex>
          <Register />
        </Flex>
      </Center>
    </Box>
  );
}
