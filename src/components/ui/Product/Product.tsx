import { Box, Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import type { productProps } from "./product.interface.";

export default function Product({name, price, img}: productProps) {

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
        <img src={img} />
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
          >{name}</Text>
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
        ><s>R$ {Math.round(price * 1.1)}</s></Text>
        <Text
          width="100%"
          fontWeight="bold"
          fontSize="20px"
          color="#FF6500"
        >R$ {price}</Text>
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