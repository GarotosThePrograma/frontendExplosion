import { Box, Button, IconButton, Stack, Text, Image } from '@chakra-ui/react';
import { FaHeart, FaCartShopping } from 'react-icons/fa6';
import type { productInColumnProps } from '../../../types/productInColumn.interface.';

export default function ProductInColumn({
  name,
  price,
  image,
  isInteractive = true,
  isFavorite = false,
  onAddFavorite,
  onAddToCart,
}: productInColumnProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Stack width="266px" padding="16px" bgColor="#FFFFFF" borderRadius="16px">
      <Box
        position="relative"
        width="232px"
        height="232px"
        borderRadius="8px"
        bgColor="#F5F5F5"
        overflow="hidden"
      >
        <IconButton
          position="absolute"
          top="4px"
          right="4px"
          bgColor="transparent"
          color={isFavorite ? '#FF6500' : '#6B7280'} 
          zIndex="1"
          pointerEvents={isInteractive ? 'auto' : 'none'}
          _hover={{ color: '#FF6500' }}
          onClick={onAddFavorite}
        >
          <FaHeart />
        </IconButton>

        <Image src={image} width="100%" height="100%" objectFit="contain" />
      </Box>

      <Stack gap="0px" mt="8px">
        <Text
          width="100%"
          fontWeight="medium"
          fontSize="14px"
          color="#000000"
          lineClamp={1}
          pointerEvents={isInteractive ? 'auto' : 'none'}
          cursor={isInteractive ? 'pointer' : 'default'}
          _hover={{ textDecoration: 'underline', color: '#FF6500' }}
        >
          {name}
        </Text>
        <Text width="100%" fontWeight="normal" fontSize="11px" color="#6B7280">
          Vendido e entregue por Explosion
        </Text>
      </Stack>

      <Stack gap="0px" mt="8px">
        <Text width="100%" fontWeight="normal" fontSize="10px" color="#6B7280">
          <s>R$ {formatPrice(price * 1.1)}</s>
        </Text>
        <Text width="100%" fontWeight="bold" fontSize="20px" color="#FF6500">
          R$ {formatPrice(price)}
        </Text>
        <Text width="100%" fontWeight="normal" fontSize="10px" color="#6B7280">
          À vista no PIX
        </Text>
      </Stack>

      <Button
        width="100%"
        fontWeight="semibold"
        fontSize="14px"
        bgColor="#0060B1"
        color="#FFFFFF"
        borderRadius="8px"
        mt="8px"
        pointerEvents={isInteractive ? 'auto' : 'none'}
        _hover={{ bgColor: '#004A8C' }}
        onClick={onAddToCart}
      >
        <FaCartShopping style={{ marginRight: '8px' }} />
        Comprar
      </Button>
    </Stack>
  );
}