import { Button, Field, Fieldset, Input, Stack, Box } from "@chakra-ui/react"

export default function Form() {
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
            <Input name="email" type="email" />
          </Field.Root>

          <Field.Root>
            <Field.Label
              fontWeight="medium"
              fontSize="14px"
              color="#111827"
            >
              Senha
            </Field.Label>
            <Input name="password" type="password" />
          </Field.Root>
        </Fieldset.Content>

        <Button 
          variant="solid"
          type="submit"
          bgColor="#E55A00"
          color="white"
        >
          Entrar na conta
        </Button>
      </Fieldset.Root>
    </Box>
  )
}
