import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Stack
        width="300px"
        padding="4"
        border="1px solid"
        borderColor="#d8d8d8"
        borderRadius="16px"
        gap="4"
        bgColor="#FFFFFF"
      >
        <Box
          borderBottom="1px solid"
          borderColor="#d8d8d8"
          mb="4px"
        >
          <Text
            fontWeight="bold"
            fontSize="18px"
            color="#000000"
          >
            Resumo do Pedido
          </Text>
        </Box>
        <Stack>
          <Text
            fontWeight="bold"
            fontSize="14px"
            color="#000000"
          >
            Calcular Frete
          </Text>
          <Stack
            border="1px solid"
            borderColor="#d8d8d8"
            padding="4"
            borderRadius="8px"  
            gap="0px"
          >
            <Flex
              justifyContent="space-between"
            >
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="#000000"
              >
                Sedex
              </Text>
              <Text
                fontWeight="bold"
                fontSize="14px"
                color="#2fba00"
              >
                Gratis
              </Text>
            </Flex>
            <Text
              fontWeight="normal"
              fontSize="12px"
              color="#000000"
            >
              Entrega em até 5 dias úteis
            </Text>
          </Stack>
          <Stack
          
            border="1px solid"
            borderColor="#d8d8d8"
            padding="4"
            borderRadius="8px"  
            gap="0px"
          >
            <Flex
              justifyContent="space-between"
            >
              <Text
                fontWeight="normal"
                fontSize="14px"
                color="#000000"
              >
                Subtotal
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="#000000"
              >
                R$ 0,00
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
            >
              <Text
                fontWeight="normal"
                fontSize="14px"
                color="#000000"
              >
                Descontos
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="#2fba00"
              >
                R$ 0,00
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
            >
              <Text
                fontWeight="normal"
                fontSize="14px"
                color="#000000"
              >
                Frete
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="#000000"
              >
                R$ 0,00
              </Text>
            </Flex>
          </Stack>
          <Stack
          
            border="1px solid"
            borderColor="#d8d8d8"
            padding="4"
            borderRadius="8px"  
            gap="0px"
          >
            <Flex
              justifyContent="space-between"
            >
              <Text
                fontWeight="bold"
                fontSize="14px"
                color="#000000"
              >
                Total a prazo
              </Text>
              <Text
                fontWeight="bold"
                fontSize="16px"
                color="#000000"
              >
                R$ 0,00
              </Text>
            </Flex>
            <Text
              fontWeight="normal"
              fontSize="12px"
              color="#000000"
            >
              em até 10x sem juros
            </Text>
          </Stack>
        </Stack>
        <Flex
          justifyContent="space-between"
          borderTop="1px solid"
          borderColor="#d8d8d8"
          mt="4px"
        >
          <Text
            fontWeight="bold"
            fontSize="16px"
            color="#000000"
          >
            Total à vista
          </Text>
          <Text
            fontWeight="bold"
            fontSize="18px"
            color="#000000"
          >
            R$ 0,00
          </Text>
        </Flex>
        <Button
          backgroundColor="#FF6500"
          color="#ffffff"
          fontWeight="bold"
          fontSize="16px"
          mt="4px"
          _hover={{bgColor: "#FF4500"}}
        >
          Finalizar Compra
        </Button>
      </Stack>
  )
}