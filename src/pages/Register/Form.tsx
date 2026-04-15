import { Button, Fieldset, Stack, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/ui/filds/TextField';

export default function RegisterForm() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function SaveRegister() {
    try {
      if (!name || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
      }

      if (password !== confirmPassword) {
        alert('As senhas digitadas não coincidem. Tente novamente.');
        return;
      }

      const response = await axios.post(`${baseUrl}/auth/register`, {
        Name: name,
        Email: email,
        Password: password,
      });

      localStorage.setItem('token', response.data.access_token);
      console.log('Sucesso ao Cadastrar');
      navigate('/');
    } catch (erro) {
      console.error('Erro ao Cadastrar', erro);
    }
  }

  return (
    <Box
      display="flex"
      flex="1"
      bgColor="#FFFFFF"
      borderTopRightRadius="16px"
      borderBottomRightRadius="16px"
      alignItems="center"
      justifyContent="center"
      padding="48px"
    >
      <Fieldset.Root>
        <Stack>
          <Fieldset.Legend fontWeight="bold" fontSize="28px" color="#000000">
            Cadastre-se
          </Fieldset.Legend>
          <Fieldset.HelperText
            fontWeight="normal"
            fontSize="14px"
            color="#6B7280"
          >
            Insira seus dados para criar sua conta.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content gap="8px">
          <TextField
            name="Nome"
            type="text"
            value={name}
            onChange={(value) => setName(value)}
          />

          <TextField
            name="E-mail"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
          />

          <TextField
            name="Senha"
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
          />

          <TextField
            name="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={(value) => setConfirmPassword(value)}
          />
        </Fieldset.Content>

        <Button
          mt="32px"
          variant="solid"
          bgColor="#FF6500"
          color="#FFFFFF"
          onClick={SaveRegister}
        >
          Crie sua conta
        </Button>
      </Fieldset.Root>
    </Box>
  );
}
