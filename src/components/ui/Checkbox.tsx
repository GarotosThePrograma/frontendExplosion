import { Checkbox } from "@chakra-ui/react"

interface MyCheckboxProps {
  isChecked?: boolean;
  onChange?: () => void;
}

export default function CheckboxComponent({ isChecked, onChange }: MyCheckboxProps) {
  return (
    <Checkbox.Root
      checked={isChecked} 
      onChange={onChange}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
    </Checkbox.Root>
  )
}