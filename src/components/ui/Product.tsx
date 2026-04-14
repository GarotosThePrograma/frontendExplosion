import { Box, Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

export default function Product() {

  return (
    <Stack
      width="266px"
      padding="16px"
      bgColor="#FFFFFF"
      borderRadius="16px"
    >
      <Box
        width="232px"
        height="232px"
        borderRadius="8px"
        bgColor="#F5F5F5"
      >
        <IconButton
          position="absolute"
          bgColor="transparent"
        >
          <MdOutlineFavoriteBorder />
        </IconButton>

      </Box>
      <Stack
        gap="0px"
      >
        <Button
          width="100%"
          height="fit-content"
          whiteSpace="normal"
          wordBreak="break-word"
          textAlign="left"
          padding="0px"
        >
          <Text
            width="100%"
            fontWeight="medium"
            fontSize="14px"
            color="black"
          >Placa de Vídeo RTX 4070 Ti Super 16GB GDDR6X</Text>
        </Button>
        <Text
          width="100%"
          fontWeight="normal"
          fontSize="11px"
          color="#6B7280"
        >Vendido e entregue por Explosion</Text>
      </Stack>
      <Stack
        gap="0px"
      >
        <Text
          width="100%"
          fontWeight="normal"
          fontSize="10px"
          color="#6B7280"
        ><s>R$ 5.999,90</s></Text>
        <Text
          width="100%"
          fontWeight="bold"
          fontSize="20px"
          color="#FF6500"
        >R$ 4.999,90</Text>
        <Text
          width="100%"
          fontWeight="normal"
          fontSize="10px"
          color="#6B7280"
        >À vista no PIX</Text>
      </Stack>
      <IconButton
        width="100%"
        fontWeight="semibold"
        fontSize="14px"
        bgColor="#004A8C"
        color="#FFFFFF"
        borderRadius="8px"
      >
        <MdOutlineShoppingCart />
        Comprar
      </IconButton>
    </Stack>
  )
}