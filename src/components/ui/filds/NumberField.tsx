import { Field, NumberInput } from '@chakra-ui/react';

export default function NumberField({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#000000">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <NumberInput.Root
        width="100%"
        value={value}
        onValueChange={(e) => onChange(e.value)}
      >
        <NumberInput.Input
          placeholder={'Enter Product ' + name}
          color="#000000"
        />
      </NumberInput.Root>
    </Field.Root>
  );
}
