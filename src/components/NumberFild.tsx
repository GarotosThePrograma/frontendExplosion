import { Field, NumberInput } from '@chakra-ui/react';

export default function NumberFild({ name, value, onChange }: { name: string; value: string; onChange: (value: string) => void }) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#111827">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <NumberInput.Root
          value={value}
          onValueChange={(e) => onChange(e.value)}>
        <NumberInput.Input
          placeholder={'Enter Product ' + name}
          color="#111827"
        />
      </NumberInput.Root>
    </Field.Root>
  );
}
