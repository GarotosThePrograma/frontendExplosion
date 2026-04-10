import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bg="gray.50">
      <Heading size="2xl" mb={4} color="blue.600">
        Página Inicial
      </Heading>
      <Text mb={6}>Você está na Home do sistema.</Text>
      
      {/* O componente Link substitui a tag <a> do HTML para não recarregar a página */}
      <Link to="/login">
        <Button colorPalette="blue">Ir para o Login</Button>
      </Link>
    </Box>
  );
}