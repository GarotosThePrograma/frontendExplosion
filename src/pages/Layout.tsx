import { Box, Center } from "@chakra-ui/react";
import Header from "../components/ui/Header";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header navigate={navigate} />
      <Center flex="1" bgColor="#f5f5f5">
        <Outlet />
      </Center>
    </Box>
  )
}
