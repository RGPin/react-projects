import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function ExpenseState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currFormData) {
    if (!currFormData.description || !currFormData.amount) return;

    setAllTransactions((prevTransactions) => {
      const newTransactions = [
        ...prevTransactions,
        { ...currFormData, id: Date.now() },
      ];
      console.log(newTransactions);
      return newTransactions;
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
