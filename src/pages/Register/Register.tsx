import { Box, Center } from '@chakra-ui/react';
import Form from './Form';
import Desc from '../../components/ui/Desc';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function saveRegister() {
    try {
      if (
        !user.name ||
        !user.email ||
        !user.password ||
        !user.confirmPassword
      ) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
      }

      if (user.password !== user.confirmPassword) {
        alert('As senhas digitadas não coincidem. Tente novamente.');
        return;
      }

      const response = await axios.post(`${baseUrl}/auth/register`, {
        Name: user.name,
        Email: user.email,
        Password: user.password,
      });

      localStorage.setItem('token', response.data.access_token);
      console.log('Sucesso ao Cadastrar');
      navigate('/');
    } catch (erro) {
      console.error('Erro ao Cadastrar', erro);
    }
  }

  return (
    <Center h="100vh" bgColor="#f5f5f5">
      <Box display="flex" alignItems="stretch" width="800px">
        <Desc />
        <Form user={user} setUser={setUser} saveRegister={saveRegister} navigate={navigate}/>
      </Box>
    </Center>
  );
}
