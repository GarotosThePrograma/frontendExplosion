import { Box, Center } from '@chakra-ui/react';
import Form from './Form';
import Desc from '../../components/ui/Desc';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  async function saveLogin() {
    try {
      if (!user.email || !user.password) {
        alert('Por favor, preencha os campos obrigatórios corretamente!');
        return;
      }
      const response = await axios.post(`${baseUrl}/auth/login`, {
        Email: user.email,
        Password: user.password,
      });

      localStorage.setItem('token', response.data.access_token);
      console.log('Sucesso ao Logar');
      navigate('/');
    } catch (erro) {
      console.error('Erro ao Logar', erro);
    }
  }

  return (
    <Center h="100vh" bgColor="#f5f5f5">
      <Box display="flex" alignItems="stretch" width="800px">
        <Desc />
        <Form user={user} setUser={setUser} saveLogin={saveLogin} navigate={navigate}/>
      </Box>
    </Center>
  );
}
