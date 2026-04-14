import { Field, NumberInput } from '@chakra-ui/react';

export default function NumberFild({ name }: { name: string }) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#111827">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <NumberInput.Root>
        <NumberInput.Input
          placeholder={'Enter Product ' + name}
          color="#111827"
        />
      </NumberInput.Root>
      <Field.HelperText>This field is required</Field.HelperText>
    </Field.Root>
  );
}
