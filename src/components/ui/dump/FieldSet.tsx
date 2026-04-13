import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"


export const FieldSetDemo = () => {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>Indetifique-se</Fieldset.Legend>
        <Fieldset.HelperText>
          Insira seus dados para acessar sua conta.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>E-mail</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Senha</Field.Label>
          <Input name="password" type="password" />
        </Field.Root>
      </Fieldset.Content>

      <Button 
        type="submit"
      >
        Entrar na conta
      </Button>
    </Fieldset.Root>
  )
}
