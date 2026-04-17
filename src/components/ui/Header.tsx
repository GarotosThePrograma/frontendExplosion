import { Flex, IconButton, Input, InputGroup, Text } from '@chakra-ui/react';
import { FaBox } from "react-icons/fa6";
import { FaHeart, FaCartShopping, FaCircleUser, FaExplosion } from 'react-icons/fa6'; 
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Header({
  navigate,
}: {
  navigate: (route: string) => void;
}) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payloadBase64 = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        
        const userRole = 
          decodedPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || 
          decodedPayload.role || 
          decodedPayload.Role;

        if (userRole === 'Admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Erro ao ler o token do usuário:", error);
      }
    }
  }, []);

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="999"
      width="100%"
      gap="32px" 
      paddingY="18px"
      paddingX="32px"
      bgColor="#0060B1"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex width="fit-content" height="32px" alignItems="center" gap="12px">
        <Flex
          width="32px"
          height="32px"
          fontWeight="bold"
          fontSize="24px"
          bgColor="#FFFFFF"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <FaExplosion color="#FF6500" />
        </Flex>
        <Text width="176px" fontWeight="bold" fontSize="24px" color="#FFFFFF" cursor="pointer" onClick={() => navigate('/')}>
          Explosion Store
        </Text>
      </Flex>

      <InputGroup flex="1" maxW="650px" endElement={<FaSearch color="#0060B1" />}>
        <Input
          bgColor="#FFFFFF"
          placeholder="Busque por produtos, marcas..."
          color="#000000"
          border="none"
          borderRadius="100px"
        ></Input>
      </InputGroup>

      <Flex height="40px" gap="8px" alignItems="center">
        
        {isAdmin && (
          <IconButton
            bgColor="transparent"
            color="#FFFFFF"
            onClick={() => navigate('/productregister')}
            _hover={{color: "#FF6500"}}
            title="Cadastrar Produto"
          >
            <FaBox />
          </IconButton>
        )}

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/favorits')}
          _hover={{color: "#FF6500"}}
          title="Favoritos"
        >
          <FaHeart />
        </IconButton>

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/shopcart')}
          _hover={{color: "#FF6500"}}
          title="Carrinho"
        >
          <FaCartShopping />
        </IconButton>

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/login')}
          _hover={{color: "#FF6500"}}
          title="Login / Perfil"
        >
          <FaCircleUser />
        </IconButton>
      </Flex>
    </Flex>
  );
}
