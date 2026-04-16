import { Flex, IconButton, Input, InputGroup, Text } from '@chakra-ui/react';
import { FaHeart, FaCartShopping, FaCircleUser, FaExplosion } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";

export default function Header({
  navigate,
}: {
  navigate: (route: string) => void;
}) {
  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="999"
      width="100%"
      gap="128px"
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

      <InputGroup endElement={<FaSearch color="#0060B1" />}>
        <Input
          bgColor="#FFFFFF"
          placeholder="Busque por produtos, marcas..."
          color="#000000"
          border="none"
          borderRadius="100px"
        ></Input>
      </InputGroup>

      <Flex height="40px">
        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/favorits')}
          _hover={{color: "#FF6500"}}
        >
          <FaHeart />
        </IconButton>

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/shopcart')}
          _hover={{color: "#FF6500"}}
        >
          <FaCartShopping />
        </IconButton>

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
          onClick={() => navigate('/login')}
          _hover={{color: "#FF6500"}}
        >
          <FaCircleUser />
        </IconButton>
      </Flex>
    </Flex>
  );
}
