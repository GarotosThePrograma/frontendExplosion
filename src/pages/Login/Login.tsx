import { Box, Center } from "@chakra-ui/react";
import Form from "./Form";
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
        <Form />
      </Box>
    </Center>
  )
}