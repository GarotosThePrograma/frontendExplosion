import { Button, Fieldset, Stack, Box } from '@chakra-ui/react';
import TextField from '../../components/ui/fields/TextField';
import type { formProps } from './form.interface.';
import PasswordField from '../../components/ui/fields/PasswordField';

export default function Form({
  user,
  setUser,
  saveRegister,
}: {
  user: formProps;
  setUser: (user: formProps) => void;
  saveRegister: () => void;
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
            value={user.name}
            onChange={(value) => setUser({ ...user, name: value })}
          />

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

          <PasswordField
            name="Confirmar Senha"
            value={user.confirmPassword}
            onChange={(value) => setUser({ ...user, confirmPassword: value })}
          />
        </Fieldset.Content>

        <Button
          mt="32px"
          variant="solid"
          bgColor="#FF6500"
          color="#FFFFFF"
          onClick={saveRegister}
          type="submit"
        >
          Crie sua conta
        </Button>
      </Fieldset.Root>
    </Box>
  );
}
