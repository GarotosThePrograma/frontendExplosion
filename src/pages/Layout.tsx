import { Box, Center } from "@chakra-ui/react";
import Header from "../components/ui/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Center flex="1" bgColor="#f5f5f5">
        <Outlet />
      </Center>
    </Box>
  )
}
