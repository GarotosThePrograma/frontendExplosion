import { Button, Fieldset, Stack, Box, Text } from '@chakra-ui/react';
import TextField from '../../components/ui/fields/TextField';
import type { formProps } from './form.interface.';
import PasswordField from '../../components/ui/fields/PasswordField';

export default function Form({
  user,
  setUser,
  saveLogin,
  navigate,
}: {
  user: formProps;
  setUser: (user: formProps) => void;
  saveLogin: () => void;
  navigate: (route: string) => void;
}) {
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
            Identifique-se
          </Fieldset.Legend>
          <Fieldset.HelperText
            fontWeight="normal"
            fontSize="14px"
            color="#6B7280"
          >
            Insira seus dados para acessar sua conta.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content gap="8px">
          <TextField
            name="E-mail"
            type="email"
            value={user.email}
            onChange={(value) => setUser({ ...user, email: value })}
          />

          <PasswordField
            name="Senha"
            value={user.password}
            onChange={(value) => setUser({ ...user, password: value })}
          />
        </Fieldset.Content>

        <Button
          mt="32px"
          variant="solid"
          bgColor="#FF6500"
          color="#FFFFFF"
          onClick={saveLogin}
          type="submit"
        >
          Entrar na conta
        </Button>

        <Text
          width="100%"
          fontWeight="medium"
          fontSize="14px"
          color="#000000"
          lineClamp={1}
          pointerEvents="auto"
          cursor="pointer"
          _hover={{ textDecoration: "underline", color: "#FF6500" }}
          onClick={() => navigate('/register')}
        >
          Não possui uma conta? Criar conta.
        </Text>
      </Fieldset.Root>
    </Box>
  );
}
