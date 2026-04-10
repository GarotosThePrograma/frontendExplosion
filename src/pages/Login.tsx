import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bg="gray.900" color="white">
      <Heading size="2xl" mb={4} color="teal.400">
        Página de Login
      </Heading>
      <Text mb={6}>Esta é uma tela completamente diferente.</Text>
      
      <Link to="/">
        <Button colorPalette="teal">Voltar para Home</Button>
      </Link>
    </Box>
  );
}