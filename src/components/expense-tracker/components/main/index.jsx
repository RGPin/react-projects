import { Button, Flex, Heading, Dialog } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import TransactionForm from "../add-transaction";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
          fontSize={"2.4rem"}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <TransactionForm />
        </Flex>
      </Flex>
      <Summary totalExpense={totalExpense} totalIncome={totalIncome} />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}
