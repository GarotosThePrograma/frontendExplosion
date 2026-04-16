import { Checkbox } from "@chakra-ui/react"


export default function CheckboxComponent() {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
    </Checkbox.Root>
  )
}