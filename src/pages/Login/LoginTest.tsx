import { Button, Center, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTest() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function SaveLogin() {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email:email, //john@mail.com
        password:password //changeme
      });

      localStorage.setItem("token", response.data.access_token);
      console.log("Sucesso ao Logar");
      navigate('/');
    } 
    catch (erro) {
      console.error("Erro ao Logar", erro);
    }
  }

  return (
    <Center
      width="100vw"
      height="100vh"
      bgColor="white"
    >
      <Stack
        bgColor="#F5F5F5"
        borderRadius="16px"
        padding="32px"
      >
        <Input
          color="black"
          placeholder="email"

          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          color="black"
          placeholder="senha"

          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          onClick={SaveLogin}
        >
          Login
        </Button>
      </Stack>
    </Center>
  )
}

