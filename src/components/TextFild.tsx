import { Field, Input } from '@chakra-ui/react';

export default function TextFild({ name, value, onChange }: { name: string; value: string; onChange: (value: string) => void }) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#111827">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        placeholder={'Enter Product ' + name}
        color="#111827"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Field.HelperText>This field is required</Field.HelperText>
    </Field.Root>
  );
}
