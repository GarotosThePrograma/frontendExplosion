import { Field, Input } from '@chakra-ui/react';

export default function TextField({
  name,
  value,
  type = 'text',
  onChange,
}: {
  name: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#000000">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        type={type}
        placeholder={'Enter ' + name}
        color="#000000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field.Root>
  );
}
