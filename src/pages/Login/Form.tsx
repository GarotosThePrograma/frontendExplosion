import { Button, Field, Fieldset, Input, Stack, Box } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function SaveLogin() {
    try {
      if(!email || !password) {
        alert("Por favor, preencha os campos obrigatórios corretamente!");
        return;
      }
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { //Banco aberto
        email: email, //john@mail.com
        password: password //changeme
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
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend
            fontWeight="bold"
            fontSize="28px"
            color="#111827"
          >
            Indetifique-se
          </Fieldset.Legend>
          <Fieldset.HelperText
            fontWeight="normal"
            fontSize="14px"
            color="#6B7280"
          >
            Insira seus dados para acessar sua conta.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label
              fontWeight="medium"
              fontSize="14px"
              color="#111827"
            >
              E-mail
            </Field.Label>
            <Input 
              color="black"
              placeholder="email"
              name="email" 
              type="email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label
              fontWeight="medium"
              fontSize="14px"
              color="#111827"
            >
              Senha
            </Field.Label>
            <Input 
              color="black"
              placeholder="senha"
              name="password" 
              type="password" 

              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>
        </Fieldset.Content>

        <Button 
          variant="solid"
          type="submit"
          bgColor="#E55A00"
          color="white"

          onClick={SaveLogin}
        >
          Entrar na conta
        </Button>
      </Fieldset.Root>
    </Box>
  )
}
