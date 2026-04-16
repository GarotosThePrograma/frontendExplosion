import { Flex, Stack, Text } from "@chakra-ui/react";
import { FaExplosion } from "react-icons/fa6";

export default function Desc({navigate}: {navigate: (route: string) => void}) {
  return (
    <Stack
      flex="1"

      bgColor="#0060B1"

      borderTopLeftRadius="16px"
      borderBottomLeftRadius="16px"

      alignItems="center"
      justifyContent="center"

      padding="48px"
    >
      <Flex
        alignItems="center"
        justifyContent="center"

        gap="4px"
      >
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
        <FaExplosion 
          color="#FF6500"
        /></Flex>
          <Text
          fontWeight="bold"
          fontSize="28px"

          textAlign="center"
          color="#FFFFFF"
          cursor="pointer" onClick={() => navigate('/')}
        >
          Explosion Store
        </Text>
      </Flex>
      
      <Text
        fontWeight="semibold"
        fontSize="24px"

        textAlign="center"
        color="#FFFFFF"
      >
        Sincronize sua experiência em todos os dispositivos
      </Text>
      <Text
        fontWeight="normal"
        fontSize="14px"

        textAlign="center"

        color="#DBEAFE"
      >
        Acesse seu carrinho, salve seus produtos favoritos e acompanhe seus pedidos em tempo real.
      </Text>
    </Stack>
  )
}