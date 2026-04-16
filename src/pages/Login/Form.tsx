import { Button, Fieldset, Stack, Box } from '@chakra-ui/react';
import TextField from '../../components/ui/filds/TextField';
import type { formProps } from './form.interface.';

export default function Form({
  user,
  setUser,
  saveLogin,
}: {
  user: formProps;
  setUser: (user: formProps) => void;
  saveLogin: () => void;
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

          <TextField
            name="Senha"
            type="password"
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
      </Fieldset.Root>
    </Box>
  );
}
