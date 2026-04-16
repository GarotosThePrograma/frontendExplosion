import { Field, Input } from '@chakra-ui/react';
import type { fieldProps } from './field.interface.';

export default function TextField({
  name,
  value,
  type = 'text',
  onChange,
}: fieldProps) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#000000">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        type={type}
        placeholder={'Digite ' + name}
        color="#000000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field.Root>
  );
}
