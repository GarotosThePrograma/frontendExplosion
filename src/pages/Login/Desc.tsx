import { Stack, Text } from "@chakra-ui/react";


export default function Desc() {
  return (
    <Stack
      display="flex"
      bgColor="#0060B1"
      width="347.48px"
      height="384px"
      borderTopLeftRadius="16px"
      borderBottomLeftRadius="16px"

      alignItems="center"
      justifyContent="center"

      padding="48px"
    >
      <Text
        fontWeight="bold"
        fontSize="30px"

        textAlign="center"
      >
        Explosin Store
      </Text>
      <Text
        fontWeight="semibold"
        fontSize="24px"

        textAlign="center"
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