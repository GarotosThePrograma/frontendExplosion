import { Box, Center } from "@chakra-ui/react";
import Form from "./form";
import Desc from "./Desc";

export default function Login() {
  return (
    <Center 
      h="100vh"
      bgColor="#f5f5f5f5"
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <Desc />
        <Box
          display="flex"
          bgColor="white"
          width="auto"
          height="auto"
          borderTopRightRadius="16px"
          borderBottomRightRadius="16px"

          alignItems="center"
          justifyContent="center"

          padding="48px"
        >
          <Form />
        </Box>
      </Box>
    </Center>
  )
}