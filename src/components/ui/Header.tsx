import { Box, Flex, IconButton, Input, InputGroup, Text } from "@chakra-ui/react";
import { FaExplosion } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { MdOutlineFavoriteBorder, MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
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
      <Flex
        width="fit-content"
        height="32px"

        alignItems="center"
        gap="12px"
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
          />
        </Flex>
        <Text
          width="176px"

          fontWeight="bold"
          fontSize="24px"
          color="#FFFFFF"
        >
          Explosion Store
        </Text>
      </Flex>

      <InputGroup
        endElement={<LuSearch color="#0060B1"/>}
      >
        <Input
          bgColor="#FFFFFF"
          placeholder="Busque por produtos, marcas..."
          color="#000000"
          border="none"
          borderRadius="100px"
        ></Input>
      
      </InputGroup>

      <Flex
        width="420px"
        height="40px"
      >
        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
        >
          <MdOutlineFavoriteBorder />
        </IconButton>

        <IconButton
          bgColor="transparent"
          color="#FFFFFF"
        >
          <MdOutlineShoppingCart />
        </IconButton>

        <Flex>
          <IconButton
            bgColor="transparent"
            color="#FFFFFF"
          >
            <MdOutlinePersonOutline />
          </IconButton>
          <Box color="#FFFFFF">
            <Text
              fontWeight="normal"
              fontSize="12px"
            >
              Bem vindo,
            </Text>
            <Text
              fontWeight="semibold"
              fontSize="14px"
            >
              Minha conta
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}