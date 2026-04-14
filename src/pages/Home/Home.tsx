import { Center, Box } from "@chakra-ui/react";
import Header from "../../components/ui/Header";
import Product from "../../components/ui/Product";


export default function Home() {
  return (
    <Box>
      <Header />
      <Center 
        height="100vh"
        bgColor="#f5f5f5f5"
      >
        <Product />
      </Center> 
    </Box>
  )
}