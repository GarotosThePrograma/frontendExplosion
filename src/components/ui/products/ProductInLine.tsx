import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import CheckboxComponent from "../Checkbox";
import { FaTrash } from "react-icons/fa";
import type { productProps } from "../../../types/product.interface.";

export default function ProductInLine({
  name,
  price,
  image,
  isInteractive = true,
  quantity = 1,
  onQuantityChange,
}: productProps) {
  
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Flex
      width="747px"
      height="146px"
      gap="16px"
      alignItems="center"
      justifyContent="space-between"
      bgColor="#FFFFFF"
      padding="16px"
      border="1px solid"
      borderColor="#d8d8d8"
      borderRadius="16px"
    >
      <Flex gap="16px" alignItems="center">
        <CheckboxComponent />
        <Box
          width="100px"
          height="100px"
          borderRadius="8px"
          bgColor="#F5F5F5"
          overflow="hidden"
        >
          <Image
            src={image}
            alt={name}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Text
        flex="1"
        px="16px"
        fontWeight="bold"
        fontSize="14px"
        color="#000000"
        lineClamp={2}
        pointerEvents={isInteractive ? 'auto' : 'none'}
        cursor={isInteractive ? 'pointer' : 'default'}
        _hover={{ textDecoration: 'underline', color: '#FF6500' }}
      >
        {name}
      </Text>

      <Flex gap="24px" alignItems="center">
        <Stack gap="8px" alignItems="center" mt="16px">
          <Flex
            border="1px solid"
            borderColor="#d8d8d8"
            borderRadius="8px"
            overflow="hidden"
            height="32px"
            alignItems="center"
          >
            <Button
              bgColor="#FFFFFF"
              _hover={{ bgColor: "#f5f5f5" }}
              borderRadius="0"
              width="32px"
              height="100%"
              minWidth="0"
              padding="0"
              pointerEvents={isInteractive ? 'auto' : 'none'}
              onClick={() => onQuantityChange && onQuantityChange(quantity - 1)}
            >
              -
            </Button>
            
            <Input
              type="number"
              value={quantity}
              readOnly
              textAlign="center"
              width="40px"
              height="100%"
              border="none"
              borderRadius="0"
              color="#000000"
              padding="0"
              _focus={{ outline: "none" }}
              css={{
                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0,
                },
                MozAppearance: 'textfield',
              }}
            />
            
            <Button
              bgColor="#FFFFFF"
              _hover={{ bgColor: "#f5f5f5" }}
              borderRadius="0"
              width="32px"
              height="100%"
              minWidth="0"
              padding="0"
              pointerEvents={isInteractive ? 'auto' : 'none'}
              onClick={() => onQuantityChange && onQuantityChange(quantity + 1)}
            >
              +
            </Button>
          </Flex>
          
          <Button
            variant="ghost"
            fontWeight="normal"
            fontSize="12px"
            color="#6B7280"
            pointerEvents={isInteractive ? 'auto' : 'none'}
            _hover={{ color: "#FF6500", bgColor: "transparent" }}
            size="sm"
            gap="4px"
          >
            <FaTrash />
            <Text>Remover</Text>
          </Button>
        </Stack>

        <Stack 
          gap="0px" 
          width="152px" 
          flexShrink="0" 
          textAlign="right"
        >
          <Text width="100%" fontWeight="normal" fontSize="10px" color="#6B7280">
            <s>R$ {formatPrice((price * 1.1)*quantity)}</s>
          </Text>
          <Text width="100%" fontWeight="bold" fontSize="20px" color="#FF6500">
            R$ {formatPrice(price * quantity)}
          </Text>
          <Text width="100%" fontWeight="normal" fontSize="10px" color="#6B7280">
            À vista no PIX
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
