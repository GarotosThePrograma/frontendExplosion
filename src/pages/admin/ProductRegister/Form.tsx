import { Button, Fieldset, Box, Stack } from '@chakra-ui/react';
import TextField from '../../../components/ui/fields/TextField';
import NumberField from '../../../components/ui/fields/NumberField';
import type { formProps } from './form.interface.';

export default function Form({
  product,
  setProduct,
  saveProduct,
}: {
  product: formProps;
  setProduct: (product: formProps) => void;
  saveProduct: () => void;
}) {
  return (
    <Box
      display="flex"
      flex="1"
      bgColor="#FFFFFF"
      borderRadius="16px"
      alignItems="center"
      justifyContent="center"
      padding="32px"
    >
      <Fieldset.Root>
        <Stack>
          <Fieldset.Legend fontWeight="bold" fontSize="28px" color="#111827">
            Cadastrar Produto
          </Fieldset.Legend>
          <Fieldset.HelperText
            fontWeight="normal"
            fontSize="14px"
            color="#6B7280"
          >
            Insira os detalhes do novo item da loja.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content gap="8px">
          <TextField
            name="Name"
            value={product.name}
            onChange={(value) => setProduct({ ...product, name: value })}
          />
          <NumberField
            name="Price"
            value={product.price}
            onChange={(value) => setProduct({ ...product, price: value })}
          />
          <NumberField
            name="Stock"
            value={product.stock}
            onChange={(value) => setProduct({ ...product, stock: value })}
          />
          <TextField
            name="Image"
            value={product.image}
            onChange={(value) => setProduct({ ...product, image: value })}
          />
          <TextField
            name="Type"
            value={product.type}
            onChange={(value) => setProduct({ ...product, type: value })}
          />
          <TextField
            name="Description"
            value={product.description}
            onChange={(value) => setProduct({ ...product, description: value })}
          />
        </Fieldset.Content>

        <Button
          mt="32px"
          variant="solid"
          bgColor="#FF6500"
          color="#FFFFFF"
          onClick={saveProduct}
        >
          Salvar Produto
        </Button>
      </Fieldset.Root>
    </Box>
  );
}
