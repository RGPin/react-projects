import {
  Button,
  Dialog,
  Field,
  Input,
  RadioCard,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm() {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.description || !formData.amount) return;
    handleFormSubmit(formData);
    setFormData({
      type: "income",
      amount: 0,
      description: "",
    });
  }

  function resetDialog() {
    setFormData({
      type: "income",
      amount: 0,
      description: "",
    });
  }
  return (
    <Dialog.Root onExitComplete={resetDialog}>
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

          <form onSubmit={handleSubmit}>
            <Dialog.Body>
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Input
                  name="description"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.description}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Amount</Field.Label>
                <Input
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                  value={formData.amount}
                />
              </Field.Root>

              <RadioGroup.Root
                mt="5"
                name="type"
                display={"flex"}
                justifyContent={"space-evenly"}
                onValueChange={handleFormChange}
                value={formData.type}
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
