import { Box, Center } from '@chakra-ui/react';
import Form from './Form';
import Desc from '../../components/ui/Desc';

export default function Login() {
  return (
    <Center h="100vh" bgColor="#f5f5f5f5">
      <Box display="flex" alignItems="stretch" width="800px">
        <Desc />
        <Form />
      </Box>
    </Center>
  );
}
