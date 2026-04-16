import { Field, NumberInput } from '@chakra-ui/react';
import type { fieldProps } from './field.interface.';

export default function NumberField({
  name,
  value,
  onChange,
}: fieldProps) {
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
          placeholder={'Digite ' + name}
          color="#000000"
        />
      </NumberInput.Root>
    </Field.Root>
  );
}
