import { Field, Input, IconButton, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import type { fieldProps } from '../../../types/field.interface.';

export default function PasswordField({ name, value, onChange }: fieldProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Field.Root required gap="1px">
      <Field.Label color="#000000">
        {name} <Field.RequiredIndicator />
      </Field.Label>

      <Box position="relative" width="100%">
        <Input
          type={show ? 'text' : 'password'}
          placeholder={'Digite ' + name.toLowerCase()}
          color="#000000"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          paddingRight="40px"
        />

        <IconButton
          position="absolute"
          right="4px"
          top="50%"
          transform="translateY(-50%)"
          size="sm"
          onClick={handleClick}
          color="#6B7280"
          _hover={{ bg: 'transparent', color: '#000000' }}
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </IconButton>
      </Box>
    </Field.Root>
  );
}
