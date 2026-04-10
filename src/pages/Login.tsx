import { Box, Heading, Text, Button, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';

// 1. O CONTRATO (Zod): Definimos as regras exatas do nosso formulário.
const loginSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

// Inferimos os tipos do TypeScript baseados no contrato acima
type LoginFormValues = z.infer<typeof loginSchema>;

export function Login() {
  // 2. O FORMULÁRIO (React Hook Form): Iniciamos o formulário conectando ele ao validador do Zod.
  const {
    register, // Função para conectar os inputs ao formulário
    handleSubmit, // Função que intercepta o envio
    formState: { errors }, // Onde os erros do Zod vão aparecer
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // 3. A REQUISIÇÃO (React Query): Criamos uma "Mutação" para simular o envio de dados.
  const loginMutation = useMutation({
    // mutationFn é a função assíncrona que faz o trabalho pesado (simulando um atraso de 2 segundos)
    mutationFn: async (dados: LoginFormValues) => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      console.log('Dados enviados com sucesso:', dados);
      return dados;
    },
    onSuccess: () => {
      alert('Login efetuado com sucesso!'); // O que acontece quando dá certo
    }
  });

  // 4. O ENVIO: Esta função só é chamada se o Zod disser que tudo está válido.
  const onSubmit = (data: LoginFormValues) => {
    // Disparamos a mutação do React Query
    loginMutation.mutate(data);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bg="gray.900" color="white">
      <Box bg="white" p={8} borderRadius="md" width="400px" color="black" boxShadow="lg">
        <Heading size="lg" mb={6} textAlign="center">
          Entrar na Conta
        </Heading>

        {/* handleSubmit previne o reload da página e roda o Zod antes de chamar o onSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={4}>
            <Box>
              {/* O register('email') amarra este input silenciosamente ao React Hook Form */}
              <Input placeholder="Seu e-mail" {...register('email')} />
              {/* Se o Zod achar um erro neste campo, mostramos o texto em vermelho */}
              {errors.email && <Text color="red.500" fontSize="sm" mt={1}>{errors.email.message}</Text>}
            </Box>

            <Box>
              <Input type="password" placeholder="Sua senha" {...register('password')} />
              {errors.password && <Text color="red.500" fontSize="sm" mt={1}>{errors.password.message}</Text>}
            </Box>

            <Button 
              type="submit" 
              colorPalette="teal" 
              width="full"
              // O React Query automaticamente nos diz se a requisição está em andamento!
              loading={loginMutation.isPending} 
            >
              Entrar
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}