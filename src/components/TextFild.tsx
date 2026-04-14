import { Field, Input } from '@chakra-ui/react';

export default function TextFild({ name }: { name: string }) {
  return (
    <Field.Root required gap="1px">
      <Field.Label color="#111827">
        {name} <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder={'Enter Product ' + name} color="#111827" />
      <Field.HelperText>This field is required</Field.HelperText>
    </Field.Root>
  );
}
