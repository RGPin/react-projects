import {
  Button,
  Dialog,
  Field,
  Input,
  RadioCard,
  RadioGroup,
} from "@chakra-ui/react";

export default function TransactionForm() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button bg="blue.300" ml="4" type="button">
          Add New Transaction
        </Button>
      </Dialog.Trigger>

      <Dialog.Backdrop />

      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Add New Transaction</Dialog.Title>
          </Dialog.Header>

          <Dialog.CloseTrigger>
            <Button type="button" backgroundColor={"gray.300"} color={"black"}>
              X
            </Button>
          </Dialog.CloseTrigger>

          <form>
            <Dialog.Body>
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Input name="description" type="text" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Amount</Field.Label>
                <Input name="amount" type="number" />
              </Field.Root>

              <RadioGroup.Root
                mt="5"
                name="type"
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <RadioGroup.Item value="income">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Income</RadioGroup.ItemText>
                </RadioGroup.Item>

                <RadioGroup.Item value="expense">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
                </RadioGroup.Item>
              </RadioGroup.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.CloseTrigger position={"static"}>
                <Button
                  type="button"
                  backgroundColor={"gray.300"}
                  color={"black"}
                  mr={"4"}
                >
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button
                backgroundColor={"gray.300"}
                color={"black"}
                type="submit"
              >
                Add
              </Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
